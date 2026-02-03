
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getDatabase, ref, onValue, set, remove, push, runTransaction, get
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

// ================== FIREBASE CONFIG ==================
const firebaseConfig = {
  "apiKey": "AIzaSyAZsuUlvDWI5_g8H4aCqXsnQDyswvPF1us",
  "authDomain": "controle-armarios-14351.firebaseapp.com",
  "databaseURL": "https://controle-armarios-14351-default-rtdb.firebaseio.com",
  "projectId": "controle-armarios-14351",
  "storageBucket": "controle-armarios-14351.firebasestorage.app",
  "messagingSenderId": "171871598145",
  "appId": "1:171871598145:web:18cccd6cd407a79e7838c0",
  "measurementId": "G-M9YRXT2Z15"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ================== STATE ==================
let config = { totalArmarios: 300, baixoAte: 150 };
let posicoes = {};       // { "42": "CIMA" }
let armarios = {};       // { "42": { totalChaves: 2, chavesEmUso: 1 } }
let colaboradores = {};  // { "123": {...} }
let historico = {};      // { pushId: {...} }

// compat legacy nodes
let __legacyMode = { colabs:false, pos:false, keys:false, hist:false };

let editingMatricula = null;

// ================== DOM ==================
const $ = (id)=>document.getElementById(id);

const connDot = $("connDot");
const connText = $("connText");
const globalAlert = $("globalAlert");
const btnIrRisco = $("btnIrRisco");

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = ["tabColabs","tabArmarios","tabHistorico","tabConfig"].map(id=>$(id));

const tbodyColabs = $("tbodyColabs");
const qColab = $("qColab");
const btnNovo = $("btnNovo");
const btnExportJSON = $("btnExportJSON");
const btnImportJSON = $("btnImportJSON");
const fileImportJSON = $("fileImportJSON");
const btnExportXML = $("btnExportXML");
const btnImportXML = $("btnImportXML");
const fileImportXML = $("fileImportXML");

const colabStats = $("colabStats");

const fStatus = $("fStatus");
const fPos = $("fPos");
const qLocker = $("qLocker");
const btnCopiarVisiveis = $("btnCopiarVisiveis");
const lockerGrid = $("lockerGrid");
const lockerStats = $("lockerStats");
const riskList = $("riskList");

const posNum = $("posNum");
const posVal = $("posVal");
const btnSalvarPos = $("btnSalvarPos");

const keyNum = $("keyNum");
const keyTotal = $("keyTotal");
const btnSalvarChaves = $("btnSalvarChaves");
const btnMaisCopia = $("btnMaisCopia");

const tbodyHist = $("tbodyHist");
const btnExportHist = $("btnExportHist");
const btnLimparHist = $("btnLimparHist");

const cfgTotal = $("cfgTotal");
const cfgBaixoAte = $("cfgBaixoAte");
const btnSalvarConfig = $("btnSalvarConfig");

const modal = $("modal");
const btnCloseModal = $("btnCloseModal");
const modalTitle = $("modalTitle");
const formColab = $("formColab");
const fMat = $("fMat");
const fNome = $("fNome");
const fAdm = $("fAdm");
const fCargo = $("fCargo");
const fArmario = $("fArmario");
const fChaveEnt = $("fChaveEnt");
const armInfo = $("armInfo");
const editHint = $("editHint");
const btnExcluir = $("btnExcluir");
const btnEntregarAgora = $("btnEntregarAgora");
const btnDevolver = $("btnDevolver");

// ================== HELPERS ==================
const todayISO = ()=> new Date().toISOString().slice(0,10);

function norm(s) { return (s||"").toString().trim(); }

function getPosicaoDefault(num) {
  const n = Number(num);
  return (n<=Number(config.baixoAte||0)) ? "CIMA" : "BAIXO";
}
function getPosicao(num) { return posicoes[String(num)] || getPosicaoDefault(num); }

function recomputeEmUsoFromColabs() {
  if(!__legacyMode.keys) return;
  // zera e recalcula emUso a partir de colaboradores que têm data de entrega
  for (const a of Object.values(armarios||{})) {
    if(a) a.chavesEmUso = 0;
  }
  for (const c of Object.values(colaboradores||{})) {
    if (!c || !c.armario || !c.chaveEntregueEm) continue;
    const n = String(c.armario);
    if(!armarios[n]) armarios[n] = { totalChaves: 1, chavesEmUso: 0 };
    armarios[n].chavesEmUso = Math.max(0, Number(armarios[n].chavesEmUso||0) + 1);
    armarios[n].totalChaves = Math.max(1, Number(armarios[n].totalChaves||1));
  }
}

function getArmarioInfo(num) {
  const a = armarios[String(num)] || {};
  const total = Number(a.totalChaves||1);
  const emUso = Number(a.chavesEmUso||0);
  const disp = Math.max(0, total - emUso);
  return { total, emUso, disp };
}

function formatDateBR(iso) {
  if(!iso) return "";
  const [y,m,d] = iso.split("-");
  if(!y||!m||!d) return iso;
  return `${d}/${m}/${y}`;
}

function nowStamp() {
  const d = new Date();
  const pad = (x)=>String(x).padStart(2,"0");
  const s = `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  return { ts: d.getTime(), s };
}

function downloadFile(filename, text, mime="text/plain") {
  const blob = new Blob([text], {type:mime});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
}

function copyText(text) {
  navigator.clipboard?.writeText(text).catch(()=>{
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  });
}

function setTab(tabId) {
  tabs.forEach(b=>b.classList.toggle("active", b.dataset.tab===tabId));
  panels.forEach(p=>p.classList.toggle("hidden", p.id!==tabId));
}

function openModal(title) {
  modalTitle.textContent = title;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}
function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden","true");
}

// ================== HISTORY ==================
async function addHistory({ acao, armario, matricula, nome, detalhe="" }) {
  const {ts, s} = nowStamp();
  await push(ref(db, "historicoChaves"), {
    ts, data: s, acao,
    armario: armario ?? "",
    matricula: matricula ?? "",
    nome: nome ?? "",
    detalhe
  });
}

function renderHistorico() {
  const items = Object.entries(historico)
    .map(([id, h])=>({id, ...h}))
    .sort((a,b)=>(b.ts||0)-(a.ts||0));
  tbodyHist.innerHTML = "";
  for (const h of items) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${h.data||""}</td>
      <td><span class="badge">${h.acao||""}</span></td>
      <td>${h.armario||""}</td>
      <td>${h.matricula||""}</td>
      <td>${h.nome||""}</td>
      <td>${h.detalhe||""}</td>
    `;
    tbodyHist.appendChild(tr);
  }
}

