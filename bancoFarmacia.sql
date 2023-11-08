-- Crie o banco de dados
CREATE DATABASE farmacia;

-- Selecione o banco de dados
USE farmacia;

-- Crie a tabela de produtos
CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  imagem VARCHAR(100) NOT NULL
  );

-- Crie a tabela de clientes
CREATE TABLE clientes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(100) NOT NULL
  );

-- Crie a tabela de funcionários
CREATE TABLE funcionarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  cargo VARCHAR(100) NOT NULL
);

-- Crie a tabela de compras
CREATE TABLE compras (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cliente_id INT NOT NULL,
  funcionario_id INT NOT NULL,
  produto_id INT NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes (id),
  FOREIGN KEY (funcionario_id) REFERENCES funcionarios (id),
  FOREIGN KEY (produto_id) REFERENCES produtos (id)
);

-- Insira alguns dados na tabela de produtos
INSERT INTO produtos (nome, preco,imagem) VALUES
  ('Paracetamol', 10.00,''),
  ('Dipirona', 5.00,''),
  ('Ibuprofeno', 15.00,''),
  ('Omeprazol', 20.00,''),
  ('Amoxicilina', 25.00,''),
  ('Dorflex', 30.00,'');
-- Insira alguns dados na tabela de clientes
INSERT INTO clientes (nome, email, telefone) VALUES
  ('João da Silva', 'joao.silva@gmail.com', '1234-5678'),
  ('Maria da Silva', 'maria.silva@gmail.com', '9876-5432'),
  ('José da Silva', 'jose.silva@gmail.com', '3214-5678');

-- Insira alguns dados na tabela de funcionários
INSERT INTO funcionarios (nome, cargo) VALUES
  ('Fulano de Tal', 'Atendente'),
  ('Beltrano de Tal', 'Caixa'),
  ('Ciclano de Tal', 'Gerente');

-- Insira alguns dados na tabela de compras
INSERT INTO compras (cliente_id, funcionario_id, produto_id) VALUES
  (1, 1, 1),
  (2, 2, 2),
  (3, 3, 3);
