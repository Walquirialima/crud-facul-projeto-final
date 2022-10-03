const sql = require("./db.js");

// constructor
const Provider = function (provider) {
  this.nome = provider.nome;
  this.cnpj = provider.cnpj;
  this.endereco = provider.endereco;
  this.cidade = provider.cidade;
};

Provider.create = (newProvider, result) => {
  sql.query("INSERT INTO fornecedores SET ?", newProvider, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created provider: ", { id: res.insertId, ...newProvider });
    result(null, { id: res.insertId, ...newProvider });
  });
};

Provider.findById = (id, result) => {
  sql.query(`SELECT * FROM fornecedores WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found provider: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Provider with the id
    result({ kind: "not_found" }, null);
  });
};

Provider.getAll = (title, result) => {
  let query = "SELECT * FROM fornecedores";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("fornecedores: ", res);
    result(null, res);
  });
};

Provider.updateById = (id, provider, result) => {
  sql.query(
    "UPDATE fornecedores SET nome = ?, cnpj = ?, endereco = ?, cidade = ? WHERE id = ?",
    [provider.nome, provider.cnpj, provider.endereco.provider.cidade, id],
    (err, res) => {
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

      console.log("updated provider: ", { id: id, ...provider });
      result(null, { id: id, ...provider });
    }
  );
};

Provider.remove = (id, result) => {
  sql.query("DELETE FROM fornecedores WHERE id = ?", id, (err, res) => {
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

    console.log("deleted provider with id: ", id);
    result(null, res);
  });
};

Provider.removeAll = (result) => {
  sql.query("DELETE FROM fornecedores", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} fornecedores`);
    result(null, res);
  });
};

module.exports = Provider;