function exportHistoricoCSV() {
  const items = Object.values(historico||{}).sort((a,b)=>(a.ts||0)-(b.ts||0));
  const esc = (v)=>String(v??"").replaceAll('"','""');
  const lines = ["data,acao,armario,matricula,nome,detalhe"];
  for (const h of items) {
    lines.push(`"${esc(h.data)}","${esc(h.acao)}","${esc(h.armario)}","${esc(h.matricula)}","${esc(h.nome)}","${esc(h.detalhe)}"`);
  }
  downloadFile("historico_chaves.csv", lines.join("\n"), "text/csv;charset=utf-8");
}

// ================== COLABS RENDER ==================
function buildLockerOptions(selected) {
  const sel = String(selected||"");
  fArmario.innerHTML = `<option value="">—</option>`;
  for (let i=1;i<=Number(config.totalArmarios||0);i++) {
    const n = String(i);
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = n;
    fArmario.appendChild(opt);
  }
  fArmario.value = sel;
  updateArmInfo();
}

function findColabByLocker(num) {
  const n = String(num);
  for (const c of Object.values(colaboradores)) {
    if (String(c.armario||"")===n) return c;
  }
  return null;
}

function updateArmInfo() {
  const arm = fArmario.value;
  if (!arm) { armInfo.textContent = "—"; return; }
  const pos = getPosicao(arm);
  const info = getArmarioInfo(arm);
  const ocupado = !!findColabByLocker(arm);
  armInfo.textContent = `Posição: ${pos} • Chaves: ${info.disp} disponíveis / ${info.total} total • Status: ${ocupado ? "OCUPADO" : "LIVRE"}`;
}

