let palavra = "Desenvolvimento"
let contador = 0
for (const letra of palavra){
    if("aeiou".includes(letra)){
        contador ++
    }
}
console.log(`Quantidade de vogais: ${contador}`);