/* Controle de Armários - offline
   Dados iniciais gerados a partir do seu arquivo colaborador.xlsx
*/
const INITIAL_EMPLOYEES = [{"cadastro": "26374", "nome": "ABELARDO SIMPLICIO DE SOUZA JUNIOR", "admissao": "2026-01-29", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26382", "nome": "ADRIANO PINHEIRO TEIXEIRA", "admissao": "2026-01-29", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5519", "nome": "ALDELICE DOS SANTOS OLIVEIRA", "admissao": "2010-11-09", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6602", "nome": "ALDILENE ALVES DE SOUSA", "admissao": "2014-12-24", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20668", "nome": "ALEX HENRIQUE SANTANA DE AMORIN", "admissao": "2023-02-24", "cargo": "AUXILIAR DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25382", "nome": "ALEX RIKELMY PINHEIRO SANTOS", "admissao": "2025-06-24", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25957", "nome": "ALEXANDRA RAQUEL CARDOSO FERREIRA", "admissao": "2025-10-28", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12909", "nome": "ALEXSIANE PAULA CARSTENS DOS SANTOS", "admissao": "2018-06-06", "cargo": "ANALISTA ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26215", "nome": "ALICE DA SILVA MENDES", "admissao": "2025-12-23", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25522", "nome": "ALICY VITORIA PEREIRA SILVA", "admissao": "2025-07-29", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6710", "nome": "ALINE SILVA", "admissao": "2015-05-04", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25448", "nome": "ALMIR LISBOA ALVES", "admissao": "2025-07-10", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "18482", "nome": "AMANDA CRISTINA SILVA BRITO", "admissao": "2022-02-25", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24395", "nome": "ANA CLARA DO NASCIMENTO COSTA", "admissao": "2025-01-17", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "15020", "nome": "ANA DO CARMO ARAUJO", "admissao": "2019-12-02", "cargo": "CONFERENTE DE MERCADORIAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26353", "nome": "ANA JULIA MALLMANN DOS SANTOS", "admissao": "2026-01-27", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24339", "nome": "ANA JULIA SIQUEIRA DE SOUZA", "admissao": "2025-01-09", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6255", "nome": "ANA PAULA BONFIM FAGUNDES", "admissao": "2013-10-18", "cargo": "ENCARREGADO DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25396", "nome": "ANA PAULA SILVA DO NASCIMENTO", "admissao": "2025-06-26", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22613", "nome": "ANDERSON REIS DE SOUZA", "admissao": "2024-02-28", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11568", "nome": "ANDRE CRISTIANO FERST DE SOUZA", "admissao": "2017-01-12", "cargo": "OPERADOR DE COMPRAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26204", "nome": "ANDRIU DEL JESUS SUAREZ GONZALEZ", "admissao": "2025-12-22", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23805", "nome": "ANGELICA DE SOUZA AFFONSO GOMES", "admissao": "2024-09-19", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20041", "nome": "ANGELINA SILVA DOS ANJOS", "admissao": "2022-12-01", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26196", "nome": "ANTONIA CRISTINA DOS SANTOS DE SOUSA", "admissao": "2025-12-22", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6097", "nome": "ANTONIA FERNANDES", "admissao": "2013-04-25", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26141", "nome": "ANTONIO JOSÉ SILVA VIANA", "admissao": "2025-12-04", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13211", "nome": "ANTONIO RAMOS BRANDAO", "admissao": "2018-09-26", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23364", "nome": "ANTONIO WILSON CORREA", "admissao": "2024-07-05", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13747", "nome": "AUREA DE SOUZA VIANA", "admissao": "2018-12-20", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26003", "nome": "AXAEL DAVID PINO MORENO", "admissao": "2025-11-04", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25267", "nome": "BIANA VIEIRA MACHADO", "admissao": "2025-05-27", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26000", "nome": "BRUNA GOMES DOS SANTOS", "admissao": "2025-11-04", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26302", "nome": "BRUNO DA COSTA GOMES", "admissao": "2026-01-20", "cargo": "OPERADOR DE PRENSA DE MATERIAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25314", "nome": "BRUNO WILLIAN MARTINS AMORIM", "admissao": "2025-06-10", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25725", "nome": "CAMILA APARECIDA MORAES", "admissao": "2025-09-02", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26286", "nome": "CARLA ALEXANDRA SILVA LIMA", "admissao": "2026-01-19", "cargo": "AUXILIAR ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26137", "nome": "CARLA TRINDADE DA SILVA", "admissao": "2025-12-04", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20049", "nome": "CARLOS TAVARES DOS SANTOS", "admissao": "2022-12-01", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5986", "nome": "CARMEM JANE SILVA", "admissao": "2013-01-23", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23583", "nome": "CASSIO FERREIRA DA SILVA", "admissao": "2024-08-13", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25365", "nome": "CATIA SUELY BITENCOURT CABRAL", "admissao": "2025-06-20", "cargo": "COPEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25800", "nome": "CLAUDIO DE JESUS GOMES DOS SANTOS", "admissao": "2025-09-16", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22860", "nome": "CLEBERSON DA COSTA RIBEIRO", "admissao": "2024-04-02", "cargo": "LIDER DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22745", "nome": "CLECI FURTADO SANTANA", "admissao": "2024-03-14", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25563", "nome": "CLEISON OLIVEIRA DA SILVA", "admissao": "2025-08-07", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4943", "nome": "CLEUSA BUSANELLO LERMEN", "admissao": "2007-01-02", "cargo": "LIDER DE PREVENÇAO DE PERDAS I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25609", "nome": "DAFNE VITORIA DE MORAIS LIMA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26243", "nome": "DAIANE TINTINO PADUA", "admissao": "2026-01-13", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24990", "nome": "DALILA PINHEIRO CUNHA", "admissao": "2025-04-15", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24684", "nome": "DANIELA FEITOSA DO NASCIMENTO ARAUJO", "admissao": "2025-02-27", "cargo": "AUXILIAR DE LIMPEZA DE SETOR", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22356", "nome": "DARLISSON PEREIRA", "admissao": "2024-01-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23276", "nome": "DARWIN SACARIA VELIZ BARRETO", "admissao": "2024-06-13", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25590", "nome": "DAVID LUCAS VIEIRA DA SILVA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25617", "nome": "DAVY DA SILVA NASCIMENTO", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22744", "nome": "DERINALDO BARBOSA DA SILVA", "admissao": "2024-03-14", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25523", "nome": "DIANA CEREJA DOS SANTOS SILVA", "admissao": "2025-07-29", "cargo": "COPEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16543", "nome": "DIELLEM SANTOS SILVA E SILVA", "admissao": "2021-01-27", "cargo": "AUXILIAR DE GESTAO DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23947", "nome": "DILENE TAVARES DOS SANTOS", "admissao": "2024-10-22", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25496", "nome": "DIMAS PAULO DE OLIVEIRA", "admissao": "2025-07-22", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25384", "nome": "DIOGO CABRAL DA SILVA", "admissao": "2025-06-24", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24809", "nome": "EDIVANDO SOUSA DA CUNHA", "admissao": "2025-03-18", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22205", "nome": "EDNA GOMES DA SILVA", "admissao": "2023-12-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25942", "nome": "EDUARDO MATEUS DA SILVA", "admissao": "2025-10-23", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25976", "nome": "EDVAN ALVES BRITO", "admissao": "2025-10-30", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23236", "nome": "ELAINE CRISTINA DOS SANTOS BARBOSA", "admissao": "2024-06-06", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22125", "nome": "ELEN MICHELE DA LUZ MENDES", "admissao": "2023-12-01", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24076", "nome": "ELHIDILANNY ROCHA DOS SANTOS", "admissao": "2024-11-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25020", "nome": "ELIANE DA CONCEIÇÃO SOUSA", "admissao": "2025-04-22", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21803", "nome": "ELIAS DE JESUS RODRIGUES SILVA", "admissao": "2023-10-04", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13846", "nome": "ELIVANIA FRASAO COSTA", "admissao": "2019-02-11", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11671", "nome": "ELIZABETH DE MIRANDA", "admissao": "2017-02-15", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23293", "nome": "ELOISA FRANÇA NONATO", "admissao": "2024-06-18", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "17742", "nome": "EMERITA APARECIDA DA SILVA", "admissao": "2021-10-28", "cargo": "ENCARREGADO DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26054", "nome": "EMERSON DA SILVA", "admissao": "2025-11-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6465", "nome": "ERCINHA GONCALVES DA SILVA", "admissao": "2014-06-04", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26330", "nome": "ERIK LIMA E SILVA", "admissao": "2026-01-23", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26361", "nome": "EVA SALES FERREIRA", "admissao": "2026-01-27", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11453", "nome": "EVENA VILSAINT", "admissao": "2016-11-22", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20581", "nome": "EVILA CELINA VENTURA SILVA DOS SANTOS", "admissao": "2023-02-14", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6208", "nome": "FABIANA DE ARAUJO SANTOS", "admissao": "2013-08-26", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22099", "nome": "FABINEI COUTINHO LOPES", "admissao": "2023-11-28", "cargo": "CONFERENTE DE MERCADORIAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24758", "nome": "FABRICIA MAYARA DOS SANTOS COSTA", "admissao": "2025-03-12", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25849", "nome": "FABRICIO MADEIRA SILVA", "admissao": "2025-09-26", "cargo": "MOTORISTA II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11840", "nome": "FATIMA DA SILVA MORAES", "admissao": "2017-04-12", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26200", "nome": "FLAVIA ALESSANDRA DA SILVA CONCEIÇÃO", "admissao": "2025-12-22", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21189", "nome": "FLAVIA DE OLIVEIRA ARCE", "admissao": "2023-06-01", "cargo": "NUTRICIONISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16944", "nome": "FRANCIANE BEZERRA MACEDO", "admissao": "2021-04-15", "cargo": "ATENDENTE DE SAC", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22100", "nome": "FRANCIANE MELO DA SILVA GARCIA", "admissao": "2023-11-28", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "15339", "nome": "FRANCINEIDE MATOS GOMES", "admissao": "2020-02-07", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16256", "nome": "FRANCISCA MARIANE CASTRO DE OLIVEIRA", "admissao": "2020-11-25", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24955", "nome": "FRANCISCO ELIAS DAMASCENO DE CARVALHO", "admissao": "2025-04-10", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25831", "nome": "FRANCISCO GOMES", "admissao": "2025-09-23", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26207", "nome": "FRANCISCO MATHEUS ALVES DE OLIVEIRA", "admissao": "2025-12-22", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26267", "nome": "FRANMARYS CAROLINA FAJARDO LOPEZ", "admissao": "2026-01-20", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24369", "nome": "GABRIEL ANILDO COVER", "admissao": "2025-01-14", "cargo": "ESTOQUISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20784", "nome": "GABRIEL VIEIRA LISBOA", "admissao": "2023-03-17", "cargo": "AUXILIAR DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11304", "nome": "GEILTON ARAUJO DAS CHAGAS", "admissao": "2016-10-11", "cargo": "ENCARREGADO DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24125", "nome": "GEISA DE SOUZA FRANCISCO", "admissao": "2024-11-28", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4546", "nome": "GENESE EVANILDO MURTA", "admissao": "2002-09-15", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "14170", "nome": "GEORGE CHARLES SOUZA", "admissao": "2019-05-16", "cargo": "MOTORISTA II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26213", "nome": "GICIANE MARIA BARTNICKI KAUFKA", "admissao": "2025-12-22", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21816", "nome": "GILBERTO SIQUEIRA LOPES", "admissao": "2023-10-05", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26191", "nome": "GILLIANE FERREIRA DA SILVA", "admissao": "2025-12-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20672", "nome": "GIOVANNA CRISTINA LIMA COSTA", "admissao": "2023-02-24", "cargo": "ATENDENTE DE SAC", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26117", "nome": "GISELE CAROLINE DE SOUZA FERREIRA", "admissao": "2025-11-27", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25397", "nome": "GIVANILDO BOTELHO DA SILVA", "admissao": "2025-06-26", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19352", "nome": "GRAZIELA VENDRUSCOLO LIMA", "admissao": "2022-08-08", "cargo": "GERENTE GERAL DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "14391", "nome": "GUSTAVO ARAUJO DAS CHAGAS", "admissao": "2019-06-21", "cargo": "ASSISTENTE FINANCEIRO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26319", "nome": "GUSTAVO PEREIRA PINTO", "admissao": "2026-01-22", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26247", "nome": "HERCULES MONTEIRO DA SILVA", "admissao": "2026-01-13", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26359", "nome": "HUBERT DANIEL SILVA DE SOUZA", "admissao": "2026-01-27", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "8391", "nome": "IGOR JANIO GARCIA", "admissao": "2010-10-26", "cargo": "MOTORISTA II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23852", "nome": "IRANILSON BARROSO DE SOUSA", "admissao": "2024-10-01", "cargo": "FISCAL DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25619", "nome": "ISADORA CAVALLI GEREMIA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25624", "nome": "ISLAN MARLISON FELIPE CHAGAS", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26351", "nome": "ISMAEL JESUS PINO MORENO", "admissao": "2026-01-27", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25887", "nome": "ITALO KAUAN SILVA DA SILVA", "admissao": "2025-10-07", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23804", "nome": "IVANIA MARIA FREITAS VIANA", "admissao": "2024-09-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25331", "nome": "IVY DO NASCIMENTO CARDOSO", "admissao": "2025-06-12", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24907", "nome": "JACKSON KAUE SOUSA DA SILVA", "admissao": "2025-04-03", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26193", "nome": "JADSON FABRICIO DA SILVA", "admissao": "2025-12-18", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25999", "nome": "JAKELINE MATOS CARDOSO", "admissao": "2025-11-04", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20392", "nome": "JARDEL DA SILVA MARTINS", "admissao": "2023-01-19", "cargo": "PADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24767", "nome": "JARDILENE DA SILVA DA CRUZ", "admissao": "2025-03-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25602", "nome": "JARSUEL JOSE CANACHE RODRIGUEZ", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20190", "nome": "JEANE BARBOSA DE LIMA", "admissao": "2022-12-19", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25760", "nome": "JEFFERSON DE LIMA ALEIXO", "admissao": "2025-09-09", "cargo": "AUXILIAR DE LIMPEZA DE SETOR", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13061", "nome": "JESSICA LIMA MESQUITA", "admissao": "2018-08-06", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23354", "nome": "JHENIFFER ELOISA SILVA ZIENTARSKI", "admissao": "2024-07-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25816", "nome": "JOAO CARLOS FONSECA DA SILVA", "admissao": "2025-09-18", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25596", "nome": "JOAO LUCAS PENHA CARDOSO", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22051", "nome": "JOAO MATEUS GOMES DOS SANTOS", "admissao": "2023-11-22", "cargo": "LIDER DE DEPOSITO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25012", "nome": "JOAO MAYLLON DA LUZ MENDES", "admissao": "2025-04-22", "cargo": "PADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24110", "nome": "JOAO RAFAEL ZARK FREIRE BORGES", "admissao": "2024-11-26", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22908", "nome": "JOELMA VIEIRA PINTO", "admissao": "2024-04-09", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16945", "nome": "JOSE ALEXANDRE CONCEIÇÃO BELMIRO", "admissao": "2021-04-15", "cargo": "OPERADOR DE EMPILHADEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "14554", "nome": "JOSE HENRIQUE DE OLIVEIRA SOARES", "admissao": "2019-08-01", "cargo": "LIDER DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4825", "nome": "JOSE HUGO DA SILVA ARRUDA", "admissao": "2005-09-08", "cargo": "AUXILIAR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25780", "nome": "JOSE IOLAUS MELO SANTOS", "admissao": "2025-09-12", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5589", "nome": "JOSE SEVERINO DE ARAUJO", "admissao": "2011-04-09", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25349", "nome": "JUCIELE SA SAMPAIO", "admissao": "2025-06-17", "cargo": "ENCARREGADO DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4643", "nome": "JULIANO BATISTA RIBEIRO", "admissao": "2004-02-01", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5855", "nome": "JULIO NEDEL", "admissao": "2012-06-21", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21806", "nome": "JUVENAL JUNIOR BORGES PAIXAO", "admissao": "2023-10-04", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20580", "nome": "KARLA EMANUELE DA SILVA RIOS", "admissao": "2023-02-14", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24298", "nome": "KARLIANE SANTOS DE BARROS", "admissao": "2025-01-02", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20463", "nome": "KARMEM LOIANE SILVA DE ABREU", "admissao": "2023-01-27", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25932", "nome": "KASSIO SOARES DE SOUSA CARVALHO", "admissao": "2025-03-28", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24434", "nome": "KAUA LEAL DA SILVA", "admissao": "2025-01-22", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23096", "nome": "KEITH DA ROSA SILVA DIAS", "admissao": "2024-05-07", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25603", "nome": "KELFREN JOSE MATA TINEO", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26080", "nome": "LADYANE PIRES DIAS", "admissao": "2025-11-18", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25618", "nome": "LAURA DE MOURA GUERRA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25744", "nome": "LAURO DANYEL DE BRITO", "admissao": "2025-09-05", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26192", "nome": "LAYLA GONÇALVES CORREA", "admissao": "2025-12-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25601", "nome": "LAYON KEVIM DA SILVA PEREIRA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25961", "nome": "LAYSE JANAINA CORDOVIL DE ANDRADE", "admissao": "2025-10-28", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5677", "nome": "LEANDRO ALVES LIMA", "admissao": "2011-02-16", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22237", "nome": "LEANDRO ANUNCIACAO RODRIGUEZ", "admissao": "2023-12-26", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25324", "nome": "LEDY RAYANY BARROSO PESSOA", "admissao": "2025-06-10", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19408", "nome": "LEOMAR DO NASCIMENTO DE SOUSA", "admissao": "2022-08-17", "cargo": "OPERADOR DE EMPILHADEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6235", "nome": "LIGIA DE SOUZA GONCALVES", "admissao": "2013-10-01", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13851", "nome": "LISIANY COSTA PACHECO", "admissao": "2019-02-11", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20587", "nome": "LORENA COSTA SERRA", "admissao": "2023-02-14", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19126", "nome": "LORRANE BEATRIZ SILVA CASTRO", "admissao": "2022-07-01", "cargo": "AUXILIAR ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23853", "nome": "LUAN DOS SANTOS RIBEIRO", "admissao": "2024-10-02", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26296", "nome": "LUCAS CARDOSO DE SOUSA", "admissao": "2026-01-20", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25062", "nome": "LUCAS COSTA DE OLIVEIRA", "admissao": "2025-04-29", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22690", "nome": "LUCAS DANIEL DA SILVA BARATA", "admissao": "2024-03-07", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26298", "nome": "LUCIANE DE OLIVEIRA MENDES", "admissao": "2026-01-20", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26070", "nome": "LUCIENE DA SILVA RODRIGUES", "admissao": "2025-11-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26216", "nome": "LUCIENE JERONIMO DA SILVA", "admissao": "2025-12-23", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12910", "nome": "LUCINEIA DOS SANTOS ALMEIDA RAMOS", "admissao": "2018-06-06", "cargo": "LIDER DE FRENTE DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26039", "nome": "LUIS CARLOS DA SILVA PESSOA", "admissao": "2025-11-11", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26244", "nome": "LUISANA ANDREINA CALLES URBANO", "admissao": "2026-01-13", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25196", "nome": "LUIZ FERNANDO DA SILVA LIMA", "admissao": "2025-05-15", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "17467", "nome": "LUIZ FERNANDO SOUZA BRITO", "admissao": "2021-08-24", "cargo": "PADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5084", "nome": "LUIZA DE FATIMA DOS SANTOS", "admissao": "2008-05-14", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24773", "nome": "MAGNA SANTOS DA LUZ", "admissao": "2025-03-13", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10223", "nome": "MANOEL DE JESUS GOMES DA COSTA", "admissao": "2015-09-09", "cargo": "ZELADOR(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26147", "nome": "MANUELA LIMA DE CARVALHO", "admissao": "2025-12-05", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6578", "nome": "MARCELO EMANOEL PEREIRA", "admissao": "2014-11-21", "cargo": "PADEIRO(A) II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23685", "nome": "MARCELO ESPINDOLA FERREIRA", "admissao": "2024-08-27", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25410", "nome": "MARCELO FREITAS DOS REIS", "admissao": "2025-07-01", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22101", "nome": "MARCELO SAMINES AGUIAR", "admissao": "2023-11-28", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23309", "nome": "MARCIO ANTONIO RAIOL DE SOUSA", "admissao": "2024-06-20", "cargo": "LIDER DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25673", "nome": "MARCIO HENRIQUE DE SOUZA RODRIGUES", "admissao": "2025-08-21", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24952", "nome": "MARCO ANTONIO SOUSA LACERDA", "admissao": "2025-04-10", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23323", "nome": "MARCOS DOUGLAS DA SILVA DOS SANTOS", "admissao": "2024-06-25", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26145", "nome": "MARCOS PEDRO LIMA GONÇALVES", "admissao": "2025-12-05", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22234", "nome": "MARCOS VINICIUS DA SILVA NERES", "admissao": "2023-12-26", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23987", "nome": "MARCOS VINICIUS LIMA CANONICO", "admissao": "2024-10-29", "cargo": "ESTOQUISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21804", "nome": "MARIA BEATRIZ DA SILVA", "admissao": "2023-10-04", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24178", "nome": "MARIA CATARINA DA SILVA", "admissao": "2024-12-05", "cargo": "AUXILIAR DE LIMPEZA DE SETOR", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10930", "nome": "MARIA DO AMPARO OLIVEIRA SILVA PEREIRA", "admissao": "2016-05-19", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24060", "nome": "MARIA DO SOCORRO DA SILVA", "admissao": "2024-11-14", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23109", "nome": "MARIA DOS SANTOS", "admissao": "2024-05-09", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10669", "nome": "MARIA FRANCISCA DA CONCEICAO SILVA", "admissao": "2016-02-02", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26273", "nome": "MARIA HELOISA SARAIVA DOS SANTOS", "admissao": "2026-01-19", "cargo": "AUXILIAR DE GESTAO DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26146", "nome": "MARIA NATALY LIMA SOUZA", "admissao": "2025-12-05", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23820", "nome": "MARIA RAIANE DO NASCIMENTO LOPES", "admissao": "2024-09-24", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19500", "nome": "MARIA SAMARA DA SILVA", "admissao": "2022-09-06", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26326", "nome": "MARIANE BORGES PEREIRA", "admissao": "2026-01-22", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23823", "nome": "MARILUCE DOS SANTOS NASCIMENTO", "admissao": "2024-09-24", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22827", "nome": "MARIMAR CARVALHO COSTA", "admissao": "2024-03-26", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6611", "nome": "MARINALVA ALVES CARDOSO", "admissao": "2015-01-09", "cargo": "COPEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19120", "nome": "MARIO CARNEIRO DURVAL JUNIOR", "admissao": "2022-06-28", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25597", "nome": "MATEUS AIRES SOUZA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23511", "nome": "MATEUS ARAUJO DA MATA", "admissao": "2024-08-06", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26350", "nome": "MATEUS CARVALHO MENDES", "admissao": "2026-01-27", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25592", "nome": "MATHEUS ALVES DIAS", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24884", "nome": "MATHEUS HENRIQUE RODRIGUES BARRETO", "admissao": "2025-04-01", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10162", "nome": "MAURO CEZAR CAMPOS COELHO", "admissao": "2015-08-11", "cargo": "GERENTE DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26037", "nome": "MAX JORIE SILVEIRA BRANDÃO", "admissao": "2025-11-11", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26336", "nome": "MAYARA SILVA CADETE", "admissao": "2026-01-23", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19423", "nome": "MAYKE JHONES COSTA DA SILVA", "admissao": "2022-08-19", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11701", "nome": "MAYQUELY DE SOUZA ALVES", "admissao": "2017-02-22", "cargo": "LIDER DE ATENDIMENTO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25863", "nome": "MAYZE MARTINS SILVA", "admissao": "2025-09-30", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22436", "nome": "MELRI JANAINA RODRIGUES DO NASCIMENTO", "admissao": "2024-01-25", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21765", "nome": "MELRIANA DA CONCEICAO SANTOS", "admissao": "2023-09-26", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26329", "nome": "MICKAEL DA SILVA SANTOS", "admissao": "2026-01-23", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24529", "nome": "MURILO DE PAULA OLIVEIRA", "admissao": "2025-02-06", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25620", "nome": "MYKAELLE DE MORAES GUIMARAES", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24205", "nome": "NAIANNY CHRISTINY SILVA DE ALMEIDA", "admissao": "2024-12-10", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "18968", "nome": "NATAIANA AGUIAR DA SILVA", "admissao": "2022-05-19", "cargo": "ASSISTENTE ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25125", "nome": "NAYELLEN SOUZA SILVA", "admissao": "2025-05-08", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26335", "nome": "NAYRA FERNANDA ARAUJO LICURGO", "admissao": "2026-01-23", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4660", "nome": "NEI GONCALVES DA COSTA", "admissao": "2004-03-01", "cargo": "ENCARREGADO DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23688", "nome": "NESICLEYDE SOUZA LIMA", "admissao": "2024-08-27", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6521", "nome": "NIEDJA DE SOUZA TAVARES", "admissao": "2014-08-02", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10614", "nome": "NURIA FAUSTINO CHERNI", "admissao": "2016-01-06", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26125", "nome": "NYCHOLAS ABREU FERREIRA", "admissao": "2025-12-02", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5836", "nome": "ORLANDO DA SILVA ARRUDA", "admissao": "2003-11-01", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25594", "nome": "OTAVIO DOS SANTOS PEREIRA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11674", "nome": "PATRICIA DA SILVA BRITO", "admissao": "2017-02-15", "cargo": "LIDER DE VENDAS I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22138", "nome": "PATRICIA DA SILVA VIEIRA LISBOA", "admissao": "2023-12-05", "cargo": "ESTOQUISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22306", "nome": "PATRICIA MIRANDA DO NASCIMENTO", "admissao": "2024-01-12", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11587", "nome": "PAULA CRISTINA RODRIGUES", "admissao": "2017-01-24", "cargo": "AUXILIAR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25598", "nome": "PAULO EDUARDO DA SILVA MAGALHÃES", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26038", "nome": "PEDRO AFONSO DUARTE LISBOA", "admissao": "2025-11-11", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25398", "nome": "PEDRO AUGUSTO FIRMINO SILVA", "admissao": "2025-06-26", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22305", "nome": "PRISCILA DAIANE SILVA", "admissao": "2021-06-09", "cargo": "ANALISTA DE GESTAO DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23960", "nome": "QUELIANE CAMPOS DOS SANTOS", "admissao": "2024-10-23", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25588", "nome": "RADSON KAIO MIRANDA RODRIGUES", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21146", "nome": "RAFAEL HENRIQUE DA SILVA ARAUJO", "admissao": "2023-05-22", "cargo": "TECNICO DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22028", "nome": "RAFAELA SANTOS ALVES DE OLIVEIRA", "admissao": "2023-11-16", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13043", "nome": "RAIMUNDA NONATA ARAUJO AMORIM", "admissao": "2018-08-06", "cargo": "ENCARREGADO DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16636", "nome": "RAIMUNDO FERREIRA DE SOUSA", "admissao": "2021-02-10", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26300", "nome": "RAPHAELA FERREIRA DE OLIVEIRA", "admissao": "2026-01-20", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24382", "nome": "RAQUEL DOS SANTOS REIS", "admissao": "2025-01-15", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25937", "nome": "RAYANA LUNARA MACÊDO DE SOUSA", "admissao": "2025-10-21", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22683", "nome": "RAYSSA GABRIELE OLIVEIRA COELHO", "admissao": "2024-03-07", "cargo": "RECEPCIONISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21767", "nome": "REBECA LOREN GATINHO BASTOS", "admissao": "2023-09-26", "cargo": "AUXILIAR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4569", "nome": "REGINALDO ROOS", "admissao": "2002-10-01", "cargo": "SUPERVISOR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24811", "nome": "RENAN DUARTE GOMES DE LIMA", "admissao": "2025-03-18", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26076", "nome": "ROISMARY DEL VALLE CALZADILLA SARACUAL", "admissao": "2025-11-18", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25611", "nome": "RONIELD DE JESUS GARCIA RODRIGUEZ", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "15160", "nome": "ROSANGELA RIBEIRO DA SILVA", "admissao": "2019-12-19", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10899", "nome": "ROSE RODRIGUES DE OLIVEIRA", "admissao": "2016-05-02", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12080", "nome": "ROSEANE DOS SANTOS SILVA", "admissao": "2017-08-07", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26194", "nome": "ROSEGLAIA FONSECA CAVALCANTE", "admissao": "2025-12-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24988", "nome": "ROSIVANIA BASTOS OLIVEIRA", "admissao": "2025-04-15", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23607", "nome": "RUTH JUA LIMA", "admissao": "2024-08-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23606", "nome": "SABINA KETELLEY DA SILVA", "admissao": "2024-08-13", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24461", "nome": "SABRINA KARLA CUIABANO RODRIGUES", "admissao": "2025-01-27", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25123", "nome": "SAM HEWEMAM DIEGO SOUSA DE GOUVEIA", "admissao": "2025-05-08", "cargo": "ARMAZENISTA DE FRIOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25656", "nome": "SAMUEL DAVID JIMENEZ LUGO", "admissao": "2025-08-19", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25221", "nome": "SELMA MARIA DOS SANTOS SILVA", "admissao": "2025-05-20", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6001", "nome": "SELMA REGINA PRIM", "admissao": "2013-02-01", "cargo": "ENCARREGADO DE FRENTE DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26202", "nome": "SERGIO ALEJANDRO LIZARDI", "admissao": "2025-12-22", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12778", "nome": "SIMONE COSME DA SILVA", "admissao": "2018-04-09", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26224", "nome": "SIMONE DE FATIMA DA SILVA NASCIMENTO", "admissao": "2026-01-02", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5742", "nome": "SIRLEIDA BORGES DOS SANTOS", "admissao": "2012-01-07", "cargo": "MONITOR(A) DE VIDEO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4931", "nome": "SONIA MARIA JULIAO", "admissao": "2006-12-04", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22772", "nome": "STELA RODRIGUES SPINELLI", "admissao": "2024-03-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6584", "nome": "SUELI SANDRA CANDIDO SOARES", "admissao": "2011-04-01", "cargo": "ANALISTA FINANCEIRO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23248", "nome": "SUZIANE DA SILVA BEZERRA", "admissao": "2024-06-11", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23348", "nome": "TAINARA SCHNEIDER", "admissao": "2024-07-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25040", "nome": "TAMIRES DA SILVA MONTEIRO", "admissao": "2025-04-24", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26248", "nome": "TANIA MARIA FERREIRA DE AGUIAR FRA", "admissao": "2026-01-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25595", "nome": "TAYLLON DIEGO DE SANTANA SANTOS", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21031", "nome": "THIAGO ANTONIO DAS NEVES", "admissao": "2023-04-28", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20005", "nome": "THIAGO DO NASCIMENTO C DE LIMA AMARAL", "admissao": "2022-11-25", "cargo": "TECNICO DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26090", "nome": "THIAGO FIGUEREDO DA SILVA", "admissao": "2025-11-21", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24212", "nome": "THIAGO JUNQUEIRA DE SOUZA", "admissao": "2024-12-11", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22874", "nome": "THIAGO SOUZA DE BRITO", "admissao": "2024-04-04", "cargo": "OPERADOR DE EMPILHADEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23949", "nome": "TONES OLIVEIRA REIS", "admissao": "2024-10-22", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24872", "nome": "VALDENICE ALVES DE MELO", "admissao": "2025-03-27", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21740", "nome": "VALDINEIA APARECIDA BARBOSA JESUS", "admissao": "2023-09-22", "cargo": "CONFEITEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26232", "nome": "VALDIVINO MENDES DA SILVA", "admissao": "2026-01-08", "cargo": "ENCARREGADO DE DEPOSITO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4587", "nome": "VANDERLEI ADILIO DE OLIVEIRA", "admissao": "2003-01-02", "cargo": "ENCARREGADO DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24883", "nome": "VICTOR HUGO BRITO FERREIRA", "admissao": "2025-04-01", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12396", "nome": "VINICIUS FRANCISCO DE ALMEIDA", "admissao": "2017-12-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26373", "nome": "VITORIA LAYANE DE CARVALHO SOUSA", "admissao": "2026-01-29", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26073", "nome": "WALLISON CLAUDIO ALVES MARTINS", "admissao": "2025-11-18", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23357", "nome": "WALTER PAMPLONA DE SOUZA", "admissao": "2024-07-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25845", "nome": "WANDERLEY MEDEIROS PINTO", "admissao": "2025-09-25", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25593", "nome": "WILIAN DOS SANTOS BARBOSA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19065", "nome": "WILLIAN HENRIQUE PAULETTI DE SOUZA", "admissao": "2022-06-17", "cargo": "LIDER DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}];

// ===== Firebase (Realtime Database) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
import {
  getDatabase, ref, onValue, set, update, remove, get, child, runTransaction, push, query, limitToLast
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

// Sua configuração Firebase (fornecida por você)
const firebaseConfig = {
  apiKey: "AIzaSyAZsuUlvDWI5_g8H4aCqXsnQDyswvPF1us",
  authDomain: "controle-armarios-14351.firebaseapp.com",
  databaseURL: "https://controle-armarios-14351-default-rtdb.firebaseio.com",
  projectId: "controle-armarios-14351",
  storageBucket: "controle-armarios-14351.firebasestorage.app",
  messagingSenderId: "171871598145",
  appId: "1:171871598145:web:18cccd6cd407a79e7838c0",
  measurementId: "G-M9YRXT2Z15"
};

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch {}
const db = getDatabase(app);

// ===== Helpers/UI =====
const el = (id) => document.getElementById(id);

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = {
  colabs: el("tab-colabs"),
  lockers: el("tab-lockers"),
  import: el("tab-import"),
  config: el("tab-config"),
  history: el("tab-history"),
};

const modal = el("modal");
const toast = el("toast");
const connStatus = el("connStatus");

let state = {
  totalLockers: 300,
  defaultSplit: 150, // 1..X = BAIXO, X+1..total = CIMA (padrão)
  lockerPositions: {}, // override por número: { "42": "CIMA" }
  lockerKeys: {}, // override por número: { "42": 2 } (total de chaves)
  employees: [], // [{cadastro, nome, admissao, cargo, armario, chaveEntregueEm}]
};

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=>toast.classList.remove("show"), 2600);
}

function normalize(str){
  return (str ?? "")
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .toLowerCase()
    .trim();
}

function formatDateBR(iso){
  if(!iso) return "";
  // aceita 'YYYY-MM-DD'
  const [y,m,d] = String(iso).split("-");
  if(!y||!m||!d) return String(iso);
  return `${d}/${m}/${y}`;
}

function parseLockerFilter(input){
  const s = normalize(input);
  if(!s) return { type: "all" };
  // "1-50"
  const m = s.match(/^(\d+)\s*-\s*(\d+)$/);
  if(m){
    let a = parseInt(m[1],10), b = parseInt(m[2],10);
    if(Number.isFinite(a)&&Number.isFinite(b)){
      if(a>b) [a,b]=[b,a];
      return { type:"range", a, b };
    }
  }
  // "2xx"
  const m2 = s.match(/^(\d)x{2}$/);
  if(m2){
    const p = parseInt(m2[1],10);
    if(Number.isFinite(p)) return { type:"prefix", p };
  }
  // número exato
  const n = parseInt(s,10);
  if(Number.isFinite(n)) return { type:"one", n };
  return { type:"text", s };
}

function lockerPosition(n){
  const key = String(n);
  const ov = state.lockerPositions?.[key];
  if(ov === "CIMA" || ov === "BAIXO") return ov;
  const split = Number.isFinite(state.defaultSplit) ? state.defaultSplit : Math.floor(state.totalLockers/2);
  return n <= split ? "BAIXO" : "CIMA";
}

// ===== Chaves (cópias) por armário =====
function totalKeysForLocker(n){
  const v = state.lockerKeys?.[String(n)];
  const num = Number(v);
  return Number.isFinite(num) && num > 0 ? Math.floor(num) : 1; // padrão: 1 chave
}

function keysInUseForLocker(n, excludeCadastro){
  // Cada armário é único por colaborador, mas a chave pode ou não ter sido entregue.
  // Conta colaboradores com este armário e chaveEntregueEm preenchido.
  let count = 0;
  for(const e of state.employees){
    if(excludeCadastro && String(e.cadastro) === String(excludeCadastro)) continue;
    if(Number.isFinite(e.armario) && e.armario === n && e.chaveEntregueEm){
      count++;
    }
  }
  return count;
}

function keysAvailableForLocker(n, excludeCadastro){
  return totalKeysForLocker(n) - keysInUseForLocker(n, excludeCadastro);
}

async function saveLockerKeys(num, total){
  await set(ref(db, `lockerKeys/${num}`), total);
}

async function logHistoricoChave({ tipo, armario, cadastro, nome, chaveEntregueEm, obs, totalAntes, totalDepois, deltaTotal }){
  // não falha o fluxo principal se o log falhar
  try{
    const payload = {
      ts: Date.now(),
      tipo: String(tipo || ""),
      armario: armario == null ? null : Number(armario),
      cadastro: String(cadastro || ""),
      nome: String(nome || ""),
      chaveEntregueEm: chaveEntregueEm ?? null,
      obs: obs ? String(obs) : "",
      totalAntes: Number.isFinite(totalAntes) ? Number(totalAntes) : null,
      totalDepois: Number.isFinite(totalDepois) ? Number(totalDepois) : null,
      deltaTotal: Number.isFinite(deltaTotal) ? Number(deltaTotal) : null
    };
    await push(ref(db, "historicoChaves"), payload);
  }catch(err){
    console.warn("Falha ao registrar histórico:", err);
  }
}


function tagPos(pos){
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = pos;
  return span;
}

function updateConnBadge(connected){
  if(!connStatus) return;
  if(connected){
    connStatus.textContent = "Online • Firebase (tempo real)";
    connStatus.classList.add("ok");
    connStatus.classList.remove("bad");
  } else {
    connStatus.textContent = "Offline • tentando reconectar…";
    connStatus.classList.remove("ok");
    connStatus.classList.add("bad");
  }
}

// ===== Firebase sync =====
let _seeded = false;

function seedIfEmpty(snapshotVal){
  // Se não existir nenhum colaborador no banco, joga o INITIAL_EMPLOYEES uma vez
  if(_seeded) return;
  _seeded = true;

  if(snapshotVal && Object.keys(snapshotVal).length) return;

  const updates = {};
  for(const e of INITIAL_EMPLOYEES){
    const cadastro = String(e.cadastro).trim();
    if(!cadastro) continue;
    updates[`employees/${cadastro}`] = {
      cadastro,
      nome: e.nome ?? "",
      admissao: e.admissao ?? "",
      cargo: e.cargo ?? "",
      armario: e.armario ?? null,
      chaveEntregueEm: e.chaveEntregueEm ?? null,
    };
  }
  // total/defaultSplit só se não existirem
  updates["config/totalLockers"] = 300;
  updates["config/defaultSplit"] = 150;
  return update(ref(db), updates)
    .then(()=>showToast("Base inicial enviada para o Firebase."))
    .catch((err)=>showToast("Não consegui enviar base inicial: " + (err?.message || err)));
}

function startRealtime(){
  // status de conexão
  onValue(ref(db, ".info/connected"), (snap)=> updateConnBadge(!!snap.val()));

  // config
  onValue(ref(db, "config"), (snap)=>{
    const v = snap.val() || {};
    const total = Number(v.totalLockers);
    if(Number.isFinite(total) && total>0) state.totalLockers = Math.floor(total);

    const split = Number(v.defaultSplit ?? v.divisao);
    if(Number.isFinite(split) && split>=0) state.defaultSplit = Math.floor(split);

    const padrao = (v.padraoAte === "CIMA") ? "CIMA" : "BAIXO";
    state.defaultPadraoAte = padrao;

    el("totalInput").value = state.totalLockers;
    el("splitInput").value = state.defaultSplit;
    if(el("padraoAteInput")) el("padraoAteInput").value = state.defaultPadraoAte;
    renderAll();
    // se veio via QR (?claim=1&locker=...), abre o modal depois que os colaboradores carregarem
    if(pendingClaimLocker != null){
      openClaimModal(pendingClaimLocker);
      pendingClaimLocker = null;
    }
  });

  // locker positions override
  onValue(ref(db, "lockerPositions"), (snap)=>{
    state.lockerPositions = snap.val() || {};
    renderAll();
  });

  // locker keys (total de cópias por armário)
  onValue(ref(db, "lockerKeys"), (snap)=>{
    state.lockerKeys = snap.val() || {};
    renderAll();
  });


  // histórico de chaves (últimos 200)
  onValue(query(ref(db, "historicoChaves"), limitToLast(200)), (snap)=>{
    const v = snap.val() || {};
    const arr = [];
    for(const [id, h] of Object.entries(v)){
      if(!h) continue;
      arr.push({
        id,
        ts: Number(h.ts) || 0,
        tipo: String(h.tipo || ""),
        armario: (h.armario == null ? null : Number(h.armario)),
        cadastro: String(h.cadastro || ""),
        nome: String(h.nome || ""),
        chaveEntregueEm: h.chaveEntregueEm ?? null,
        obs: String(h.obs || ""),
        totalAntes: (h.totalAntes == null ? null : Number(h.totalAntes)),
        totalDepois: (h.totalDepois == null ? null : Number(h.totalDepois)),
        deltaTotal: (h.deltaTotal == null ? null : Number(h.deltaTotal)),
      });
    }
    arr.sort((a,b)=> (b.ts||0) - (a.ts||0));
    state.historicoChaves = arr;
    renderHistory();
  }, (err)=>{
    // não trava o app se der erro no histórico
    console.warn("Erro Firebase (historicoChaves):", err);
  });

  // employees
  onValue(ref(db, "employees"), (snap)=>{
    const v = snap.val();
    state.publicBaseUrl = v?.publicBaseUrl ?? state.publicBaseUrl ?? "";
    // se o usuário digitar manualmente na tela de QR, isso tem prioridade no momento

    seedIfEmpty(v);
    const arr = [];
    if(v){
      for(const [k,e] of Object.entries(v)){
        if(!e) continue;
        arr.push({
          cadastro: String(e.cadastro ?? k),
          nome: e.nome ?? "",
          admissao: e.admissao ?? "",
          cargo: e.cargo ?? "",
          armario: Number.isFinite(e.armario) ? e.armario : (e.armario==null||e.armario==="" ? null : Number(e.armario)),
          chaveEntregueEm: e.chaveEntregueEm ?? null,
        });
      }
    }
    // sanitize locker bounds
    for(const e of arr){
      if(e.armario != null && (e.armario < 1 || e.armario > state.totalLockers)) e.armario = null;
    }
    state.employees = arr;
    // atualiza opções do seletor do "Controle rápido de chaves"
    refreshKeyEvtEmpOptions();
    renderAll();
  }, (err)=>{
    showToast("Erro Firebase (employees): " + (err?.message || err));
  });
}

async function claimLocker(lockerNumber, cadastro){
  const n = Number(lockerNumber);
  if(!Number.isFinite(n)) return;
  const r = ref(db, `lockerIndex/${n}`);
  const res = await runTransaction(r, (current)=>{
    if(current === null || current === cadastro) return cadastro;
    return; // aborta
  });
  if(!res.committed) throw new Error(`Armário ${n} já está em uso.`);
}

async function releaseLocker(lockerNumber, cadastro){
  const n = Number(lockerNumber);
  if(!Number.isFinite(n)) return;
  const r = ref(db, `lockerIndex/${n}`);
  await runTransaction(r, (current)=>{
    if(current === cadastro) return null;
    return current;
  });
}

async function writeEmployee(emp, prevLocker){
  const cadastro = String(emp.cadastro).trim();
  if(!cadastro) throw new Error("Matrícula inválida.");

  const newLocker = emp.armario ?? null;

  // trava de armário
  if(prevLocker != null && prevLocker !== newLocker){
    await releaseLocker(prevLocker, cadastro);
  }
  if(newLocker != null){
    await claimLocker(newLocker, cadastro);
  }

  await set(ref(db, `employees/${cadastro}`), {
    cadastro,
    nome: emp.nome ?? "",
    admissao: emp.admissao ?? "",
    cargo: emp.cargo ?? "",
    armario: newLocker,
    chaveEntregueEm: emp.chaveEntregueEm ?? null,
    updatedAt: Date.now()
  });
}

async function deleteEmployee(cadastro){
  const snap = await get(child(ref(db), `employees/${cadastro}`));
  const emp = snap.val();
  if(emp && emp.armario != null){
    await releaseLocker(emp.armario, String(cadastro));
  }
  await remove(ref(db, `employees/${cadastro}`));
}

async function saveTotalLockers(total){
  await set(ref(db, "config/totalLockers"), total);
}

async function saveDefaultSplit(split){
  await set(ref(db, "config/defaultSplit"), split);
}

async function saveLockerPosition(num, pos){
  await set(ref(db, `lockerPositions/${num}`), pos);
}

// ===== Availability =====
function getUsedLockers(){
  const used = new Set();
  for(const e of state.employees){
    if(Number.isFinite(e.armario)) used.add(e.armario);
  }
  return used;
}

function getFreeLockers(){
  const used = getUsedLockers();
  const free = [];
  for(let i=1;i<=state.totalLockers;i++){
    if(!used.has(i)) free.push(i);
  }
  return free;
}

function updateStats(){
  const used = getUsedLockers().size;
  const free = state.totalLockers - used;
  el("totalLockers").textContent = String(state.totalLockers);
  el("usedLockers").textContent = String(used);
  el("freeLockers").textContent = String(free);

  // alerta compacto no topo: armários sem chave reserva (disponível = 0)
  const zeroPill = document.getElementById("zeroKeysPill");
  const zeroCountEl = document.getElementById("zeroKeysCount");
  if(zeroPill && zeroCountEl){
    const usedSet = getUsedLockers();
    let zeroCount = 0;
    for(const n of usedSet){
      if(keysAvailableForLocker(n) <= 0) zeroCount++;
    }
    zeroCountEl.textContent = String(zeroCount);
    zeroPill.classList.toggle("pulse", zeroCount > 0);
    zeroPill.style.display = "";
    zeroPill.title = zeroCount
      ? `🔔 ${zeroCount} armário(s) sem chave reserva (disponível = 0).`
      : "✅ Todos os armários têm ao menos 1 chave reserva disponível.";
  }
}

function switchTab(name){
  for(const t of tabs){
    t.classList.toggle("active", t.dataset.tab === name);
  }
  for(const [k,p] of Object.entries(panels)){
    p.classList.toggle("active", k === name);
  }
}

tabs.forEach(t => t.addEventListener("click", ()=> switchTab(t.dataset.tab)));

// ===== QR / Autoatendimento (por armário) =====
const claimModal = el("claimModal");
const claimForm = el("claimForm");
const claimLockerInput = el("claimLocker");
const claimCadastro = el("claimCadastro");
const claimNome = el("claimNome");
const claimAgree = el("claimAgree");
const claimConfirm = el("claimConfirm");
const claimCancel = el("claimCancel");

const qrFrom = el("qrFrom");
const qrTo = el("qrTo");
const btnGenQR = el("btnGenQR");
const btnPrintQR = el("btnPrintQR");
const qrGrid = el("qrGrid");
const qrHint = el("qrHint");
const qrBaseUrl = el("qrBaseUrl");


let pendingClaimLocker = null;

function buildLockerClaimUrl(n){
  // Preferência de URL pública (para QR funcionar fora do PC)
  const base = (state.publicBaseUrl || localStorage.getItem("publicBaseUrl") || "").trim();
  try{
    if(base){
      const u = new URL(base);
      u.searchParams.set("claim","1");
      u.searchParams.set("locker", String(n));
      return u.toString();
    }
    const u = new URL(window.location.href);
    u.searchParams.set("claim","1");
    u.searchParams.set("locker", String(n));
    u.hash = "";
    return u.toString();
  }catch{
    const originPath = `${location.origin}${location.pathname}`;
    return `${originPath}?claim=1&locker=${n}`;
  }
}

function openClaimModal(lockerNumber){
  const n = Number(lockerNumber);
  if(!Number.isFinite(n)) return;

  claimLockerInput.value = String(n);
  claimCadastro.value = "";
  claimNome.value = "";
  claimAgree.checked = false;
  claimConfirm.disabled = true;

  if(!claimModal.open) claimModal.showModal();
  setTimeout(()=> claimCadastro.focus(), 50);
}

function refreshClaimUI(){
  const cad = String(claimCadastro.value ?? "").trim();
  const emp = state.employees.find(e => String(e.cadastro) === cad);
  claimNome.value = emp ? emp.nome : "";
  claimConfirm.disabled = !(emp && claimAgree.checked);
}

claimCadastro?.addEventListener("input", refreshClaimUI);
claimAgree?.addEventListener("change", refreshClaimUI);
claimCancel?.addEventListener("click", ()=> claimModal.close());

async function selfAssignLocker(cadastro, lockerNumber){
  const cad = String(cadastro ?? "").trim();
  const locker = Number(lockerNumber);
  if(!cad) throw new Error("Informe a matrícula.");
  if(!Number.isFinite(locker) || locker < 1) throw new Error("Armário inválido.");

  const current = state.employees.find(e => String(e.cadastro) === cad);
  if(!current) throw new Error("Matrícula não encontrada.");

  const prevLocker = current.armario ?? null;

  // reaproveita as rotinas já existentes (índice + transações)
  await writeEmployee({
    cadastro: current.cadastro,
    nome: current.nome ?? "",
    admissao: current.admissao ?? "",
    cargo: current.cargo ?? "",
    armario: locker,
    chaveEntregueEm: current.chaveEntregueEm ?? null,
  }, prevLocker);

  // registra no mesmo histórico (não muda estrutura)
  await logHistoricoChave({
    tipo: "AUTO_ARMARIO",
    armario: locker,
    cadastro: current.cadastro,
    nome: current.nome,
    obs: "Autoatendimento via QR do armário",
  });

  showToast(`Armário ${locker} associado a ${current.nome}.`);
}

claimForm?.addEventListener("submit", async (e)=>{
  e.preventDefault();
  try{
    claimConfirm.disabled = true;
    await selfAssignLocker(claimCadastro.value, claimLockerInput.value);
    claimModal.close();

    // limpa a URL (tira claim/locker) para não reabrir ao recarregar
    const u = new URL(window.location.href);
    u.searchParams.delete("claim");
    u.searchParams.delete("locker");
    window.history.replaceState({}, "", u.toString());
  }catch(err){
    claimConfirm.disabled = false;
    showToast(err?.message ?? "Não foi possível confirmar o armário.");
  }
});

if(qrBaseUrl){
  // carrega último valor salvo
  qrBaseUrl.value = localStorage.getItem("publicBaseUrl") || state.publicBaseUrl || "";
  qrBaseUrl.addEventListener("change", ()=>{
    const v = (qrBaseUrl.value || "").trim();
    if(v) localStorage.setItem("publicBaseUrl", v);
    else localStorage.removeItem("publicBaseUrl");
  });
}

btnGenQR?.addEventListener("click", ()=>{
  const total = Number(state.totalLockers) || 300;
  // se informado, usa como base (e salva no localStorage)
  if(qrBaseUrl){
    const v = (qrBaseUrl.value || '').trim();
    if(v) localStorage.setItem('publicBaseUrl', v);
  }
  const a = Number(qrFrom.value || 1);
  const b = Number(qrTo.value || Math.min(total, 50));
  const from = Math.max(1, Math.min(a, b));
  const to = Math.min(total, Math.max(a, b));

  qrGrid.innerHTML = "";
  const count = to - from + 1;
  const baseUsed = (qrBaseUrl?.value || state.publicBaseUrl || localStorage.getItem('publicBaseUrl') || '').trim();
  qrHint.textContent = `Gerando ${count} QR(s) — Total configurado: ${total}` + (baseUsed ? ` • Base: ${baseUsed}` : ' • Base: (URL atual)');

  for(let n=from; n<=to; n++){
    const url = buildLockerClaimUrl(n);

    const item = document.createElement("div");
    item.className = "qr-item";

    const top = document.createElement("div");
    top.className = "qr-top";
    top.innerHTML = `<div class="qr-num">Armário ${n}</div><div class="muted small">QR</div>`;

    const box = document.createElement("div");
    box.id = `qr_${n}`;

    const link = document.createElement("div");
    link.className = "qr-url";
    link.textContent = url;

    item.appendChild(top);
    item.appendChild(box);
    item.appendChild(link);
    qrGrid.appendChild(item);

    // QRCode lib (global)
    if(window.QRCode){
      new window.QRCode(box, { text: url, width: 128, height: 128, correctLevel: window.QRCode.CorrectLevel.M });
    }else{
      box.textContent = "Biblioteca QR não carregou.";
    }
  }
});

btnPrintQR?.addEventListener("click", ()=>{
  if(!qrGrid.children.length){
    showToast("Gere os QRs antes de imprimir.");
    return;
  }
  setTimeout(()=>window.print(), 250);
});

// lê URL (?claim=1&locker=82)
(function initClaimFromUrl(){
  const params = new URLSearchParams(window.location.search);
  const claim = params.get("claim");
  const locker = params.get("locker");
  if(String(claim) === "1" && locker){
    pendingClaimLocker = Number(locker);
    // se já carregou, abre imediatamente
    if(state.employees?.length) openClaimModal(pendingClaimLocker);
  }
})();


function tdText(text){
  const td = document.createElement("td");
  td.textContent = text ?? "";
  return td;
}

// ===== Render =====
function renderEmployees(){
  const q = normalize(el("searchInput").value);
  const tbody = el("tbody");
  tbody.innerHTML = "";

  const rows = state.employees
    .slice()
    .sort((a,b)=> normalize(a.nome).localeCompare(normalize(b.nome)));

  for(const e of rows){
    const hay = normalize([e.cadastro, e.nome, e.cargo, e.admissao, e.armario].join(" "));
    if(q && !hay.includes(q)) continue;

    const tr = document.createElement("tr");
    tr.dataset.cadastro = e.cadastro;
    tr.id = "row-" + encodeURIComponent(e.cadastro);

    tr.appendChild(tdText(e.cadastro));
    tr.appendChild(tdText(e.nome));
    tr.appendChild(tdText(formatDateBR(e.admissao)));
    tr.appendChild(tdText(e.cargo));

    // Armário (click to edit)
    const tdArm = document.createElement("td");
    const btn = document.createElement("button");
    btn.className = "cell-btn";
    btn.textContent = e.armario ? String(e.armario) : "—";
    btn.title = "Clique para editar";
    btn.addEventListener("click", ()=> openModal(e));
    tdArm.appendChild(btn);
    tr.appendChild(tdArm);

    // Posição
    const tdPos = document.createElement("td");
    if(e.armario){
      tdPos.appendChild(tagPos(lockerPosition(e.armario)));
    } else {
      tdPos.textContent = "—";
    }
    tr.appendChild(tdPos);

    tr.appendChild(tdText(formatDateBR(e.chaveEntregueEm)));

    // actions
    const tdA = document.createElement("td");
    const del = document.createElement("button");
    del.className = "btn btn-danger btn-sm";
    del.textContent = "Excluir";
    del.addEventListener("click", async ()=>{
      if(!confirm(`Excluir ${e.nome} (${e.cadastro})?`)) return;
      try{
        await deleteEmployee(e.cadastro);
        showToast("Excluído.");
      }catch(err){
        showToast("Erro ao excluir: " + (err?.message || err));
      }
    });
    tdA.appendChild(del);
    tr.appendChild(tdA);

    tbody.appendChild(tr);
  }
}

function renderLockers(){
  const filter = parseLockerFilter(el("lockerFilter").value);
  const mode = el("lockerStatus") ? el("lockerStatus").value : "free"; // all | free | used

  const usedSet = getUsedLockers();
  const freeList = getFreeLockers();
  const usedList = Array.from(usedSet).sort((a,b)=>a-b);

  let numbers = [];
  if(mode === "all"){
    for(let i=1;i<=state.totalLockers;i++) numbers.push(i);
  }else if(mode === "used"){
    numbers = usedList;
  }else{
    numbers = freeList;
  }

  const grid = el("freeGrid");
  grid.innerHTML = "";

  let shown = 0;

  const matches = (n)=>{
    if(!filter || filter.type === "all") return true;
    if(filter.type === "range") return (n >= filter.a && n <= filter.b);
    if(filter.type === "one") return (n === filter.n);
    if(filter.type === "prefix") return (Math.floor(n/100) === filter.p);
    if(filter.type === "text") return String(n).includes(filter.s);
    return true;
  };

  const findEmpByLocker = (n)=>{
    return state.employees.find(e => Number.isFinite(e.armario) && e.armario === n) || null;
  };

  for(const n of numbers){
    if(!matches(n)) continue;

    const emp = (mode === "free") ? null : findEmpByLocker(n);
    const isUsed = (mode === "used") ? true : (mode === "all" ? usedSet.has(n) : false);
    const position = lockerPosition(n);

    const card = document.createElement("div");
    card.className = "free-item " + (isUsed ? "ocupado" : "livre");
    const availKeysNow = keysAvailableForLocker(n);
    if(availKeysNow <= 0) card.classList.add("sem-chave");
    card.title = isUsed
      ? `OCUPADO • ${position}
Chaves: ${Math.max(0,(totalKeysForLocker(n)-keysInUseForLocker(n)))}/${totalKeysForLocker(n)} disponíveis
${emp?.nome || "—"} (${emp?.cadastro || ""})`
      : `LIVRE • ${position}
Chaves: ${Math.max(0,(totalKeysForLocker(n)-keysInUseForLocker(n)))}/${totalKeysForLocker(n)} disponíveis
Clique para copiar o número`;

    const num = document.createElement("div");
    num.textContent = String(n);

    const badgeLine = document.createElement("div");
    badgeLine.className = "badge-line";

    const statusTag = document.createElement("span");
    statusTag.className = "tag " + (isUsed ? "warn" : "ok");
    statusTag.textContent = isUsed ? "OCUPADO" : "LIVRE";

    badgeLine.appendChild(statusTag);
    badgeLine.appendChild(tagPos(position));

    // chaves
    const totalKeys = totalKeysForLocker(n);
    const inUseKeys = keysInUseForLocker(n);
    const availKeys = totalKeys - inUseKeys;

    const keyTag = document.createElement("span");
    keyTag.className = "tag " + (availKeys <= 0 ? "danger" : "info");
    keyTag.textContent = `CHAVES ${Math.max(0,availKeys)}/${totalKeys}`;

    badgeLine.appendChild(keyTag);

    card.appendChild(num);
    card.appendChild(badgeLine);
    if(isUsed){
      const mini = document.createElement("span");
      mini.className = "mini";
      mini.textContent = emp ? `${emp.nome} • ${emp.cadastro}` : "—";
      card.appendChild(mini);
    }

    card.addEventListener("click", async ()=>{
      if(isUsed && emp){
        // ir direto pro colaborador + abrir edição
        switchTab("colabs");
        el("searchInput").value = emp.cadastro;
        renderEmployees();
        setTimeout(()=>{
          const row = el("row-" + encodeURIComponent(emp.cadastro));
          if(row){
            row.classList.add("flash");
            row.scrollIntoView({behavior:"smooth", block:"center"});
            setTimeout(()=> row.classList.remove("flash"), 1800);
          }
          openModal(emp);
        }, 80);
      }else{
        // livre: copiar número
        try{
          await navigator.clipboard.writeText(String(n));
          showToast(`Armário ${n} copiado. (Livre • ${position})`);
        }catch{
          showToast(`Armário ${n} (Livre • ${position})`);
        }
      }
    });

    grid.appendChild(card);
    shown++;
  }

  const freeCount = freeList.length;
  const usedCount = usedSet.size;
  const total = state.totalLockers;

  const labelMode = mode === "all" ? "no total" : (mode === "used" ? "ocupados" : "livres");
  el("freeSummary").textContent = `${shown} mostrando • ${freeCount} livres • ${usedCount} ocupados • ${total} no total (${labelMode})`;

  // guardar última lista visível (para botão copiar)
  state._lastLockerVisible = Array.from(grid.querySelectorAll(".free-item > div:first-child")).map(d=>d.textContent);
}


function renderRiskAndAlerts(){
  // Armários em risco (total = 1)
  const riskGrid = el("riskGrid");
  const riskSummary = el("riskSummary");
  const zeroGrid = el("zeroKeysGrid");
  const zeroSummary = el("zeroKeysSummary");
  if(!riskGrid || !zeroGrid) return;

  riskGrid.innerHTML = "";
  zeroGrid.innerHTML = "";

  const risk = [];
  const zero = [];

  for(let i=1;i<=state.totalLockers;i++){
    const totalK = totalKeysForLocker(i);
    const inUseK = keysInUseForLocker(i);
    const availK = totalK - inUseK;

    if(totalK === 1) risk.push(i);
    // sem reserva quando disponível = 0 (todas em uso) OU quando total = 0
    if((availK <= 0 && totalK > 0 && inUseK > 0) || totalK === 0) zero.push(i);
  }

  if(riskSummary) riskSummary.textContent = `${risk.length} armário(s) com 1 chave (risco).`;
  if(zeroSummary) zeroSummary.textContent = `${zero.length} armário(s) sem chave reserva (disponível = 0) ou total = 0.`;

  const makeCard = (n, kind)=>{
    const div = document.createElement("div");
    div.className = kind === "zero" ? "free-item ocupado" : "free-item";
    div.innerHTML = `<div>${n}</div><span class="mini">${lockerPosition(n)} • chaves ${Math.max(0, keysAvailableForLocker(n))}/${totalKeysForLocker(n)}</span>`;
    div.addEventListener("click", ()=> {
      // ao clicar: vai para aba Armários e filtra pelo número
      switchTab("lockers");
      if(el("lockerFilter")) el("lockerFilter").value = String(n);
      if(el("lockerStatus")) el("lockerStatus").value = "all";
      renderLockers();
      // destaca
      const card = Array.from(el("freeGrid").querySelectorAll(".free-item")).find(c=>c.querySelector("div")?.textContent===String(n));
      if(card){
        card.classList.add("flash");
        setTimeout(()=>card.classList.remove("flash"), 900);
      }
    });
    return div;
  };

  for(const n of risk) riskGrid.appendChild(makeCard(n, "risk"));
  for(const n of zero) zeroGrid.appendChild(makeCard(n, "zero"));

  // alerta automático (toast) quando houver 0 chaves disponíveis
  if(zero.length){
    const sig = zero.slice(0,8).join(",");
    if(state._zeroKeysSig !== sig){
      state._zeroKeysSig = sig;
      showToast(`🔔 Atenção: ${zero.length} armário(s) com 0 chaves disponíveis.`);
    }
  }else{
    state._zeroKeysSig = "";
  }
}

function buildLockerOptions(selected){
  const sel = el("fArmario");
  const used = getUsedLockers();
  const prev = selected != null ? Number(selected) : null;
  sel.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = "(sem armário)";
  sel.appendChild(opt0);

  for(let i=1;i<=state.totalLockers;i++){
    const inUse = used.has(i) && i !== prev;
    const opt = document.createElement("option");
    opt.value = String(i);
    const totalK = totalKeysForLocker(i);
    const inUseK = keysInUseForLocker(i);
    const availK = totalK - inUseK;
    opt.textContent = `${i} • ${lockerPosition(i)} • chaves ${Math.max(0,availK)}/${totalK}`;
    if(inUse){
      opt.disabled = true;
      opt.textContent += " (ocupado)";
    }
    if(prev === i) opt.selected = true;
    sel.appendChild(opt);
  }
}

function renderAll(){
  updateStats();
  renderEmployees();
  renderLockers();
  // mantém alertas/relatórios atualizados (se a aba existir)
  try{ renderRiskAndAlerts(); }catch{}
}

function renderHistory(){
  const body = el("histBody");
  if(!body) return;

  const q = normalize(el("histFilter")?.value || "");
  body.innerHTML = "";

  const rows = (state.historicoChaves || []).filter(h=>{
    if(!q) return true;
    const arm = h.armario == null ? "" : String(h.armario);
    return normalize(arm).includes(q)
      || normalize(h.cadastro).includes(q)
      || normalize(h.nome).includes(q)
      || normalize(h.tipo).includes(q)
      || normalize(h.obs).includes(q);
  });

  for(const h of rows){
    const tr = document.createElement("tr");
    const when = h.ts ? new Date(h.ts).toLocaleString("pt-BR") : "";
    tr.appendChild(tdText(when));
    tr.appendChild(tdText(h.tipo));
    tr.appendChild(tdText(h.armario == null ? "" : String(h.armario)));
    tr.appendChild(tdText(h.cadastro));
    tr.appendChild(tdText(h.nome));
    tr.appendChild(tdText(h.obs));
    body.appendChild(tr);
  }

  // Risco (1 chave)
  renderRiskAndAlerts();
}

// ===== Modal (Novo/Editar) =====
let editing = null; // employee original
function openModal(emp){
  editing = emp ? {...emp} : null;
  el("modalTitle").textContent = emp ? "Editar colaborador" : "Novo colaborador";

  el("fCadastro").value = emp?.cadastro ?? "";
  el("fCadastro").disabled = !!emp; // matrícula não muda

  el("fNome").value = emp?.nome ?? "";
  el("fAdmissao").value = emp?.admissao ?? "";
  el("fCargo").value = emp?.cargo ?? "";
  el("fChave").value = emp?.chaveEntregueEm ?? "";

  buildLockerOptions(emp?.armario ?? null);
  el("fArmario").value = emp?.armario ? String(emp.armario) : "";

  modal.showModal();
}

el("btnAdd").addEventListener("click", ()=> openModal(null));

el("btnSave").addEventListener("click", async (ev)=>{
  ev.preventDefault();

  const cadastro = String(el("fCadastro").value).trim();
  const nome = String(el("fNome").value).trim();
  if(!cadastro || !nome){
    showToast("Informe matrícula e nome.");
    return;
  }

  const admissao = el("fAdmissao").value || "";
  const cargo = String(el("fCargo").value).trim();
  const armarioRaw = el("fArmario").value;
  const armario = armarioRaw ? Number(armarioRaw) : null;
  const chave = el("fChave").value || null;

  const prevLocker = editing?.armario ?? null;

  // validação de chaves (se marcou entrega)
  if(armario != null && chave){
    const exclude = editing?.cadastro ?? null;
    const avail = keysAvailableForLocker(armario, exclude);
    if(avail <= 0){
      showToast(`Sem chave disponível para o armário ${armario}. Faça uma cópia antes ou aumente o total de chaves.`);
      return;
    }
  }

  const emp = { cadastro, nome, admissao, cargo, armario, chaveEntregueEm: chave };

  try{
    await writeEmployee(emp, prevLocker);

    // 📜 histórico de chaves (pegou/devolveu)
    const prevKey = editing?.chaveEntregueEm ?? null;
    const newKey = emp.chaveEntregueEm ?? null;

    if(emp.armario != null){
      if(!prevKey && newKey){
        await logHistoricoChave({ tipo: "PEGOU", armario: emp.armario, cadastro: emp.cadastro, nome: emp.nome, chaveEntregueEm: newKey });
      }else if(prevKey && !newKey){
        await logHistoricoChave({ tipo: "DEVOLVEU", armario: emp.armario, cadastro: emp.cadastro, nome: emp.nome, chaveEntregueEm: prevKey });
      }else if(prevKey && newKey && String(prevKey) !== String(newKey)){
        await logHistoricoChave({ tipo: "ATUALIZOU_DATA", armario: emp.armario, cadastro: emp.cadastro, nome: emp.nome, chaveEntregueEm: newKey });
      }
    }

    modal.close();
    showToast("Salvo em tempo real ✅");
  }catch(err){
    showToast(err?.message || String(err));
  }
});

el("searchInput").addEventListener("input", renderEmployees);
el("btnClearFilters").addEventListener("click", ()=>{
  el("searchInput").value = "";
  renderEmployees();
});
el("lockerFilter").addEventListener("input", renderLockers);
if(el("lockerStatus")) el("lockerStatus").addEventListener("change", renderLockers);

// ===== Locker position override (Cima/Baixo) =====
el("btnSavePos").addEventListener("click", async ()=>{
  const n = Number(el("posNumber").value);
  if(!Number.isFinite(n) || n < 1 || n > state.totalLockers){
    showToast("Número de armário inválido.");
    return;
  }
  const pos = el("posValue").value === "CIMA" ? "CIMA" : "BAIXO";
  try{
    await saveLockerPosition(n, pos);
    showToast(`Posição do armário ${n}: ${pos}`);
  }catch(err){
    showToast("Erro ao salvar posição: " + (err?.message || err));
  }
});

// ===== Chaves por armário (Total de cópias) =====
el("btnSaveKeys").addEventListener("click", async ()=>{
  const n = Number(el("keyNumber").value);
  const total = Number(el("keyTotal").value);
  if(!Number.isFinite(n) || n < 1 || n > state.totalLockers){
    showToast("Número de armário inválido.");
    return;
  }
  // permite 0 para representar "nenhuma chave física disponível" (ex.: chave perdida)
  if(!Number.isFinite(total) || total < 0 || total > 99){
    showToast("Total de chaves inválido (0-99).");
    return;
  }
  // não permite reduzir abaixo das chaves em uso
  const inUse = keysInUseForLocker(n);
  if(total < inUse){
    showToast(`Não dá: já existem ${inUse} chave(s) em uso neste armário.`);
    return;
  }
  try{
    await saveLockerKeys(n, Math.floor(total));
    showToast(`Armário ${n}: total de chaves = ${Math.floor(total)}`);
  }catch(err){
    showToast("Erro ao salvar chaves: " + (err?.message || err));
  }
});

// ===== Controle rápido de chaves (eventos) =====
function todayISO(){
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${yyyy}-${mm}-${dd}`;
}

function refreshKeyEvtEmpOptions(){
  const sel = el("keyEvtEmp");
  if(!sel) return;
  const current = sel.value;
  sel.innerHTML = "<option value=\"\">(selecione)</option>";
  const sorted = [...state.employees].sort((a,b)=> normalize(a.nome).localeCompare(normalize(b.nome)));
  for(const e of sorted){
    const opt = document.createElement("option");
    opt.value = String(e.cadastro);
    const arm = (e.armario != null && Number.isFinite(e.armario)) ? ` • Armário ${e.armario}` : "";
    opt.textContent = `${e.nome} (${e.cadastro})${arm}`;
    sel.appendChild(opt);
  }
  sel.value = current;
}

function clearKeyEvtForm(){
  if(el("keyEvtLocker")) el("keyEvtLocker").value = "";
  if(el("keyEvtType")) el("keyEvtType").value = "ENTREGOU";
  if(el("keyEvtEmp")) el("keyEvtEmp").value = "";
  if(el("keyEvtDate")) el("keyEvtDate").value = todayISO();
  if(el("keyEvtObs")) el("keyEvtObs").value = "";
}

async function handleKeyEvtSave(){
  const locker = Number(el("keyEvtLocker")?.value);
  const tipo = String(el("keyEvtType")?.value || "");
  const cadastro = String(el("keyEvtEmp")?.value || "");
  const date = String(el("keyEvtDate")?.value || "") || todayISO();
  const obs = String(el("keyEvtObs")?.value || "").trim();

  if(!Number.isFinite(locker) || locker < 1 || locker > state.totalLockers){
    showToast("Informe um número de armário válido.");
    return;
  }

  // ações que precisam de colaborador
  const needsEmp = (tipo === "ENTREGOU" || tipo === "DEVOLVEU" || tipo === "PERDEU");
  if(needsEmp && !cadastro){
    showToast("Selecione um colaborador.");
    return;
  }

  const emp = cadastro ? state.employees.find(e=> String(e.cadastro) === cadastro) : null;
  if(needsEmp && !emp){
    showToast("Colaborador não encontrado (recarregue a página)." );
    return;
  }

  // se for com colaborador, o armário precisa bater (evita bagunçar o índice)
  if(needsEmp && (emp.armario == null || Number(emp.armario) !== locker)){
    showToast("Esse colaborador não está com esse armário. Ajuste o armário do colaborador primeiro.");
    return;
  }

  const totalAntes = totalKeysForLocker(locker);
  let totalDepois = totalAntes;
  let deltaTotal = 0;

  try{
    if(tipo === "COPIA_FEITA"){
      totalDepois = Math.max(0, Math.floor(totalAntes) + 1);
      deltaTotal = totalDepois - totalAntes;
      await saveLockerKeys(locker, totalDepois);
      await logHistoricoChave({ tipo, armario: locker, cadastro: "", nome: "", chaveEntregueEm: null, obs, totalAntes, totalDepois, deltaTotal });
      showToast(`Armário ${locker}: cópia registrada (+1).`);
    }

    if(tipo === "ENTREGOU"){
      const hadKey = !!emp.chaveEntregueEm;
      if(!hadKey){
        const avail = keysAvailableForLocker(locker);
        if(avail <= 0){
          showToast("Sem chave reserva disponível para entregar. Registre uma cópia primeiro.");
          return;
        }
      }
      const updated = { ...emp, chaveEntregueEm: date };
      await writeEmployee(updated, updated.armario);
      await logHistoricoChave({
        tipo: hadKey ? "ENTREGOU (2ª via)" : "ENTREGOU",
        armario: locker,
        cadastro: updated.cadastro,
        nome: updated.nome,
        chaveEntregueEm: date,
        obs: obs || (hadKey ? "2ª via" : "")
      });
      showToast(`Chave entregue para ${updated.nome}.`);
    }

    if(tipo === "DEVOLVEU"){
      const updated = { ...emp, chaveEntregueEm: null };
      await writeEmployee(updated, updated.armario);
      await logHistoricoChave({ tipo: "DEVOLVEU", armario: locker, cadastro: updated.cadastro, nome: updated.nome, chaveEntregueEm: null, obs });
      showToast(`Chave devolvida por ${updated.nome}.`);
    }

    if(tipo === "PERDEU"){
      const hadKey = !!emp.chaveEntregueEm;
      const updated = { ...emp, chaveEntregueEm: null };
      // total de chaves diminui (chave física perdida)
      const inUseNow = keysInUseForLocker(locker);
      const inUseAfter = Math.max(0, inUseNow - (hadKey ? 1 : 0));
      totalDepois = Math.max(0, Math.floor(totalAntes) - 1);
      if(totalDepois < inUseAfter) totalDepois = inUseAfter;
      deltaTotal = totalDepois - totalAntes;

      await saveLockerKeys(locker, totalDepois);
      await writeEmployee(updated, updated.armario);
      await logHistoricoChave({
        tipo: "PERDEU",
        armario: locker,
        cadastro: updated.cadastro,
        nome: updated.nome,
        chaveEntregueEm: null,
        obs: obs || "chave perdida",
        totalAntes,
        totalDepois,
        deltaTotal
      });
      showToast(`Perda registrada: ${updated.nome}.`);
    }

    clearKeyEvtForm();
  }catch(err){
    showToast("Erro ao registrar evento: " + (err?.message || err));
  }
}

// liga os inputs do formulário (se existir)
if(el("keyEvtDate")) el("keyEvtDate").value = todayISO();
if(el("btnKeyEvtSave")) el("btnKeyEvtSave").addEventListener("click", (e)=>{ e.preventDefault(); handleKeyEvtSave(); });
if(el("btnKeyEvtClear")) el("btnKeyEvtClear").addEventListener("click", (e)=>{ e.preventDefault(); clearKeyEvtForm(); });

// filtro do histórico
if(el("histFilter")) el("histFilter").addEventListener("input", ()=> renderHistory());
if(el("btnClearHist")) el("btnClearHist").addEventListener("click", (e)=>{
  e.preventDefault();
  el("histFilter").value = "";
  renderHistory();
});

el("btnAddCopy").addEventListener("click", async ()=>{
  const n = Number(el("keyNumber").value);
  if(!Number.isFinite(n) || n < 1 || n > state.totalLockers){
    showToast("Informe o número do armário para adicionar cópia.");
    return;
  }
  const current = totalKeysForLocker(n);
  const next = Math.min(99, current + 1);
  try{
    await saveLockerKeys(n, next);
    el("keyTotal").value = next;
    showToast(`Cópia adicionada. Armário ${n}: total = ${next}`);
  }catch(err){
    showToast("Erro ao adicionar cópia: " + (err?.message || err));
  }
});


// ===== Importar / Exportar =====
function downloadFile(filename, content, mime){
  const blob = new Blob([content], { type: mime });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 5000);
}

el("btnExportJson").addEventListener("click", ()=>{
  const payload = {
    exportedAt: new Date().toISOString(),
    config: { totalLockers: state.totalLockers, defaultSplit: state.defaultSplit },
    lockerPositions: state.lockerPositions || {},
    lockerKeys: state.lockerKeys || {},
    employees: state.employees
  };
  downloadFile("armarios-backup.json", JSON.stringify(payload, null, 2), "application/json");
  showToast("Backup JSON gerado.");
});

function xmlEscape(s){
  return String(s ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}

el("btnExportXml").addEventListener("click", ()=>{
  const rows = state.employees.slice().sort((a,b)=>normalize(a.nome).localeCompare(normalize(b.nome)));
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Colaboradores>\n`;
  for(const e of rows){
    xml += `  <Colaborador>\n`;
    xml += `    <Cadastro>${xmlEscape(e.cadastro)}</Cadastro>\n`;
    xml += `    <Nome>${xmlEscape(e.nome)}</Nome>\n`;
    xml += `    <Admissao>${xmlEscape(e.admissao)}</Admissao>\n`;
    xml += `    <Cargo>${xmlEscape(e.cargo)}</Cargo>\n`;
    xml += `    <NumeroDoArmario>${e.armario ?? ""}</NumeroDoArmario>\n`;
    xml += `    <ChaveEntregueEm>${xmlEscape(e.chaveEntregueEm ?? "")}</ChaveEntregueEm>\n`;
    xml += `  </Colaborador>\n`;
  }
  xml += `</Colaboradores>\n`;
  downloadFile("colaboradores.xml", xml, "application/xml");
  showToast("XML exportado.");
});

el("btnImportJson").addEventListener("click", async ()=>{
  const file = el("jsonFile").files?.[0];
  if(!file){ showToast("Selecione um JSON."); return; }
  try{
    const txt = await file.text();
    const data = JSON.parse(txt);
    const updates = {};

    if(data?.config?.totalLockers){
      updates["config/totalLockers"] = Math.floor(Number(data.config.totalLockers));
    }
    if(data?.config?.defaultSplit != null){
      updates["config/defaultSplit"] = Math.floor(Number(data.config.defaultSplit));
    }
    if(data?.lockerPositions && typeof data.lockerPositions === "object"){
      for(const [k,v] of Object.entries(data.lockerPositions)){
        updates[`lockerPositions/${k}`] = (v === "CIMA") ? "CIMA" : "BAIXO";
      }
    }

    if(data?.lockerKeys && typeof data.lockerKeys === "object"){
      for(const [k,v] of Object.entries(data.lockerKeys)){
        const n = Math.floor(Number(k));
        const total = Math.floor(Number(v));
        if(!Number.isFinite(n) || n < 1) continue;
        if(!Number.isFinite(total) || total < 1) continue;
        updates[`lockerKeys/${n}`] = total;
      }
    }

    if(Array.isArray(data?.employees)){
      for(const e of data.employees){
        const cadastro = String(e.cadastro ?? "").trim();
        if(!cadastro) continue;
        updates[`employees/${cadastro}`] = {
          cadastro,
          nome: e.nome ?? "",
          admissao: e.admissao ?? "",
          cargo: e.cargo ?? "",
          armario: (e.armario==null||e.armario==="") ? null : Number(e.armario),
          chaveEntregueEm: e.chaveEntregueEm ?? null,
          updatedAt: Date.now()
        };
      }
    }

    await update(ref(db), updates);
    showToast("JSON importado para o Firebase ✅");
  }catch(err){
    showToast("Erro ao importar JSON: " + (err?.message || err));
  }
});

function guessTextContent(node, names){
  for(const nm of names){
    const el = node.getElementsByTagName(nm)[0];
    if(el && el.textContent != null) return el.textContent.trim();
  }
  return "";
}

el("btnImportXml").addEventListener("click", async ()=>{
  const file = el("xmlFile").files?.[0];
  if(!file){ showToast("Selecione um XML."); return; }
  try{
    const txt = await file.text();
    const doc = new DOMParser().parseFromString(txt, "application/xml");
    const items = Array.from(doc.getElementsByTagName("Colaborador"));
    if(items.length === 0) throw new Error("Não encontrei <Colaborador> no XML.");

    const updates = {};
    for(const node of items){
      const cadastro = guessTextContent(node, ["Cadastro","Matricula","Matrícula","cadastro"]).trim();
      if(!cadastro) continue;
      const nome = guessTextContent(node, ["Nome","nome"]);
      const admissao = guessTextContent(node, ["Admissao","Admissão","admissao"]);
      const cargo = guessTextContent(node, ["Cargo","cargo"]);
      const arm = guessTextContent(node, ["NumeroDoArmario","Numero do armario","NumeroArmario","Armario","armario"]);
      const chave = guessTextContent(node, ["ChaveEntregueEm","EntregaChave","chaveEntregueEm"]);
      const armario = arm ? Number(arm) : null;

      updates[`employees/${cadastro}`] = {
        cadastro, nome, admissao, cargo,
        armario: Number.isFinite(armario) ? armario : null,
        chaveEntregueEm: chave || null,
        updatedAt: Date.now()
      };
    }

    await update(ref(db), updates);
    showToast("XML importado (mesclado) ✅");
  }catch(err){
    showToast("Erro ao importar XML: " + (err?.message || err));
  }
});

// ===== Config =====
el("btnSaveTotal").addEventListener("click", async ()=>{
  const total = Math.floor(Number(el("totalInput").value));
  if(!Number.isFinite(total) || total < 1){
    showToast("Total inválido.");
    return;
  }
  try{
    await saveTotalLockers(total);
    showToast("Total salvo.");
  }catch(err){
    showToast("Erro ao salvar total: " + (err?.message || err));
  }
});

el("btnSaveSplit").addEventListener("click", async ()=>{
  const split = Math.floor(Number(el("splitInput").value));
  if(!Number.isFinite(split) || split < 0){
    showToast("Valor inválido.");
    return;
  }
  const padrao = (el("padraoAteInput")?.value === "CIMA") ? "CIMA" : "BAIXO";
  try{
    // mantém compatibilidade: defaultSplit + grava também (divisao/padraoAte)
    await Promise.all([
      saveDefaultSplit(split),
      set(ref(db, "config/divisao"), split),
      saveDefaultPadraoAte(padrao)
    ]);
    showToast("Regra padrão salva.");
  }catch(err){
    showToast("Erro ao salvar regra: " + (err?.message || err));
  }
});

// ===== Copy free list =====
el("btnCopyFree").addEventListener("click", async ()=>{
  // copia os números atualmente visíveis na aba Armários
  const grid = el("freeGrid");
  const nums = Array.from(grid.querySelectorAll(".free-item > div:first-child")).map(d=>d.textContent).filter(Boolean);
  const txt = nums.join(", ");
  if(!txt){
    showToast("Nada para copiar.");
    return;
  }
  try{
    await navigator.clipboard.writeText(txt);
    showToast("Lista copiada.");
  }catch{
    downloadFile("armarios-visiveis.txt", txt);
    showToast("Baixei um .txt com a lista.");
  }
});

// ===== Boot =====
startRealtime();
renderAll();

// abrir diretamente /historicoChaves
try{
  if(String(location.pathname||"").toLowerCase().includes("historicochaves")){
    switchTab("history");
  }
}catch{}