function renderColaboradores() {
  const q = norm(qColab.value).toLowerCase();
  const list = Object.values(colaboradores)
    .map(c=>({
      ...c,
      matricula: String(c.matricula||""),
      nome: c.nome||"",
      cargo: c.cargo||"",
      admissao: c.admissao||"",
      armario: c.armario||"",
      chaveEntregueEm: c.chaveEntregueEm||""
    }))
    .filter(c=> !q || (
      c.matricula.toLowerCase().includes(q) ||
      c.nome.toLowerCase().includes(q) ||
      c.cargo.toLowerCase().includes(q) ||
      String(c.armario||"").includes(q)
    ))
    .sort((a,b)=>a.nome.localeCompare(b.nome));

  const total = Object.keys(colaboradores||{}).length;
  const comArm = Object.values(colaboradores||{}).filter(c=>c.armario).length;
  colabStats.textContent = `Total: ${total} • Com armário: ${comArm} • Sem armário: ${total-comArm}`;

  tbodyColabs.innerHTML = "";
  for (const c of list) {
    const pos = c.armario ? getPosicao(c.armario) : "";
    const tr = document.createElement("tr");
    tr.dataset.matricula = c.matricula;
    tr.innerHTML = `
      <td><b>${c.matricula}</b></td>
      <td>${c.nome}</td>
      <td>${c.admissao ? formatDateBR(c.admissao) : ""}</td>
      <td>${c.cargo||""}</td>
      <td>${c.armario ? `<span class="badge ok">#${c.armario}</span>` : `<span class="badge warn">—</span>`}</td>
      <td>${pos}</td>
      <td>${c.chaveEntregueEm ? formatDateBR(c.chaveEntregueEm) : ""}</td>
      <td class="row"><button class="btn small" data-edit="${c.matricula}">Editar</button></td>
    `;
    tbodyColabs.appendChild(tr);
  }

  tbodyColabs.querySelectorAll("[data-edit]").forEach(btn=>{
    btn.addEventListener("click", ()=> openEdit(btn.dataset.edit));
  });
}

// ================== LOCKERS ==================
function renderRiskAndAlert() {
  let semCopia = [];
  let risco = [];

  for (let i=1;i<=Number(config.totalArmarios||0);i++) {
    const info = getArmarioInfo(i);
    if (info.disp<=0) semCopia.push(i);
    if (info.total===1) risco.push(i);
  }

  globalAlert.classList.toggle("hidden", semCopia.length===0);

  riskList.innerHTML = "";
  for (const n of risco) {
    const li = document.createElement("li");
    const info = getArmarioInfo(n);
    li.innerHTML = `<b>#${n}</b> – 1 chave (disponíveis: ${info.disp})`;
    riskList.appendChild(li);
  }
}

