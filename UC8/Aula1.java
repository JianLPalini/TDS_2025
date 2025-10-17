import javax.swing.*;
import java.awt.*;

public class CalculadoraIMC {
    private JTextField txtPeso;
    private JTextField textField1;
    private JButton btnCalcular;
    private JLabel txtAltura;

    // Construtor da Classe
    public CalculadoraIMC() {
        // Adiciona uma ação ao botão "calcular"
        // Esse bloco define o que acontence quando o usuário clica no botão
        btnCalcular.addActionListener(e -> {
            try {
                // try: tente rodar isso
                // Esse bloco define o que acontece ou precisa acontecer (lê o texto digitando nos campos e converte para número (double))
                double peso = Double.parseDouble(txtPeso.getText());
                double altura = Double.parseDouble(txtAltura.getText());
                // Calcula i IMC pela fórmula:
                double imc = peso / (altura * altura);
                // Variável para guardar mensagem e cor
                Color cor;
                String mensagem;
                // Estrutura condicional para classificar o IMC
                if (imc < 18.5){
                    mensagem = String.format("IMC.%.f - Abaixo do peso", imc);
                    cor = Color.BLUE;
                }
            }
        });
    }
}



