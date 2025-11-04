/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class ProjetoLogin {
    public static void main(String[] args) {
       Calculadora calc = new Calculadora(8, 3.5);
       double soma = calc.somar();
       double subtracao = calc.subtrair();
       double divisao = calc.dividir();
       double multiplicao = calc.multiplicar();
       
       System.out.println("Soma: " + soma);
       System.out.println("Subtração: " + subtracao);
       System.out.println("Divisão: " + divisao);
       System.out.println("Multiplicação: " + multiplicao);
    }
}
