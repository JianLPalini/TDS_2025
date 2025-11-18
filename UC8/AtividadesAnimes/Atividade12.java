
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime12 {
    public static void main(String[]args){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite o nível de Sincronização do Piloto:");
        int sincronizacao = entrada.nextInt();
        
        if(sincronizacao < 40){
            System.out.println("Sincronização insuficiente - Unidade não pode ser Ativada");
        }else if(sincronizacao >= 40 && sincronizacao <= 79){
            System.out.println("Sincronização estável - Piloto apto para combate");
        }else if(sincronizacao >= 80){
            System.out.println("Sincronização máxima - Risco de modo Berserk");
        }else{
        }
        entrada.close();
        }
}
