import java.util.Scanner;

public class Anime2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite o número de palavras (300 a 1000): ");
        int numeroPalavras = entrada.nextInt();  // Entrada do número de letras ou palavras
        
        // Criar uma instância da classe Carta para chamar o método Verificar
        Carta cartaUsuario = new Carta(numeroPalavras);
        cartaUsuario.verificar(); // Chamando o método para verificar

        entrada.close();  // Fechar o scanner após o uso
    }
}

class Carta {
    int carta;  // Variável para armazenar o número de palavras ou cartas

    // Construtor da classe Carta, que recebe o número de palavras
    public Carta(int carta) {
        this.carta = carta;
    }

    // Método para verificar a validade da carta
    public void verificar() {
        if (carta >= 300 && carta <= 1000) {  // Verificando se está dentro do intervalo desejado
            System.out.println("Carta aceitável.");
        } else {
            System.out.println("Carta está uma bosta.");  // Mensagem de erro para números fora do intervalo
        }
    }
}
