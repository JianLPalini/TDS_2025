const robo = {
    nome: "Bumblebee",
    modelo: "Autobot",
    anoDeFabricacao: 2090,
    falar: function(){
        console.log("Eu sou um autobot")
    },
    andar: function(){
        console.log(" Vamos rodar !!!")
    }
}
console.log(`Meu nome é ${robo.nome} sou um ${robo.modelo} ", fabricado em ${robo.anoDeFabricacao}`)
robo.falar();
robo.andar();