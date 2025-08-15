function podeEntrar(){
    let idade = Number(prompt("Digite sua idade: "))
    if(idade >= 16){
        alert("Pode entrar no cinema!")
    }else{
        alert("Vai embora pra casa!")
    }

}
podeEntrar()