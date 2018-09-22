module.exports = function(sequelize, DataTypes) {
    var Med = sequelize.define("Med", {
      name: {
        type: DataTypes.STRING
      },
      is_prescription: {
        type: DataTypes.STRING
      },
      condition: {
        type: DataTypes.STRING
      },
      dose: {
        type: DataTypes.STRING
      }
    })

    Med.associate = function (models) {
      Med.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Med;
  };
