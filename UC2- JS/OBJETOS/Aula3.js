// Espalhamento ou Spread ...

const usuario = {
    nome: 'julio',
    idade: 32,
    email: 'profjulio@gmail.com',
    cargo: 'professor',
    endereço: 'Rua Irineu',
    CPF: 70050060006
}

const novoUsuario = {
    ...usuario,
    nome: 'jorge',
    idade: 28,
    email: 'profjorge@gmail.com',
    cargo: "",
    endereço: "",
    CPF: "",
}

const novoUsuario1 = {
    ...usuario,
    nome: 'Jacinto Leite',
    idade: 70,
    email: 'profjancinto@gmail.com',
    cargo: "",
    endereço: "",
    CPF: "",

}
console.log(usuario)
console.log(novoUsuario)
console.log(novoUsuario1)


// Copiando Arrays

const listaDeNomes = ["Mika", "Paula", "Vitor"]

const copiaListaDeNomes = [...listaDeNomes]

console.log(copiaListaDeNomes) // ["Mika", "Paula", "Vitor"]
