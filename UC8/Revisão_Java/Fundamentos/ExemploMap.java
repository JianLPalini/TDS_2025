
import java.util.HashMap;
import java.util.Map;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class ExemploMap {
    public static void main(String[] args){
        // Criando uma "agenda" de notas:
        // Cada aluno tem um NOME (chave) e uma NOTA(valor)
        // Map <Chave, Valor>
        // HashMap = rápido, não mantém a ordem
        
        Map<String, Double> notas = new HashMap<>();
        // put (chave, valor) - adiciona ou atualiza entradas
        notas.put("Ana", 9.5);
        notas.put("Bruno", 7.8);
        notas.put("Carlos", 8.3);
        
        // Se a chave já existe, o VALOR é atualizado (substituído)
        notas.put("Ana", 9.8); // Ana foi chorar 3 décimos numa questão e conseguiu
        // get(chave) - recupera o valor associado à chave
        // aqui pegamos a nota do aluno. ano caso a Ana
        System.out.println("Nota da Ana" + notas.get("Ana"));
        // Ai podemos pegar todas as chaves tmbm com o keySet()
        // Podemos usar o foreach para imprimir chave + valor correspondete
        for(String nome : notas.keySet()){
            System.out.println(nome + " -> " + notas.get(nome));
        }
    }
}
