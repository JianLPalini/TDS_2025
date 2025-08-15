// For - Para

// Variável de controle | condição | incremento
for (let voltas = 0; voltas <= 10; voltas ++){
    console.log(`Você já deu ${voltas} voltas!`)
}

/*let numeros = [10, 30, 50, 70, 90]
numeros [0] += 10
numeros [1] += 10
numeros [2] += 10
numeros [3] += 10
numeros [4] += 10
console.log(numeros) */

let numeros = [10, 30, 50, 70, 90]
console.log(numeros)
for (let i = 0; i < numeros.length; i++){
    numeros[i] += 10
}
console.log(numeros)