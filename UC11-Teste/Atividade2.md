# 📋 Plano de Testes - Sistema de Gestão de Eventos

---

##  RF01 — CADASTRO DE USUÁRIO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT001 | RF01 | Cadastrar usuário com dados válidos | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Amanda Oliveira<br>Email: amanda.oliveira@email.com<br>Senha: Tech@2024<br>Nasc: 15/03/1995 | Usuário cadastrado com sucesso<br>Mensagem de confirmação | Positivo |
| CT002 | RF01 | Cadastrar com email já existente | Email amanda.oliveira@email.com já cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Bruno Santos<br>Email: amanda.oliveira@email.com<br>Senha: Tech@2024<br>Nasc: 22/07/1992 | Mensagem: "Email já utilizado"<br>Cadastro não realizado | Negativo |
| CT003 | RF01 | Cadastrar com nome vazio | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Deixar nome em branco<br>3. Preencher demais campos<br>4. Clicar em "Cadastrar" | Nome: (vazio)<br>Email: carolina.lima@email.com<br>Senha: Tech@2024<br>Nasc: 10/11/1988 | Mensagem: "Nome é obrigatório" | Negativo |
| CT004 | RF01 | Cadastrar com email inválido | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Diego Rocha<br>Email: "diego.rocha@"<br>Senha: Tech@2024<br>Nasc: 05/09/1991 | Mensagem: "Email inválido" | Negativo |
| CT005 | RF01 | Cadastrar com senha fraca (sem maiúscula) | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Elisa Mendes<br>Email: elisa.mendes@email.com<br>Senha: "tech@2024"<br>Nasc: 30/04/1993 | Mensagem: "Senha deve conter pelo menos 1 letra maiúscula" | Negativo |
| CT006 | RF01 | Cadastrar com senha sem número | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Fabio Correia<br>Email: fabio.correia@email.com<br>Senha: "Tech@evento"<br>Nasc: 12/12/1990 | Mensagem: "Senha deve conter pelo menos 1 número" | Negativo |
| CT007 | RF01 | Cadastrar com senha curta (<8 caracteres) | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Gabriela Nunes<br>Email: gabriela.nunes@email.com<br>Senha: "Te@7"<br>Nasc: 25/08/1994 | Mensagem: "Senha deve ter no mínimo 8 caracteres" | Negativo |
| CT008 | RF01 | Cadastrar com data de nascimento futura | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Henrique Lopes<br>Email: henrique.lopes@email.com<br>Senha: Tech@2024<br>Nasc: 01/01/2035 | Mensagem: "Data de nascimento inválida" | Negativo |
| CT009 | RF01 | Cadastrar com idade inferior a 16 anos | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Isabela Costa<br>Email: isabela.costa@email.com<br>Senha: Tech@2024<br>Nasc: 15/05/2020 | Mensagem: "Usuário deve ter pelo menos 16 anos" | Negativo |
| CT010 | RF01 | Cadastrar com todos os campos vazios | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Clicar em "Cadastrar" sem preencher nada | Todos os campos vazios | Mensagens de erro para cada campo obrigatório | Negativo |
| CT011 | RF01 | Cadastrar com email contendo espaços | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Joao Vitor<br>Email: "joao vitor@email.com"<br>Senha: Tech@2024<br>Nasc: 03/06/1996 | Mensagem: "Email inválido" | Negativo |
| CT012 | RF01 | Cadastrar com nome contendo números | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: "Karen 123"<br>Email: karen.silva@email.com<br>Senha: Tech@2024<br>Nasc: 19/02/1989 | Mensagem: "Nome não pode conter números" | Negativo |
| CT013 | RF01 | Cadastrar com senha contendo apenas números | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Leonardo Faria<br>Email: leonardo.faria@email.com<br>Senha: "12345678"<br>Nasc: 07/11/1987 | Mensagem: "Senha deve conter pelo menos 1 letra maiúscula" | Negativo |
| CT014 | RF01 | Cadastrar com caractere especial no nome | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: "Márcia @Silva"<br>Email: marcia.silva@email.com<br>Senha: Tech@2024<br>Nasc: 14/09/1992 | Mensagem: "Nome contém caracteres inválidos" | Negativo |

