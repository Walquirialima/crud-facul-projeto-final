module.exports = (app) => {
  const clientes = require("../controllers/client.controller.js");

  var router = require("express").Router();

  // Create a new Client
  router.post("/", clientes.create);

  // Retrieve all Clients
  router.get("/", clientes.findAll);

  // Retrieve all published Clients
  router.get("/published", clientes.findAllPublished);

  // Retrieve a single Client with id
  router.get("/:id", clientes.findOne);

  // Update a Client with id
  router.put("/:id", clientes.update);

  // Delete a Client with id
  router.delete("/:id", clientes.delete);

  // Delete all Clients
  router.delete("/", clientes.deleteAll);

  app.use("/api/clientes", router);
};
