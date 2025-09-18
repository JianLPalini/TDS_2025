// Atividade 1

abstract class Animal {
    constructor(public nome: string, public idade: number) {}
    
    abstract falar(): void;

}

class Dog extends Animal {
    falar(): void {
        console.log("Au au");
    }
}

class Cat extends Animal {
    falar(): void {
        console.log("Miau");
    }
}

const Anubis = new Dog("Anubis", 2)
const Amendoim = new Cat("Amendoim", 3)

Anubis.falar()
Amendoim.falar()

// Atividade 2

interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    acelerar(): void;
    frear(): void;
}

class Carro1 implements Veiculo {
    constructor(public marca: string, public modelo:string, public ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(): void {
        console.log(`${this.marca} ${this.modelo} acelerou.`);
    }

    frear(): void{
        console.log(`O carro ${this.marca} ${this.modelo}} freou!`);
    }
}

class Moto1 implements Veiculo {
    constructor(public marca: string, public modelo:string, public ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(): void {
        console.log(`A moto ${this.marca} ${this.modelo} acelerou.`);
    }

    frear(): void{
        console.log(`À moto ${this.marca} ${this.modelo} freou!}`);
    }
}

class Caminhao1 implements Veiculo {
    constructor(public marca: string, public modelo:string, public ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(): void {
        console.log(`O caminhão ${this.marca} ${this.modelo} acelerou.`);
    }

    frear(): void{
        console.log(`O caminhão ${this.marca} ${this.modelo} freou!`);
    }
}

const carro1 = new Carro1("Toyota", "Corolla", 2020);
carro1.acelerar();
carro1.frear();
const moto1 = new Moto1("Honda", "Hornet", 2019);
moto1.acelerar();
moto1.frear();
const caminhao1 = new Caminhao1("Volvo", "FH", 2018);
caminhao1.acelerar();
caminhao1.frear();
const carro2 = new Carro1("Ford", "Mustang", 2021);
carro2.acelerar();
carro2.frear();
const moto2 = new Moto1("Yamaha", "MT-07", 2022);
moto2.acelerar();
moto2.frear();
const caminhao2 = new Caminhao1("Scania", "R-Series", 2023);
caminhao2.acelerar();
caminhao2.frear();


// Pesquisa

// Atividade 1: Qual a principal diferença entre classes abstratas e interfaces?
// Classes abstratas podem ter implementação de métodos e propriedades, enquanto interfaces apenas definem a estrutura que uma classe deve seguir, sem fornecer implementação.
// Classes abstratas podem conter construtores, enquanto interfaces não podem.
// Uma classe pode implementar várias interfaces, mas só pode estender uma única classe abstrata.

// Atividade 2: Em quais casos você escolheria uma classe abstrata ao inves de uma interface ?
// Quando há necessidade de compartilhar código comum entre várias classes relacionadas. Quando se deseja definir um comportamento padrão que pode ser sobrescrito pelas subclasses. Quando se quer aproveitar recursos como modificadores de acesso (public, private, protected) que não são possíveis em interfaces.
