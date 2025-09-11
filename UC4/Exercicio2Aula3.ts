
//ATIVIDADE 2


class Heroi{
    nome:string;
    idade:number;
    deus:boolean;
    
    constructor(nome:string,idade:number,deus:boolean){
    this.nome = nome;
    this.idade = idade;
    this.deus= deus;
    
    }
atacar(){
    console.log(`Supremo ${this.nome} com idade ${this.idade} Não é um deus ${this.deus} é uma entidade!`)
}
apagar(){
    console.log(`Inimgo é apagado por ${this.nome}`)
}
interagir(){
    const frase_efeito = ("Você não pode me derrotar")
    console.log(`${this.nome} Diz ${frase_efeito}`)
}
observacao(){
    console.log(`${this.nome} Obliterar`)
}

}
const destino = new Heroi("Destino",0,false);
const morte = new Heroi("Morte", 0, true);
const sonhar = new Heroi("Sonhar", 0, false);

destino.atacar();
morte.apagar();
morte.interagir();
sonhar.observacao();
