#  Plano de Testes - Sistema de Gestão de Eventos

---

##  MÓDULO 1 - GERENCIAMENTO DE USUÁRIOS

### RF01 — Cadastro de Usuário

| ID | Requisito | Descrição | Pré-condição | Passos | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT001 | RF01 | Registrar participante com dados consistentes | Base vazia | 1. Acessar formulário de registro<br>2. Informar dados válidos<br>3. Submeter formulário | Nome: Rafaela Mendonça<br>E-mail: rafa.mendonca@provedor.com<br>Senha: Futebol@2024<br>Nasc: 12/04/1992 | Conta criada com êxito<br>Email de boas-vindas enviado | Positivo |
| CT002 | RF01 | Registrar com email em uso | Email rafa.mendonca@provedor.com já existe | 1. Acessar formulário de registro<br>2. Tentar novo cadastro com mesmo e-mail | Nome: Camila Duarte<br>E-mail: rafa.mendoca@provedor.com<br>Senha: Camila@123<br>Nasc: 23/08/1995 | Sistema exibe: "Este e-mail já possui cadastro"<br>Registro não efetivado | Negativo |
| CT003 | RF01 | Registrar com nome composto por caracteres especiais | Usuário novo | 1. Acessar formulário de registro<br>2. Inserir nome com símbolos | Nome: "@na lúcia"<br>E-mail: ana.lucia@email.com<br>Senha: Ana@2024<br>Nasc: 05/10/1988 | Mensagem: "Nome contém caracteres não permitidos" | Negativo |
| CT004 | RF01 | Registrar com e-mail sem domínio válido | Usuário novo | 1. Acessar formulário de registro<br>2. Informar e-mail incompleto | Nome: Paulo Henrique<br>E-mail: "paulo.henrique@"<br>Senha: Paulo@2024<br>Nasc: 17/03/1991 | Sistema rejeita: "Formato de e-mail inválido" | Negativo |
| CT005 | RF01 | Registrar com senha sem caractere especial | Usuário novo | 1. Acessar formulário de registro<br>2. Informar senha sem símbolo | Nome: Juliana Farias<br>E-mail: ju.farias@email.com<br>Senha: "Juliana2024"<br>Nasc: 30/11/1993 | Mensagem: "A senha deve conter pelo menos um caratere especial (@, #, $, etc.)" | Negativo |
| CT006 | RF01 | Registrar com senha contendo apenas letras | Usuário novo | 1. Acessar formulário de registro<br>2. Informar senha alfabética | Nome: Marcos Vinicius<br>E-mail: marcos.v@email.com<br>Senha: "SegurancaForte"<br>Nasc: 08/07/1990 | Mensagem: "A senha deve conter pelo menos um número" | Negativo |
| CT007 | RF01 | Registrar com senha de 7 caracteres | Usuário novo | 1. Acessar formulário de registro<br>2. Informar senha curta | Nome: Tatiane Souza<br>E-mail: tati.souza@email.com<br>Senha: "Tati@24"<br>Nasc: 19/12/1994 | Mensagem: "A senha deve ter no mínimo 8 caracteres" | Negativo |
| CT008 | RF01 | Registrar com data futura | Usuário novo | 1. Acessar formulário de registro<br>2. Informar data posterior a hoje | Nome: Roberto Carlos<br>E-mail: beto.carlos@email.com<br>Senha: Beto@2024<br>Nasc: 10/05/2030 | Mensagem: "Data de nascimento não pode ser futura" | Negativo |
| CT009 | RF01 | Registrar com usuário menor de 14 anos | Usuário novo | 1. Acessar formulário de registro<br>2. Informar data com idade inferior a 14 | Nome: Sofia Oliveira<br>E-mail: sofia.o@email.com<br>Senha: Sofia@2024<br>Nasc: 15/09/2015 | Mensagem: "Cadastro permitido apenas para maiores de 14 anos" | Negativo |
| CT010 | RF01 | Registrar com campos obrigatórios ausentes | Usuário novo | 1. Acessar formulário de registro<br>2. Enviar sem preencher | Todos os campos vazios | Validação em cada campo<br>Formulário não submetido | Negativo |
| CT011 | RF01 | Registrar com e-mail contendo acentos | Usuário novo | 1. Acessar formulário de registro<br>2. Informar e-mail acentuado | Nome: André Luiz<br>E-mail: "andré.luiz@email.com"<br>Senha: Andre@2024<br>Nasc: 22/02/1989 | Mensagem: "E-mail não pode conter acentos" | Negativo |
| CT012 | RF01 | Registrar com CPF no lugar do nome | Usuário novo | 1. Acessar formulário de registro<br>2. Inserir numeros no campo nome | Nome: "123.456.789-00"<br>E-mail: usuario.teste@email.com<br>Senha: Teste@2024<br>Nasc: 01/01/2000 | Mensagem: "Nome não pode conter apenas números" | Negativo |

