// Pesquisa 1

// Exemplo1

class Carro {
  marca: string;
  modelo: string;
  velocidade: number = 0;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar() {
    this.velocidade += 10;
    console.log(`${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h`);
  }

  frear() {
    this.velocidade = Math.max(0, this.velocidade - 10);
    console.log(`${this.marca} ${this.modelo} freou para ${this.velocidade} km/h`);
  }
}



//Exemplo2

class Estudante {
  nome: string;
  materia: string;
  horasEstudo: number = 0;

  constructor(nome: string, materia: string) {
    this.nome = nome;
    this.materia = materia;
  }

  estudar(horas: number) {
    this.horasEstudo += horas;
    console.log(`${this.nome} estudou ${horas}h de ${this.materia}. Total: ${this.horasEstudo}h.`);
  }

  revisar() {
    console.log(`${this.nome} está revisando o conteúdo de ${this.materia}.`);
  }

  fazerProva() {
    console.log(`${this.nome} fez a prova de ${this.materia}.`);
  }
}


// Pesquisa 2

// Diferença POO x Funcional

// POO
// Baseado em objetos (dados + métodos).
// Trabalha com estado mutável (atributos podem mudar).	
// Usa herança/polimorfismo para reutilizar código.	
// Exemplo: carro.acelerar().


// Funcional
// Baseado em funções puras (sem efeitos colaterais).
// Trabalha com imutabilidade (gera novos valores).
// Usa composição de funções e funções de ordem superior.
// Exemplo: velocidade = acelerar(velocidade).


// Pesquisa 3

// Java, C#, Python, C++, Ruby, TypeScript
