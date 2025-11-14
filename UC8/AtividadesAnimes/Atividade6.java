
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime6 {
    public static void main(String[]args){
    Scanner entrada = new Scanner(System.in);
        System.out.println("Digite o nível de mana: ");
        int mana = entrada.nextInt();
        System.out.println("Digite se distancia do inimigo: ");
        int inimigo = entrada.nextInt();
        
        boolean manaBaixa = mana <20;
        boolean inimigoPerto = inimigo <5;
        boolean condicaoPerigosa = manaBaixa || inimigoPerto;
        boolean podeUsar = !condicaoPerigosa;
        
        System.out.println("Frieren pode usar magia proibida ? " + podeUsar);
        
        entrada.close();
    }
}
