/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Herança;

/**
 *
 * @author JIANLUCAPALINI
 */
public class Veiculo {
    String marca;
    int ano;
    //Construtor para inicializar os atributos
    public Veiculo(String marca, int ano){
        this.marca = marca;
        this.ano = ano;
    }
    // Métodos comuns que todos os animais fazem
    public void mover(){
        System.out.println(marca + " está andando!");
    }
}

