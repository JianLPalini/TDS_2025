-- Criar tabela clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    idade INT NOT NULL CHECK (idade >= 0 AND idade <= 120)
);

-- Criar tabela produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL CHECK (preco >= 0)
);

-- Inserir dados na tabela clientes
INSERT INTO clientes (id, nome, cidade, idade) VALUES
(1, 'Lucas Fernandes', 'Salvador', 32),
(2, 'Pedro Cavalcanti', 'Canoas', 50),
(3, 'Bruno da Cunha', 'Curitiba', 41),
(4, 'Rafaela da Rocha', 'São Paulo', 36),
(5, 'Júlia Barros', 'Salvador', 52),
(6, 'Marcela Ribeiro', 'Canoas', 47),
(7, 'Renan Costa', 'Porto Alegre', 42),
(8, 'Ricardo Cavalcanti', 'Curitiba', 56),
(9, 'Vanessa das Neves', 'Canoas', 54),
(10, 'Juliana da Cunha', 'Curitiba', 28),
(11, 'Lucas da Rocha', 'São Paulo', 38),
(12, 'Carolina Moreira', 'Porto Alegre', 65),
(13, 'Ana Fernandes', 'São Paulo', 44),
(14, 'Felipe Martins', 'Canoas', 60),
(15, 'Gabriela Pereira', 'Curitiba', 41),
(16, 'André Almeida', 'Salvador', 26),
(17, 'Eduardo Correia', 'Porto Alegre', 18),
(18, 'Larissa Correia', 'Curitiba', 39),
(19, 'Diego Barbosa', 'São Paulo', 58),
(20, 'Camila Rodrigues', 'Canoas', 23);

-- Inserir dados na tabela produtos
INSERT INTO produtos (id, nome, categoria, preco) VALUES
(1, 'Celular 49', 'Informática', 544.88),
(2, 'Camiseta 78', 'Vestuário', 1212.62),
(3, 'Copo 69', 'Informática', 1459.94),
(4, 'Gamepad 11', 'Brinquedos', 446.84),
(5, 'HD 47', 'Brinquedos', 296.51),
(6, 'Camiseta 7', 'Eletrônicos', 990.37),
(7, 'Notebook 89', 'Alimentos', 121.96),
(8, 'Boneco 41', 'Informática', 1283.01),
(9, 'Celular 15', 'Informática', 881.59),
(10, 'Mouse 95', 'Informática', 1251.32),
(11, 'Notebook 64', 'Games', 1226.12),
(12, 'Fone 83', 'Games', 83.34),
(13, 'Fone 37', 'Brinquedos', 428.27),
(14, 'Teclado 77', 'Brinquedos', 1142.89),
(15, 'Mouse 2', 'Vestuário', 90.01),
(16, 'HD 79', 'Brinquedos', 1255.95),
(17, 'Boneco 29', 'Brinquedos', 387.66),
(18, 'Notebook 5', 'Informática', 765.00),
(19, 'Teclado 10', 'Eletrônicos', 781.18),
(20, 'Gamepad 54', 'Games', 274.66);


-- Exercicio 1

SELECT nome, preco FROM produtos WHERE preco > 200 ORDER BY preco DESC;

 -- Exercicio 2
 
 SELECT DISTINCT cidade FROM clientes;
 
 -- Exercicio 3
 
 SELECT nome FROM produtos WHERE nome LIKE '%game%';
 
 -- Exercicio 4
 
 SELECT * FROM produtos ORDER BY preco ASC LIMIT 3;
 
 -- Exercicio 5
 
 SELECT nome FROM clientes WHERE cidade = 'Porto Alegre' OR cidade = 'Canoas';
 
 -- Exercicio 6
 
 SELECT nome FROM clientes WHERE cidade = 'Canoas';
 
 -- Exercicio 7
 
 SELECT nome FROM clientes WHERE idade BETWEEN 30 AND 40;
 
 -- Exercicio 8
 
 SELECT nome FROM produtos WHERE nome LIKE '%Note%'; 
 
 -- Exercicio 9
 
 SELECT nome FROM clientes WHERE cidade = 'São Paulo' OR cidade = 'Porto Alegre' OR cidade = 'Curitiba';
 
 -- Exercicio 10 
 
 SELECT * FROM produtos WHERE categoria = 'Games' ORDER BY preco DESC;
 
 -- Exercicio 11
 
SELECT * FROM produtos ORDER BY preco DESC LIMIT 5; 

-- Exercicio 12

