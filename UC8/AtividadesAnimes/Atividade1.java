import java.util.Scanner;

public class Anime {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite o nome do personagem: ");
        String nome = entrada.nextLine();

        System.out.println("Digite sua habilidade: ");
        String habilidade = entrada.nextLine();

        System.out.println("Digite o nível de fome (0 a 10): ");
        int fome = entrada.nextInt();

        
        Personagem personagem = new Personagem(nome, habilidade, fome);

       
        personagem.mostrarInfo();
        personagem.verificar();

        entrada.close();
    }
}

class Personagem {
    String nome;
    String habilidade;
    int fome;

    public Personagem(String nome, String habilidade, int fome) {
        this.nome = nome;
        this.habilidade = habilidade;
        this.fome = fome;
    }

    public void mostrarInfo() {
        System.out.println("Olá jovem guerreiro " + nome + ", você tem a lendária habilidade de " + habilidade + "!");
    }

    public void verificar() {
        if (fome >= 8) {
            System.out.println("⚠️ " + nome + " está com fome extrema!");
        } else if (fome >= 4) {
            System.out.println(nome + " está com um pouco de fome.");
        } else {
            System.out.println(nome + " está de boa!");
        }
    }
}