---

### RF02 — Autenticação no Sistema

| ID | Requisito | Descrição | Pré-condição | Passos | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT013 | RF02 | Acessar com credenciais corretas | Conta de Rafaela Mendonça ativa | 1. Acessar tela de entrada<br>2. Informar e-mail e senha<br>3. Clicar em "Acessar" | E-mail: rafa.mendonca@provedor.com<br>Senha: Futebol@2024 | Autenticação bem-sucedida<br>Direcionamento para painel do participante | Positivo |
| CT014 | RF02 | Acessar com senha incorreta | Conta ativa | 1. Acessar tela de entrada<br>2. Informar e-mail e senha errada | E-mail: rafa.mendonca@provedor.com<br>Senha: Futebol@2023 | Mensagem: "E-mail ou senha não conferem" | Negativo |
| CT015 | RF02 | Acessar com e-mail não registrado | E-mail inexistente | 1. Acessar tela de entrada<br>2. Informar e-mail não cadastrado | E-mail: usuario.inexistente@dominio.com<br>Senha: Qualquer@123 | Mensagem: "Usuário não encontrado no sistema" | Negativo |
| CT016 | RF02 | Tentar acesso sem informar senha | - | 1. Acessar tela de entrada<br>2. Preencher apenas e-mail | E-mail: rafa.mendonca@provedor.com<br>Senha: (vazio) | Campo senha destacado como obrigatório | Negativo |
| CT017 | RF02 | Tentar acesso com e-mail em branco | - | 1. Acessar tela de entrada<br>2. Preencher apenas senha | E-mail: (vazio)<br>Senha: Futebol@2024 | Campo e-mail destacado como obrigatório | Negativo |
| CT018 | RF02 | Acessar com e-mail contendo espaços extras | Conta ativa | 1. Acessar tela de entrada<br>2. Digitar e-mail com espaços | E-mail: "  rafa.mendonca@provedor.com  "<br>Senha: Futebol@2024 | Sistema ignora espaços e autentica com sucesso | Positivo |
| CT019 | RF02 | Bloqueio após múltiplas tentativas | Conta ativa | 1. Tentar login 5x com senha errada<br>2. Tentar novamente com senha correta | E-mail: rafa.mendonca@provedor.com<br>Senha correta: Futebol@2024 | Mensagem: "Conta temporariamente bloqueada por segurança. Tente novamente em 30 minutos" | Negativo |
| CT020 | RF02 | Acessar com letras maiúsculas no e-mail | Conta ativa | 1. Acessar tela de entrada<br>2. Digitar e-mail em CAIXA ALTA | E-mail: "RAFA.MENDONCA@PROVEDOR.COM"<br>Senha: Futebol@2024 | Sistema normaliza e autentica com sucesso | Positivo |

---

##  MÓDULO 2 - ADMINISTRAÇÃO DE EVENTOS

### RF03 — Criação de Eventos

