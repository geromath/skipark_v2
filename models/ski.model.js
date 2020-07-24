const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Ski = sequelize.define("ski", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  Ski.associate = function (models) {
    models.Ski.hasMany(models.SkiUse);
    models.Ski.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Ski;
};
