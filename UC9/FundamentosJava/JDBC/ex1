/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package JDBC;

import java.sql.DriverManager;
// Importa a interface Connection, que representa uma conexão aberta com o banco de dados
import java.sql.Connection;
// Importa a classe DriverManager, responsável por criar conexões com o banco
import java.sql.SQLException;
// Importa a classe SQLException, que representa erros SQL (problemas ao conectar, executar comandos etc)

/**
 *
 * @author JIANLUCAPALINI
 */
public class Conexao {
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
    
    public static Connection conectarBanco(String nomeBanco) throws SQLException{
        // Método público e estático: pode ser chamado sem criar objeto
        // Retorna um objeto Connection, ou seja, uma conexão pronta com o banco
        // Recebe como parâmetro o nome do banco
        // throws SQLException -> avisa que esse método pode lançar SQLException
        // e quem chamar o método precisará tratar ou repassar essa exceção
        Connection conn = DriverManager.getConnection(URL + nomeBanco, USER, PASS);
        // Aqui o DriverManager cria a conexão com o banco
        //System.out.println("Conectado!");
        
        return conn;
    }
}
