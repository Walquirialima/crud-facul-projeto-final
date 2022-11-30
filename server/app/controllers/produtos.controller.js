const Produtos = require("../models/produtos.model");

// Create and Save a new Produtos
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Produtos
  const produtos = new Produtos({
    nomeProduto: req.body.nomeProduto,
    nomeEmpresa: req.body.nomeEmpresa,
  });

  // Save Produtos in the database
  Produtos.create(produtos, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Produtos.",
      });
    else res.send(data);
  });
};

// Retrieve all Produtoss from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Produtos.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving fornecedores.",
      });
    else res.send(data);
  });
};

// Find a single Produtos by Id
exports.findOne = (req, res) => {
  Produtos.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Produtos with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Produtos with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// find all published Produtoss
exports.findAllPublished = (req, res) => {
  Produtos.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving produtos.",
      });
    else res.send(data);
  });
};

// Update a Produtos identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Produtos.updateById(req.params.id, new Produtos(req.body), (err, data) => {
    debugger;
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Produtos with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Produtos with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Produtos with the specified id in the request
exports.delete = (req, res) => {
  Produtos.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Produtos with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Produtos with id " + req.params.id,
        });
      }
    } else res.send({ message: `Produtos was deleted successfully!` });
  });
};

// Delete all Produtoss from the database.
exports.deleteAll = (req, res) => {
  Produtos.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all fornecedores.",
      });
    else res.send({ message: `All Produtoss were deleted successfully!` });
  });
};
