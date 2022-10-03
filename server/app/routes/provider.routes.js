module.exports = (app) => {
  const fornecedores = require("../controllers/provider.controller.js");

  var router = require("express").Router();

  // Create a new Provider
  router.post("/", fornecedores.create);

  // Retrieve all Providers
  router.get("/", fornecedores.findAll);

  // Retrieve all published Providers
  router.get("/published", fornecedores.findAllPublished);

  // Retrieve a single Provider with id
  router.get("/:id", fornecedores.findOne);

  // Update a Provider with id
  router.put("/:id", fornecedores.update);

  // Delete a Provider with id
  router.delete("/:id", fornecedores.delete);

  // Delete all Providers
  router.delete("/", fornecedores.deleteAll);

  app.use("/api/fornecedores", router);
};
