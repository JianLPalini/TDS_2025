let frase = "     Eu adoro JavaScript e estudar com meus colegas incríveis!     "
let alterado1 = frase.trim()  // Comando .trim() tira os espaços
let alterado2 = frase.toLowerCase() // Comando .toLowerCase() deixa caixa baixa
let alterado3 = frase.includes("JavaScript")   // Comando .includes() verifica ocorrencia da string na frase
let alterado4 = frase.replaceAll("JavaScript", "TypeScript")  // Comando .replaceAll() Substitui o a ocorrencia da string

console.log(`Frase sem Espaço: ${alterado1}` )
console.log(`Frase em Caixa Baixa ${alterado2}`)
console.log(`Existe JavaScript na Frase ? ${alterado3}`)
console.log(`Frase ${alterado4}`)


let frutas = ["maçã", "banana", "laranja"]
frutas.splice(2,1, "Morango")

console.log(frutas)

frutas.splice(0,1, "Abacaxi")

console.log(frutas)

frutas.splice(0,1)

console.log(frutas)

frutas.splice(1,1, "Manga")

console.log(frutas)


// Exercicio pela Professora

let frutas2 = ["maçã", "banana", "laranja"]
//1. Adiciona "morango" no final com push()
frutas.push("Morango")
//2. Adiciona "abacaxi" no começo com unshift()
frutas.unshift("Abacaxi")
//3. Remove o último elemento com o shift()
frutas.shift()
//4. Remove o último elemento com o pop()
frutas.pop()
//5. Remove o elemento na posição 1 e adiciona "manga". O splice pode auxiliar
frutas.splice(1,1, "Manga")

// Exibe o array final
console.log(frutas)


