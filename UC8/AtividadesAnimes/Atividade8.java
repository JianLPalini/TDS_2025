
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */

public class Anime8 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite Idade: ");
        int idade = entrada.nextInt();
        System.out.println("Digite nível de poder: ");
        int poder = entrada.nextInt();
        System.out.println("Digite o nível de controle emocional: ");
        int controleEmocional = entrada.nextInt();
        
        // Primeira condição: idade >= 15 e poder >= 50
        if (idade >= 15 && poder >= 50) {
            System.out.println("Herói aprovado na SHS!");
        } 
        // Segunda condição: idade >= 15, poder < 80 ou controleEmocional >= 60
        else if (idade >= 15 && poder < 80 || controleEmocional >= 60) {
            System.out.println("Herói aprovado na SHS!");
        }
        // Terceira condição: idade >= 15, poder >= 80 (controleEmocional não importa)
        else if (idade >= 15 && poder >= 80) {
            System.out.println("Heróis muito fortes podem ser descontrolados como o Bakugo!");
        }
        // Caso nenhuma das condições anteriores seja atendida, herói reprovado
        else {
            System.out.println("Herói Reprovado!");
        }

        entrada.close();
    }
}

