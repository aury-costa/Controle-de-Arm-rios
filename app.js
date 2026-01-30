/* Controle de Armários - offline
   Dados iniciais gerados a partir do seu arquivo colaborador.xlsx
*/
const INITIAL_EMPLOYEES = [{"cadastro": "26374", "nome": "ABELARDO SIMPLICIO DE SOUZA JUNIOR", "admissao": "2026-01-29", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26382", "nome": "ADRIANO PINHEIRO TEIXEIRA", "admissao": "2026-01-29", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5519", "nome": "ALDELICE DOS SANTOS OLIVEIRA", "admissao": "2010-11-09", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6602", "nome": "ALDILENE ALVES DE SOUSA", "admissao": "2014-12-24", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20668", "nome": "ALEX HENRIQUE SANTANA DE AMORIN", "admissao": "2023-02-24", "cargo": "AUXILIAR DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25382", "nome": "ALEX RIKELMY PINHEIRO SANTOS", "admissao": "2025-06-24", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25957", "nome": "ALEXANDRA RAQUEL CARDOSO FERREIRA", "admissao": "2025-10-28", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12909", "nome": "ALEXSIANE PAULA CARSTENS DOS SANTOS", "admissao": "2018-06-06", "cargo": "ANALISTA ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26215", "nome": "ALICE DA SILVA MENDES", "admissao": "2025-12-23", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25522", "nome": "ALICY VITORIA PEREIRA SILVA", "admissao": "2025-07-29", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6710", "nome": "ALINE SILVA", "admissao": "2015-05-04", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25448", "nome": "ALMIR LISBOA ALVES", "admissao": "2025-07-10", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "18482", "nome": "AMANDA CRISTINA SILVA BRITO", "admissao": "2022-02-25", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24395", "nome": "ANA CLARA DO NASCIMENTO COSTA", "admissao": "2025-01-17", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "15020", "nome": "ANA DO CARMO ARAUJO", "admissao": "2019-12-02", "cargo": "CONFERENTE DE MERCADORIAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26353", "nome": "ANA JULIA MALLMANN DOS SANTOS", "admissao": "2026-01-27", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24339", "nome": "ANA JULIA SIQUEIRA DE SOUZA", "admissao": "2025-01-09", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6255", "nome": "ANA PAULA BONFIM FAGUNDES", "admissao": "2013-10-18", "cargo": "ENCARREGADO DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25396", "nome": "ANA PAULA SILVA DO NASCIMENTO", "admissao": "2025-06-26", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22613", "nome": "ANDERSON REIS DE SOUZA", "admissao": "2024-02-28", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11568", "nome": "ANDRE CRISTIANO FERST DE SOUZA", "admissao": "2017-01-12", "cargo": "OPERADOR DE COMPRAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26204", "nome": "ANDRIU DEL JESUS SUAREZ GONZALEZ", "admissao": "2025-12-22", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23805", "nome": "ANGELICA DE SOUZA AFFONSO GOMES", "admissao": "2024-09-19", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20041", "nome": "ANGELINA SILVA DOS ANJOS", "admissao": "2022-12-01", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26196", "nome": "ANTONIA CRISTINA DOS SANTOS DE SOUSA", "admissao": "2025-12-22", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6097", "nome": "ANTONIA FERNANDES", "admissao": "2013-04-25", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26141", "nome": "ANTONIO JOSÉ SILVA VIANA", "admissao": "2025-12-04", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13211", "nome": "ANTONIO RAMOS BRANDAO", "admissao": "2018-09-26", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23364", "nome": "ANTONIO WILSON CORREA", "admissao": "2024-07-05", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13747", "nome": "AUREA DE SOUZA VIANA", "admissao": "2018-12-20", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26003", "nome": "AXAEL DAVID PINO MORENO", "admissao": "2025-11-04", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25267", "nome": "BIANA VIEIRA MACHADO", "admissao": "2025-05-27", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26000", "nome": "BRUNA GOMES DOS SANTOS", "admissao": "2025-11-04", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26302", "nome": "BRUNO DA COSTA GOMES", "admissao": "2026-01-20", "cargo": "OPERADOR DE PRENSA DE MATERIAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25314", "nome": "BRUNO WILLIAN MARTINS AMORIM", "admissao": "2025-06-10", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25725", "nome": "CAMILA APARECIDA MORAES", "admissao": "2025-09-02", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26286", "nome": "CARLA ALEXANDRA SILVA LIMA", "admissao": "2026-01-19", "cargo": "AUXILIAR ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26137", "nome": "CARLA TRINDADE DA SILVA", "admissao": "2025-12-04", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20049", "nome": "CARLOS TAVARES DOS SANTOS", "admissao": "2022-12-01", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5986", "nome": "CARMEM JANE SILVA", "admissao": "2013-01-23", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23583", "nome": "CASSIO FERREIRA DA SILVA", "admissao": "2024-08-13", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25365", "nome": "CATIA SUELY BITENCOURT CABRAL", "admissao": "2025-06-20", "cargo": "COPEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25800", "nome": "CLAUDIO DE JESUS GOMES DOS SANTOS", "admissao": "2025-09-16", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22860", "nome": "CLEBERSON DA COSTA RIBEIRO", "admissao": "2024-04-02", "cargo": "LIDER DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22745", "nome": "CLECI FURTADO SANTANA", "admissao": "2024-03-14", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25563", "nome": "CLEISON OLIVEIRA DA SILVA", "admissao": "2025-08-07", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4943", "nome": "CLEUSA BUSANELLO LERMEN", "admissao": "2007-01-02", "cargo": "LIDER DE PREVENÇAO DE PERDAS I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25609", "nome": "DAFNE VITORIA DE MORAIS LIMA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26243", "nome": "DAIANE TINTINO PADUA", "admissao": "2026-01-13", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24990", "nome": "DALILA PINHEIRO CUNHA", "admissao": "2025-04-15", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24684", "nome": "DANIELA FEITOSA DO NASCIMENTO ARAUJO", "admissao": "2025-02-27", "cargo": "AUXILIAR DE LIMPEZA DE SETOR", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22356", "nome": "DARLISSON PEREIRA", "admissao": "2024-01-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23276", "nome": "DARWIN SACARIA VELIZ BARRETO", "admissao": "2024-06-13", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25590", "nome": "DAVID LUCAS VIEIRA DA SILVA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25617", "nome": "DAVY DA SILVA NASCIMENTO", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22744", "nome": "DERINALDO BARBOSA DA SILVA", "admissao": "2024-03-14", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25523", "nome": "DIANA CEREJA DOS SANTOS SILVA", "admissao": "2025-07-29", "cargo": "COPEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16543", "nome": "DIELLEM SANTOS SILVA E SILVA", "admissao": "2021-01-27", "cargo": "AUXILIAR DE GESTAO DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23947", "nome": "DILENE TAVARES DOS SANTOS", "admissao": "2024-10-22", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25496", "nome": "DIMAS PAULO DE OLIVEIRA", "admissao": "2025-07-22", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25384", "nome": "DIOGO CABRAL DA SILVA", "admissao": "2025-06-24", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24809", "nome": "EDIVANDO SOUSA DA CUNHA", "admissao": "2025-03-18", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22205", "nome": "EDNA GOMES DA SILVA", "admissao": "2023-12-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25942", "nome": "EDUARDO MATEUS DA SILVA", "admissao": "2025-10-23", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25976", "nome": "EDVAN ALVES BRITO", "admissao": "2025-10-30", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23236", "nome": "ELAINE CRISTINA DOS SANTOS BARBOSA", "admissao": "2024-06-06", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22125", "nome": "ELEN MICHELE DA LUZ MENDES", "admissao": "2023-12-01", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24076", "nome": "ELHIDILANNY ROCHA DOS SANTOS", "admissao": "2024-11-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25020", "nome": "ELIANE DA CONCEIÇÃO SOUSA", "admissao": "2025-04-22", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21803", "nome": "ELIAS DE JESUS RODRIGUES SILVA", "admissao": "2023-10-04", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13846", "nome": "ELIVANIA FRASAO COSTA", "admissao": "2019-02-11", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11671", "nome": "ELIZABETH DE MIRANDA", "admissao": "2017-02-15", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23293", "nome": "ELOISA FRANÇA NONATO", "admissao": "2024-06-18", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "17742", "nome": "EMERITA APARECIDA DA SILVA", "admissao": "2021-10-28", "cargo": "ENCARREGADO DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26054", "nome": "EMERSON DA SILVA", "admissao": "2025-11-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6465", "nome": "ERCINHA GONCALVES DA SILVA", "admissao": "2014-06-04", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26330", "nome": "ERIK LIMA E SILVA", "admissao": "2026-01-23", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26361", "nome": "EVA SALES FERREIRA", "admissao": "2026-01-27", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11453", "nome": "EVENA VILSAINT", "admissao": "2016-11-22", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20581", "nome": "EVILA CELINA VENTURA SILVA DOS SANTOS", "admissao": "2023-02-14", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6208", "nome": "FABIANA DE ARAUJO SANTOS", "admissao": "2013-08-26", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22099", "nome": "FABINEI COUTINHO LOPES", "admissao": "2023-11-28", "cargo": "CONFERENTE DE MERCADORIAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24758", "nome": "FABRICIA MAYARA DOS SANTOS COSTA", "admissao": "2025-03-12", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25849", "nome": "FABRICIO MADEIRA SILVA", "admissao": "2025-09-26", "cargo": "MOTORISTA II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11840", "nome": "FATIMA DA SILVA MORAES", "admissao": "2017-04-12", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26200", "nome": "FLAVIA ALESSANDRA DA SILVA CONCEIÇÃO", "admissao": "2025-12-22", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21189", "nome": "FLAVIA DE OLIVEIRA ARCE", "admissao": "2023-06-01", "cargo": "NUTRICIONISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16944", "nome": "FRANCIANE BEZERRA MACEDO", "admissao": "2021-04-15", "cargo": "ATENDENTE DE SAC", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22100", "nome": "FRANCIANE MELO DA SILVA GARCIA", "admissao": "2023-11-28", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "15339", "nome": "FRANCINEIDE MATOS GOMES", "admissao": "2020-02-07", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16256", "nome": "FRANCISCA MARIANE CASTRO DE OLIVEIRA", "admissao": "2020-11-25", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24955", "nome": "FRANCISCO ELIAS DAMASCENO DE CARVALHO", "admissao": "2025-04-10", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25831", "nome": "FRANCISCO GOMES", "admissao": "2025-09-23", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26207", "nome": "FRANCISCO MATHEUS ALVES DE OLIVEIRA", "admissao": "2025-12-22", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26267", "nome": "FRANMARYS CAROLINA FAJARDO LOPEZ", "admissao": "2026-01-20", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24369", "nome": "GABRIEL ANILDO COVER", "admissao": "2025-01-14", "cargo": "ESTOQUISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20784", "nome": "GABRIEL VIEIRA LISBOA", "admissao": "2023-03-17", "cargo": "AUXILIAR DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11304", "nome": "GEILTON ARAUJO DAS CHAGAS", "admissao": "2016-10-11", "cargo": "ENCARREGADO DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24125", "nome": "GEISA DE SOUZA FRANCISCO", "admissao": "2024-11-28", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4546", "nome": "GENESE EVANILDO MURTA", "admissao": "2002-09-15", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "14170", "nome": "GEORGE CHARLES SOUZA", "admissao": "2019-05-16", "cargo": "MOTORISTA II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26213", "nome": "GICIANE MARIA BARTNICKI KAUFKA", "admissao": "2025-12-22", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21816", "nome": "GILBERTO SIQUEIRA LOPES", "admissao": "2023-10-05", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26191", "nome": "GILLIANE FERREIRA DA SILVA", "admissao": "2025-12-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20672", "nome": "GIOVANNA CRISTINA LIMA COSTA", "admissao": "2023-02-24", "cargo": "ATENDENTE DE SAC", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26117", "nome": "GISELE CAROLINE DE SOUZA FERREIRA", "admissao": "2025-11-27", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25397", "nome": "GIVANILDO BOTELHO DA SILVA", "admissao": "2025-06-26", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19352", "nome": "GRAZIELA VENDRUSCOLO LIMA", "admissao": "2022-08-08", "cargo": "GERENTE GERAL DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "14391", "nome": "GUSTAVO ARAUJO DAS CHAGAS", "admissao": "2019-06-21", "cargo": "ASSISTENTE FINANCEIRO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26319", "nome": "GUSTAVO PEREIRA PINTO", "admissao": "2026-01-22", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26247", "nome": "HERCULES MONTEIRO DA SILVA", "admissao": "2026-01-13", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26359", "nome": "HUBERT DANIEL SILVA DE SOUZA", "admissao": "2026-01-27", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "8391", "nome": "IGOR JANIO GARCIA", "admissao": "2010-10-26", "cargo": "MOTORISTA II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23852", "nome": "IRANILSON BARROSO DE SOUSA", "admissao": "2024-10-01", "cargo": "FISCAL DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25619", "nome": "ISADORA CAVALLI GEREMIA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25624", "nome": "ISLAN MARLISON FELIPE CHAGAS", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26351", "nome": "ISMAEL JESUS PINO MORENO", "admissao": "2026-01-27", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25887", "nome": "ITALO KAUAN SILVA DA SILVA", "admissao": "2025-10-07", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23804", "nome": "IVANIA MARIA FREITAS VIANA", "admissao": "2024-09-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25331", "nome": "IVY DO NASCIMENTO CARDOSO", "admissao": "2025-06-12", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24907", "nome": "JACKSON KAUE SOUSA DA SILVA", "admissao": "2025-04-03", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26193", "nome": "JADSON FABRICIO DA SILVA", "admissao": "2025-12-18", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25999", "nome": "JAKELINE MATOS CARDOSO", "admissao": "2025-11-04", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20392", "nome": "JARDEL DA SILVA MARTINS", "admissao": "2023-01-19", "cargo": "PADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24767", "nome": "JARDILENE DA SILVA DA CRUZ", "admissao": "2025-03-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25602", "nome": "JARSUEL JOSE CANACHE RODRIGUEZ", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20190", "nome": "JEANE BARBOSA DE LIMA", "admissao": "2022-12-19", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25760", "nome": "JEFFERSON DE LIMA ALEIXO", "admissao": "2025-09-09", "cargo": "AUXILIAR DE LIMPEZA DE SETOR", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13061", "nome": "JESSICA LIMA MESQUITA", "admissao": "2018-08-06", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23354", "nome": "JHENIFFER ELOISA SILVA ZIENTARSKI", "admissao": "2024-07-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25816", "nome": "JOAO CARLOS FONSECA DA SILVA", "admissao": "2025-09-18", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25596", "nome": "JOAO LUCAS PENHA CARDOSO", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22051", "nome": "JOAO MATEUS GOMES DOS SANTOS", "admissao": "2023-11-22", "cargo": "LIDER DE DEPOSITO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25012", "nome": "JOAO MAYLLON DA LUZ MENDES", "admissao": "2025-04-22", "cargo": "PADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24110", "nome": "JOAO RAFAEL ZARK FREIRE BORGES", "admissao": "2024-11-26", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22908", "nome": "JOELMA VIEIRA PINTO", "admissao": "2024-04-09", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16945", "nome": "JOSE ALEXANDRE CONCEIÇÃO BELMIRO", "admissao": "2021-04-15", "cargo": "OPERADOR DE EMPILHADEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "14554", "nome": "JOSE HENRIQUE DE OLIVEIRA SOARES", "admissao": "2019-08-01", "cargo": "LIDER DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4825", "nome": "JOSE HUGO DA SILVA ARRUDA", "admissao": "2005-09-08", "cargo": "AUXILIAR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25780", "nome": "JOSE IOLAUS MELO SANTOS", "admissao": "2025-09-12", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5589", "nome": "JOSE SEVERINO DE ARAUJO", "admissao": "2011-04-09", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25349", "nome": "JUCIELE SA SAMPAIO", "admissao": "2025-06-17", "cargo": "ENCARREGADO DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4643", "nome": "JULIANO BATISTA RIBEIRO", "admissao": "2004-02-01", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5855", "nome": "JULIO NEDEL", "admissao": "2012-06-21", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21806", "nome": "JUVENAL JUNIOR BORGES PAIXAO", "admissao": "2023-10-04", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20580", "nome": "KARLA EMANUELE DA SILVA RIOS", "admissao": "2023-02-14", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24298", "nome": "KARLIANE SANTOS DE BARROS", "admissao": "2025-01-02", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20463", "nome": "KARMEM LOIANE SILVA DE ABREU", "admissao": "2023-01-27", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25932", "nome": "KASSIO SOARES DE SOUSA CARVALHO", "admissao": "2025-03-28", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24434", "nome": "KAUA LEAL DA SILVA", "admissao": "2025-01-22", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23096", "nome": "KEITH DA ROSA SILVA DIAS", "admissao": "2024-05-07", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25603", "nome": "KELFREN JOSE MATA TINEO", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26080", "nome": "LADYANE PIRES DIAS", "admissao": "2025-11-18", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25618", "nome": "LAURA DE MOURA GUERRA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25744", "nome": "LAURO DANYEL DE BRITO", "admissao": "2025-09-05", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26192", "nome": "LAYLA GONÇALVES CORREA", "admissao": "2025-12-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25601", "nome": "LAYON KEVIM DA SILVA PEREIRA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25961", "nome": "LAYSE JANAINA CORDOVIL DE ANDRADE", "admissao": "2025-10-28", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5677", "nome": "LEANDRO ALVES LIMA", "admissao": "2011-02-16", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22237", "nome": "LEANDRO ANUNCIACAO RODRIGUEZ", "admissao": "2023-12-26", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25324", "nome": "LEDY RAYANY BARROSO PESSOA", "admissao": "2025-06-10", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19408", "nome": "LEOMAR DO NASCIMENTO DE SOUSA", "admissao": "2022-08-17", "cargo": "OPERADOR DE EMPILHADEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6235", "nome": "LIGIA DE SOUZA GONCALVES", "admissao": "2013-10-01", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13851", "nome": "LISIANY COSTA PACHECO", "admissao": "2019-02-11", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20587", "nome": "LORENA COSTA SERRA", "admissao": "2023-02-14", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19126", "nome": "LORRANE BEATRIZ SILVA CASTRO", "admissao": "2022-07-01", "cargo": "AUXILIAR ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23853", "nome": "LUAN DOS SANTOS RIBEIRO", "admissao": "2024-10-02", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26296", "nome": "LUCAS CARDOSO DE SOUSA", "admissao": "2026-01-20", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25062", "nome": "LUCAS COSTA DE OLIVEIRA", "admissao": "2025-04-29", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22690", "nome": "LUCAS DANIEL DA SILVA BARATA", "admissao": "2024-03-07", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26298", "nome": "LUCIANE DE OLIVEIRA MENDES", "admissao": "2026-01-20", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26070", "nome": "LUCIENE DA SILVA RODRIGUES", "admissao": "2025-11-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26216", "nome": "LUCIENE JERONIMO DA SILVA", "admissao": "2025-12-23", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12910", "nome": "LUCINEIA DOS SANTOS ALMEIDA RAMOS", "admissao": "2018-06-06", "cargo": "LIDER DE FRENTE DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26039", "nome": "LUIS CARLOS DA SILVA PESSOA", "admissao": "2025-11-11", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26244", "nome": "LUISANA ANDREINA CALLES URBANO", "admissao": "2026-01-13", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25196", "nome": "LUIZ FERNANDO DA SILVA LIMA", "admissao": "2025-05-15", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "17467", "nome": "LUIZ FERNANDO SOUZA BRITO", "admissao": "2021-08-24", "cargo": "PADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5084", "nome": "LUIZA DE FATIMA DOS SANTOS", "admissao": "2008-05-14", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24773", "nome": "MAGNA SANTOS DA LUZ", "admissao": "2025-03-13", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10223", "nome": "MANOEL DE JESUS GOMES DA COSTA", "admissao": "2015-09-09", "cargo": "ZELADOR(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26147", "nome": "MANUELA LIMA DE CARVALHO", "admissao": "2025-12-05", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6578", "nome": "MARCELO EMANOEL PEREIRA", "admissao": "2014-11-21", "cargo": "PADEIRO(A) II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23685", "nome": "MARCELO ESPINDOLA FERREIRA", "admissao": "2024-08-27", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25410", "nome": "MARCELO FREITAS DOS REIS", "admissao": "2025-07-01", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22101", "nome": "MARCELO SAMINES AGUIAR", "admissao": "2023-11-28", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23309", "nome": "MARCIO ANTONIO RAIOL DE SOUSA", "admissao": "2024-06-20", "cargo": "LIDER DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25673", "nome": "MARCIO HENRIQUE DE SOUZA RODRIGUES", "admissao": "2025-08-21", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24952", "nome": "MARCO ANTONIO SOUSA LACERDA", "admissao": "2025-04-10", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23323", "nome": "MARCOS DOUGLAS DA SILVA DOS SANTOS", "admissao": "2024-06-25", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26145", "nome": "MARCOS PEDRO LIMA GONÇALVES", "admissao": "2025-12-05", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22234", "nome": "MARCOS VINICIUS DA SILVA NERES", "admissao": "2023-12-26", "cargo": "AÇOUGUEIRO II", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23987", "nome": "MARCOS VINICIUS LIMA CANONICO", "admissao": "2024-10-29", "cargo": "ESTOQUISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21804", "nome": "MARIA BEATRIZ DA SILVA", "admissao": "2023-10-04", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24178", "nome": "MARIA CATARINA DA SILVA", "admissao": "2024-12-05", "cargo": "AUXILIAR DE LIMPEZA DE SETOR", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10930", "nome": "MARIA DO AMPARO OLIVEIRA SILVA PEREIRA", "admissao": "2016-05-19", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24060", "nome": "MARIA DO SOCORRO DA SILVA", "admissao": "2024-11-14", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23109", "nome": "MARIA DOS SANTOS", "admissao": "2024-05-09", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10669", "nome": "MARIA FRANCISCA DA CONCEICAO SILVA", "admissao": "2016-02-02", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26273", "nome": "MARIA HELOISA SARAIVA DOS SANTOS", "admissao": "2026-01-19", "cargo": "AUXILIAR DE GESTAO DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26146", "nome": "MARIA NATALY LIMA SOUZA", "admissao": "2025-12-05", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23820", "nome": "MARIA RAIANE DO NASCIMENTO LOPES", "admissao": "2024-09-24", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19500", "nome": "MARIA SAMARA DA SILVA", "admissao": "2022-09-06", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26326", "nome": "MARIANE BORGES PEREIRA", "admissao": "2026-01-22", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23823", "nome": "MARILUCE DOS SANTOS NASCIMENTO", "admissao": "2024-09-24", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22827", "nome": "MARIMAR CARVALHO COSTA", "admissao": "2024-03-26", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6611", "nome": "MARINALVA ALVES CARDOSO", "admissao": "2015-01-09", "cargo": "COPEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19120", "nome": "MARIO CARNEIRO DURVAL JUNIOR", "admissao": "2022-06-28", "cargo": "SALGADEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25597", "nome": "MATEUS AIRES SOUZA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23511", "nome": "MATEUS ARAUJO DA MATA", "admissao": "2024-08-06", "cargo": "VENDEDOR I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26350", "nome": "MATEUS CARVALHO MENDES", "admissao": "2026-01-27", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25592", "nome": "MATHEUS ALVES DIAS", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24884", "nome": "MATHEUS HENRIQUE RODRIGUES BARRETO", "admissao": "2025-04-01", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10162", "nome": "MAURO CEZAR CAMPOS COELHO", "admissao": "2015-08-11", "cargo": "GERENTE DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26037", "nome": "MAX JORIE SILVEIRA BRANDÃO", "admissao": "2025-11-11", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26336", "nome": "MAYARA SILVA CADETE", "admissao": "2026-01-23", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19423", "nome": "MAYKE JHONES COSTA DA SILVA", "admissao": "2022-08-19", "cargo": "FISCAL DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11701", "nome": "MAYQUELY DE SOUZA ALVES", "admissao": "2017-02-22", "cargo": "LIDER DE ATENDIMENTO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25863", "nome": "MAYZE MARTINS SILVA", "admissao": "2025-09-30", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22436", "nome": "MELRI JANAINA RODRIGUES DO NASCIMENTO", "admissao": "2024-01-25", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21765", "nome": "MELRIANA DA CONCEICAO SANTOS", "admissao": "2023-09-26", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26329", "nome": "MICKAEL DA SILVA SANTOS", "admissao": "2026-01-23", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24529", "nome": "MURILO DE PAULA OLIVEIRA", "admissao": "2025-02-06", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25620", "nome": "MYKAELLE DE MORAES GUIMARAES", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24205", "nome": "NAIANNY CHRISTINY SILVA DE ALMEIDA", "admissao": "2024-12-10", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "18968", "nome": "NATAIANA AGUIAR DA SILVA", "admissao": "2022-05-19", "cargo": "ASSISTENTE ADM DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25125", "nome": "NAYELLEN SOUZA SILVA", "admissao": "2025-05-08", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26335", "nome": "NAYRA FERNANDA ARAUJO LICURGO", "admissao": "2026-01-23", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4660", "nome": "NEI GONCALVES DA COSTA", "admissao": "2004-03-01", "cargo": "ENCARREGADO DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23688", "nome": "NESICLEYDE SOUZA LIMA", "admissao": "2024-08-27", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6521", "nome": "NIEDJA DE SOUZA TAVARES", "admissao": "2014-08-02", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10614", "nome": "NURIA FAUSTINO CHERNI", "admissao": "2016-01-06", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26125", "nome": "NYCHOLAS ABREU FERREIRA", "admissao": "2025-12-02", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5836", "nome": "ORLANDO DA SILVA ARRUDA", "admissao": "2003-11-01", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25594", "nome": "OTAVIO DOS SANTOS PEREIRA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11674", "nome": "PATRICIA DA SILVA BRITO", "admissao": "2017-02-15", "cargo": "LIDER DE VENDAS I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22138", "nome": "PATRICIA DA SILVA VIEIRA LISBOA", "admissao": "2023-12-05", "cargo": "ESTOQUISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22306", "nome": "PATRICIA MIRANDA DO NASCIMENTO", "admissao": "2024-01-12", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "11587", "nome": "PAULA CRISTINA RODRIGUES", "admissao": "2017-01-24", "cargo": "AUXILIAR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25598", "nome": "PAULO EDUARDO DA SILVA MAGALHÃES", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26038", "nome": "PEDRO AFONSO DUARTE LISBOA", "admissao": "2025-11-11", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25398", "nome": "PEDRO AUGUSTO FIRMINO SILVA", "admissao": "2025-06-26", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22305", "nome": "PRISCILA DAIANE SILVA", "admissao": "2021-06-09", "cargo": "ANALISTA DE GESTAO DE PESSOAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23960", "nome": "QUELIANE CAMPOS DOS SANTOS", "admissao": "2024-10-23", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25588", "nome": "RADSON KAIO MIRANDA RODRIGUES", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21146", "nome": "RAFAEL HENRIQUE DA SILVA ARAUJO", "admissao": "2023-05-22", "cargo": "TECNICO DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22028", "nome": "RAFAELA SANTOS ALVES DE OLIVEIRA", "admissao": "2023-11-16", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "13043", "nome": "RAIMUNDA NONATA ARAUJO AMORIM", "admissao": "2018-08-06", "cargo": "ENCARREGADO DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "16636", "nome": "RAIMUNDO FERREIRA DE SOUSA", "admissao": "2021-02-10", "cargo": "AÇOUGUEIRO I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26300", "nome": "RAPHAELA FERREIRA DE OLIVEIRA", "admissao": "2026-01-20", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24382", "nome": "RAQUEL DOS SANTOS REIS", "admissao": "2025-01-15", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25937", "nome": "RAYANA LUNARA MACÊDO DE SOUSA", "admissao": "2025-10-21", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22683", "nome": "RAYSSA GABRIELE OLIVEIRA COELHO", "admissao": "2024-03-07", "cargo": "RECEPCIONISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21767", "nome": "REBECA LOREN GATINHO BASTOS", "admissao": "2023-09-26", "cargo": "AUXILIAR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4569", "nome": "REGINALDO ROOS", "admissao": "2002-10-01", "cargo": "SUPERVISOR DE CPD", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24811", "nome": "RENAN DUARTE GOMES DE LIMA", "admissao": "2025-03-18", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26076", "nome": "ROISMARY DEL VALLE CALZADILLA SARACUAL", "admissao": "2025-11-18", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25611", "nome": "RONIELD DE JESUS GARCIA RODRIGUEZ", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "15160", "nome": "ROSANGELA RIBEIRO DA SILVA", "admissao": "2019-12-19", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "10899", "nome": "ROSE RODRIGUES DE OLIVEIRA", "admissao": "2016-05-02", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12080", "nome": "ROSEANE DOS SANTOS SILVA", "admissao": "2017-08-07", "cargo": "ATENDENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26194", "nome": "ROSEGLAIA FONSECA CAVALCANTE", "admissao": "2025-12-18", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24988", "nome": "ROSIVANIA BASTOS OLIVEIRA", "admissao": "2025-04-15", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23607", "nome": "RUTH JUA LIMA", "admissao": "2024-08-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23606", "nome": "SABINA KETELLEY DA SILVA", "admissao": "2024-08-13", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24461", "nome": "SABRINA KARLA CUIABANO RODRIGUES", "admissao": "2025-01-27", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25123", "nome": "SAM HEWEMAM DIEGO SOUSA DE GOUVEIA", "admissao": "2025-05-08", "cargo": "ARMAZENISTA DE FRIOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25656", "nome": "SAMUEL DAVID JIMENEZ LUGO", "admissao": "2025-08-19", "cargo": "OPERADOR DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25221", "nome": "SELMA MARIA DOS SANTOS SILVA", "admissao": "2025-05-20", "cargo": "OPERADOR ALIMENTOS PREPARADOS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6001", "nome": "SELMA REGINA PRIM", "admissao": "2013-02-01", "cargo": "ENCARREGADO DE FRENTE DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26202", "nome": "SERGIO ALEJANDRO LIZARDI", "admissao": "2025-12-22", "cargo": "OPERADOR DE PRODUÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12778", "nome": "SIMONE COSME DA SILVA", "admissao": "2018-04-09", "cargo": "COZINHEIRO(A)", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26224", "nome": "SIMONE DE FATIMA DA SILVA NASCIMENTO", "admissao": "2026-01-02", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "5742", "nome": "SIRLEIDA BORGES DOS SANTOS", "admissao": "2012-01-07", "cargo": "MONITOR(A) DE VIDEO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4931", "nome": "SONIA MARIA JULIAO", "admissao": "2006-12-04", "cargo": "AUXILIAR DE LIMPEZA GERAL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22772", "nome": "STELA RODRIGUES SPINELLI", "admissao": "2024-03-19", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "6584", "nome": "SUELI SANDRA CANDIDO SOARES", "admissao": "2011-04-01", "cargo": "ANALISTA FINANCEIRO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23248", "nome": "SUZIANE DA SILVA BEZERRA", "admissao": "2024-06-11", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23348", "nome": "TAINARA SCHNEIDER", "admissao": "2024-07-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25040", "nome": "TAMIRES DA SILVA MONTEIRO", "admissao": "2025-04-24", "cargo": "AUXILIAR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26248", "nome": "TANIA MARIA FERREIRA DE AGUIAR FRA", "admissao": "2026-01-13", "cargo": "OPERADOR DE PERECIVEL", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25595", "nome": "TAYLLON DIEGO DE SANTANA SANTOS", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21031", "nome": "THIAGO ANTONIO DAS NEVES", "admissao": "2023-04-28", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "20005", "nome": "THIAGO DO NASCIMENTO C DE LIMA AMARAL", "admissao": "2022-11-25", "cargo": "TECNICO DE MANUTENÇAO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26090", "nome": "THIAGO FIGUEREDO DA SILVA", "admissao": "2025-11-21", "cargo": "ARMAZENISTA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24212", "nome": "THIAGO JUNQUEIRA DE SOUZA", "admissao": "2024-12-11", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "22874", "nome": "THIAGO SOUZA DE BRITO", "admissao": "2024-04-04", "cargo": "OPERADOR DE EMPILHADEIRA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23949", "nome": "TONES OLIVEIRA REIS", "admissao": "2024-10-22", "cargo": "CONFERENTE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24872", "nome": "VALDENICE ALVES DE MELO", "admissao": "2025-03-27", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "21740", "nome": "VALDINEIA APARECIDA BARBOSA JESUS", "admissao": "2023-09-22", "cargo": "CONFEITEIRO(A) I", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26232", "nome": "VALDIVINO MENDES DA SILVA", "admissao": "2026-01-08", "cargo": "ENCARREGADO DE DEPOSITO", "armario": null, "chaveEntregueEm": null}, {"cadastro": "4587", "nome": "VANDERLEI ADILIO DE OLIVEIRA", "admissao": "2003-01-02", "cargo": "ENCARREGADO DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}, {"cadastro": "24883", "nome": "VICTOR HUGO BRITO FERREIRA", "admissao": "2025-04-01", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "12396", "nome": "VINICIUS FRANCISCO DE ALMEIDA", "admissao": "2017-12-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26373", "nome": "VITORIA LAYANE DE CARVALHO SOUSA", "admissao": "2026-01-29", "cargo": "OPERADOR DE CAIXA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "26073", "nome": "WALLISON CLAUDIO ALVES MARTINS", "admissao": "2025-11-18", "cargo": "FISCAL DE PREVENÇAO DE PERDAS", "armario": null, "chaveEntregueEm": null}, {"cadastro": "23357", "nome": "WALTER PAMPLONA DE SOUZA", "admissao": "2024-07-04", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25845", "nome": "WANDERLEY MEDEIROS PINTO", "admissao": "2025-09-25", "cargo": "OPERADOR DE LOJA", "armario": null, "chaveEntregueEm": null}, {"cadastro": "25593", "nome": "WILIAN DOS SANTOS BARBOSA", "admissao": "2025-08-18", "cargo": "JOVEM APRENDIZ", "armario": null, "chaveEntregueEm": null}, {"cadastro": "19065", "nome": "WILLIAN HENRIQUE PAULETTI DE SOUZA", "admissao": "2022-06-17", "cargo": "LIDER DE AÇOUGUE", "armario": null, "chaveEntregueEm": null}];

const STORAGE_KEY = "armarios_app_v1";
const CONFIG_KEY = "armarios_app_config_v1";

const el = (id) => document.getElementById(id);

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = {
  colabs: el("tab-colabs"),
  lockers: el("tab-lockers"),
  import: el("tab-import"),
  config: el("tab-config"),
};

const modal = el("modal");
const toast = el("toast");

let state = {
  totalLockers: 300,
  employees: [],
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

function load(){
  const cfg = safeJsonParse(localStorage.getItem(CONFIG_KEY));
  if(cfg && Number.isFinite(cfg.totalLockers) && cfg.totalLockers > 0){
    state.totalLockers = Math.floor(cfg.totalLockers);
  } else {
    state.totalLockers = 300;
  }

  const saved = safeJsonParse(localStorage.getItem(STORAGE_KEY));
  if(saved && Array.isArray(saved.employees)){
    state.employees = saved.employees;
  } else {
    state.employees = structuredClone(INITIAL_EMPLOYEES);
  }

  // Ensure fields exist
  for(const e of state.employees){
    if(!("armario" in e)) e.armario = null;
    if(!("chaveEntregueEm" in e)) e.chaveEntregueEm = null;
  }

  // hard sanitize lockers > total
  for(const e of state.employees){
    if(e.armario != null && (e.armario < 1 || e.armario > state.totalLockers)) e.armario = null;
  }

  el("totalInput").value = state.totalLockers;
}

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ employees: state.employees }));
  localStorage.setItem(CONFIG_KEY, JSON.stringify({ totalLockers: state.totalLockers }));
  renderAll();
}

