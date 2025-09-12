class Pessoa {
    nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public fazerAniversario(){
        this.idade++;
        console.log(`Feliz aniversário ${this.nome}! Agora você tem ${this.idade} anos.`);
    }
    public mostrarIdade(){
        console.log(`${this.nome} tem ${this.idade} anos.`);
    }

}

const Erica = new Pessoa("Erica", 17);
const Sidnei = new Pessoa("Sidnei", 27);
const Arthur = new Pessoa("Arthur", 19);


Erica.fazerAniversario();
Sidnei.fazerAniversario();
Arthur.fazerAniversario();
Erica.mostrarIdade();
Sidnei.mostrarIdade();
Arthur.mostrarIdade();