---

##  RF02 — LOGIN DE USUÁRIO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT015 | RF02 | Login com credenciais válidas | Usuário amanda.oliveira@email.com cadastrado | 1. Acessar tela de login<br>2. Preencher email e senha<br>3. Clicar em "Entrar" | Email: amanda.oliveira@email.com<br>Senha: Tech@2024 | Login realizado com sucesso<br>Redirecionar para dashboard | Positivo |
| CT016 | RF02 | Login com senha incorreta | Usuário cadastrado | 1. Acessar tela de login<br>2. Preencher email e senha errada<br>3. Clicar em "Entrar" | Email: amanda.oliveira@email.com<br>Senha: SenhaErrada@123 | Mensagem: "Credenciais inválidas" | Negativo |
| CT017 | RF02 | Login com email não cadastrado | Email não existe no sistema | 1. Acessar tela de login<br>2. Preencher email não cadastrado<br>3. Clicar em "Entrar" | Email: usuario.inexistente@email.com<br>Senha: Tech@2024 | Mensagem: "Usuário não encontrado" | Negativo |
| CT018 | RF02 | Login com campos vazios | - | 1. Acessar tela de login<br>2. Clicar em "Entrar" sem preencher | Email: (vazio)<br>Senha: (vazio) | Mensagens de erro para campos obrigatórios | Negativo |
| CT019 | RF02 | Login com email em branco e senha preenchida | - | 1. Acessar tela de login<br>2. Preencher apenas senha<br>3. Clicar em "Entrar" | Email: (vazio)<br>Senha: Tech@2024 | Mensagem: "Email é obrigatório" | Negativo |
| CT020 | RF02 | Login com senha em branco e email preenchido | - | 1. Acessar tela de login<br>2. Preencher apenas email<br>3. Clicar em "Entrar" | Email: amanda.oliveira@email.com<br>Senha: (vazio) | Mensagem: "Senha é obrigatória" | Negativo |
| CT021 | RF02 | Login com email em formato inválido | - | 1. Acessar tela de login<br>2. Preencher email inválido<br>3. Clicar em "Entrar" | Email: "email-sem-arroba.com"<br>Senha: Tech@2024 | Mensagem: "Formato de email inválido" | Negativo |
| CT022 | RF02 | Login com credenciais corretas após 3 tentativas falhas | Usuário bloqueado temporariamente | 1. Tentar login 3x com senha errada<br>2. Tentar login com senha correta | Email: amanda.oliveira@email.com<br>Senha: Tech@2024 | Mensagem: "Usuário bloqueado temporariamente. Tente novamente em 15 minutos" | Negativo |
| CT023 | RF02 | Login com email contendo espaços no início/fim | Usuário cadastrado | 1. Acessar tela de login<br>2. Preencher email com espaços<br>3. Clicar em "Entrar" | Email: "  amanda.oliveira@email.com  "<br>Senha: Tech@2024 | Login realizado com sucesso (sistema deve tratar espaços) | Positivo |

---

