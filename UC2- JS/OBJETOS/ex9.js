function adicionarDetalhesPessoais (){
    const pessoa = {
        nome: "Srta Nevesca",
        idade: 26,
        profissao: "Vilã de Gelo",
        comidasFavoritas: ["Batata-Frita", "Lazanha", "Churrasco"],
        melhorAmigo: {
            nome: "Flash",
            idade: 28,
        }
    }
 console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${pessoa.comidasFavoritas[0]}, ${pessoa.comidasFavoritas[1]}, ${pessoa.comidasFavoritas[2]} . Seu melhor amigo se chama ${pessoa.melhorAmigo.nome} e tem ${pessoa.melhorAmigo.idade} `)

 const pessoa2 = {
    ...pessoa,
    nome: "Flash",
    idade: 28,
    profissao: "Herói wkjhlrqfnqrejfahweiodhkulwedhcjkwaqecjuhwailcjhveialsjchileahsilcvhwiuohweauischwqaugceuisawgcuegwqukdfchcb",
    comidasFavoritas: ["Pizza", "Hamburguer", "Massa"],
    melhorAmigo: {
        nome: "Srta Nevasca",
        idade: 26,
    }
}
console.log(`O nome da pessoa é ${pessoa2.nome} e suas comidas preferidas são ${pessoa2.comidasFavoritas[0]}, ${pessoa2.comidasFavoritas[1]}, ${pessoa2.comidasFavoritas[2]} . Seu melhor amigo se chama ${pessoa2.melhorAmigo.nome} e tem ${pessoa2.melhorAmigo.idade} `)
}
adicionarDetalhesPessoais()
