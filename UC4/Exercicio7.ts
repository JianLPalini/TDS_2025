// Atividade 1: Classe Pessoa, Professor e Aluno

class pessoa1 {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void{
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

class professor1 extends pessoa1 {
    ensinar(): void{
        console.log(`O professor ${this.nome} está ensinando.`);
    }
}

class aluno1 extends pessoa1 {
    estudar(): void{
        console.log(`O aluno ${this.nome} está estudando para a prova.`);
    }
}

const Dalvana = new professor1("Dalvana da Silva Sauro", 38)
const Daniel = new professor1("Daniel Kovalski", 29)

const Erika = new aluno1("Erika Matsunaga", 18)
const Gian = new aluno1("Gian Carlo da Silva", 42)

Dalvana.apresentar() 
Dalvana.ensinar() 
Daniel.apresentar()
Daniel.ensinar()
Erika.apresentar()
Erika.estudar()
Gian.apresentar()
Gian.estudar()


// Atividade 2: Classe Funcionario, Gerente e Estagiario

class Funcionario1 {
    nome: string;
    idade: number;
    salario: number;
    genero: string;
    cargo: string;

    constructor(nome: string, idade: number, salario: number, genero: string, cargo: string) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.genero = genero;
        this.cargo = cargo;
    }

    mostrarSalario(): void{
        console.log(`O salário do funcionario ${this.nome} é de R$ ${this.salario}.`);
    }
}

class Gerente extends Funcionario1 {
    aumentarSalario(valor: number): void{
        this.salario += valor;
        console.log(`Parabéns ${this.nome}, você recebeu um aumento! Seu novo salário é R$ ${this.salario}.`);
    }

}

class Estagiario extends Funcionario1 {
    receberAjudaDeCusto(valor: number): void{
        this.salario += valor;
        console.log(`O estagiário ${this.nome} recebeu uma ajuda de custo! Seu novo salário agora é de R$ ${this.salario}.`);
    }
}

const Carol = new Gerente ("Carol Nakamura", 27, 4200, "Feminino", "Gerente de Vendas")
const Pedro = new Gerente ("Pedro Silva", 35, 5000, "Masculino", "Gerente de Marketing")
const Luis = new Estagiario ("Luis do Front", 22, 1500, "Masculino", "Estagiário de TI")
const Marcelle = new Estagiario ("Marcelle do Back", 23, 1600, "Feminino", "Estagiária de TI")

Carol.mostrarSalario()
Carol.aumentarSalario(500)
Pedro.mostrarSalario()
Pedro.aumentarSalario(700)
Luis.mostrarSalario()
Luis.receberAjudaDeCusto(300)
Marcelle.mostrarSalario()
Marcelle.receberAjudaDeCusto(400)

//Pesquisa

// 1- Cite 3 exemplos do mundo real que poderiam ser representados com herança (ex: Veículo → Carro/Moto).
// Animal - Cachorro/Gato/Papagaio
// Funcionário - Gerente/Estagiário/Vendedor
//Instrumento Musical - Violão/Piano/Bateria

// 2- Qual a diferença entre classe pai e classe filha?
// Classe Pai (Superclasse) é a mais genérica, define atributos e comportamentos comuns.
// Classe Filha (Subclasse) herda da classe pai e pode especializar (adicionar ou sobrescrever comportamentos).

// 3- Pesquise: em quais linguagens além do TypeScript existe herança em POO?
// Java, Python, C++, C#, Ruby, JavaScript, PHP, Swift, Kotlin, entre outras.