##  RF03 — CADASTRO DE EVENTO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT024 | RF03 | Cadastrar evento com dados válidos | Usuário admin logado | 1. Acessar tela de cadastro de evento<br>2. Preencher campos<br>3. Clicar em "Salvar" | Nome: "Workshop de Inteligência Artificial"<br>Descrição: "Introdução prática a IA com Python"<br>Data: 15/06/2025<br>Máx: 30 | Evento cadastrado com sucesso | Positivo |
| CT025 | RF03 | Cadastrar evento sem nome | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Deixar nome vazio<br>3. Preencher demais campos | Nome: (vazio)<br>Descrição: "Introdução prática a IA"<br>Data: 15/06/2025<br>Máx: 30 | Mensagem: "Nome do evento obrigatório" | Negativo |
| CT026 | RF03 | Cadastrar evento com data passada | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Preencher com data anterior | Nome: "Evento Histórico"<br>Descrição: "Revisão do ano anterior"<br>Data: 10/01/2023<br>Máx: 50 | Mensagem: "Data deve ser futura" | Negativo |
| CT027 | RF03 | Cadastrar evento com máximo negativo | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Inserir valor negativo | Nome: "Hackathon Tech"<br>Descrição: "Competição de programação"<br>Data: 20/07/2025<br>Máx: -5 | Mensagem: "Número máximo deve ser maior que zero" | Negativo |
| CT028 | RF03 | Cadastrar evento com máximo zero | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Inserir valor zero | Nome: "Meetup de QA"<br>Descrição: "Discussão sobre automação"<br>Data: 05/08/2025<br>Máx: 0 | Mensagem: "Número máximo deve ser maior que zero" | Negativo |
| CT029 | RF03 | Cadastrar evento com máximo muito alto (10.000) | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Inserir valor alto | Nome: "Conferência Nacional"<br>Descrição: "Evento anual de tecnologia"<br>Data: 10/09/2025<br>Máx: 10000 | Evento cadastrado com sucesso<br>Sistema deve suportar o limite | Positivo |
| CT030 | RF03 | Cadastrar evento sem descrição | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Deixar descrição vazia | Nome: "Palestra de Carreira"<br>Descrição: (vazio)<br>Data: 12/10/2025<br>Máx: 40 | Mensagem: "Descrição obrigatória" | Negativo |
| CT031 | RF03 | Cadastrar evento com data igual a hoje | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Inserir data atual | Nome: "Evento Relâmpago"<br>Descrição: "Última chance"<br>Data: (data atual)<br>Máx: 20 | Mensagem: "Data deve ser futura (não pode ser hoje)" | Negativo |
| CT032 | RF03 | Cadastrar evento com nome muito longo (200 caracteres) | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Inserir nome extenso | Nome: "Workshop Avançado de Desenvolvimento de Software com Foco em Metodologias Ágeis e Práticas de DevOps para Equipes de Alta Performance em Ambientes Corporativos"<br>Descrição: "Conteúdo detalhado"<br>Data: 01/11/2025<br>Máx: 25 | Mensagem: "Nome muito longo (máximo 100 caracteres)" | Negativo |
| CT033 | RF03 | Cadastrar evento sem estar logado | Usuário não autenticado | 1. Acessar URL de cadastro de evento diretamente | - | Redirecionar para tela de login | Negativo |

---

##  RF04 — LISTAGEM DE EVENTOS

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT034 | RF04 | Listar eventos cadastrados | 5 eventos cadastrados (3 futuros, 2 passados) | 1. Acessar página de eventos | - | Lista exibe apenas eventos futuros (3) com nome, data e vagas | Positivo |
| CT035 | RF04 | Listar eventos sem cadastros | Nenhum evento no sistema | 1. Acessar página de eventos | - | Mensagem: "Nenhum evento encontrado" | Positivo |
| CT036 | RF04 | Listar eventos com ordenação por data | Eventos em datas diferentes | 1. Acessar página de eventos | - | Eventos exibidos em ordem crescente de data (mais próximo primeiro) | Positivo |
| CT037 | RF04 | Listar eventos com filtro por nome | Eventos com nomes variados | 1. Acessar página de eventos<br>2. Digitar filtro "Workshop" | Termo: "Workshop" | Apenas eventos contendo "Workshop" no nome são exibidos | Positivo |
| CT038 | RF04 | Listar eventos com paginação | 25 eventos cadastrados | 1. Acessar página de eventos | - | Sistema exibe 10 primeiros eventos e controles de paginação | Positivo |
| CT039 | RF04 | Listar eventos e verificar vagas disponíveis | Evento com 20 vagas e 5 inscrições | 1. Acessar página de eventos<br>2. Verificar card do evento | - | Exibe "15 vagas disponíveis" corretamente | Positivo |
| CT040 | RF04 | Listar eventos com filtro sem resultados | Nenhum evento corresponde ao filtro | 1. Acessar página de eventos<br>2. Filtrar por termo inexistente | Termo: "JavaScript" | Mensagem: "Nenhum evento encontrado para esta busca" | Positivo |

---