function safeJsonParse(s){
  try{ return JSON.parse(s); }catch{ return null; }
}

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

    tr.appendChild(tdText(e.cadastro));
    tr.appendChild(tdText(e.nome));
    tr.appendChild(tdText(formatDateBR(e.admissao)));
    tr.appendChild(tdText(e.cargo));

    // Armário (click to edit)
    const tdArm = document.createElement("td");
    const btn = document.createElement("button");
    btn.className = "cell-btn";
    btn.textContent = e.armario ? String(e.armario) : "—";
    btn.title = "Clique para editar o armário";
    btn.addEventListener("click", ()=> openEditModal(e));
    tdArm.appendChild(btn);
    tr.appendChild(tdArm);

    // Chave entregue
    const tdCh = document.createElement("td");
    tdCh.innerHTML = e.chaveEntregueEm ? `<span class="badge ok">${formatDateBR(e.chaveEntregueEm)}</span>` : `<span class="badge">—</span>`;
    tr.appendChild(tdCh);

    // actions
    const tdAct = document.createElement("td");
    tdAct.className = "row-actions";
    const bEdit = document.createElement("button");
    bEdit.className = "icon-btn";
    bEdit.textContent = "Editar";
    bEdit.addEventListener("click", ()=> openEditModal(e));
    const bDel = document.createElement("button");
    bDel.className = "icon-btn";
    bDel.textContent = "Excluir";
    bDel.addEventListener("click", ()=>{
      if(confirm(`Excluir ${e.nome} (${e.cadastro})?`)){
        // free locker automatically
        state.employees = state.employees.filter(x => x !== e);
        save();
        showToast("Excluído.");
      }
    });
    tdAct.appendChild(bEdit);
    tdAct.appendChild(bDel);
    tr.appendChild(tdAct);

    tbody.appendChild(tr);
  }
}

