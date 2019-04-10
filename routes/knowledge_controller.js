// var express = require("express");

// var router = express.Router();

var db = require("../models");

module.exports = function(app) {

app.get("/", function (req, res) {

    db.Knowledge.findAll({}).then(function(result) {
        res.json(result);
    });


    // knowledge.selectAll(function (data) {
    //     var hbsObject = {
    //         knowledge: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    // });
});

app.post("/api/knowledge/", function (req, res) {
    db.Knowledge.create({
        name: req.body.name  
      }).then(function(result) {
        res.json(result);
      });

    // knowledge.insertOne([
    //     "name"
    // ], [req.body.name
    //     ], function (result) {
    //         res.json({ id: result.insertId });
    //     });
});

app.put("/api/knowledge/:id", function (req, res) {
    db.Knowledge.update({
        known: req.body.known
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.json(result);
    });

    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    // knowledge.updateOne({
    //     known: req.body.known
    // }, condition, function (result) {
    //     if (result.changedRows == 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // });
});

}
// Export router for server.js to use. 
// module.exports = router;