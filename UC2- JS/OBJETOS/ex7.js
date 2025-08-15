const escola = {
    aluno1: {
        nome1: "Kalleo",
        idade: 16,
        materia: ["Matemática", "Química", "Geografia",],
        notas: [4,5,7]
    },
    aluno2: {
        nome2: "Sidnei",
        idade: 27,
        materia: ["Química", "Geografia", "Física"],
        notas: [6,8,10]
    },
    aluno3: {
        nome3: "Erika",
        idade: 17,
        materia: ["Geografia", "Física", "Biologia"],
        notas: [5,7,9]
    }
}
console.log(escola.aluno1.nome1)
console.log(escola.aluno2.nome2)
console.log(escola.aluno3.nome3)
console.log(`O aluno ${escola.aluno1.nome1} tem ${escola.aluno1.idade} anos. Tirou a nota ${escola.aluno1.notas[0]} em ${escola.aluno1.materia[0]}`)
console.log(`O aluno ${escola.aluno2.nome2} tem ${escola.aluno2.idade} anos. Tirou a nota ${escola.aluno2.notas[0]} em ${escola.aluno2.materia[0]}`)
console.log(`O aluno ${escola.aluno3.nome3} tem ${escola.aluno3.idade} anos. Tirou a nota ${escola.aluno3.notas[1]} em ${escola.aluno3.materia[1]}`)