| ID | Requisito | Descrição | Pré-condição | Passos | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT021 | RF03 | Criar evento com informações completas | Usuário com perfil administrador logado | 1. Acessar painel admin<br>2. Preencher formulário de evento<br>3. Publicar | Título: "Conferência de Inovação 2025"<br>Descrição: "Tendências em tecnologia e negócios"<br>Realização: 20/08/2025<br>Capacidade: 200 pessoas | Evento criado e disponível na listagem pública | Positivo |
| CT022 | RF03 | Criar evento sem título | Admin logado | 1. Acessar formulário de evento<br>2. Deixar título vazio<br>3. Preencher demais campos | Título: (vazio)<br>Descrição: "Evento de networking"<br>Data: 15/09/2025<br>Vagas: 50 | Sistema impede criação: "Título do evento é obrigatório" | Negativo |
| CT023 | RF03 | Criar evento com data retroativa | Admin logado | 1. Acessar formulário de evento<br>2. Informar data anterior ao dia atual | Título: "Evento Histórico"<br>Descrição: "Para fins de arquivo"<br>Data: 05/03/2022<br>Vagas: 100 | Mensagem: "A data do evento deve ser futura" | Negativo |
| CT024 | RF03 | Criar evento com capacidade zero | Admin logado | 1. Acessar formulário de evento<br>2. Informar capacidade como zero | Título: "Workshop Exclusivo"<br>Descrição: "Treinamento técnico"<br>Data: 10/10/2025<br>Vagas: 0 | Mensagem: "Capacidade deve ser no mínimo 1 participante" | Negativo |
| CT025 | RF03 | Criar evento com descrição extremamente longa | Admin logado | 1. Acessar formulário de evento<br>2. Inserir descrição com 2000 caracteres | Descrição: (texto extenso) | Sistema permite ou trunca com aviso | Limite |
| CT026 | RF03 | Criar evento com título duplicado | Evento "Conferência de Inovação 2025" já existe | 1. Tentar criar evento com mesmo título | Título: "Conferência de Inovação 2025" | Mensagem: "Já existe um evento com este título" | Negativo |
| CT027 | RF03 | Criar evento sem descrição | Admin logado | 1. Acessar formulário de evento<br>2. Deixar descrição em branco | Título: "Meetup de QA"<br>Descrição: (vazio)<br>Data: 05/11/2025<br>Vagas: 30 | Mensagem: "Descrição do evento é obrigatória" | Negativo |
| CT028 | RF03 | Criar evento com capacidade muito alta (5000) | Admin logado | 1. Acessar formulário de evento<br>2. Inserir valor elevado | Título: "Festival de Tecnologia"<br>Capacidade: 5000 | Evento criado com sucesso (teste de limite superior) | Positivo |
| CT029 | RF03 | Criar evento com data igual a hoje | Admin logado | 1. Acessar formulário de evento<br>2. Inserir data atual | Título: "Palestra Relâmpago"<br>Data: (data atual) | Mensagem: "Eventos devem ser agendados com pelo menos 1 dia de antecedência" | Negativo |
| CT030 | RF03 | Usuário comum tentar criar evento | Participante logado (não admin) | 1. Acessar URL de criação de evento diretamente | - | Redirecionamento para página inicial<br>Acesso negado | Negativo |

---

### RF04 — Visualização de Eventos

| ID | Requisito | Descrição | Pré-condição | Passos | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT031 | RF04 | Exibir todos os eventos disponíveis | 8 eventos cadastrados (5 futuros, 3 passados) | 1. Acessar página inicial de eventos | - | Apenas os 5 eventos futuros são exibidos<br>Ordenados por data crescente | Positivo |
| CT032 | RF04 | Exibir mensagem para lista vazia | Nenhum evento cadastrado | 1. Acessar página inicial de eventos | - | Mensagem: "Não há eventos programados no momento"<br>Ilustração informativa | Positivo |
| CT033 | RF04 | Verificar cálculo de vagas | Evento com 50 vagas e 18 inscrições | 1. Acessar página do evento | - | Exibição: "32 vagas disponíveis" | Positivo |
| CT034 | RF04 | Buscar evento por palavra-chave | Eventos com diversos títulos | 1. Acessar página de eventos<br>2. Utilizar campo de busca<br>3. Digitar "Conferência" | Termo: "Conferência" | Retorna apenas eventos contendo a palavra no título | Positivo |
| CT035 | RF04 | Buscar evento inexistente | Base com eventos cadastrados | 1. Acessar página de eventos<br>2. Buscar por termo não relacionado | Termo: "Hackathon" | Mensagem: "Nenhum evento encontrado para esta busca" | Positivo |
| CT036 | RF04 | Ordenar eventos por data | Eventos em diferentes datas | 1. Acessar página de eventos | - | Primeiro evento: data mais próxima<br>Último evento: data mais distante | Positivo |
| CT037 | RF04 | Visualizar detalhes de evento específico | Evento "Conferência de Inovação 2025" existente | 1. Clicar no card do evento | - | Página detalhada com descrição completa, data, endereço e vagas | Positivo |
| CT038 | RF04 | Acessar evento cancelado | Evento marcado como cancelado | 1. Buscar pelo evento cancelado | - | Evento não aparece na listagem principal<br>Acesso apenas por link direto com aviso de cancelamento | Negativo |