##  RF05 — INSCRIÇÃO EM EVENTO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT041 | RF05 | Inscrever usuário em evento com vagas | Usuário: Amanda logada<br>Evento: "Workshop IA" com 30 vagas | 1. Acessar evento<br>2. Clicar em "Inscrever-se" | - | Inscrição confirmada<br>Mensagem: "Inscrição realizada com sucesso"<br>Vagas disponíveis: 29 | Positivo |
| CT042 | RF05 | Inscrever mesmo usuário duas vezes | Amanda já inscrita no evento | 1. Acessar evento<br>2. Clicar novamente em "Inscrever-se" | - | Mensagem: "Você já está inscrito neste evento"<br>Vagas permanecem em 29 | Negativo |
| CT043 | RF05 | Inscrever em evento lotado | Evento com 0 vagas | 1. Acessar evento lotado<br>2. Clicar em "Inscrever-se" | - | Mensagem: "Evento lotado"<br>Botão de inscrição desabilitado | Negativo |
| CT044 | RF05 | Inscrever em evento passado | Evento com data 01/01/2024 | 1. Acessar evento passado<br>2. Clicar em "Inscrever-se" | - | Mensagem: "Não é possível se inscrever em eventos passados" | Negativo |
| CT045 | RF05 | Inscrever sem estar logado | Usuário não autenticado | 1. Acessar evento<br>2. Clicar em "Inscrever-se" | - | Redirecionar para tela de login com mensagem: "Faça login para se inscrever" | Negativo |
| CT046 | RF05 | Inscrever em evento com 1 vaga restante | Evento com 30 vagas e 29 inscritos | 1. Último usuário se inscreve | - | Inscrição realizada<br>Após inscrição, vagas = 0 | Positivo |
| CT047 | RF05 | Inscrever 2 usuários simultaneamente na última vaga | Evento com 1 vaga | 1. Usuário A e B tentam inscrição ao mesmo tempo | - | Apenas um usuário consegue inscrição<br>Outro recebe mensagem: "Evento lotado durante sua tentativa" | Concorrência |
| CT048 | RF05 | Inscrever em evento e verificar contador | Usuário se inscreve | 1. Realizar inscrição<br>2. Verificar contador de participantes | - | Contador "Participantes inscritos" incrementa de 15 para 16 | Positivo |
| CT049 | RF05 | Inscrever em evento cancelado | Evento marcado como cancelado | 1. Acessar evento cancelado | - | Botão de inscrição desabilitado<br>Mensagem: "Evento cancelado" | Negativo |

---

##  RF06 — CANCELAMENTO DE INSCRIÇÃO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT050 | RF06 | Cancelar inscrição válida | Amanda inscrita no evento "Workshop IA" (29 vagas ocupadas) | 1. Acessar "Minhas Inscrições"<br>2. Clicar em "Cancelar" no evento<br>3. Confirmar cancelamento | - | Inscrição cancelada<br>Mensagem: "Inscrição cancelada com sucesso"<br>Vagas disponíveis: 30 | Positivo |
| CT051 | RF06 | Cancelar inscrição inexistente | Amanda não inscrita no evento | 1. Acessar página do evento<br>2. Clicar em "Cancelar Inscrição" (se disponível) | - | Mensagem: "Você não está inscrito neste evento" | Negativo |
| CT052 | RF06 | Cancelar sem estar logado | Usuário não autenticado | 1. Acessar página do evento<br>2. Tentar acessar cancelamento | - | Redirecionar para tela de login | Negativo |
| CT053 | RF06 | Cancelar inscrição em evento passado | Amanda inscrita em evento de 01/01/2024 | 1. Acessar "Minhas Inscrições"<br>2. Tentar cancelar evento passado | - | Mensagem: "Não é possível cancelar inscrição em eventos já realizados"<br>Botão de cancelamento desabilitado | Negativo |
| CT054 | RF06 | Cancelar e verificar vaga liberada | Bruno tenta se inscrever após cancelamento de Amanda | 1. Amanda cancela inscrição<br>2. Bruno tenta se inscrever no mesmo evento | - | Bruno consegue se inscrever com sucesso | Positivo |
| CT055 | RF06 | Cancelar evento como administrador | Admin logado com evento ativo | 1. Admin acessa painel<br>2. Seleciona evento<br>3. Clica em "Cancelar Evento" | Evento: "Workshop IA" | Evento marcado como cancelado<br>Todos os inscritos recebem notificação<br>Botões de inscrição desabilitados | Positivo |
| CT056 | RF06 | Cancelar evento e tentar inscrição posterior | Evento cancelado | 1. Usuário tenta se inscrever em evento cancelado | - | Mensagem: "Não é possível se inscrever em evento cancelado" | Negativo |
| CT057 | RF06 | Cancelar inscrição de outro usuário | Bruno tenta cancelar inscrição de Amanda | 1. Bruno acessa página do evento<br>2. Tenta cancelar inscrição de Amanda (se interface permitir) | - | Mensagem: "Você não tem permissão para cancelar esta inscrição" | Negativo |

