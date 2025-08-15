// Escrevendo as funções
function dancar(){
    alert("Você ganhou uma dancinha virtual 🕺💃")
}

// Função chamarHeroi
function chamarHeroi(nomeHeroi){ 
    alert(nomeHeroi.toUpperCase()+ "!!!!")
}

// Criar apelido
function criarApelido(nome, animal){
    alert("Seu apelido é: " + nome + " " + animal + "🐺")
}

// Daqui pra baixo utilizamos o prompt na função e não no botão no html
// Função de Moedas

function moedasTotais(p, g){
    return Number(p) + Number(g)*5
}
function mostrarMoedas(){
    let p = prompt("Quantas moedas pequenas você tem, meu jovem? ")
    let g = prompt("Quantas moedas grandes você tem, meu jogem? ")
    let total = moedasTotais(p, g)
    alert(" Você fez" + total + "pontos em moedas !")
}

// Mostrar codinome
function mostrarCodinome(){
    let objeto = prompt( "Digite um objeto ai: ")
    let numero = prompt( "Digite um número ai: ")
    alert("Seu codinome é: " + objeto + numero + "😎")
}

// Chocolate arrow function
const calcularChocolate = (dinheiro) => {
    return (dinheiro / 2.5)
}
function mostrarChocolate(){
    let grana = prompt("Quantos reais você tem? ")
    alert("Você pode comprar " + calcularChocolate(Number(grana)) + " chocolates ")
}