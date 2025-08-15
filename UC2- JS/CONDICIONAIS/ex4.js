function escolherRoupa(){
    let temperatura = prompt("Digite a temperatura atual em C°: ")

    if(temperatura > 30){
        alert("Vista roupas leves. Está muito quente!")
    }else if(temperatura >= 20 && temperatura <= 30){
        alert("Use algo confortável, como camiseta e calça.")
    }else if(temperatura >= 10 && tempertura <= 19){
        alert("Coloque um casaco. Está fresquinho.")
    }else{
        alert("Vista um casaco bem quente! Está frio.")
    }
}
escolherRoupa()