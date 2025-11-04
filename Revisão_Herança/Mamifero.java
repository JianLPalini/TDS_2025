/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Mamifero extends Animal{
    private String corDoPelo;

    public Mamifero(String corDoPelo, String raca, double peso) {
        super(raca, peso);
        this.corDoPelo = corDoPelo;
    }
    
    //Sobrescrever
    @Override
    public String fazerSom(){
        return this.raca + " está fazendo som alto.";
    }
    
    
}
