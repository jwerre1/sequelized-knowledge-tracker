module.exports = function(sequelize, DataTypes) {
    var Knowledge = sequelize.define("Knowledge", {
      name: {
         type: DataTypes.STRING,
        allowNull: false
      },
      known: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
    return Knowledge;
  };