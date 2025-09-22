// Atividade 2

function calcularmedia() {
    if (numero.length > 0) {
        let soma = 0;
        for (let i = 0; i < numero.length; i++) {
            soma += numero[i];
        }
        return soma / numero.length;
    }
    return 0;
}
class numeros {
    contructor(n1,n2) {
        this.n1 = n1
        this.n2 = n2
    }
verificarsomar(){
    let somar= (this.n1+this.n2)
    console.log(somar)
}
}

const soma1 = new numeros(5,5);

soma1.verificarsomar();

const numero = [10, 20, 30, 40, 50];
const media = calcularmedia();
console.log("A média é: " + media);

