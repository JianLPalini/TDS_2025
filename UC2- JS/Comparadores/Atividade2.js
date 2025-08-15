let nomePessoa = "Jian"
let anoNascimento = 1998
let anoAtual = 2025
let anoFuturo = 2050
let idadeAtual = (anoAtual-anoNascimento)
let maiorIdade = idadeAtual >= 18
let futuro = ((anoFuturo-anoAtual)+idadeAtual)

console.log("Nome:", nomePessoa)
console.log("Idade agora:", idadeAtual)
console.log("Maior de idade:", maiorIdade)
console.log("Idade em 2050:", futuro)