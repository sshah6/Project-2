module.exports = function (sequelize, DataTypes) {
  var Appt = sequelize.define("Appt", {
    date: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    reason: DataTypes.STRING
  })


  Appt.associate = function (models) {
    Appt.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Appt;
};    
