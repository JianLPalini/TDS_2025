CREATE TABLE Fornecedor(
	id_Fornecedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    CNPJ CHAR(14) NOT NULL UNIQUE,
    Produto VARCHAR(50) NOT NULL,
    Quantidade INT NOT NULL,
    Telefone VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE Cliente(
	id_Cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    CPF CHAR(11) NOT NULL UNIQUE,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Telefone VARCHAR(15) NOT NULL UNIQUE
);
CREATE TABLE Vendedor(
	id_Vendedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(50) NOT NULL UNIQUE
);
CREATE TABLE Estoque(
	id_Estoque INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_Fornecedor INT NOT NULL,
    nome_do_produto VARCHAR(100) NOT NULL,
    Quantidade INT NOT NULL,
    FOREIGN KEY (id_Fornecedor) REFERENCES Fornecedor(id_Fornecedor)
);
CREATE TABLE Produto(
	id_Produto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_Cliente INT NOT NULL,
    id_Vendedor INT NOT NULL,
    nome_do_produto VARCHAR(100) NOT NULL,
    garantia DATE,
    unidades_do_produto INT NOT NULL UNIQUE,
    FOREIGN KEY (id_Vendedor) REFERENCES Vendedor(id_Vendedor),
    FOREIGN KEY (id_Cliente) REFERENCES Cliente(id_Cliente)
);

INSERT INTO Vendedor (nome,matricula) VALUES
('Juquinha do Amaço', '70a506h040i50'),
('Joao peidao', '54a5s6n2354');

INSERT INTO Fornecedor (nome, CNPJ, Produto, Quantidade, Telefone, email) VALUES
('Jorginho da Boracharia', '12345678912345', 'Junta do Cabeçote', '20', '51970707073', 'vw@vw.com.br'),
('Jorginho da Boracharia', '123456789123_2', 'Turbina XT20', '15', '51970707072', 'vw@saas.com.br'),
('Jorginho da Boracharia', '123456789123_3', 'Velas', '30', '51970707071', 'vw@125.com.br'),
('Jorginho da Boracharia', '10203040506070', 'Bomba injetora', '10', '51970707074', 'vw@aaaa.com.br');