function renderLockers() {
  const status = fStatus.value;
  const posFilter = fPos.value;
  const total = Number(config.totalArmarios||0);

  const occupiedBy = {};
  for (const c of Object.values(colaboradores||{})) {
    if (c.armario) occupiedBy[String(c.armario)] = c;
  }

  let livres=0, usados=0, visiveis=0;
  lockerGrid.innerHTML = "";

  for (let i=1;i<=total;i++) {
    const n = String(i);
    const c = occupiedBy[n];
    const isBusy = !!c;
    const pos = getPosicao(n);
    const info = getArmarioInfo(n);

    if (isBusy) usados++; else livres++;

    if (status==="free" && isBusy) continue;
    if (status==="busy" && !isBusy) continue;
    if (posFilter!=="all" && pos!==posFilter) continue;

    visiveis++;

    const div = document.createElement("div");
    div.className = "locker " + (isBusy ? "busy" : "free") + (info.disp<=0 ? " nokey" : "");
    div.dataset.num = n;
    div.innerHTML = `
      <div class="num">#${n}</div>
      <div class="meta">
        <span class="badge">${isBusy ? "OCUPADO" : "LIVRE"}</span>
        <span class="badge">${pos}</span>
        <span class="badge ${info.disp<=0 ? "danger":"ok"}">🔑 ${info.disp}/${info.total}</span>
      </div>
      <div class="muted" style="margin-top:6px;min-height:16px">${isBusy ? (c.nome||"") : "Clique para copiar"}</div>
    `;
    div.addEventListener("click", ()=>{
      if (isBusy) {
        openEdit(String(c.matricula));
        setTab("tabColabs");
        setTimeout(()=>highlightRow(String(c.matricula)), 250);
      } else {
        copyText(n);
      }
    });
    lockerGrid.appendChild(div);
  }

  lockerStats.textContent = `Total: ${total} • Livres: ${livres} • Ocupados: ${usados} • Mostrando: ${visiveis}`;
  renderRiskAndAlert();
}

function highlightRow(matricula) {
  const row = document.querySelector(`[data-matricula="${matricula}"]`);
  if(!row) return;
  row.classList.add("destacado");
  row.scrollIntoView({behavior:"smooth", block:"center"});
  setTimeout(()=>row.classList.remove("destacado"), 2500);
}

function copiarListaVisivel() {
  const nums = Array.from(lockerGrid.querySelectorAll(".locker")).map(d=>d.dataset.num);
  copyText(nums.join(", "));
}

// ================== CRUD COLAB ==================
function openNew() {
  editingMatricula = null;
  btnExcluir.classList.add("hidden");
  editHint.textContent = "Criando novo colaborador";
  fMat.disabled = false;

  fMat.value = "";
  fNome.value = "";
  fAdm.value = "";
  fCargo.value = "";
  fArmario.value = "";
  fChaveEnt.value = "";

  buildLockerOptions("");
  openModal("Novo colaborador");
}

function openEdit(matricula) {
  const c = colaboradores[String(matricula)];
  if (!c) { alert("Colaborador não encontrado."); return; }
  editingMatricula = String(matricula);
  btnExcluir.classList.remove("hidden");
  editHint.textContent = `Editando matrícula ${editingMatricula}`;
  fMat.disabled = true;

  fMat.value = String(c.matricula||"");
  fNome.value = c.nome||"";
  fAdm.value = c.admissao||"";
  fCargo.value = c.cargo||"";
  fChaveEnt.value = c.chaveEntregueEm||"";

  buildLockerOptions(c.armario||"");
  openModal("Editar colaborador");
}

async function saveColab(e) {
  e.preventDefault();
  const matricula = norm(fMat.value);
  if (!matricula) return alert("Informe a matrícula.");

  const nome = norm(fNome.value);
  if (!nome) return alert("Informe o nome.");

  const newArm = norm(fArmario.value);
  const adm = fAdm.value || "";
  const cargo = norm(fCargo.value);
  const chaveEnt = fChaveEnt.value || "";

  if (newArm) {
    const ocup = findColabByLocker(newArm);
    if (ocup && String(ocup.matricula)!==String(matricula)) {
      return alert(`Armário #${newArm} já está ocupado por ${ocup.nome} (matrícula ${ocup.matricula}).`);
    }
  }

  if (newArm && chaveEnt) {
    const info = getArmarioInfo(newArm);
    const prev = colaboradores[String(matricula)];
    const sameArm = prev && String(prev.armario||"")===String(newArm);
    const alreadyHadKey = prev && prev.chaveEntregueEm;
    if (!(sameArm && alreadyHadKey)) {
      if (info.disp<=0) {
        return alert(`Armário #${newArm} está sem chaves disponíveis. Faça uma cópia ou devolva uma chave antes.`);
      }
      await reservarChave(newArm, matricula, nome, "Reserva automática ao salvar (chave entregue)");
    }
  }

  const prev = colaboradores[String(matricula)];
  if (prev) {
    const prevArm = norm(prev.armario||"");
    const prevHadKey = !!prev.chaveEntregueEm;
    if (prevHadKey && prevArm && prevArm!==newArm) {
      await devolverChave(prevArm, matricula, nome, "Mudança de armário (devolução automática)");
    }
    if (prevHadKey && prevArm && !chaveEnt) {
      await devolverChave(prevArm, matricula, nome, "Remoção da data de entrega (devolução automática)");
    }
  }

  const payload = {
    matricula, nome,
    admissao: adm,
    cargo,
    armario: newArm || "",
    chaveEntregueEm: chaveEnt || ""
  };

  await set(ref(db, `colaboradores/${matricula}`), payload);
  closeModal();
}

