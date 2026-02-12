Controle de Armários (offline)
================================

Como usar
- Abra o arquivo index.html no navegador (Chrome/Edge/Firefox).
- Os dados ficam salvos no navegador (LocalStorage).
- Para backup: aba "Importar/Exportar" -> "Baixar JSON".

Recursos
- Cadastro/edição/exclusão de colaboradores (matrícula, nome, admissão, cargo).
- Atribuição de armário (1..Total) com validação para não repetir.
- Campo "Chave entregue em" (data).
- Aba "Armários disponíveis" mostra quantidade e lista; ao atribuir, o armário some da lista.
- Importar XML (mescla por matrícula) e exportar XML/JSON.
- Config: alterar Total de armários, importar backup JSON, reset.

Dica
- Se você mudar de computador/celular, use o backup JSON para restaurar.

Observação
- Este app é 100% local/offline. Para usar com link (web), basta hospedar essa pasta (por exemplo GitHub Pages, Netlify, Vercel ou servidor interno).


v4: Controle de cópias de chaves por armário (lockerKeys), com validação na entrega e visual no painel.

[Atualização] Adicionado modo QR (autoatendimento por armário): gere QRs na aba Armários e escaneie para associar armário ao colaborador.


[Correção] QR agora permite definir URL pública (ex.: GitHub Pages) para funcionar no celular. Impressão corrigida (QR card fora da área escondida na impressão).


[Atualização] Modo QR restrito: quem acessa via ?claim=1 vê apenas a tela de confirmar armário (sem acesso às demais abas).


[Atualização] Modo QR: interface travada (sem chance de ver a lista ao cancelar). Modo Admin: PIN obrigatório para ver o sistema completo.


[Ajuste fino] No modo QR, a confirmação 'Está correto?' já vem marcada automaticamente (e travada) e o botão Confirmar ficou maior.


[Ajustes finos v2] Manutenção (/lockerMaint) + impressão QR (12 por A4, só QR + número).
