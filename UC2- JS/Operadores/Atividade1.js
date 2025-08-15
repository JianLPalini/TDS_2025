let numeroInicial = 15
let multiplicador = 10
let divisor = 20

// 1. Multiplicando o número inicial
let calculo1 = numeroInicial*multiplicador

// 2. Dividindo o resultado pelo divisor
let calculo2 = calculo1/divisor

// 3. Calculando o resto da divisão entre esse resultado e 7
let calculo3 = calculo2%7

// 4. Soma de 10 no valor obtido
let calculo4 = calculo3+10

// 5. Subtraia 3 vezes o numeroInicial
let calculo5 = calculo4-numeroInicial-numeroInicial-numeroInicial
let calculo6 = calculo4-(3* numeroInicial)

console.log("Resultado =", calculo1) // 150
console.log("Resultado =", calculo2) // 7.5
console.log("Resultado =", calculo3) // 0.5
console.log("Resultado =", calculo4) // 10.5
console.log("Resultado =", calculo5) // -34.5
console.log("Resultado =", calculo6) // -34.5
