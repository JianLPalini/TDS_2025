//Atividade 1

function dobrar (){
    let numero1:number = Number(prompt("Insira Um numero: "));
    let numero2 :number= Number(prompt("Insira Um numero: "));
    let dobro1 = numero1*2;
    let dobro2 = numero2*2;
    console.log(`Dobro de ${numero1} é ${dobro1}`);
    console.log(`Dobro de ${numero2} é ${dobro2}`);
}
dobrar();

//Atividade 2

function saudacao(){
    let nome:String = String(prompt("Insira Seu Nome"));
    console.log(`Olá ${nome}`);
}

//Atividade 3

function amigos(){
    let amigos : String[] = ["Bruno","Marcelle","Ulysses","Carol","Ana"];
    amigos.forEach(function(amigo){
        console.log(`Olá ${amigo}`);
    });
}

//Atividade 4

function tupla(){
    let pessoa : [string,number] = ["Erica" , 17];
    console.log(`Nome ${pessoa[0]} idade ${pessoa[1]}`);
}

//Atividade 5

enum Acesso {
    ADMIN,
    USER,
    GUEST
};

//Atividade 6

let pessoa :{
    nome: String
    idade: Number
    email: String
    telefone: String
} ={
    nome: String(prompt("Insira o Nome: ")),
    idade: Number(prompt("Insira a idade ")),
    email: String(prompt("Insira o Email ")),
    telefone: String(prompt("Insira o Numero do telefone "))
}
console.log(`Nome: ${pessoa.nome} Idade: ${pessoa.idade} Email: ${pessoa.email} Telefone: ${pessoa.telefone}`);

//Atividade 7

function erro():never{
    throw new Error("...");
}

