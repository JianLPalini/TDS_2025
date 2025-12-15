/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package JDBC;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author JIANLUCAPALINI
 */
public class CriarBanco {
    private static final String URL = "jdbc:mysql://localhost:3306/";
    // jdbc:mysql:// -> indica que o driver é MySQL
    // localhost: -> indica que o banco está na própria máquina(local)
    // 3306 -> porta padrão do MySQL
    // Não colocamos o nome do banco aqui pois será recebido como parâmetro depois.
    
    private static final String USER = "root";
    // Constante com o usuário do banco de dados
    // Em ambientes de desenvolvimento, usamos normalmente o usuário "root"
    
    private static String PASS = "root";
    // Constante com a senha do usuário do banco de dados
    
    public static void main(String[] args) {
        String nomeBanco = "escola";
        try{
            // 1. Conectar ao MySQL
            Connection conn = DriverManager.getConnection(URL, USER, PASS);
            System.out.println("Conectado ao MySQL!");
            // 2. Cria o comando SQL para criar o banco
            String sql = "CREATE DATABASE IF NOT EXISTS " + nomeBanco;
            
            // 3. Objeto Statement executa comando SQL
            Statement stmt = conn.createStatement();
            
            // 4. Executar o comando
            stmt.executeUpdate(sql);
            System.out.println("Banco de dados " + nomeBanco + " criado com sucesso!");
            // Fecha a conexão
            stmt.close();
            conn.close();
        }catch(SQLException e){
            System.out.println("Erro ao criar banco: " + e.getMessage());
        }
    }
}
