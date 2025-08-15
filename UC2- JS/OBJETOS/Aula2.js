/*const cachorro = {
    nome: "Bolt",
    raca: "Vira-lata",
    latir: function() {
        console.log("Au au!");
    }
}
cachorro.latir(); // chama o método */

/* const donoDoPet = {
    nome1: "Vitor Hugo",
    pet: {
        nomeDoPet: "Wanda",
        raca: "Vira-lata",
        idade: 1
    }
}
console.log(donoDoPet.pet.nomeDoPet)
console.log(donoDoPet.nome1) */


// Acessando arrays dentro de objetos {[]}

/*const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}
console.log(curso.linguagens[0]) */


// Array de objetos [{}]

const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]
console.log(professores[1].nome)
