// Função que compara dois números (num1 e num2)

function comparaNumeros(num1, num2){
    // Trabalhando com condicional... Verificando a condição (num1===num2)
    if(num1 === num2){
        // Se forem iguais, exibe uma mensagem de sucesso no console
        alert("Sucesso! Os números são iguais cara! ")
    }else{
        // Se a condição não for satisfeita ou verdadeira, ele executa o codigo abaixo
        alert("Que peninha... Os números não são iguais cara!")

    }
        
}
// Solicita ao usuário o primeiro número com prompt
let entrada1 = Number(prompt("Digite o primeiro número: "))
let entrada2 = Number(prompt("Digite o segundo número: "))
// Chama a função passando os dois parâmetros
comparaNumeros(entrada1, entrada2)
