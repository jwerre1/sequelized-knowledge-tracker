// var connection = require("../config/connection.js");

// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }


// function objToSql(ob) {
//     var arr = [];
  
//     for (var key in ob) {
//       var value = ob[key];

//       if (Object.hasOwnProperty.call(ob, key)) {

//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }

//         arr.push(key + "=" + value);
//       }
//     }

//     return arr.toString();
// }


// var orm = {
//     selectAll: function(table, cb) {
//         var queryString = "select * from " + table + ";";
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },

//     insertOne: function(table, col, val, cb) {
//         var queryString = "insert into " + table + " (" + col.toString() + ") values (" + printQuestionMarks(val.length) + ");";
//         console.log(queryString);
//         connection.query(queryString, val, function(err, result) {
//             if (err) {
//                 throw err;
//             }

//             cb(result);
//         });
//     },

//     updateOne: function(table, objColVal, condition, cb) {
//         var queryString = "update " + table + " set " + objToSql(objColVal) + " where " + condition + ";";
//         console.log(queryString);
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }

//             cb(result);
//         })
//     }
// }

// // Export connection for models/knowledge.js to use. 
// module.exports = orm;