public class Anime3 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite o nível de energia: ");
        int nivelEnergia = entrada.nextInt();

        // Criando a instância da classe Personagem
        Personagem personagem = new Personagem(nivelEnergia);
        personagem.verificar(); // Chamando o método para verificar

        entrada.close();  // Fechar o scanner após o uso
    }
}

class Personagem {
    int nivelEnergia; 

    // Construtor da classe Personagem
    public Personagem(int nivelEnergia) {
        this.nivelEnergia = nivelEnergia;
    }

    // Método para verificar o nível de energia
    public void verificar() {
        if (nivelEnergia > 50) {
            System.out.println("Pode usar o Leigan.");
        } else {
            System.out.println("Está sem Energia Espiritual!");
        }
    }
}
