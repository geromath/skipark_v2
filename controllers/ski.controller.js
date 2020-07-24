const db = require("../models");
const Ski = db.skis;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request

  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Ski
  const ski = {
    name: req.body.name,
    description: req.body.description,
  };

  // Save Ski in the database
  Ski.create(ski)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Unrecognized error occurred...",
      });
    });
};

// Retrieve all Skis from the database.
exports.findAll = (req, res) => {
  Ski.findAll() // Can add contitions, just add: { where: contition }
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving skis.",
      });
    });
};

// Find a single Ski with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ski.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Ski with id=" + id,
      });
    });
};

// Update a Ski by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Ski.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ski was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Ski with id=${id}. Maybe Ski was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Ski with id=" + id,
      });
    });
};

// Delete a Ski with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ski was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Ski with id=${id}. Maybe Ski was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Ski with id=" + id,
      });
    });
};
