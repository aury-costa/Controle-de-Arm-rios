CONTROLE DE ARMÁRIOS – v6 (COMPLETO)

Recursos:
- CRUD de colaboradores (matrícula, nome, admissão, cargo, armário, chave entregue)
- Armários 1..N (configurável) com regra padrão CIMA/BAIXO + override por número
- Mapa visual: LIVRE/OCUPADO + posição + chaves (disponíveis/total)
- Filtro: todos / livres / ocupados + filtro por CIMA/BAIXO
- Clique no armário ocupado -> abre colaborador; clique no livre -> copia o número
- Chaves por armário (cópias): totalChaves, chavesEmUso; +1 cópia
- Histórico de chaves (entrega/devolução/cópia/ajuste) em /historicoChaves
- Alerta automático: existe armário com 0 chaves disponíveis
- Relatório de risco: armários com 1 chave (totalChaves == 1)
- Backup JSON e import JSON (sobrescreve)
- Export XML e import XML (mescla por matrícula)

Firebase (Realtime Database):
- /config
- /posicoes/{num}
- /armarios/{num}
- /colaboradores/{matricula}
- /historicoChaves/{pushId}

Observação:
- Este app não usa autenticação. Para produção, configure regras e Auth.


Atualização: Config agora é flexível — escolha se 1..N é CIMA ou BAIXO (splitTipo) e o divisor (splitAte). Mantém compat com baixoAte.


Ajuste fino impressão QR:
- A4 com 12 QR por folha (3x4)
- URL abaixo do QR não aparece ao imprimir