function tdText(v){
  const td = document.createElement("td");
  td.textContent = (v ?? "").toString();
  return td;
}

function formatDateBR(iso){
  if(!iso) return "";
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if(!m) return iso;
  return `${m[3]}/${m[2]}/${m[1]}`;
}

function buildLockerOptions(selectEl, currentLocker){
  selectEl.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = "(sem armário)";
  selectEl.appendChild(opt0);

  const used = getUsedLockers();
  for(let i=1;i<=state.totalLockers;i++){
    const opt = document.createElement("option");
    opt.value = String(i);
    const isUsed = used.has(i) && i !== currentLocker;
    opt.textContent = isUsed ? `${i} (ocupado)` : String(i);
    opt.disabled = isUsed;
    selectEl.appendChild(opt);
  }
}

let editingRef = null; // reference to object in state.employees

function openAddModal(){
  editingRef = null;
  el("modalTitle").textContent = "Novo colaborador";

  el("fCadastro").value = "";
  el("fNome").value = "";
  el("fAdmissao").value = "";
  el("fCargo").value = "";
  el("fChave").value = "";

  buildLockerOptions(el("fArmario"), null);
  el("fArmario").value = "";

  modal.showModal();
}

function openEditModal(emp){
  editingRef = emp;
  el("modalTitle").textContent = `Editar • ${emp.nome}`;

  el("fCadastro").value = emp.cadastro ?? "";
  el("fNome").value = emp.nome ?? "";
  el("fAdmissao").value = emp.admissao ?? "";
  el("fCargo").value = emp.cargo ?? "";
  el("fChave").value = emp.chaveEntregueEm ?? "";

  buildLockerOptions(el("fArmario"), emp.armario ?? null);
  el("fArmario").value = emp.armario ? String(emp.armario) : "";

  modal.showModal();
}

