/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Herança;

/**
 *
 * @author JIANLUCAPALINI
 */
public class Gato extends Animal{
    public Gato(String nome, int idade){
        super(nome, idade);
    
    }
    @Override
    public void emitirSom(){
        System.out.println(nome + " diz: mnhéeeu!!");
    }
     // Método específico da classe gato
    public void encherSaco(){
        System.out.println(nome + " está enchendo o saco!");
    }
}
