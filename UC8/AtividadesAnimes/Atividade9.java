
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime9 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite o nível de poder: ");
        int poder = entrada.nextInt();
        
        if(poder < 30){
            System.out.println("Magia fraca (Nível Aprendiz)");
        }else if (poder >= 30 && poder < 70){
            System.out.println("Magia mediana (Nível Aventureiro)");
        }else if (poder >= 71){
            System.out.println("Magia Avançada - Digno de treinar com Frieren");
        }else {
            System.out.println("Você não tem Magia favor se matar!");
        }
        entrada.close();
    }
}