function upsertEmployee(payload){
  const cadastroNorm = normalize(payload.cadastro);
  const idx = state.employees.findIndex(e => normalize(e.cadastro) === cadastroNorm);

  if(idx >= 0){
    state.employees[idx] = { ...state.employees[idx], ...payload };
  }else{
    state.employees.push(payload);
  }
}

function validateLockerUnique(locker, ignoreCadastro){
  if(locker == null) return true;
  for(const e of state.employees){
    if(ignoreCadastro && normalize(e.cadastro) === normalize(ignoreCadastro)) continue;
    if(e.armario === locker) return false;
  }
  return true;
}

function handleSaveFromModal(){
  const cadastro = el("fCadastro").value.trim();
  const nome = el("fNome").value.trim();
  const admissao = el("fAdmissao").value.trim();
  const cargo = el("fCargo").value.trim();

  const arm = el("fArmario").value ? Number(el("fArmario").value) : null;
  const chave = el("fChave").value.trim() || null;

  if(!cadastro || !nome){
    showToast("Preencha matrícula e nome.");
    return;
  }
  if(arm != null && (!Number.isInteger(arm) || arm < 1 || arm > state.totalLockers)){
    showToast("Armário inválido.");
    return;
  }

  // unique locker
  const ignore = editingRef ? editingRef.cadastro : null;
  if(!validateLockerUnique(arm, ignore)){
    showToast(`Armário ${arm} já está em uso.`);
    return;
  }

  const payload = {
    cadastro,
    nome,
    admissao: admissao || "",
    cargo,
    armario: arm,
    chaveEntregueEm: chave,
  };

  if(editingRef){
    Object.assign(editingRef, payload);
  }else{
    upsertEmployee(payload);
  }

  save();
  modal.close();
  showToast("Salvo.");
}

