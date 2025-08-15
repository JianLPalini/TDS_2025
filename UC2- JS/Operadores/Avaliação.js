// Entradas
let NF = 6
let NR = 8
let T1 = 8
let T2 = 5
let T3 = 7

// Conta quantos trabalhos têm nota > 6
let trabalhosAprovados = (T1 > 6) + (T2 > 6) + (T3 > 6)

// Define condições de aprovação
let aprovadoPorNotaFinal = NF > 7
let aprovadoPorRecuperacao = (NR >= 8) && (trabalhosAprovados >= 2)

// Escolhe mensagem com operadores lógicos
console.log(
    (aprovadoPorNotaFinal && "Aluno Aprovado (por nota final)") ||
    (aprovadoPorRecuperacao && "Aluno Aprovado (por recuperação e trabalhos)") ||
    "Aluno Reprovado"
);