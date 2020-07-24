const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:qppq2002@localhost:5432/skipark2019"
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.skis = require("./ski.model.js")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.ski_uses = require("./ski_use.model")(sequelize, Sequelize);

module.exports = db;