el("btnAdd").addEventListener("click", openAddModal);
el("btnSave").addEventListener("click", (ev)=>{ ev.preventDefault(); handleSaveFromModal(); });

el("btnClearFilters").addEventListener("click", ()=>{
  el("searchInput").value = "";
  renderEmployees();
});

el("searchInput").addEventListener("input", ()=> renderEmployees());

/* Disponíveis */
function matchesLockerFilter(n, filter){
  if(!filter) return true;
  filter = filter.trim();
  // exact
  if(/^\d+$/.test(filter)) return n === Number(filter);
  // range 10-50
  const m = /^(\d+)\s*-\s*(\d+)$/.exec(filter);
  if(m){
    const a = Number(m[1]), b = Number(m[2]);
    const lo = Math.min(a,b), hi = Math.max(a,b);
    return n >= lo && n <= hi;
  }
  // pattern like 2xx, 4x
  if(/^[0-9xX]+$/.test(filter)){
    const pat = filter.toLowerCase().replace(/x/g, "\\d");
    return new RegExp("^" + pat + "$").test(String(n));
  }
  // contains
  return String(n).includes(filter);
}

function renderFreeLockers(){
  const filter = el("lockerFilter").value;
  const free = getFreeLockers().filter(n => matchesLockerFilter(n, filter));
  el("freeSummary").textContent = `${free.length} armários livres (filtrado)`;
  const grid = el("freeGrid");
  grid.innerHTML = "";
  for(const n of free){
    const div = document.createElement("div");
    div.className = "free-item";
    div.textContent = String(n);
    grid.appendChild(div);
  }
}