---

##  MÓDULO 3 - PARTICIPAÇÃO EM EVENTOS

### RF05 — Registro em Eventos

| ID | Requisito | Descrição | Pré-condição | Passos | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT039 | RF05 | Participante se inscrever em evento disponível | Rafaela logada, evento com 200 vagas, 45 inscritos | 1. Acessar página do evento<br>2. Clicar em "Quero Participar" | Evento: "Conferência de Inovação 2025" | Confirmação: "Inscrição realizada com sucesso!"<br>Vagas atualizadas: 154 disponíveis | Positivo |
| CT040 | RF05 | Tentar inscrição duplicada | Rafaela já inscrita no evento | 1. Acessar mesma página do evento<br>2. Clicar novamente em "Quero Participar" | - | Mensagem: "Você já está inscrito neste evento"<br>Botão alterado para "Inscrição Confirmada" | Negativo |
| CT041 | RF05 | Inscrever-se em evento lotado | Evento com 0 vagas | 1. Acessar evento lotado<br>2. Tentar inscrição | - | Mensagem: "Evento esgotado"<br>Botão desabilitado | Negativo |
| CT042 | RF05 | Inscrever-se em evento já realizado | Evento com data 01/01/2024 | 1. Acessar evento passado | - | Botão "Quero Participar" ausente ou desabilitado<br>Mensagem: "Evento já encerrado" | Negativo |
| CT043 | RF05 | Usuário não autenticado tentar inscrição | Visitante não logado | 1. Acessar evento<br>2. Clicar em "Quero Participar" | - | Redirecionamento para tela de login<br>Mensagem: "Faça login para realizar sua inscrição" | Negativo |
| CT044 | RF05 | Concorrência na última vaga | Evento com 1 vaga restante | 1. Dois usuários tentam inscrição simultaneamente | - | Apenas um confirma inscrição<br>Outro recebe: "Vaga preenchida durante sua tentativa" | Concorrência |
| CT045 | RF05 | Inscrever-se em evento com restrição de idade | Evento para maiores de 18 anos, Rafaela tem 32 | 1. Tentar inscrição | - | Inscrição permitida (idade compatível) | Positivo |
| CT046 | RF05 | Inscrever-se em evento com restrição de idade | Evento para maiores de 18 anos, usuário de 16 anos | 1. Tentar inscrição | Usuário: Sofia Oliveira (9 anos) | Mensagem: "Evento não recomendado para sua faixa etária"<br>Inscrição bloqueada | Negativo |
| CT047 | RF05 | Verificar contador de inscritos após registro | Rafaela se inscreve | 1. Realizar inscrição<br>2. Observar atualização | - | Contador: "46 participantes confirmados" (antes 45) | Positivo |

---

### RF06 — Cancelamento de Participação

