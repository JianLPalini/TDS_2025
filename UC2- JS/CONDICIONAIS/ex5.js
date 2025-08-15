function tranporte(){
    let deslocamento = (prompt("Escolha o meio de transporte: (carro, ônibus, bicicleta, metrô ou andar a pé)")).toLowerCase()

    switch(deslocamento){
        case "carro":
            
            alert("Não esqueça de revisar o combustível!")
            break
        case "ônibus":
            
            alert("Fique de olho no ponto e na carteira.")
            break
        case "bicicleta":
            
            alert("Use capacete e respeite as regras de trânsito.")
            break
        case "metrô":
        
            alert("Evite horários de pico para viajar tranquilo.")
            break
        case "andar a pé":
        
            alert("Aproveite para escutar música e relaxar.")
            break
    
            default:
                alert("Fique em casa!!!")
    }
}
tranporte()