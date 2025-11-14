
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime5 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite o nível de concentração: ");
        int concetracao = entrada.nextInt();
        System.out.println("Digite o nível de energia: ");
        int energia = entrada.nextInt();
        System.out.println("Digite a temperatura corporal: ");
        int temperatura = entrada.nextInt();
        
         if(concetracao >=70 && energia > 50){
             System.out.println("Tanjiro irá usar a Respiração da Água na Batalha!");
         }else if(temperatura > 200){
             System.out.println("Tanjiro pode usar o Hinokami Kagura a Respiração do Sol e vencera a batalha!");
         }else{
         System.out.println("Tanjiro não tem os requisitos para usar nenhuma respiração e irá perder a batalha!");
         }
    }
    
}