el("lockerFilter").addEventListener("input", renderFreeLockers);
el("btnCopyFree").addEventListener("click", async ()=>{
  const free = getFreeLockers();
  const text = free.join(", ");
  try{
    await navigator.clipboard.writeText(text);
    showToast("Lista copiada.");
  }catch{
    showToast("Não consegui copiar automaticamente. (Permissão do navegador)");
  }
});

/* Importação XML */
function stripTagName(s){
  return normalize(s).replace(/[^a-z0-9]/g,"");
}

function xmlGet(node, names){
  const wanted = names.map(stripTagName);
  for(const child of Array.from(node.children || [])){
    const nm = stripTagName(child.tagName);
    if(wanted.includes(nm)) return (child.textContent || "").trim();
  }
  // sometimes attributes
  for(const attr of Array.from(node.attributes || [])){
    const nm = stripTagName(attr.name);
    if(wanted.includes(nm)) return (attr.value || "").trim();
  }
  return "";
}

function tryParseBRDate(s){
  s = (s||"").trim();
  if(!s) return "";
  // ISO already
  if(/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0,10);
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
  if(m){
    const dd = String(m[1]).padStart(2,"0");
    const mm = String(m[2]).padStart(2,"0");
    return `${m[3]}-${mm}-${dd}`;
  }
  return s;
}

