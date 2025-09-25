//Atividade 1
class Animal2 {
    constructor(public nome: string) {}
    falar(): void {
        console.log("Som genérico");
    } 
}

class cachorro2 extends Animal2 {
    falar(): void {
        console.log("Au Au");
    }
}

class gato2 extends Animal2 {
    falar(): void {
        console.log("Miau Miau");
    }
}

class passaro2 extends Animal2 {
    falar(): void {
        console.log("Piu Piu");
    }
}

// Criando instâncias em variáveis
const Anuubis = new cachorro2("Anubis");
const Weed = new gato2("Weed");
const Chuck = new passaro2("Chuck");

Anuubis.falar(); // Au Au
Weed.falar();   // Miau Miau
Chuck.falar();  // Piu Piu

// Atividade 2

interface Instrumento {
    tocar(): void;
}

class Guitarra implements Instrumento {
    tocar(): void {
        console.log("Guitarra tocando");
    }
}
class Bateria implements Instrumento {
    tocar(): void {
        console.log("Bateria tocando");
    }
}

class Flauta implements Instrumento {
    tocar(): void {
        console.log("Flauta tocando");
    }
}

const guitarra = new Guitarra();
const bateria = new Bateria();
const flauta = new Flauta();

guitarra.tocar();
bateria.tocar();
flauta.tocar();

// Atividade 3

class Mensagem {
    enviarMensagem(mensagem: string, assunto:string): string;
    enviarMensagem(mensagem: string, assunto:string): number;

    enviarMensagem(mensagem: any, assunto:any): any {
        console.log(`Mensagem: ${mensagem}, Assunto: ${assunto}`);
        return mensagem + assunto;
    }
}

const msg1 = new Mensagem();
msg1.enviarMensagem("Salve", "Urgente")
msg1.enviarMensagem("Hello", "Gay")
const msg2 = new Mensagem();
msg2.enviarMensagem("Salve", "Psicose")
msg2.enviarMensagem("Hello", "Bicha")

// Pesquisa

// 1- Qual a diferença entre sobrescrita e sobrecarga no TypeScript? 
// R: Sobrescrita é quando uma subclasse fornece uma implementação específica de um método já definido em sua superclasse.
// A sobrecarga é quando uma classe tem múltiplos métodos com o mesmo nome, mas com diferentes listas de parâmetros.

// 2- O TypeScript realmente suporta sobrecarga de métodos como Java? Justifique.
// R: Sim, o TypeScript suporta sobrecarga de métodos, permitindo que uma classe tenha múltiplas assinaturas para um mesmo método, assim como no Java.