async function deleteColab() {
  if (!editingMatricula) return;
  const c = colaboradores[editingMatricula];
  if (!c) return;
  if (!confirm(`Excluir ${c.nome} (matrícula ${editingMatricula})?`)) return;

  if (c.armario && c.chaveEntregueEm) {
    await devolverChave(String(c.armario), String(c.matricula), c.nome, "Exclusão de colaborador (devolução automática)");
  }

  await remove(ref(db, `colaboradores/${editingMatricula}`));
  closeModal();
}

// ================== KEYS TRANSACTIONS ==================
async function ensureArmarioNode(num) {
  const n = String(num);
  const snap = await get(ref(db, `armarios/${n}`));
  if (!snap.exists()) {
    await set(ref(db, `armarios/${n}`), { totalChaves: 1, chavesEmUso: 0 });
  }
}

async function reservarChave(num, matricula, nome, detalhe) {
  const n = String(num);
  await ensureArmarioNode(n);

  const ok = await runTransaction(ref(db, `armarios/${n}`), (cur)=>{
    cur = cur || { totalChaves: 1, chavesEmUso: 0 };
    const total = Number(cur.totalChaves||1);
    const emUso = Number(cur.chavesEmUso||0);
    if (total - emUso <= 0) return;
    cur.totalChaves = total;
    cur.chavesEmUso = emUso + 1;
    return cur;
  });

  if (!ok.committed) throw new Error("Sem chave disponível");
  await addHistory({ acao:"ENTREGA", armario:n, matricula, nome, detalhe });
}

async function devolverChave(num, matricula, nome, detalhe) {
  const n = String(num);
  await ensureArmarioNode(n);

  await runTransaction(ref(db, `armarios/${n}`), (cur)=>{
    cur = cur || { totalChaves: 1, chavesEmUso: 0 };
    const emUso = Math.max(0, Number(cur.chavesEmUso||0));
    cur.chavesEmUso = Math.max(0, emUso - 1);
    cur.totalChaves = Math.max(1, Number(cur.totalChaves||1));
    return cur;
  });

  await addHistory({ acao:"DEVOLUÇÃO", armario:n, matricula, nome, detalhe });
}

async function addCopia(num, detalhe) {
  const n = String(num);
  await ensureArmarioNode(n);

  await runTransaction(ref(db, `armarios/${n}`), (cur)=>{
    cur = cur || { totalChaves: 1, chavesEmUso: 0 };
    cur.totalChaves = Math.max(1, Number(cur.totalChaves||1) + 1);
    cur.chavesEmUso = Math.max(0, Number(cur.chavesEmUso||0));
    return cur;
  });

  await addHistory({ acao:"CÓPIA", armario:n, detalhe });
}

