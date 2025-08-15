-- inserindo curso técnico em desenvolvimento de sistemas
INSERT INTO curso (nome) VALUES ('Técnico em Desenvolvimento de Sistemas');

-- selecionando campos da tabela curso
SELECT id_curso, nome FROM curso;
SELECT * FROM aluno;

-- inserindo curso técnico em enfermagem
INSERT INTO curso (nome) VALUES ('Técnico em Enfermagem');

-- inserindo um novo professor
INSERT INTO professor (nome, email, CPF)
VALUES ('Daniel H. de Souza', 'teste@teste.com', '000');

-- inserindo um novo professor
INSERT INTO professor (nome, email, CPF)
VALUES ('Rodolfo No Respira', 'norespira@sirespira.com', '123');

INSERT INTO professor (nome, email, CPF) VALUES ('Leonardo Souza', 'teste@teste.edu.br', '0000');

SELECT *FROM PROFESSOR;

UPDATE professor 
SET nome = 'Bombardilo Crocodillo',
CPF = '00000001'
WHERE id_professor = 1;

DELETE FROM professor WHERE id_professor = 7;

INSERT INTO professor (nome, email, CPF)
VALUES
('Daniel', 'dhdsouza@senacrs.com.br', '00011122233');
-- ('Dalvana', 'dalvana@senacrs.com.br', '11144466677'),
-- ('Leonardo Souza', leosouza@senacrs.com.br, '22255588899');

SELECT curso.id_curso, curso.nome,
professor.id_professor, professor.nome FROM curso, professor;

INSERT INTO turma (nome, id_curso, id_professor)
VALUES ('PSG25-1T', 1, 12);

DELETE FROM turma WHERE id_turma = 2;
DELETE FROM professor WHERE id_professor = 12;

SELECT * FROM turma;
