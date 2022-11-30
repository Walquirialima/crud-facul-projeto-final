module.exports = (app) => {
  const produtos = require("../controllers/produtos.controller");

  var router = require("express").Router();

  // Create a new Provider
  router.post("/", produtos.create);

  // Retrieve all Providers
  router.get("/", produtos.findAll);

  // Retrieve all published Providers
  router.get("/published", produtos.findAllPublished);

  // Retrieve a single Provider with id
  router.get("/:id", produtos.findOne);

  // Update a Provider with id
  router.put("/:id", produtos.update);

  // Delete a Provider with id
  router.delete("/:id", produtos.delete);

  // Delete all Providers
  router.delete("/", produtos.deleteAll);

  app.use("/api/produtos", router);
};
