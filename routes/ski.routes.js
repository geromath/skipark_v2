module.exports = (app) => {
  const skis = require("../controllers/ski.controller.js");

  var router = require("express").Router();

  // Create a new Ski
  router.post("/", skis.create);

  // Retrieve a single Ski with id
  router.get("/", skis.findAll);

  // Retrieve a single Ski with id
  router.get("/:id", skis.findOne);

  // Update a Ski with id
  router.put("/:id", skis.update);

  // Delete a Ski with id
  router.delete("/:id", skis.delete);

  app.use("/api/skis", router);
};
