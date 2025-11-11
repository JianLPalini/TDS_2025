public class Usuario {
    public static void main(String[] args) {
        // Criar uma instância de Usuario para chamar o método Verificar
        Usuario usuario = new Usuario();
        usuario.verificar(); // Chamando o método para verificar
    }

    public void verificar() {
        boolean usuarioAtivo = true; // Usando nome mais claro para a variável
        if (usuarioAtivo) { // Comparação direta sem precisar de "== true"
            System.out.println("Usuário está ativo!");
        } else {
            System.out.println("Usuário está offline!");
        }
    }
}
