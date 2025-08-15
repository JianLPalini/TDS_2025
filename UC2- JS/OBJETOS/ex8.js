const filme = {
    nomeFilme: "John Wick - De volta ao Jogo",
    direção: "Chad Stahelski",
    anoLançamento: 2014,
    elenco: ["Keanu Reeves", "Ian McShane", "Lance Reddick", "John Leguizamo", "Alfie Owen-Allen", "Michael Nyqvist", "Adrianne Palicki", "Willem Dafoe", "Daniel Bernhardt", "Scott Adkins"],
    assistiu: true,
    nomePersonagem: ["John Wick", "Winston", "Charon", "Aurelio", "Iosef Tarasov", "Viggo Tarasov", "Ms. Perkins", "Marcus", "Kirill", "Scott"]
}
/*console.log(filme.nomeFilme)
console.log(filme.direção)
console.log(filme.assistiu)
console.log(filme['elenco'])
console.log(filme['assistiu'])*/

console.log(`${filme.elenco[0]} interpreta ${filme.nomePersonagem[0]}`)
console.log(`${filme.elenco[1]} interpreta ${filme.nomePersonagem[1]}`)
console.log(`${filme.elenco[2]} interpreta ${filme.nomePersonagem[2]}`)
console.log(`${filme.elenco[3]} interpreta ${filme.nomePersonagem[3]}`)
filme.elenco[0]= "Xuxa"
console.log(filme)