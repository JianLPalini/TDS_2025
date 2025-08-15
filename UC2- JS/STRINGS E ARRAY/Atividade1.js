// Concatenação de Strings

const nome = "Mika"
const idade = 27
const frase = "Meu nome é " + nome + "e tenho " + idade + "anos"


// Template Strings

const nome1 = "Mika"
const idade1 = 27
const frase1 = `eu nome é ${nome} e tenho ${idade} anos`


const nome2 = "Jian"
const cor = "Azul Turquesa"
const filme = "Eragon"
const time = " Grêmio"

const frase2 = "Meu nome é " + nome2 + "e minha cor favorita é " + cor + ". Gosto muito de estudar no SENAC e curto o filme " + filme + ". Além disso, meu time é o " + time
const frase3 = `Meu nome é ${nome2} e minha cor favorita é ${cor} . Gosto muito de estudar no SENAC e curto o filme  ${filme}. Além disso, meu time é o ${time}`

console.log(frase2)
console.log(frase3)

// Propriedade length

const nome3 = "Jian Luca Palini"
const comidaFavorita = "Lasanha e Comida Italiana"

console.log(nome3.length)
console.log(comidaFavorita.length)

// Método toLowerCase ()

const frase4 = "OieEeEee!"
const fraseMinuscula = frase4.toLowerCase()

console.log(fraseMinuscula)


// Método toUpperCase()

const frase5 = "OieEeEee!"
const fraseMaiuscula = frase5.toUpperCase()

console.log(fraseMaiuscula)

// Método trim ()

const email = "   mika@gmail.com   "

console.log(email.trim())

//Método includes(caracteres)

const frase6 = "Hoje comi cenoura"

frase6.includes("cenoura")
frase6.includes("batata")

console.log(frase6.includes("cenoura"))
console.log(frase6.includes("batata"))

// Método replaceAll(chars1, chars2)

const frase7 = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase7.replaceAll("cenoura", "batata")

console.log(novaFrase)

// ARRAYS
//Lista de Elementos

//Exemplo: Lista de compras, lista de alunos, lista de contatos.

//Array sempre começa no "ZERO" (0), acessa as arrays atraves dos ÍNDICES"

const racas = ["Golden", "Shit zu", "Bulldog", "Pastor Alemão", "Husky Siberiano"]
const índices = racas[1]

console.log(índices)