---

##  RNF01 — VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS

| ID | Requisito | Descrição | Tela | Passos | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:----:|:------:|:-------------------:|:----:|
| CT058 | RNF01 | Validar data de nascimento obrigatória | Cadastro | 1. Preencher todos os campos menos data<br>2. Clicar em "Cadastrar" | Mensagem: "Data de nascimento obrigatória" | Negativo |
| CT059 | RNF01 | Validar descrição obrigatória no evento | Cadastro Evento | 1. Preencher todos os campos menos descrição<br>2. Clicar em "Salvar" | Mensagem: "Descrição obrigatória" | Negativo |
| CT060 | RNF01 | Validar nome do evento obrigatório | Cadastro Evento | 1. Preencher todos os campos menos nome<br>2. Clicar em "Salvar" | Mensagem: "Nome do evento obrigatório" | Negativo |
| CT061 | RNF01 | Validar data do evento obrigatória | Cadastro Evento | 1. Preencher todos os campos menos data<br>2. Clicar em "Salvar" | Mensagem: "Data do evento obrigatória" | Negativo |
| CT062 | RNF01 | Validar número máximo obrigatório | Cadastro Evento | 1. Preencher todos os campos menos máximo<br>2. Clicar em "Salvar" | Mensagem: "Número máximo de participantes obrigatório" | Negativo |
| CT063 | RNF01 | Validar email obrigatório | Login | 1. Preencher apenas senha<br>2. Clicar em "Entrar" | Mensagem: "Email obrigatório" | Negativo |
| CT064 | RNF01 | Validar senha obrigatória | Login | 1. Preencher apenas email<br>2. Clicar em "Entrar" | Mensagem: "Senha obrigatória" | Negativo |

---

##  RNF02 — SEGURANÇA DE SENHA

| ID | Requisito | Descrição | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:----------------:|:-------------------:|:----:|
| CT065 | RNF02 | Senha sem maiúscula | "segura@123" | Mensagem: "Senha deve conter pelo menos 1 letra maiúscula" | Negativo |
| CT066 | RNF02 | Senha sem número | "Segura@abc" | Mensagem: "Senha deve conter pelo menos 1 número" | Negativo |
| CT067 | RNF02 | Senha com menos de 8 caracteres | "Seg@12" | Mensagem: "Senha deve ter no mínimo 8 caracteres" | Negativo |
| CT068 | RNF02 | Senha válida | "Segura@123" | Senha aceita | Positivo |
| CT069 | RNF02 | Senha com caracteres especiais válidos | "Progr@mar!2025" | Senha aceita | Positivo |
| CT070 | RNF02 | Senha com 50 caracteres (limite máximo) | "A1@b2#c3$d4%e5&f6*g7(h8)i9!J0@k1#l2$m3%n4&" | Senha aceita (se dentro do limite do sistema) | Positivo |
| CT071 | RNF02 | Senha com espaços | "Minha Senha@123" | Mensagem: "Senha não pode conter espaços" | Negativo |

---

##  RNF03 — TEMPO DE RESPOSTA

