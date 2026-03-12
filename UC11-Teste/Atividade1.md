# 📱 Casos de Teste — Aplicativo de Delivery Raiz & Batata

Este documento apresenta casos de teste para validar a funcionalidade de **cadastro de usuário** em um aplicativo de delivery.

---

# 🧪 CT001 - Cadastro de Usuário com Dados Válidos

## 🎯 Objetivo
Verificar se o sistema permite o cadastro de um novo usuário quando os dados informados são válidos.

## ⚙️ Pré-condições
- O sistema deve estar aberto na tela de cadastro.
- O usuário não deve possuir cadastro prévio no sistema.

## 📝 Dados de Entrada
| Campo | Valor |
|------|------|
| Nome | Maria Takanuku |
| Email | mariatakanuku11@email.com |
| Senha | senha123 |

## 🔄 Passos para Execução
1. Acessar a tela de cadastro.
2. Preencher os campos obrigatórios (nome, e-mail e senha).
3. Clicar no botão **"Cadastrar"**.

## ✅ Resultado Esperado
- O sistema deve exibir a mensagem: **"Cadastro realizado com sucesso!"**.
- O usuário deve ser **redirecionado para a tela de login**.
- O novo usuário deve ser **registrado no banco de dados do sistema**.

---

# 🧪 CT002 - Tentativa de Cadastro com Usuário Já Existente

## 🎯 Objetivo
Validar que o sistema **não permite cadastrar um usuário já existente**.

## ⚙️ Pré-condições
- O usuário **maria@email.com** já está cadastrado no sistema.

## 📝 Dados de Entrada
| Campo | Valor |
|------|------|
| Nome | Maria Takanuku |
| Email | mariatakanuku@email.com |
| Senha | senha123 |

## 🔄 Passos para Execução
1. Acessar a tela de cadastro.
2. Preencher os campos com os dados de um usuário já existente.
3. Clicar no botão **"Cadastrar"**.

## ❌ Resultado Esperado
- O sistema deve exibir a mensagem: **"Usuário já cadastrado!"**.
- O cadastro **não deve ser realizado**.
- O usuário deve **permanecer na tela de cadastro**.

---

# 📊 Resumo dos Casos de Teste

| ID | Caso de Teste | Resultado Esperado |
|----|---------------|--------------------|
| CT001 | Cadastro de usuário com dados válidos | Cadastro realizado com sucesso |
| CT002 | Cadastro com usuário duplicado | Sistema impede cadastro |

---