SELECT nome, idade, cidade FROM clientes ORDER BY idade ASC LIMIT 3;

-- Exercicio 13

SELECT nome, preco FROM produtos WHERE preco < 100;

-- Exercicio 14 

SELECT nome, categoria FROM produtos WHERE (categoria = 'Informática' OR 'Eletrônicos') AND preco > 1000 ORDER BY preco ASC;

-- Exercicio 15 

SELECT DISTINCT cidade FROM clientes;

-- Exercicio 16

SELECT * FROM clientes WHERE NOT cidade = 'São Paulo';

-- Exercicio 17

SELECT * FROM produtos WHERE NOT (preco BETWEEN 200 AND 800); 
 
 -- Criar tabela clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    idade INT NOT NULL CHECK (idade >= 0 AND idade <= 120)
);

-- Criar tabela produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL CHECK (preco >= 0)
);

-- Inserir dados na tabela clientes
INSERT INTO clientes (id, nome, cidade, idade) VALUES
(1, 'Lucas Fernandes', 'Salvador', 32),
(2, 'Pedro Cavalcanti', 'Canoas', 50),
(3, 'Bruno da Cunha', 'Curitiba', 41),
(4, 'Rafaela da Rocha', 'São Paulo', 36),
(5, 'Júlia Barros', 'Salvador', 52),
(6, 'Marcela Ribeiro', 'Canoas', 47),
(7, 'Renan Costa', 'Porto Alegre', 42),
(8, 'Ricardo Cavalcanti', 'Curitiba', 56),
(9, 'Vanessa das Neves', 'Canoas', 54),
(10, 'Juliana da Cunha', 'Curitiba', 28),
(11, 'Lucas da Rocha', 'São Paulo', 38),
(12, 'Carolina Moreira', 'Porto Alegre', 65),
(13, 'Ana Fernandes', 'São Paulo', 44),
(14, 'Felipe Martins', 'Canoas', 60),
(15, 'Gabriela Pereira', 'Curitiba', 41),
(16, 'André Almeida', 'Salvador', 26),
(17, 'Eduardo Correia', 'Porto Alegre', 18),
(18, 'Larissa Correia', 'Curitiba', 39),
(19, 'Diego Barbosa', 'São Paulo', 58),
(20, 'Camila Rodrigues', 'Canoas', 23);

-- Inserir dados na tabela produtos
INSERT INTO produtos (id, nome, categoria, preco) VALUES
(1, 'Celular 49', 'Informática', 544.88),
(2, 'Camiseta 78', 'Vestuário', 1212.62),
(3, 'Copo 69', 'Informática', 1459.94),
(4, 'Gamepad 11', 'Brinquedos', 446.84),
(5, 'HD 47', 'Brinquedos', 296.51),
(6, 'Camiseta 7', 'Eletrônicos', 990.37),
(7, 'Notebook 89', 'Alimentos', 121.96),
(8, 'Boneco 41', 'Informática', 1283.01),
(9, 'Celular 15', 'Informática', 881.59),
(10, 'Mouse 95', 'Informática', 1251.32),
(11, 'Notebook 64', 'Games', 1226.12),
(12, 'Fone 83', 'Games', 83.34),
(13, 'Fone 37', 'Brinquedos', 428.27),
(14, 'Teclado 77', 'Brinquedos', 1142.89),
(15, 'Mouse 2', 'Vestuário', 90.01),
(16, 'HD 79', 'Brinquedos', 1255.95),
(17, 'Boneco 29', 'Brinquedos', 387.66),
(18, 'Notebook 5', 'Informática', 765.00),
(19, 'Teclado 10', 'Eletrônicos', 781.18),
(20, 'Gamepad 54', 'Games', 274.66);


-- Exercicio 1

SELECT nome, preco FROM produtos WHERE preco > 200 ORDER BY preco DESC;

 -- Exercicio 2
 
 SELECT DISTINCT cidade FROM clientes;
 
 -- Exercicio 3
 
 SELECT nome FROM produtos WHERE nome LIKE '%game%';
 
 -- Exercicio 4
 
 SELECT * FROM produtos ORDER BY preco ASC LIMIT 3;
 
 -- Exercicio 5
 
 SELECT nome FROM clientes WHERE cidade = 'Porto Alegre' OR cidade = 'Canoas';
 
 -- Exercicio 6
 
 SELECT nome FROM clientes WHERE cidade = 'Canoas';
 
 -- Exercicio 7
 
 SELECT nome FROM clientes WHERE idade BETWEEN 30 AND 40;
 
 -- Exercicio 8
 
 SELECT nome FROM produtos WHERE nome LIKE '%Note%'; 
 
 -- Exercicio 9
 
 SELECT nome FROM clientes WHERE cidade = 'São Paulo' OR cidade = 'Porto Alegre' OR cidade = 'Curitiba';
 
 -- Exercicio 10 
 
 SELECT * FROM produtos WHERE categoria = 'Games' ORDER BY preco DESC;
 
 -- Exercicio 11
 
