class Personagem2 {
    nome: string;
    idade: string;
    poder: string;
    habilidade_especial: string;
    
    constructor(nome: string, idade: string, poder: string, habilidade_especial: string) {
        this.nome = nome;
        this.idade = idade;
        this.poder = poder;
        this.habilidade_especial = habilidade_especial;
    }

    info_personagem() {
        console.log(
            `Herói: ${this.nome}, Idade: ${this.idade}, Poder: ${this.poder}, Habilidade Especial: ${this.habilidade_especial}`
        );
    }
}

const nome = "Zé da Manga";
const idade = "10000 anos";
const poder = "Infinito";
const habilidade_especial = "Pai das Mangas";

const heroi1 = new Personagem2(nome, idade, poder, habilidade_especial);
heroi1.info_personagem();
