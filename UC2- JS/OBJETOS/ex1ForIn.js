const celular = {
    marca: "Positivo",
    modelo: "Jogue Fora",
    cor: "",
    armazenamento: "Todos"
}
    for(let campo in celular){
        if(celular[campo] === ""){
        console.log(" o campo " + campo + " está vazio! Por favor, preencha seu burro!")
    }
}