function escolherPersonagem(){
    let escolhaClasse = prompt("Informe a classe do Herói que você deseja: ")
    let nível = prompt("Qual nível do seu personagem: ")

    if(escolhaClasse === "Guerreiro") {
        if(nível >= 50 ){
            alert(`Você é um guerreiro lendário! Classe: ${escolharClasse}`)
        }else{
            alert("Continue upando, seu noob!!!")
        }
    }else if(escolhaClasse === "Mago"){
            alert(`Você domina a magia suprema! Classe: ${escolhaClasse}`)
            if(nível >= 50 ){
            }else{
                alert("Continue upando, seu noob!!!")
            }
    }else if(escolhaClasse === "Arqueiro"){
            alert(`Você é um mestre das flechas! Classe: ${escolhaClasse}`)
            if(nível >= 50 ){
            }else{
                    alert("Continue upando, seu noob!!!")
            }
        } else {
            alert("Classe não reconhecida.")
        
        }
}
escolherPersonagem()


// OUTRA OPÇÃO SERIA

function escolherPersonagem(){
    let escolhaClasse = prompt("Informe a classe do Herói que você deseja: ")
    // Pede ao usuário o nível e converte tbm sua resposta
    let nível = prompt("Qual nível do seu personagem: ")
    // Verificando se o personagem é guerreiro e o nível é 50 ou mais
    if(escolhaClasse === "Guerreiro" && nível >= 50) {
            alert(`Você é um guerreiro lendário! Classe: ${escolharClasse}`)
        }else if(escolhaClasse === "mago" && nível >= 50){
            alert("Você domina a magia suprema meu querido!")
        }else if(escolhaClasse === "Arqueiro" && nível >= 50){
            alert("Você é o mestre das flechas!")
        } // Caso nenhum das condições acima seja verdadeira
        else{
            alert("CONTINUE UPANDO SEU NOOB!!!!")
        }
            
}
escolherPersonagem()