
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime4 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Digite o nível da Alma: ");
        int nivelAlma = entrada.nextInt();
        
        System.out.println("Digite o nível de Coragem: ");
        int nivelCoragem = entrada.nextInt();

        System.out.println("Digite o nível de Energia: ");
        int nivelEnergia = entrada.nextInt();

 
        Portal portalFrieren = new Portal(nivelAlma);
        Portal portalDemonSlayer = new Portal(nivelCoragem);
        Portal portalFullMetalBrotherhood = new Portal(nivelEnergia);
        
        portalFrieren.verificar1(); // Chamando o método para verificar
        portalDemonSlayer.verificar2();
        portalFullMetalBrotherhood.verificar3();
        
        entrada.close();  // Fechar o scanner após o uso
    }
}
class Portal {
    int nivel;  // Um único nível para cada portal

    // Construtor agora recebe apenas um parâmetro
    public Portal(int nivel) {
        this.nivel = nivel;
    }

    // Método para verificar o nível de energia
     public void verificar1() {
        if (nivel >= 70) {
            System.out.println("Portal Frieren aberto, pode passar!");
        } else {
            System.out.println("Portal Frieren fechado, poder da alma insuficiente!");
        }
    }
    public void verificar2() {
        if (nivel > 50) {
            System.out.println("Portal Demon Slayer aberto, pode passar!");
        } else {
            System.out.println("Portal Demon Slayer fechado, poder de coragem insuficiente!");
        }
    }
    public void verificar3() {
        if (nivel != 0) {
            System.out.println("Portal Full Metal Brotherhood aberto, pode passar!");
        } else {
            System.out.println("Portal Full Metal Brotherhood fechado, poder de energia insuficiente!");
        }
    }
}