async function importXmlFile(file){
  const text = await file.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "application/xml");
  const parseError = doc.querySelector("parsererror");
  if(parseError){
    throw new Error("XML inválido.");
  }

  // find candidate nodes
  let nodes = Array.from(doc.querySelectorAll("colaborador, Colaborador, employee, Employee, row, Row, item, Item"));
  if(nodes.length === 0){
    // fallback: any element that contains something like Cadastro and Nome
    nodes = Array.from(doc.querySelectorAll("*")).filter(n=>{
      const t = normalize(n.textContent);
      return t.includes("cadastro") || t.includes("matricula");
    }).slice(0,0); // disable heuristic to avoid false matches
  }

  // If no explicit nodes, try children of root
  if(nodes.length === 0 && doc.documentElement){
    nodes = Array.from(doc.documentElement.children || []);
  }

  let updated = 0;
  for(const n of nodes){
    const cadastro = xmlGet(n, ["Cadastro","Matricula","Matrícula","id","registration"]);
    const nome = xmlGet(n, ["Nome","Name"]);
    const adm = xmlGet(n, ["Admissao","Admissão","Admission","DataAdmissao"]);
    const cargo = xmlGet(n, ["Cargo","Role","Funcao","Função"]);
    const arm = xmlGet(n, ["NumeroDoArmario","Numero do armario","Armario","Locker","LockerNumber"]);
    const chave = xmlGet(n, ["ChaveEntregueEm","EntregaChave","DataEntregaChave","KeyDeliveredAt","EntregueEm"]);

    if(!cadastro && !nome) continue;

    const armNum = arm && /^\d+$/.test(arm) ? Number(arm) : null;
    if(armNum != null && !validateLockerUnique(armNum, cadastro)){
      // skip conflicting locker; keep employee but remove locker
      upsertEmployee({
        cadastro: cadastro || "",
        nome: nome || "",
        admissao: tryParseBRDate(adm),
        cargo: cargo || "",
        armario: null,
        chaveEntregueEm: tryParseBRDate(chave) || null
      });
      updated++;
      continue;
    }

    upsertEmployee({
      cadastro: cadastro || "",
      nome: nome || "",
      admissao: tryParseBRDate(adm),
      cargo: cargo || "",
      armario: (armNum != null ? armNum : null),
      chaveEntregueEm: tryParseBRDate(chave) || null
    });
    updated++;
  }

  save();
  showToast(`Importado. Registros processados: ${updated}`);
}

