var db = require("../db/db.json");

module.exports = function(app) {
    
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(db);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const criteria = {
      id: req.params.id
    };

    con.query("delete from products where ?", criteria, err => {
      if (err) {
        throw err;
      }
    });

    res.end();
  });

};
