let formulario = {
    nome: "Claudinho Facada",
    email: "",
    cidade: ""
}
    for(let campo in formulario){
        if(formulario[campo] === ""){
            console.log(" o campo " + campo + " está vazio! Por favor, preencha seu burro!")
        }
    }