// ================== MODAL BUTTONS ==================
btnEntregarAgora.addEventListener("click", async ()=>{
  const matricula = norm(fMat.value);
  const nome = norm(fNome.value);
  const arm = norm(fArmario.value);
  if (!arm) return alert("Selecione um armário.");
  if (!matricula || !nome) return alert("Preencha matrícula e nome.");
  if (fChaveEnt.value) return alert("Este colaborador já tem data de entrega preenchida.");

  try {
    await reservarChave(arm, matricula, nome, "Entrega manual (botão Entregar agora)");
    fChaveEnt.value = todayISO();
    updateArmInfo(); renderLockers();
    alert("Chave entregue e registrada no histórico.");
  } catch {
    alert(`Sem chave disponível para o armário #${arm}.`);
  }
});

btnDevolver.addEventListener("click", async ()=>{
  const matricula = norm(fMat.value);
  const nome = norm(fNome.value);
  const arm = norm(fArmario.value);
  if (!arm) return alert("Selecione um armário.");
  if (!matricula || !nome) return alert("Preencha matrícula e nome.");
  if (!fChaveEnt.value) return alert("Este colaborador não tem chave registrada.");

  await devolverChave(arm, matricula, nome, "Devolução manual (botão Devolver)");
  fChaveEnt.value = "";
  updateArmInfo(); renderLockers();
  alert("Devolução registrada no histórico.");
});

// ================== CONFIG POS/KEYS ==================
btnSalvarPos.addEventListener("click", async ()=>{
  const n = Number(posNum.value||0);
  if (!n || n<1 || n>Number(config.totalArmarios||0)) return alert("Número inválido.");
  await set(ref(db, `posicoes/${n}`), posVal.value);
  alert("Posição salva.");
});

btnSalvarChaves.addEventListener("click", async ()=>{
  const n = Number(keyNum.value||0);
  const total = Number(keyTotal.value||0);
  if (!n || n<1 || n>Number(config.totalArmarios||0)) return alert("Número inválido.");
  if (!total || total<1) return alert("Total de chaves inválido.");

  await ensureArmarioNode(n);
  await runTransaction(ref(db, `armarios/${n}`), (cur)=>{
    cur = cur || { totalChaves: 1, chavesEmUso: 0 };
    cur.totalChaves = total;
    cur.chavesEmUso = Math.min(Math.max(0, Number(cur.chavesEmUso||0)), total);
    return cur;
  });
  await addHistory({ acao:"AJUSTE", armario:String(n), detalhe:`Total de chaves definido para ${total}` });
  alert("Chaves salvas.");
});

btnMaisCopia.addEventListener("click", async ()=>{
  const n = Number(keyNum.value||0);
  if (!n || n<1 || n>Number(config.totalArmarios||0)) return alert("Número inválido.");
  await addCopia(n, "Nova cópia registrada (+1)");
  alert("+1 cópia registrada.");
});

// ================== CONFIG SAVE ==================
btnSalvarConfig.addEventListener("click", async ()=>{
  const total = Number(cfgTotal.value||0);
  const baixoAte = Number(cfgBaixoAte.value||0);
  if (!total || total<1) return alert("Total inválido.");
  if (baixoAte<0 || baixoAte>total) return alert("BAIXO até deve ser entre 0 e Total.");
  await set(ref(db, "config"), { totalArmarios: total, baixoAte });
  alert("Config salva.");
});

// ================== EXPORT/IMPORT ==================
btnExportJSON.addEventListener("click", ()=>{
  const payload = { config, posicoes, armarios, colaboradores, historico };
  downloadFile("backup_controle_armarios.json", JSON.stringify(payload,null,2), "application/json;charset=utf-8");
});

btnImportJSON.addEventListener("click", ()=> fileImportJSON.click());
fileImportJSON.addEventListener("change", async (e)=>{
  const f = e.target.files?.[0];
  if(!f) return;
  let data;
  try { data = JSON.parse(await f.text()); } catch { return alert("JSON inválido."); }
  if(!confirm("Importar JSON irá sobrescrever os dados no Firebase. Continuar?")) return;

  if (data.config) await set(ref(db,"config"), data.config);
  if (data.posicoes) await set(ref(db,"posicoes"), data.posicoes);
  if (data.armarios) await set(ref(db,"armarios"), data.armarios);
  if (data.colaboradores) await set(ref(db,"colaboradores"), data.colaboradores);
  if (data.historico) await set(ref(db,"historicoChaves"), data.historico);

  alert("Importação concluída.");
  fileImportJSON.value = "";
});

