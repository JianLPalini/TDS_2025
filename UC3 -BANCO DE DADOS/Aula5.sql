CREATE TABLE clientes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

INSERT INTO clientes (nome)
VALUES
('Daniel'), ('Rodorfo'), ('CR7'), ('Messi'), ('Mc Poze');

SELECT * FROM clientes;

SHOW CREATE TABLE clientes;

ALTER TABLE clientes ADD COLUMN telefone VARCHAR (30);
ALTER TABLE clientes MODIFY telefone VARCHAR (12);
ALTER TABLE clientes CHANGE COLUMN telefone celular VARCHAR (12);

ALTER TABLE clientes RENAME TO clients;

RENAME TABLE cli TO clientes;

ALTER TABLE clientes DROP id; 

ALTER TABLE clientes ADD COLUMN id INT PRIMARY KEY AUTO_INCREMENT;
