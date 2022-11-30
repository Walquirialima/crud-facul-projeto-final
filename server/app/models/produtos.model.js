const sql = require("./db.js");

// constructor
const Produtos = function (produtos) {
  this.nomeProduto = produtos.nomeProduto;
  this.nomeEmpresa = produtos.nomeEmpresa;
};

Produtos.create = (newProdutos, result) => {
  sql.query("INSERT INTO produtos SET ?", newProdutos, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created produtos: ", { id: res.insertId, ...newProdutos });
    result(null, { id: res.insertId, ...newProdutos });
  });
};

Produtos.findById = (id, result) => {
  sql.query(`SELECT * FROM produtos WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found produtos: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Provider with the id
    result({ kind: "not_found" }, null);
  });
};

Produtos.getAll = (title, result) => {
  let query = "SELECT * FROM produtos";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("produtos: ", res);
    result(null, res);
  });
};

Produtos.updateById = (id, produtos, result) => {
  sql.query(
    "UPDATE produtos SET nomeProduto = ?, nomeEmpresa = ? WHERE id = ?",
    [produtos.nomeProduto, produtos.nomeEmpresa, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Produtos with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated produtos: ", { id: id, ...produtos });
      result(null, { id: id, ...produtos });
    }
  );
};

Produtos.remove = (id, result) => {
  sql.query("DELETE FROM produtos WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Provider with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted produtos with id: ", id);
    result(null, res);
  });
};

Produtos.removeAll = (result) => {
  sql.query("DELETE FROM produtos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} produtos`);
    result(null, res);
  });
};

module.exports = Produtos;
