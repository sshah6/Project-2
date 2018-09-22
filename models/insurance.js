module.exports = function(sequelize, DataTypes) {
    var Insurance = sequelize.define("Insurance", {
      type: {
        type: DataTypes.STRING
      },
      carrier: {
        type: DataTypes.STRING
      },
      insured_name: {
        type: DataTypes.STRING
      },
      id_number: {
          type: DataTypes.INTEGER
      },
      group_id: {
          type: DataTypes.INTEGER
      },
      effective_date: {
          type: DataTypes.DATEONLY
      }
    })

    Insurance.associate = function (models) {
      Insurance.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    return Insurance;
  };