btnExportXML.addEventListener("click", ()=>{
  const doc = document.implementation.createDocument("", "colaboradores", null);
  const root = doc.documentElement;
  for (const c of Object.values(colaboradores||{})) {
    const node = doc.createElement("colaborador");
    const add = (k,v)=>{ const el=doc.createElement(k); el.textContent = v??""; node.appendChild(el); };
    add("matricula", c.matricula||"");
    add("nome", c.nome||"");
    add("admissao", c.admissao||"");
    add("cargo", c.cargo||"");
    add("armario", c.armario||"");
    add("chaveEntregueEm", c.chaveEntregueEm||"");
    root.appendChild(node);
  }
  const xml = new XMLSerializer().serializeToString(doc);
  downloadFile("colaboradores_export.xml", xml, "application/xml;charset=utf-8");
});

btnImportXML.addEventListener("click", ()=> fileImportXML.click());
fileImportXML.addEventListener("change", async (e)=>{
  const f = e.target.files?.[0];
  if(!f) return;
  const txt = await f.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(txt, "application/xml");
  if (doc.getElementsByTagName("parsererror").length) return alert("XML inválido.");

  const nodes = Array.from(doc.getElementsByTagName("colaborador"));
  if (!nodes.length) return alert("Não encontrei <colaborador> no XML.");

  for (const node of nodes) {
    const getT = (tag)=> node.getElementsByTagName(tag)?.[0]?.textContent?.trim() || "";
    const matricula = getT("matricula") || getT("Cadastro") || getT("cadastro");
    if(!matricula) continue;
    const payload = {
      matricula,
      nome: getT("nome") || getT("Nome") || "",
      admissao: getT("admissao") || getT("Admissão") || "",
      cargo: getT("cargo") || getT("Cargo") || "",
      armario: getT("armario") || getT("NumeroArmario") || "",
      chaveEntregueEm: getT("chaveEntregueEm") || ""
    };
    await set(ref(db, `colaboradores/${matricula}`), payload);
  }

  alert("Importação XML concluída (mescla por matrícula).");
  fileImportXML.value = "";
});

// ================== HISTORY BUTTONS ==================
btnExportHist.addEventListener("click", exportHistoricoCSV);
btnLimparHist.addEventListener("click", async ()=>{
  if(!confirm("Tem certeza que deseja limpar todo o histórico?")) return;
  await remove(ref(db, "historicoChaves"));
});

// ================== EVENTS ==================
tabs.forEach(btn=>btn.addEventListener("click", ()=>setTab(btn.dataset.tab)));
btnIrRisco.addEventListener("click", ()=>setTab("tabArmarios"));

btnNovo.addEventListener("click", openNew);
btnCloseModal.addEventListener("click", closeModal);
modal.addEventListener("click", (e)=>{ if(e.target===modal) closeModal(); });
formColab.addEventListener("submit", saveColab);
btnExcluir.addEventListener("click", deleteColab);

qColab.addEventListener("input", renderColaboradores);
fStatus.addEventListener("change", renderLockers);
fPos.addEventListener("change", renderLockers);
qLocker.addEventListener("keydown", (e)=>{
  if(e.key==="Enter") {
    const n = Number(qLocker.value||0);
    if(!n) return;
    const el = lockerGrid.querySelector(`[data-num="${n}"]`);
    if(el) el.scrollIntoView({behavior:"smooth", block:"center"});
  }
});
btnCopiarVisiveis.addEventListener("click", copiarListaVisivel);
fArmario.addEventListener("change", updateArmInfo);

// ================== FIREBASE LISTENERS ==================
onValue(ref(db, ".info/connected"), (snap)=>{
  const connected = !!snap.val();
  connDot.classList.toggle("on", connected);
  connDot.classList.toggle("off", !connected);
  connText.textContent = connected ? "Online" : "Offline";
});

