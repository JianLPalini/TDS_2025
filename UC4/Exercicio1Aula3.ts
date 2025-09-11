// Classe Ninja -> Cria a classe ninja com campos nome, idade, poder, item, aldeia, jutsus

class Ninja {
    nome: string;
    idade: number;
    poder: number;
    item: string;
    aldeia: string;
    jutsus: string[];
    
    constructor(nome: string, idade: number, poder: number, item: string, aldeia: string, jutsus: string[]) {
        this.nome = nome;
        this.idade = idade;
        this.poder = poder;
        this.aldeia = aldeia;
        this.item = item;
        this.jutsus = jutsus;
    }

    atacar() {
        console.log(`${this.nome} atacou com item ${this.item}, poder de ${this.poder}`);
    }

    defender() {
        console.log(`${this.nome} se defendeu com ${this.item}`);
    }

    usarJutsu() {
        // pega um jutsu aleatório da lista
        const jutsuAleatorio = this.jutsus[Math.floor(Math.random() * this.jutsus.length)];
        console.log(`${this.nome} usa ${jutsuAleatorio}`);
    }

    listarJutsus() {
        console.log(`${this.nome} possui os jutsus: ${this.jutsus.join(", ")}`);
    }
}


const obito = new Ninja("Obito", 16, 9000, "Sharingan", "Renegado", ["Kamui", "Bola de Fogo", "Estatua Gedo Mazo"]);
const sasuke = new Ninja("Sasuke", 16, 8999, "Sharingan", "Folha", ["Chidori", "Shuriken das Sombras", "Susanoo"]);
const itachi = new Ninja("Itachi", 29, 90000, "Sharingan", "Renegado", ["Amaterasu", "Tsukuyomi", "Susanoo"]);


sasuke.atacar();
obito.atacar();
itachi.atacar();

sasuke.defender();
itachi.usarJutsu();
obito.defender();
obito.usarJutsu();
sasuke.usarJutsu();
itachi.defender();


sasuke.listarJutsus();
itachi.listarJutsus();
obito.listarJutsus();
