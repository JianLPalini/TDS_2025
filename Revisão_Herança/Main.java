/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class ProjetoLogin {
  
        public static void main(String[] args) {
            
            Mamifero meuMamifero = new Mamifero("Amarelo", "Leão", 200);
            Reptil meuReptil = new Reptil("Verde", "Jacaré", 750);
            
            System.out.println(meuMamifero.mostrarRacaEPeso());
            System.out.println(meuReptil.mostrarRacaEPeso());
            
            System.out.println(meuMamifero.fazerSom());
            System.out.println(meuReptil.fazerSom());
        }}
