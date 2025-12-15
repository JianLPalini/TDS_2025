/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Herança;

/**
 *
 * @author JIANLUCAPALINI
 */
public class Animal {
    // Atributos comuns a todos os animais
    String nome;
    int idade;
    //Construtor para inicializar os atributos
    public Animal(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }
    // Métodos comuns que todos os animais fazem
    public void dormir(){
        System.out.println(nome + " está dormindo...");
    }
    public void emitir(){
        System.out.println("Som genérico do animal");
    }
}
