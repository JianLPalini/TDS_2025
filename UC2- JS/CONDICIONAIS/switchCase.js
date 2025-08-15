// Pedindo para o usuário digitar um número de 1 a 5
let dia = Number(prompt("Digite um número de 1 a 5 para o dia da semana: "))

// Verificando com switch qual dia foi escolhido
switch(dia){
    case 1:
        // se o número for 1
        alert("Segunda-feira: pior dia da semana!!!")
        break
    case 2:
        // se o número for 2
        alert("Terça-feira: é quase quarta!")
        break
    case 3:
        // se o número for 3
        alert("Quarta-feira: dia de jogo")
        break
    case 4:
        // se o número for 4
        alert("Quinta-feira: quase sexta!")
        break
    case 5:
        // se o número for 5
        alert("Sexta-feira: sextooooouuuuuuuu vamooooo lokiaar!!!")
        break

        default:
            alert("Dia inválido!")
}