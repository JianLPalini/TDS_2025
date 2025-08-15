const aluno = {
    nome: "Juriscreuso",
    idade: 10000,
    escola: "Indios",
    apresentar: function(){
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos e sou da escola ${this.escola}`)
    }
}
aluno.apresentar()
delete aluno.idade
console.log(aluno)