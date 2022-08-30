import { Router } from "express";
import { db } from "../data/mysql";

const clientesRoutes = Router();

clientesRoutes.post("/cadastrar-cliente", (req, res) => {
  const nome = req.body.nome;
  const nascimento = req.body.nascimento;
  const endereco = req.body.endereco;
  const cidade = req.body.cidade;

  db.query(
    "INSERT INTO clientes (nascimento, nome, endereco, cidade) VALUES (?,?,?,?)",
    [nascimento, nome, endereco, cidade],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("cliente Cadastrado");
      }
    }
  );
});

clientesRoutes.get("/listar", (req, res) => {
  db.query("SELECT * FROM clientes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

clientesRoutes.put("/editar-cliente", (req, res) => {
  const { id } = req.body;
  const { nascimento } = req.body;
  const { endereco } = req.body;
  const { cidade } = req.body;
  const { nome } = req.body;

  let mysql =
    "UPDATE clientes SET nascimento = ?, endereco = ?, cidade = ?, nome = ? WHERE id = ?";
  db.query(mysql, [nascimento, endereco, id, cidade, nome], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

clientesRoutes.delete("/deletar-cliente/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM clientes WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

export { clientesRoutes };
