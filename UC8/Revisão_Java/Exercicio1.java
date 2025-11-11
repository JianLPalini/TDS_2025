public class Salario {
    public static void main(String[]args){
        // Valor da hora trabalhada (em reais)
        double valorHora = 32.05;
        // Quantidade de horas trabalhadas
        double horasTrabalhadas = 160;
        // Cálculo de salário total
        double salario = valorHora * horasTrabalhadas;
        // Exibe o resultado (sout)
        System.out.println("Salário mensal: R$ " + salario);
    }
}
