const prompt = require('prompt-sync')();

let idadeUsuario = parseFloat(prompt('Insira Idade:'))
let maiorIdade = 18
let senha = parseFloat(prompt('Senha:'))

let entrar = (idadeUsuario >= maiorIdade) && (senha === 16111998)

console.log(`Seu acesso é: ${entrar}`)