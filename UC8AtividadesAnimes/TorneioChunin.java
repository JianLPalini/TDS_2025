
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;
import java.util.List;


/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class ATIVIDADEMASTER {
    public static void main(String[]args){
        Scanner entrada = new Scanner(System.in);
        Random rand = new Random();
        System.out.println("=======Torneio Chunin========");
        System.out.println("Digite o nome do seu Ninja:");
        String nome = entrada.nextLine();
        
        int vida = 100;
        
        String[] habilidades = {
        "Rasengan (+0 vida, 25 dano)",
        "Chidori (+0 vida, 30 dano)",
        "Ninjutsu médico (+20 vida, 0 dano)",
        "Katon - Bola de Fogo (+0 vida, 20 dano)"
        };
        
        int[] danohabilidade = {25, 30, 0, 20};
        int[] curahabilidade = {0, 0, 20, 0};
        
        System.out.println("Escolha 4 habilidades:");
        
        for(int i = 0; i < habilidades.length; i++){
            System.out.println((i + 1)+ " - " + habilidades[i]);
        }
        
        int[] habilidadeSelecionada = new int[4];
        
        for(int i = 0; i <4; i++){
            System.out.println("Escolha habilidade" + (i + 1) + ":");
            habilidadeSelecionada[i] = entrada.nextInt() - 1;
        }
        
        String[] inimigos = {
        "Sasuke", "Shino", "Gaara", "Kankuro", "Kiba", "Temari", "Neji", "Rock Lee", "Kabuto", "Suigetsu", "Juugo", "Karin", "Shikamaru","Kimimaru", "Kidomaru",    
        };
        
        List<String> selecaoInimigos = new ArrayList<>();
        for(int i = 0; i < 15; i++){
            selecaoInimigos.add(inimigos[rand.nextInt(inimigos.length)]);
        }
        String[] fases = {"Oitavas de Final", "Quartas de Final", " Semi Final", "Final"
        };
        System.out.println("\n === Iniciando Torneio ===");
        int inimigoIndex = 0;
        for (String fase : fases){
            System.out.println("\n--- " + fase + " ---");
            
            String Inimigo = selecaoInimigos.get(inimigoIndex++);
            int vidaInimigo = 100;
            
            System.out.println("Você enfrentará:" + Inimigo);
            
            boolean vivo = true;
            
            while (vida > 0 && vidaInimigo > 0){
                System.out.println("\n Sua vida: " + vida);
                System.out.println("Vida do Inimigo: " + vidaInimigo);
                System.out.println("1 - Atacar");
                System.out.println("2 - Defender");
                
                int acao = entrada.nextInt();
                int habilidadeEscolhida = habilidadeSelecionada[rand.nextInt(4)];
                int dano = danohabilidade[habilidadeEscolhida];
                int cura = curahabilidade[habilidadeEscolhida];
            
            switch(acao){
                case 1: //atacar
                    System.out.println("Você usou: " + habilidades[habilidadeEscolhida]);
                    vida+= cura;
                    vidaInimigo -= dano;
                    System.out.println("Você causou " + dano + " de dano.");
                    if(cura > 0)
                        System.out.println("Você recuperou " + cura + " de vida.");
                    break;
                case 2: //defender
                    System.out.println("Você está defendendo!");
                    break;
                    default:
                        System.out.println("Ação inválida!"); 
            }
            
                //Ataque inmigo
                if(vidaInimigo > 0){
                    boolean ataqueForte = rand.nextBoolean();
                    int danoInimigo = ataqueForte ? 20:10;
                    
                    if(acao == 2){
                        danoInimigo /= 2;
                        System.out.println("Defesa reduziu o dano!");
                    }
                    
                    vida -= danoInimigo;
                    System.out.println(Inimigo + " atacou e deu " + danoInimigo + " de dano!");
                }
            }
                if(vida <= 0){
                    System.out.println("\n Você foi derrotado por " + Inimigo);
                    System.out.println("❌ Você falhou no Torneio Chunin!");
                    return;
                }else{
                    System.out.println("\n Você DERROTOU " + Inimigo + "!");
                    System.out.println("Avançando para a próxima Fase!");
                }
            }       
                    System.out.println("\n 🎉 PARABÉNS " + nome + "!!! Você venceu o torneio Chunim! 🎉");
            
            }
        }


