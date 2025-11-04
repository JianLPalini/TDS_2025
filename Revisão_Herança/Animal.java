/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Animal {
    private String raca;
    private double peso;

    public Animal(String raca, double peso) {
        this.raca = raca;
        this.peso = peso;
    }
    
    public String mostrarRacaEPeso(){
        return "Este animal é um(a) " + this.raca + " e pesa " + this.peso + "kg.";
    }
    
    public String fazerSom(){
        return "O animal está fazendo um som.";
    }
    
}
