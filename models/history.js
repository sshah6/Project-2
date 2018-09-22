module.exports = function (sequelize, DataTypes) {
  var History = sequelize.define("History", {
    event: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATEONLY
    }
  })  

  History.associate = function (models) {
    History.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return History;
};