onValue(ref(db, "config"), (snap)=>{
  if(snap.exists()){
    const v = snap.val() || {};
    // compat: se vier schema antigo (totalLockers/defaultSplit), converte para o novo (totalArmarios/baixoAte)
    if(v.totalArmarios==null && v.totalLockers!=null) v.totalArmarios = v.totalLockers;
    if(v.baixoAte==null && v.defaultSplit!=null) v.baixoAte = v.defaultSplit;
    config = {...config, ...v};
  }
  cfgTotal.value = config.totalArmarios;
  cfgBaixoAte.value = config.baixoAte;
  buildLockerOptions(fArmario.value);
  renderColaboradores();
  renderLockers();
});

onValue(ref(db, "posicoes"), (snap)=>{
  posicoes = snap.val() || {};
  renderColaboradores();
  renderLockers();
  updateArmInfo();
});

onValue(ref(db, "armarios"), (snap)=>{
  armarios = snap.val() || {};
  // se estivermos em modo legado, não sobrescreve a lógica de emUso (será recalculado)
  renderLockers();
  updateArmInfo();
});

onValue(ref(db, "colaboradores"), (snap)=>{
  colaboradores = snap.val() || {};
  renderColaboradores();
  renderLockers();
  recomputeEmUsoFromColabs();
});

onValue(ref(db, "historicoChaves"), (snap)=>{
  historico = snap.val() || {};
  renderHistorico();
});
// ================== LEGACY LISTENERS (compat) ==================
// Se você já tem dados no Firebase antigo, estes listeners "traduzem" para o schema novo.

onValue(ref(db, "employees"), (snap)=>{
  // Só usa se o nó novo estiver vazio
  if (Object.keys(colaboradores||{}).length) return;
  const v = snap.val() || {};
  if (!Object.keys(v).length) return;
  __legacyMode.colabs = true;

  const out = {};
  for (const [k,c] of Object.entries(v)) {
    if(!c) continue;
    const matricula = String(c.cadastro ?? c.matricula ?? k).trim();
    if(!matricula) continue;
    out[matricula] = {
      matricula,
      nome: c.nome ?? "",
      admissao: c.admissao ?? "",
      cargo: c.cargo ?? "",
      armario: c.armario ? String(c.armario) : "",
      chaveEntregueEm: c.chaveEntregueEm ?? c.chaveEntregue ?? ""
    };
  }
  colaboradores = out;
  renderColaboradores();
  recomputeEmUsoFromColabs();
  renderLockers();
});

onValue(ref(db, "lockerPositions"), (snap)=>{
  if (Object.keys(posicoes||{}).length) return;
  const v = snap.val() || {};
  if (!Object.keys(v).length) return;
  __legacyMode.pos = true;
  posicoes = v; // já é {num:"CIMA"/"BAIXO"}
  renderColaboradores();
  renderLockers();
  updateArmInfo();
});

onValue(ref(db, "lockerKeys"), (snap)=>{
  if (Object.keys(armarios||{}).length) return;
  const v = snap.val() || {};
  if (!Object.keys(v).length) return;
  __legacyMode.keys = true;

  const out = {};
  for (const [num,total] of Object.entries(v)) {
    const t = Number(total);
    if(!Number.isFinite(t) || t<1) continue;
    out[String(num)] = { totalChaves: Math.floor(t), chavesEmUso: 0 };
  }
  armarios = out;
  recomputeEmUsoFromColabs();
  renderLockers();
  updateArmInfo();
});

// histórico legado (se existir)
onValue(ref(db, "keyHistory"), (snap)=>{
  if (Object.keys(historico||{}).length) return;
  const v = snap.val() || {};
  if (!Object.keys(v).length) return;
  __legacyMode.hist = true;
  historico = v;
  renderHistorico();
});

// initial
setTab("tabColabs");
