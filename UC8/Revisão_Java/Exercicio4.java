public class Produto {

    public String nomeDoProduto;
    public String codigoDoProduto;
    public short estoque;
    public char categoria;

    public static void main(String[] args) {
        Produto produto = new Produto("Cadeira", "12345", (short) 3, 'M');
        produto.verificarProduto();
    }

    public Produto(String nomeDoProduto, String codigoDoProduto, short estoque, char categoria) {
        this.nomeDoProduto = nomeDoProduto;
        this.codigoDoProduto = codigoDoProduto;
        this.estoque = estoque;
        this.categoria = categoria;
    }

 
    public void verificarProduto() {
        System.out.println("Produto: " + nomeDoProduto + " | Código do Produto: " + codigoDoProduto + " | Categoria: " + categoria + " | Estoque: " + estoque);
        if (estoque <= 2) {
            System.out.println("Está acabando!");
        } else {
            System.out.println("Ainda temos estoque!");
        }
    }
   
}
