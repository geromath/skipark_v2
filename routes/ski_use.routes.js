module.exports = (app) => {
  const ski_uses = require("../controllers/ski_use.controller.js");

  var router = require("express").Router();

  // Create a new Use
  router.post("/", ski_uses.create);

  // Retrieve a single Use with id
  router.get("/", ski_uses.findAll);

  // Retrieve a single Use with id
  router.get("/:id", ski_uses.findOne);

  // Update a Use with id
  router.put("/:id", ski_uses.update);

  // Delete a Use with id
  router.delete("/:id", ski_uses.delete);

  app.use("/api/ski-use", router);
};
