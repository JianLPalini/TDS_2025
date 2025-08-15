function tipoEvento() {
    let festansa = prompt("Escolha qual evento gostaria de organizar: (aniversário, formatura, casamento, festa surpresa ou churrasco)").toLowerCase()
    switch (festansa) {
        case "aniversário":
            alert("Salão de festas ou espaço kids.")
            break
        case "formatura":
            alert("Buffet com pista de dança.")
            break
        case "casamento":
            alert("Jardim ou igreja charmosa.")
            break
        case "festa surpresa":
            alert("Casa de amigos ou rooftop.")
            break
        case "churrasco":
            alert("Área externa ou parque.")
            break

        default:
            alert("Fique em casa!!!")
            break
    }
}
tipoEvento()

