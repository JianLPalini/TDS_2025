CREATE TABLE aluno (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE professor (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE curso (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE turma (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    id_curso INT,
    id_professor INT,
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso),
    FOREIGN KEY (id_professor) REFERENCES professor(id_professor)
);

CREATE TABLE matricula (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT,
    id_turma INT,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES turma(id_turma)
);

INSERT INTO aluno (nome, email) VALUES 
('João Peidão', 'joaopeidao@email.com'),
('Maria Loka', 'marialoka@email.com'),
('Carlos Pinto', 'carlos@email.com'),
('Ana Paulada', 'ana@email.com');

SELECT * FROM aluno;

INSERT INTO professor (nome, email) VALUES 
('Prof. Pedrinho do Oeste', 'pedro@email.com'),
('Prof. Helena das goiaba', 'helena@email.com'),
('Prof. Lucas da bica', 'lucas@email.com');

SELECT * FROM professor;

INSERT INTO curso (nome) VALUES 
('Matemática'),
('História'),
('Informática'),
('Biologia'),
('Física');

SELECT * FROM curso;

-- Exemplo: curso 1 = Matemática, professor 1 = Pedro

INSERT INTO turma (nome, id_curso, id_professor) VALUES
('Turma A', 1, 1),
('Turma B', 2, 2),
('Turma C', 3, 3);

SELECT * FROM turma;

-- Atualizar curso 'Informática' para 'Programação'
UPDATE curso SET nome = 'Programação' WHERE nome = 'Informática';

-- Atualizar email do professor Lucas
UPDATE professor SET email = 'lucas.novo@email.com' WHERE nome = 'Prof. Lucas';

SELECT * FROM curso;
SELECT * FROM professor;

INSERT INTO matricula (id_aluno, id_turma) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1);

SELECT * FROM matricula;

-- Deletar aluno com id 4 (Ana Paula)
DELETE FROM aluno WHERE id_aluno = 4;

-- Deletar matrícula com id 2 (Maria Souza)
DELETE FROM matricula WHERE id_matricula = 2;

SELECT * FROM aluno;
SELECT * FROM matricula;

