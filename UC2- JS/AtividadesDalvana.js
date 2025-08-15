
/*let pizza = 0
while(pizza <= 22){
    console.log("Luiz comeu " + pizza + " fatias de pizza!")
    pizza = pizza + 1;
} console.log(pizza === 22, "O Luiz foi expulso da pizzaria!!! 🤣🤣") */


/*function verificarPerfil(programador, gostaDeCafe){
if (programador && gostaDeCafe){
    return "Você é um verdadeiro programador(a)!"
} else if (programador && !gostaDeCafe){
    return "Programador(a) que não gosta de café? Raro!"
} else if (!programador && gostaDeCafe){
    return "Pelo menos você tem bom gosto para bebidas!"
} else {
    return "Hmm... talvez você seja um unicórnio"
}
}
console.log(verificarPerfil(false, false)) */

let nomes = ["Ana", "Bruno", "Carlos", "Sofia"]
let nomes0 = nomes[0].toUpperCase();
let nomes1 = nomes[1].toUpperCase();
let nomes2 = nomes[2].toUpperCase();
let nomes3 = nomes[3].toUpperCase();
let contemA = nomes.filter(nome => nome.toLowerCase().includes("a")).length > 0;

console.log("Algum nome contém a letra 'a'? ", contemA);
nomes.push("Lucas");
nomes.shift();
console.log("Lista atualizada: ", nomes);