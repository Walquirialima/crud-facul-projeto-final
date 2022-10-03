<h1 align="center">

</h1>

<p align="center">
  Sistema de  Gerenciamento  🚀
  <br>
  <br>

</p>

## Mock MySQL Database

```bash
CREATE DATABASE IF NOT EXISTS impactaSistema;

SELECT * FROM clientes;

USE impactaSistema;
CREATE TABLE IF NOT EXISTS clientes
(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(70) NOT NULL,
cpf VARCHAR(70) NOT NULL,
nascimento VARCHAR(70) NOT NULL,
endereco VARCHAR(70) NOT NULL,
cidade VARCHAR(70) NOT NULL
);


INSERT INTO clientes ( nome,cpf, nascimento, endereco, cidade)
VALUES ('Gustavo Mendes','123.542.678-01','07/07/2002','Rua dos bobos, Nº0','São Paulo');
INSERT INTO clientes ( nome,cpf, nascimento, endereco, cidade)
VALUES ('Renata Santos','123.542.354-01','07/07/2002','Rua dos bobos, Nº0','Ceara');
INSERT INTO clientes ( nome,cpf, nascimento, endereco, cidade)
VALUES ('Carla Souza','345.542.678-01','07/07/2002','Rua dos bobos, Nº0','Rio de Janeiro');
INSERT INTO clientes ( nome,cpf, nascimento, endereco, cidade)
VALUES ('Debora mato','123.456.678-01','07/07/2002','Rua dos bobos, Nº0','São Paulo');

USE impactaSistema;
CREATE TABLE IF NOT EXISTS fornecedores
(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(70) NOT NULL,
cnpj VARCHAR(70) NOT NULL,
endereco VARCHAR(70) NOT NULL,
cidade VARCHAR(70) NOT NULL
);


INSERT INTO fornecedores ( nome, cnpj, endereco, cidade)
VALUES ('AM Materiais','25.367.578/0001-01','Rua dos bobos, Nº0','São Paulo');

INSERT INTO fornecedores ( nome, cnpj,  endereco, cidade)
VALUES ('Contruções LT','92.103.798/0001-15','Rua dos bobos, Nº0','Ceara');

INSERT INTO fornecedores ( nome, cnpj, endereco, cidade)
VALUES ('Seven Mateirais','92.103.798/0001-15','Rua dos bobos, Nº0','Rio de Janeiro');

INSERT INTO fornecedores ( nome, cnpj, endereco, cidade)
VALUES ('Casa da Ferragem','59.631.713/0001-04','Rua dos bobos, Nº0','São Paulo');

SELECT * FROM fornecedores;
DROP TABLE impactaSistema.fornecedores;
```

## :checkered_flag: Começando

```bash
# Clone this project
$ git clone https://github.com/Gustavo-Developer/CrudImpacta

# Access
$ cd CrudImpact

# Install dependencies
$ npm i

# Start Aplication
$ npm run start

```

## :framed_picture: Imagens

<h1 align="center">
    <img alt = "Web app" src = "./.github/home.png" width = "100%" />
</h1># Sistema de gerenciamento