SELECT * FROM produtos ORDER BY preco DESC LIMIT 5; 

-- Exercicio 12

SELECT nome, idade, cidade FROM clientes ORDER BY idade ASC LIMIT 3;

-- Exercicio 13

SELECT nome, preco FROM produtos WHERE preco < 100;

-- Exercicio 14 

SELECT nome, categoria FROM produtos WHERE (categoria = 'Informática' OR 'Eletrônicos') AND preco > 1000 ORDER BY preco ASC;

-- Exercicio 15 

SELECT DISTINCT cidade FROM clientes;

-- Exercicio 16

SELECT * FROM clientes WHERE NOT cidade = 'São Paulo';

-- Exercicio 17

SELECT * FROM produtos WHERE NOT (preco BETWEEN 200 AND 800); 


-- Atualizando categorias de produtos



UPDATE produtos SET categoria = 'Eletrônicos' WHERE id IN (4, 12, 13, 20);
UPDATE produtos SET categoria = 'Informática' WHERE id IN (5, 7, 8, 10, 11, 14, 15, 16, 18, 19);
UPDATE produtos SET categoria = 'Vestuário' WHERE id IN (6);
UPDATE produtos SET categoria = 'Brinquedos' WHERE id IN (9, 17);


-- Criando a tabela compras (M:N clientes - produtos)

CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    produto_id INT NOT NULL,
    data_compra DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    quantidade INT NOT NULL CHECK (quantidade > 0),

    CONSTRAINT fk_compras_cliente FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    CONSTRAINT fk_compras_produto FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserindo dados em compras

INSERT INTO compras (cliente_id, produto_id, data_compra, quantidade) 
VALUES
(1, 4, '2025-01-12', 1),
(1, 6, '2025-02-03', 2),
(1, 18, '2025-03-07', 1),
(2, 10, '2025-01-25', 1),
(2, 14, '2025-02-10', 1),
(3, 12, '2025-03-01', 3),
(3, 1, '2025-02-18', 1),
(3, 9, '2025-02-23', 2),
(3, 8, '2025-03-02', 1),
(4, 19, '2025-03-02', 1),
(5, 2, '2025-02-20', 4),
(5, 20, '2025-01-15', 1),
(6, 8, '2025-03-05', 2),
(6, 17, '2025-02-09', 1),
(6, 11, '2025-03-11', 1),
(7, 15, '2025-02-27', 5),
(8, 5, '2025-03-01', 1),
(8, 7, '2025-01-18', 2),
(8, 13, '2025-02-14', 1),
(9, 16, '2025-03-06', 1),
(9, 9, '2025-02-25', 2),
(10, 3, '2025-03-10', 6),
(11, 12, '2025-01-21', 2),
(11, 6, '2025-03-08', 1),
(12, 18, '2025-02-15', 1),
(12, 1, '2025-02-28', 2),
(12, 5, '2025-03-09', 3),
(13, 14, '2025-03-12', 1),
(14, 10, '2025-01-30', 4),
(14, 7, '2025-02-19', 2),
(15, 17, '2025-03-04', 1),
(15, 4, '2025-01-29', 3),
(15, 20, '2025-02-05', 1),
(15, 19, '2025-02-22', 2),
(16, 8, '2025-02-07', 1),
(16, 11, '2025-03-06', 1),
(17, 9, '2025-01-27', 2),
(18, 2, '2025-02-16', 1),
(18, 15, '2025-03-03', 4),
(19, 6, '2025-01-20', 2),
(19, 12, '2025-02-12', 1),
(19, 1, '2025-03-01', 1),
(20, 4, '2025-02-08', 1);

SELECT c.nome AS clientes, p.nome AS produtos, p.preco AS Valor
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
	AND p.id = co.produto_id
    AND p.preco > 1000;
    
SELECT DISTINCT produto_id FROM compras;

