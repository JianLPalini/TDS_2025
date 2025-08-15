const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt("Coloque o Número 1:"))
let numero2 = parseFloat(prompt("Coloque o Número 2:"))
let soma = (numero1+numero2)

console.log(`Soma: ${soma}`)