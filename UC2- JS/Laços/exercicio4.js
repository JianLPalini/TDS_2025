/*
Dado um array de números, usando um loop for, retorne qual é o maior número
Ex:
let numero = [10, 90, 1000, 78]
O maior número é o 1000.
*/

let numeros = [10,90,1000,78]
// Criamos uma array chamada 'numeros' com quatro valores
let maior = numeros[0]
// Cria uma variável 'maior' e atribui a ela o primeiro número da array, no caso armazenado o 10 no índice 0
// Neste momento, estamos assumindo que 10 é maior número ( mas pode mudar...)
for(let i=0; i<numeros.length; i++){
    // Inicia um laço 'for' que começa com índice 1 ( ou seja, o segundo número do array)
    // A condição i< numeros.leghth garante que o laço percorra os elementos restantes da array
    // Aa variável 'i' vai de 1 até 3 (índice dos últimos elementos)
     if (numeros[i] > maior) {
        // Verifica se o número atual do array é maior do que o que está na variável 'maior'
        // Se for, isso significa que encontramos um número ainda maior
    maior = numeros[i]; 
    // Atualiza o valor da variável 'maior' com o novo número maior encontrado
  }
}
let resultado = [maior]
console.log(`Maior Numero será: ${resultado}`)