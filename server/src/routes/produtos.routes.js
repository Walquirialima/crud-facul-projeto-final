import { Router } from "express";
import { db } from "../data/mysql.js";

const produtosRoutes = Router();

produtosRoutes.post("/cadastrar-produto", (req, res) => {
  const nomeProduto = req.body.nomeProduto;
  const nomeEmpresa = req.body.nomeEmpresa;

  db.query(
    "INSERT INTO produtos (nomeProduto, nomeEmpresa) VALUES (?,?)",
    [nomeProduto, nomeEmpresa],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Produto Cadastrado");
      }
    }
  );
});

produtosRoutes.get("/listar", (req, res) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

produtosRoutes.put("/editar-produto", (req, res) => {
  const { id } = req.body;
  const { nomeProduto } = req.body;
  const { nomeEmpresa } = req.body;
  let mysql =
    "UPDATE produtos SET nomeProduto = ?, nomeEmpresa = ? WHERE id = ?";
  db.query(mysql, [nomeProduto, nomeEmpresa, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

produtosRoutes.delete("/deletar-produto/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM produtos WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

export { produtosRoutes };
