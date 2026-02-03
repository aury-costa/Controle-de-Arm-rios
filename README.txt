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