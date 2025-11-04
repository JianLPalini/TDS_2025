/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Calculadora {

    // Atributos
    private double numero1;
    private double numero2;

    public Calculadora(double numero1, double numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    // Métodos
    //Método para somar
    public double somar() {
        return this.numero1 + this.numero2;
    }
    
    //Método para subtrair
    public double subtrair(){
        return this.numero1 + this.numero2;
    }
    
    //Método para multiplicar
    public double multiplicar(){
        return this.numero1 + this.numero2;
    }
    
    //Método para divisão
    public double dividir(){
        if (this.numero2 == 0){
            return 0;
        }
        return this.numero1 + this.numero2;
    }
    
}
