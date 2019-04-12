var db = require("../models");

module.exports = function(app) {

app.get("/", function (req, res) {

    db.Knowledge.findAll({}).then(function(result) {
        let object = {
            knowledge: result
        }
        // console.log(result);
        res.render("index", object);
    });
});

app.post("/api/knowledge/", function (req, res) {
    db.Knowledge.create({
        name: req.body.name  
      }).then(function(result) {
        res.json({ id: result.insertId });
      });
});

app.put("/api/knowledge/:id", function (req, res) {
    db.Knowledge.update({
        known: req.body.known
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
}