| ID | Requisito | Descrição | Pré-condição | Passos | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT048 | RF06 | Participante cancelar sua inscrição | Rafaela inscrita na "Conferência de Inovação 2025" (154 vagas disp.) | 1. Acessar "Minhas Inscrições"<br>2. Localizar evento<br>3. Clicar em "Cancelar participação"<br>4. Confirmar | - | Cancelamento confirmado<br>Vagas disponíveis: 155<br>Notificação enviada por e-mail | Positivo |
| CT049 | RF06 | Cancelar inscrição em evento que não participa | Rafaela não inscrita em determinado evento | 1. Acessar página do evento<br>2. Tentar cancelar | - | Opção de cancelamento não disponível<br>Mensagem: "Você não possui inscrição ativa neste evento" | Negativo |
| CT050 | RF06 | Cancelar sem estar logado | Visitante não autenticado | 1. Acessar URL de cancelamento diretamente | - | Redirecionamento para tela de login | Negativo |
| CT051 | RF06 | Cancelar inscrição em evento passado | Rafaela inscrita em evento de 01/01/2024 | 1. Acessar "Minhas Inscrições"<br>2. Verificar evento passado | - | Botão de cancelamento desabilitado<br>Mensagem: "Evento já realizado" | Negativo |
| CT052 | RF06 | Verificar liberação de vaga | Após cancelamento de Rafaela, novo usuário se inscreve | 1. Rafaela cancela<br>2. Paulo tenta inscrição | Usuário: Paulo Henrique | Paulo consegue inscrição com sucesso | Positivo |
| CT053 | RF06 | Administrador cancelar evento inteiro | Admin logado, evento com 50 inscritos | 1. Acessar painel admin<br>2. Selecionar evento<br>3. Clicar em "Cancelar Evento"<br>4. Justificar | Motivo: "Problemas logísticos" | Evento marcado como cancelado<br>Todos os inscritos notificados<br>Vagas liberadas | Positivo |
| CT054 | RF06 | Cancelar inscrição de outro participante | Usuário tenta cancelar inscrição alheia | 1. Acessar página do evento<br>2. Tentar manipular requisição | - | Sistema rejeita: "Operação não autorizada" | Negativo |
| CT055 | RF06 | Cancelar e reinscrever-se no mesmo dia | Rafaela cancela e muda de ideia | 1. Cancelar inscrição<br>2. Tentar nova inscrição no mesmo evento | - | Nova inscrição permitida (se houver vagas) | Positivo |

---

##  MÓDULO 4 - REQUISITOS TÉCNICOS

### RNF01 — Validações Obrigatórias

| ID | Requisito | Descrição | Tela | Passos | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:----:|:------:|:-------------------:|:----:|
| CT056 | RNF01 | Submeter cadastro sem data de nascimento | Registro | 1. Preencher demais campos<br>2. Deixar data em branco | Mensagem: "Informe sua data de nascimento" | Negativo |
| CT057 | RNF01 | Criar evento sem informar capacidade | Criação de evento | 1. Preencher título, descrição e data<br>2. Deixar capacidade em branco | Mensagem: "Capacidade máxima é obrigatória" | Negativo |
| CT058 | RNF01 | Login sem preencher senha | Autenticação | 1. Informar apenas e-mail<br>2. Tentar acessar | Campo senha destacado em vermelho | Negativo |
| CT059 | RNF01 | Cadastro sem preencher nome | Registro | 1. Preencher apenas e-mail, senha e data | Mensagem: "Nome completo é obrigatório" | Negativo |
| CT060 | RNF01 | Inscrição sem estar logado | Detalhes do evento | 1. Tentar inscrição sem autenticação | Redirecionamento para login | Negativo |

---

### RNF02 — Política de Senhas

| ID | Requisito | Descrição | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:----------------:|:-------------------:|:----:|
| CT061 | RNF02 | Senha sem letra maiúscula | "segura@123" | Mensagem: "Inclua pelo menos uma letra maiúscula" | Negativo |
| CT062 | RNF02 | Senha sem número | "Segura@forte" | Mensagem: "Inclua pelo menos um número" | Negativo |
| CT063 | RNF02 | Senha sem caractere especial | "Segura123" | Mensagem: "Inclua pelo menos um caractere especial (@, #, $, etc.)" | Negativo |
| CT064 | RNF02 | Senha com 7 caracteres | "Seg@123" | Mensagem: "Mínimo de 8 caracteres" | Negativo |
| CT065 | RNF02 | Senha válida | "Segura@2025" | Cadastro/alteração permitidos | Positivo |
| CT066 | RNF02 | Senha com caracteres repetitivos | "AAAAAA@1" | Mensagem: "Senha muito fraca, escolha uma combinação mais segura" | Negativo |
| CT067 | RNF02 | Senha com sequência numérica | "Segura@12345" | Senha aceita (não há restrição contra sequências) | Positivo |

---

### RNF03 — Performance

