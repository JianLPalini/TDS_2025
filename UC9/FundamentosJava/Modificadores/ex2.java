/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Motificadores;

public class Aggetsuko {
    public static void main(String[] args) {
        retsuko personagem = new retsuko();
        personagem.cantarMetal("Metaleiro");
        int total = personagem.estado(50, 50);
        System.out.println("Estado de estresse: " + total);
    }
}

class retsuko {
    public String cantar;
    public int estresse;
    
    public void cantarMetal(String musica){
        System.out.println("Cantando metal: " + musica);
    }

    public int estado(int estresseInput, int nivel){
        return estresseInput + nivel;
    }
}

