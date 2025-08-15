function chapelSeletor(){
    let escolha = (prompt("Informe qual qualidade mais define você: Coragem, Amizade, Ambição ou Sabedoria?")).toLowerCase()
    if(escolha === "coragem"){
        alert("Você foi escolhido para a Grifinória!")
    }else if(escolha === "amizade"){
        alert("Você foi escolhido para a Lufa-Lufa!")
    }else if(escolha === "ambição"){
        alert("Você foi escolhido para a Sonserina!")
    }else if(escolha === "sabedoria"){
        alert("Você foi escolhido para a Corvinal!")
    }else{
        alert("Você não é DIGNO, te larga daqui!!!")
    }
}
chapelSeletor()