el("btnImportXml").addEventListener("click", async ()=>{
  const f = el("xmlFile").files?.[0];
  if(!f){ showToast("Selecione um arquivo XML."); return; }
  try{
    await importXmlFile(f);
  }catch(err){
    showToast(err?.message || "Falha ao importar XML.");
  }
});

/* Exportar JSON / XML */
function download(filename, content, mime){
  const blob = new Blob([content], {type: mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

el("btnExportJson").addEventListener("click", ()=>{
  const payload = {
    exportedAt: new Date().toISOString(),
    totalLockers: state.totalLockers,
    employees: state.employees
  };
  download("armarios-backup.json", JSON.stringify(payload, null, 2), "application/json");
});

function toXml(){
  const esc = (s)=> (s??"").toString()
    .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
    .replaceAll("\"","&quot;").replaceAll("'","&apos;");
  const lines = [];
  lines.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  lines.push(`<colaboradores totalArmarios="${state.totalLockers}" exportadoEm="${esc(new Date().toISOString())}">`);
  for(const e of state.employees){
    lines.push(`  <colaborador>`);
    lines.push(`    <Cadastro>${esc(e.cadastro)}</Cadastro>`);
    lines.push(`    <Nome>${esc(e.nome)}</Nome>`);
    lines.push(`    <Admissao>${esc(e.admissao || "")}</Admissao>`);
    lines.push(`    <Cargo>${esc(e.cargo || "")}</Cargo>`);
    lines.push(`    <NumeroDoArmario>${esc(e.armario ?? "")}</NumeroDoArmario>`);
    lines.push(`    <ChaveEntregueEm>${esc(e.chaveEntregueEm ?? "")}</ChaveEntregueEm>`);
    lines.push(`  </colaborador>`);
  }
  lines.push(`</colaboradores>`);
  return lines.join("\n");
}

el("btnExportXml").addEventListener("click", ()=>{
  download("armarios-export.xml", toXml(), "application/xml");
});

/* Reset */
el("btnReset").addEventListener("click", ()=>{
  if(confirm("Resetar? Isso apaga os dados salvos no navegador.")){
    localStorage.removeItem(STORAGE_KEY);
    load();
    save();
    showToast("Resetado.");
  }
});

/* Config total lockers */
el("btnSaveTotal").addEventListener("click", ()=>{
  const n = Number(el("totalInput").value);
  if(!Number.isFinite(n) || n < 1){
    showToast("Total inválido.");
    return;
  }
  state.totalLockers = Math.floor(n);

  // remove lockers out of range and resolve duplicates by freeing extras
  const used = new Set();
  for(const e of state.employees){
    if(e.armario != null && (e.armario < 1 || e.armario > state.totalLockers)){
      e.armario = null;
      e.chaveEntregueEm = e.chaveEntregueEm ?? null;
    }
    if(e.armario != null){
      if(used.has(e.armario)){
        // duplicate -> free this one
        e.armario = null;
      } else {
        used.add(e.armario);
      }
    }
  }

  save();
  showToast("Total atualizado.");
});

/* Import backup JSON */
el("btnImportJson").addEventListener("click", async ()=>{
  const f = el("jsonFile").files?.[0];
  if(!f){ showToast("Selecione um arquivo JSON."); return; }
  try{
    const text = await f.text();
    const data = JSON.parse(text);
    if(!data || !Array.isArray(data.employees)) throw new Error("Backup inválido.");
    state.totalLockers = Number(data.totalLockers) > 0 ? Math.floor(Number(data.totalLockers)) : state.totalLockers;
    state.employees = data.employees;
    save();
    showToast("Backup importado.");
  }catch(err){
    showToast(err?.message || "Falha ao importar JSON.");
  }
});

function renderAll(){
  updateStats();
  renderEmployees();
  renderFreeLockers();

  // keep select options fresh when modal open
  if(modal.open){
    const cur = editingRef?.armario ?? null;
    buildLockerOptions(el("fArmario"), cur);
    el("fArmario").value = cur ? String(cur) : "";
  }
}

function init(){
  load();
  renderAll();
}

init();
