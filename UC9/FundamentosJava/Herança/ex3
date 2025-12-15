/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Herança;

/**
 *
 * @author JIANLUCAPALINI
 */
public class Cachorro extends Animal{
    // Atributos exclusivo dele (da classe filha)
    String raca;
    public Cachorro(String nome, int idade, String raca){
        //super chama o construtor da classe pai
        super(nome, idade);
        
        // e a raça? que é só desta classe filho
        this.raca = raca;
    }
    // Sobrescrita de método: agora o cachorro faz seu som específico
    @Override
    public void emitirSom(){
        System.out.println(nome + "diz: Au au!");
    }
    // Método específico da classe cachorro
    public void correr(){
        System.out.println(nome + " está correndo atras de moto!");
    }
}
