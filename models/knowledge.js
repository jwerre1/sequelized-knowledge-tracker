module.exports = function(sequelize, DataTypes) {
    var Knowledge = sequelize.define("knowledge", {
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




// var orm = require("../config/orm.js");

// var knowledge = {
//     selectAll: function(cb) {
//         orm.selectAll("knowledge", function(res) {
//             cb(res);
//         });
//     },

//     insertOne: function(col, val, cb) {
//         orm.insertOne("knowledge", col, val, function (res) {
//             cb(res);
//         });
//     },

//     updateOne: function(objColVal, condition, cb) {
//         orm.updateOne("knowledge", objColVal, condition, function(res) {
//             cb(res);
//         });
//     }
// };

// // Export connection for controllers/knowledge_controller.js to use. 
// module.exports = knowledge;