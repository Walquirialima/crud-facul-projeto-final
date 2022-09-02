import { Router } from "express";
import { db } from "../data/mysql";

const fornecedoresRoutes = Router();

fornecedoresRoutes.post("/cadastrar-fornecedor", (req, res) => {
  const nomeEmpresa = req.body.nomeEmpresa;
  const cnpj = req.body.cnpj;
  const endereco = req.body.endereco;
  const cidade = req.body.cidade;

  db.query(
    "INSERT INTO fornecedores (cnpj, nomeEmpresa, endereco, cidade) VALUES (?,?,?,?)",
    [cnpj, nomeEmpresa, endereco, cidade],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Fornecedor Cadastrado");
      }
    }
  );
});

fornecedoresRoutes.get("/listar", (req, res) => {
  db.query("SELECT * FROM fornecedores", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

fornecedoresRoutes.put("/editar-fornecedor", (req, res) => {
  const { id } = req.body;
  const { cnpj } = req.body;
  const { endereco } = req.body;
  const { cidade } = req.body;
  const { nomeEmpresa } = req.body;

  let mysql =
    "UPDATE fornecedores SET cnpj = ?, endereco = ?, cidade = ?, nomeEmpresa = ? WHERE id = ?";
  db.query(mysql, [cnpj, endereco, id, cidade, nomeEmpresa], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

fornecedoresRoutes.delete("/deletar-fornecedor/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM fornecedores WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

export { fornecedoresRoutes };
