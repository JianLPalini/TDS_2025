
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime11 {
    public static void main(String[]args){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Escolha uma missão para o agente Twilight fazer: (1 a 4)");
        int missão = entrada.nextInt();
        
        switch (missão){
            case 1:
                System.out.println("Proteger Anya");
            break;
            case 2:
                System.out.println("Investigar o Desmond");
            break;
            case 3:
                System.out.println("Missão secreta SSS");
            break;
            case 4:
                System.out.println("Visitar o castelo para recreação");
            break;
            default:
                System.out.println("Missão desconheda");
            break;
        }
        entrada.close();
    }
}
