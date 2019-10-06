// links the peoples array
var people = require("../data/friends");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(people);
  });

  app.post("/api/friends", function(req, res) {
        //TODO: Create a algorithm to check and see if the person is compatible with another person

  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    people.length = 0;

    res.json({ ok: true });
  });
};
