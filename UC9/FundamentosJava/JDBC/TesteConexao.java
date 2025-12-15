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
public class TesteConexao {
    public static void main(String[] args) {
        try{
            // tentando realizar a conexão
            Connection conn = Conexao.conectarBanco("escola");
            System.out.println("Conexão com sucesso!");
        }catch(SQLException e){
            System.out.println("Erro ao criar o banco" + e.getMessage());
        }
    }
}
