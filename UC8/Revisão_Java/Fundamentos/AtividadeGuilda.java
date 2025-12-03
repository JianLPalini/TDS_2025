
import java.util.Map;
import java.util.HashMap;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author JIANLUCAPALINI
 */
public class GuildaArcana {
    public static void main(String[] args){
        Map<String, Double> poderMagico = new HashMap<>();
        
        poderMagico.put("Eldrin", 750.0);
        poderMagico.put("Mira", 920.5);
        poderMagico.put("Thalos", 860.3);
        
        poderMagico.put("Eldrin", 800.0);
        
        System.out.println("Poder de Mira" + poderMagico.get("Mira"));
        System.out.println("Poder de Eldrin" + poderMagico.get("Eldrin"));
        System.out.println("Poder de Thalos" + poderMagico.get("Thalos"));
        
        for(String nome : poderMagico.keySet()){
            System.out.println(nome + " -> " + poderMagico.get(nome));
        }
        
          int numeroMagos = poderMagico.size();
          
          System.out.println("Quantidade de Magos na GUILDA" + numeroMagos);
    }
}
