const sql = require("./db.js");

// constructor
const Client = function (client) {
  this.nome = client.nome;
  this.cpf = client.cpf;
  this.nascimento = client.nascimento;
  this.endereco = client.endereco;
  this.cidade = client.cidade;
};

Client.create = (newClient, result) => {
  sql.query("INSERT INTO clientes SET ?", newClient, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    //console.log("created client: ", { id: res.insertId, ...newClient });
    result(null, { id: res.insertId, ...newClient });
  });
};

Client.findById = (id, result) => {
  sql.query(`SELECT * FROM clientes WHERE id = ${id}`, (err, res) => {
    if (err) {
      //console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      //console.log("found client: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Client with the id
    result({ kind: "not_found" }, null);
  });
};

Client.getAll = (title, result) => {
  let query = "SELECT * FROM clientes";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    //console.log("clientes: ", res);
    result(null, res);
  });
};

Client.updateById = (id, client, result) => {
  sql.query(
    "UPDATE clientes SET nome = ?, cpf = ?, nascimento = ?, endereco = ?, cidade = ? WHERE id = ?",
    [
      client.nome,
      client.cpf,
      client.nascimento,
      client.endereco,
      client.cidade,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Client with the id
        result({ kind: "not_found" }, null);
        return;
      }

      //console.log("updated client: ", { id: id, ...client });
      result(null, { id: id, ...client });
    }
  );
};

Client.remove = (id, result) => {
  sql.query("DELETE FROM clientes WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Client with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted client with id: ", id);
    result(null, res);
  });
};

Client.removeAll = (result) => {
  sql.query("DELETE FROM clientes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    //console.log(`deleted ${res.affectedRows} clientes`);
    result(null, res);
  });
};

module.exports = Client;