| ID | Requisito | Descrição | Método de Verificação | Critério de Aceite | Tipo |
|:--:|:---------:|:---------:|:---------------------:|:-------------------:|:----:|
| CT068 | RNF03 | Carregamento com poucos eventos | Medir tempo de resposta com 5 eventos | < 1.5 segundos | Desempenho |
| CT069 | RNF03 | Carregamento com muitos eventos | Medir tempo de resposta com 500 eventos | < 3 segundos | Desempenho |
| CT070 | RNF03 | Tempo de resposta do login | Medir desde o clique até redirecionamento | < 2 segundos | Desempenho |
| CT071 | RNF03 | Processamento de inscrição | Medir temo entre confirmação e feedback | < 1.5 segundos | Desempenho |
| CT072 | RNF03 | Busca com filtro | Medir tempo de resposta da busca | < 2 segundos | Desempenho |
| CT073 | RNF03 | Carregamento em rede 3G | Simular conexão lenta | Carregamento completo em < 5 segundos | Desempenho |

---

### RNF04 — Compatibilidade entre Navegadores

| ID | Requisito | Descrição | Navegador | Ação | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:---------:|:----:|:-------------------:|:----:|
| CT074 | RNF04 | Executar fluxo completo no Chrome | Chrome (v120+) | CT001, CT013, CT039, CT048 | Todas as funcionalidades operam corretamente | Compatibilidade |
| CT075 | RNF04 | Executar fluxo completo no Firefox | Firefox (v115+) | CT001, CT013, CT039, CT048 | Todas as funcionalidades operam corretamente | Compatibilidade |
| CT076 | RNF04 | Executar fluxo completo no Edge | Edge (v120+) | CT001, CT013, CT039, CT048 | Todas as funcionalidades operam corretamente | Compatibilidade |
| CT077 | RNF04 | Executar fluxo completo no Safari | Safari (v15+) | CT001, CT013, CT039, CT048 | Todas as funcionalidades operam corretamente | Compatibilidade |
| CT078 | RNF04 | Testar responsividade em smartphone | Chrome (Android) | Acessar em tela 375x667 | Interface adaptada, elementos acessíveis | Compatibilidade |
| CT079 | RNF04 | Testar responsividade em tablet | Safari (iPad) | Acessar em tela 768x1024 | Interface adaptada, elementos acessíveis | Compatibilidade |

---

### RNF05 — Integridade e Concorrencia

| ID | Requisito | Descrição | Procedimento | Massa de Testes | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:----------------:|:-------------------:|:----:|
| CT080 | RNF05 | Evitar e-mail duplicado em cadastros simultâneos | Disparar 2 requisições paralelas com mesmo e-mail | E-mail: rafa.mendonca@provedor.com | Apenas 1 registro persistido<br>Retorno de erro para o segundo | Concorrência |
| CT081 | RNF05 | Verificar unicidade com case insensitive | Cadastrar e-mail e tentar outro com variação | 1º: "Teste@email.com"<br>2º: "TESTE@EMAIL.COM" | Sistema reconhece como duplicidade | Negativo |
| CT082 | RNF05 | Atualizar perfil mantendo próprio e-mail | Usuário edita cadastro sem alterar e-mail | E-mail mantido: rafa.mendonca@provedor.com | Atualização permitida | Positivo |
| CT083 | RNF05 | Tentar alterar e-mail para um já existente | Usuário tenta adotar e-mail de outro | Novo e-mail: juliana.farias@email.com (já usado) | Mensagem: "E-mail já cadastrado por outro usuário" | Negativo |
| CT084 | RNF05 | Concorrência em última vaga | 2 usuários disputam 1 vaga restante | Evento com 1 vaga | Apenas 1 inscrição confirmada | Concorrência |

---

##  QUARO RESUMO

| Módulo | Requisito | Quantidade de Testes |
|:------:|:---------:|:---------------------:|
| **MÓDULO 1** | RF01 - Cadastro de Usuário | 12 |
| | RF02 - Auteticação | 8 |
| **MÓDULO 2** | RF03 - Criação de Eventos | 10 |
| | RF04 - Visualização de Eventos | 8 |
| **MÓDULO 3** | RF05 - Inscrição em Eventos | 9 |
| | RF06 - Cancelamento | 8 |
| **MÓDULO 4** | RNF01 - Validações | 5 |
| | RNF2 - Senhas | 7 |
| | RNF03 - Performance | 6 |
| | RNF04 - Compatibilidade | 6 |
| | RNF05 - Integridade | 5 |
| | **TOTAL GERAL** | **84 CASOS** |