INSERT INTO produtos (nome, categoria, preco)
VALUES
('Sabão', 'Polifórmio', 2.00);
    
    
SELECT p.* FROM produtos p
WHERE p.id NOT IN (SELECT DISTINCT produto_id FROM compras);

SELECT DISTINCT produto_id FROM compras;
 
SELECT c.nome, co.id, co.data_compra
FROM clientes c, compras co
WHERE c.id = co.cliente_id; 

SELECT c.nome, p.nome, co.quantidade
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id;
  
SELECT c.nome, p.nome, p.preco
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
ORDER BY c.nome ASC, p.preco DESC;


-- EXERCICIO 1

SELECT c.nome AS cliente, p.nome AS produtos
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
AND p.id = co.produto_id;

-- EXERCICIO 2

SELECT c.nome, co.id, p.nome AS produtos, co.quantidade
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
AND p.id = co.produto_id
AND co.quantidade > 1;

-- EXERCICIO 3

SELECT c.nome AS cliente, p.nome AS produtos
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.categoria = 'Eletrônicos'
  AND c.cidade = 'Canoas';
  
-- EXERCICIO 4

SELECT c.nome AS cliente, p.nome AS produtos
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.nome = 'Gamepad 54';
  
-- EXERCICIO 5

SELECT c.nome AS cliente, p.nome AS produtos
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.nome LIKE '%Notebook%';
  
-- EXERCICIO 6

SELECT c.nome AS cliente, p.nome, p.preco
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.preco > 1500;
  
-- EXERCICIO 7

SELECT c.nome AS cliente, p.nome AS produtos
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND c.cidade = 'Salvador'
  AND p.categoria = 'Informática';
  
-- EXERCICIO 8

SELECT c.nome AS cliente, p.nome AS produtos
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND c.nome = 'Ana Fernandes';
  
-- EXERCICIO 9

SELECT c.nome AS cliente, p.nome AS produtos
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.nome LIKE 'Camiseta%';
  
-- EXERCICIO 10

SELECT c.nome AS cliente, p.nome AS produtos, co.data_compra
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND co.data_compra BETWEEN '2025-02-01' AND '2025-02-28';
  
  
  
  -- EXERCICIO AULA 9
  
  -- EXERCICIO 1
  -- 1 Conte quantos produtos existem em cada categoria.
  
  SELECT categoria, COUNT(*) AS total_produtos
  FROM produtos
  GROUP BY categoria;
  
  
  -- EXERCICIO 2
-- 2 Calcule o valor total em estoque (preço × quantidade) por categoria.

SELECT SUM(preco * quantidade) AS estoque_vendas
FROM compras co, produtos p
WHERE co.produto_id = p.id
GROUP BY categoria;

-- EXERCICIO 3
-- 3 Liste as 5 cidades com mais clientes.

SELECT cidade, COUNT(*) AS qtd_clientes
FROM clientes
GROUP BY cidade
ORDER BY qtd_clientes DESC
LIMIT 5;

-- EXERCICIO 4
-- 4 Mostre os produtos que nunca foram comprados.

SELECT * FROM produtos
WHERE id NOT IN (SELECT produto_id FROM compras);

-- EXERCICIO 5
-- 5 Calcule a média de idade dos clientes por cidade.

SELECT cidade, AVG(idade) AS média_idade FROM clientes
GROUP BY cidade;

-- EXERCICIO 6
-- 6 Liste os clientes que gastaram mais de R$ 5000 no total.

SELECT c.nome, SUM(p.preco * co.quantidade) AS total_gasto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id AND p.id = co.produto_id
GROUP BY c.nome
HAVING SUM(p.preco * co.quantidade) > 5000;

-- EXERCICIO 7
-- 7 Calcule o ticket médio (valor médio) por compra.

SELECT AVG(preco * quantidade) AS preco_medio
FROM compras c, produtos p 
WHERE c.produto_id - p.id;

-- EXERCICIO 8
-- 8 Liste as categorias com vendas médias superiores a R$ 1000.

SELECT p.categoria, AVG (p.preco * co.quantidade) AS vendas_feitas
FROM compras co, produtos p
WHERE p.id = co.produto_id
GROUP BY p.categoria
HAVING AVG(p.preco * co.quantidade) > 1000;

-- EXERCICIO 9
-- 9 Mostre a diferença entre o produto mais caro e o mais barato em cada categoria.

SELECT categoria, (max(preco) - min(preco)) AS comparativo_preco FROM produtos
GROUP BY categoria
ORDER BY categoria ASC;

