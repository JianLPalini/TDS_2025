class Celular {
    private nivelBateria: number;

    constructor() {
        this.nivelBateria = 100;
    }

    public usar(carga:number){
        if(this.nivelBateria - carga < 0){
            console.log("Bateria fraca! Por favor, recarregue.");
        } else {
            this.nivelBateria -= carga;
            console.log(`Usando o celular...`);
        }
    }

    public recarregar(carga:number){
        if(this.nivelBateria + carga > 100){
            this.nivelBateria = 100;
            console.log("Bateria está carregada!");     
        } else {
            this.nivelBateria += carga;
            console.log(`Carregando...`);
        }
    }

    public mostrarBateria():void {
        console.log(`Energia atual do celular: ${this.nivelBateria}`);
        if(this.nivelBateria <= 20){
            console.log("Bateria Fraca! Favor, recarregar.");
        }
    }
}

const celular = new Celular();
celular.mostrarBateria();
celular.usar(30);
celular.mostrarBateria();
celular.recarregar(50);
celular.mostrarBateria();



// PESQUISAS

// 1 - Se todos os atributos forem public: qualquer parte do código pode acessá-los e alterá-los diretamente, o que quebra a segurança e pode gerar inconsistências.

// 2 - private: só a própria classe pode acessar.
//   - protected: a própria classe e as classes filhas (herança) podem acessar.

// 3 - Encapsulamento: saldo bancário, senha de celular, prontuário médico, receita secreta de uma empresa.
