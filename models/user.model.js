const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  User.associate = function (models) {
    models.User.hasMany(models.Ski);
  };

  return User;
};
