// Estrutura de um OBJETO

//Os valores de uma chave também podem ser arrays e funções(nesse caso, métodos)

const professor = {
    nome: 'Vitor',
    idade: 27,
    tarefas: ['Dar aula', 'Responder dúvidas'],
    contarPiada: function(){
        console.log('É pa vê ou pa comê?')
    }
}
console.log(professor)

// NOTAÇÃO DE PONTO .

const professor3 = {
    nome: "Vitor",
    idade: 27,
    email: 'vitor@gmail.com'
}
console.log(professor3.nome)


// NOTAÇÃO DE COLCHETES []

const professor1 = {
    nome: "Vitor",
    idade: 27,
    email: 'vitor@gmail.com'
}
console.log(professor1["email"])


//ALTERANDO VALORES

// NOTAÇÃO DE COLCHETES []

const professor2 = {
    nome: "Vitor",
    idade: 27,
    email: 'vitor@gmail.com'
}
professor2.nome = 'Mika'
professor2['email'] = 'profmika@gmail.com'

console.log(professor2)