
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime10 {
    public static void main(String[]args){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite a nota que a Anya ganhou (0 a 10):");
        double notaEntrevista = entrada.nextDouble();
        
        if(notaEntrevista >= 9){
            System.out.println("Anya é uma criança muito Elegante!");
        }else if(notaEntrevista >= 7){
            System.out.println("Anya foi Aprovada pela Eden Academy");
        }else if(notaEntrevista < 7){    
            System.out.println("Anya faz cara triste e chora...");
        }
        entrada.close();
        }   
}