| ID | Requisito | Descrição | Como testar | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:-----------:|:-------------------:|:----:|
| CT072 | RNF03 | Listagem com 1 evento | Medir tempo de carregamento da página de eventos | < 2 segundos | Desempenho |
| CT073 | RNF03 | Listagem com 100 eventos | Medir tempo de carregamento da página de eventos | < 2 segundos | Desempenho |
| CT074 | RNF03 | Listagem com 1000 eventos | Medir tempo de carregamento da página de eventos | < 3 segundos (tolerância para grande volume) | Desempenho |
| CT075 | RNF03 | Login com credenciais válidas | Medir tempo entre clique e redirecionamento | < 1.5 segundos | Desempenho |
| CT076 | RNF03 | Cadastro de usuário | Medir tempo entre envio e confirmação | < 2 segundos | Desempenho |
| CT077 | RNF03 | Inscrição em evento | Medir tempo entre clique e confirmação | < 1.5 segundos | Desempenho |
| CT078 | RNF03 | Listagem com filtro | Medir tempo de busca com termo específico | < 2 segundos | Desempenho |

---

##  RNF04 — COMPATIBILIDADE (NAVEGADORES)

| ID | Requisito | Descrição | Navegador | Passos | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:---------:|:------:|:-------------------:|:----:|
| CT079 | RNF04 | Executar CT001 no Chrome | Chrome | Executar o caso de teste CT001 | Funciona normalmente | Compatibilidade |
| CT080 | RNF04 | Executar CT001 no Firefox | Firefox | Executar o caso de teste CT001 | Funciona normalmente | Compatibilidade |
| CT081 | RNF04 | Executar CT001 no Edge | Edge | Executar o caso de teste CT001 | Funciona normalmente | Compatibilidade |
| CT082 | RNF04 | Executar CT024 no Safari | Safari | Executar o caso de teste CT024 | Funciona normalmente | Compatibilidade |
| CT083 | RNF04 | Executar CT041 no Chrome mobile | Chrome (Android) | Executar o caso de teste CT041 | Interface responsiva e funcional | Compatibilidade |
| CT084 | RNF04 | Executar CT041 no Safari mobile | Safari (iOS) | Executar o caso de teste CT041 | Interface responsiva e funcional | Compatibilidade |

---

##  RNF05 — INTEGRIDADE DE DADOS (EMAIL ÚNICO)

| ID | Requisito | Descrição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------:|:----------------:|:-------------------:|:----:|
| CT085 | RNF05 | Criar dois usuários com mesmo email simultaneamente | 1. Enviar duas requisições de cadastro com mesmo email ao mesmo tempo | Email: carolina.lima@email.com<br>Senha: Tech@2024<br>Nome: Carolina Lima / Carlos Lima | Apenas UM cadastro é criado<br>O segundo recebe erro de email duplicado | Concorrência |
| CT086 | RNF05 | Criar usuário com email existente (teste sequencial) | 1. Cadastrar usuário<br>2. Tentar cadastrar novamente com mesmo email | Email: diego.rocha@email.com | Mensagem: "Email já cadastrado" | Negativo |
| CT087 | RNF05 | Verificar email com diferença de maiúsculas/minúsculas | 1. Cadastrar "Email@teste.com"<br>2. Tentar cadastrar "EMAIL@teste.com" | Email: EMAIL@teste.com | Sistema deve tratar como email duplicado (case insensitive) | Negativo |
| CT088 | RNF05 | Alterar email para existente (edição de perfil) | 1. Usuário A tenta alterar email para email do Usuário B | Novo email: marcia.silva@email.com (já usado) | Mensagem: "Email já utilizado por outro usuário" | Negativo |
| CT089 | RNF05 | Manter próprio email ao editar perfil | 1. Usuário edita perfil mantendo mesmo email | Email: amanda.oliveira@email.com | Atualização permitida (não deve bloquear por duplicidade consigo mesmo) | Positivo |

---

##  RESUMO DOS CASOS DE TESTE

| Requisito | Quantidade de Testes |
|:---------:|:---------------------:|
| RF01 - Cadastro de Usuário | 14 |
| RF02 - Login de Usuário | 9 |
| RF03 - Cadastro de Evento | 10 |
| RF04 - Listagem de Eventos | 7 |
| RF05 - Inscrição em Evento | 9 |
| RF06 - Cancelamento de Inscrição | 8 |
| RNF01 - Validação de Campos | 7 |
| RNF02 - Segurança de Senha | 7 |
| RNF03 - Tempo de Resposta | 7 |
| RNF04 - Compatibilidade | 6 |
| RNF05 - Integridade de Dados | 5 |
| **TOTAL** | **89 casos de teste** |
