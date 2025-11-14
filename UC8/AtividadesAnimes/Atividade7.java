
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class Anime7 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite o nível de estresse (0 a 100): ");
        int estresse = entrada.nextInt();
        System.out.println("Digite dia da semana: ");
        int dia = entrada.nextInt();
        System.out.println("Digite se o chefe gritou (true/false): ");
        boolean chefe = entrada.nextBoolean();
        
        boolean nivelAlto = estresse > 70;
        boolean diaSemana = dia == 5;
        boolean outraCond = diaSemana || chefe;
        boolean condicaoModoAtaque = nivelAlto && outraCond;
        
        System.out.println("Retsuko entrou no modo (Death Metal) ? " + condicaoModoAtaque);
        
        entrada.close();
    }
}
