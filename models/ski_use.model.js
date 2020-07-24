const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const SkiUse = sequelize.define("ski-use", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  SkiUse.associate = function (models) {
    models.SkiUse.belongsTo(models.Ski, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return SkiUse;
};
