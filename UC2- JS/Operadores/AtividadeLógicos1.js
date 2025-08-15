// Caso 1
/// ====================================================================
// Variáveis

let idade = 19                   // a idade da pessoa
let assinaturaPaga = true        // se tem assinatura paga ou não

// Checando as condições:

let podeEntrar = (idade >= 18) && (assinaturaPaga == true)

// Resultado:

console.log(podeEntrar)       // true se a pessoa pode entrar, e false se não


// Caso 2
/// ====================================================================
//Variáveis

let idade2 = 20                   // a idade da pessoa
let cachaça = true                // se pode comprar ou não

// Checando as condições:

let podeComprar = (idade >= 18) && (cachaça == true)

// Resultado:

console.log(podeComprar)      // true se a pessoa pode comprar, e false se não


// Caso 3
/// ====================================================================
//Variáveis

let clienteVip = true
let valor = 80

// Checando as condições:

let cupomDesconto = (clienteVip = true) || (valor > 100)

// Resultado:

console.log(cupomDesconto)      // true se a pessoa pode comprar, e false se não


// Caso 4
/// ====================================================================
//Variáveis

let vagaDeficiente = true
let vagaIdoso = false

// Checando as condições:

let podeEstacionar = (vagaDeficiente = true) || (vagaIdoso = true)

// Resultado:

console.log(podeEstacionar)

// ========= OU

let idade4 = 65
let temDeficiencia4 = true

let ehIdosa4 = idade4 >= 60      // pessoa é idosa se a idade for maior ou igual a 60
let podeEstacionar4 = (ehIdosa4 == true || temDeficiencia4 == true)

console.log(podeEstacionar4)


// Caso 5
/// ====================================================================
//Variáveis

let controleGame = true
let consoleGame = false

// Checando as condições:

let podeJogar = (controle = true) || (console = false)

// Resultado:

console.log(podeJogar)


// Caso 6
/// ====================================================================
//Variáveis

let usuarioPermissao = true
let logado = false

// Checando as condições:

let acesso = (usuarioPermissao = true) && (logado = false)

// Resultado:

console.log(acesso)