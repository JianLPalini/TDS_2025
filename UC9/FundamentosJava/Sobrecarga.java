/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package FundamentosJava;

import java.security.PublicKey;

/**
 *
 * @author JIANLUCAPALINI
 */
public class SobrecargaPizza{
    public static void main(String[] args) {
        // Aqui criamos e testamos nosso construtores de pizza
        SobrecargaPizza p1 = new SobrecargaPizza();
        p1.exibirInfo();
        
         SobrecargaPizza p2 = new SobrecargaPizza("Costelinha");
        p2.exibirInfo();
        
         SobrecargaPizza p3 = new SobrecargaPizza("Doritos", true);
        p3.exibirInfo();
        
         SobrecargaPizza p4 = new SobrecargaPizza("20 queijos", 93.7);
        p4.exibirInfo();
        
    }
    String sabor;
    boolean bordaRecheada;
    double preco;
    
    // Vamos trabalhar com sobrecargas de construtores
    // 1) Construtor padrão (SEM PARÂMETRO)
    // Vai construir uma pizza "vazia", apenas para mostrar que é possível criar um objeto sem definir nada
    public SobrecargaPizza(){
        System.out.println("Pizza criada sem informações! ");
    }
    // 2) Construtor construindo e recebendo apenas o sabor 
    // ideal para quando o cliente só escolhe o sabor da pizza
    
    public SobrecargaPizza(String sabor){
        this.sabor = sabor;
        this.preco = 60.00; // preço base padrão
    }
    // 3) Construtor com sabor + borda recheada
    // Ao adicionar a borda, aumentamos o preço
    public SobrecargaPizza(String sabor, boolean bordaRecheada){
        this.sabor = sabor;
        this.bordaRecheada = bordaRecheada;
        this.preco = 60.00; // preco base
        if(bordaRecheada){
            this.preco += 10.00; // pediu borda recheada? Toma 10 reau
            
        }
    }
        // 4) Construtor com sabor + preço personalizado
        // Quando a pizza do TDS25PSG1T tem valores diferentes para sabores especiais
        public SobrecargaPizza(String sabor, double preco){
            this.sabor = sabor;
            this.preco = preco;
        }
        
        // Método para exibir as informações da pizza
        void exibirInfo(){
            System.out.println("=====PIZZARIA DO TDS251T=====");
            System.out.println("Sabor: " + sabor);
            System.out.println("Borda recheada parça? " + (bordaRecheada ? "Sim" : "Não"));
            System.out.println("Preço: R$ " + preco);
            System.out.println();
        }
    }

