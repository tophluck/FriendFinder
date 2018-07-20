var friends = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
  
    app.post("/api/friends", function(req, res) {

        var lowestDiff = 100;
        var match = {};

        friends.forEach(function(person) {
            var diff = 0;
            diff += Math.abs(req.body.scores[0] - person.scores[0]);
            diff += Math.abs(req.body.scores[1] - person.scores[1]);
            diff += Math.abs(req.body.scores[2] - person.scores[2]);
            diff += Math.abs(req.body.scores[3] - person.scores[3]);
            diff += Math.abs(req.body.scores[4] - person.scores[4]);
            diff += Math.abs(req.body.scores[5] - person.scores[5]);
            diff += Math.abs(req.body.scores[6] - person.scores[6]);
            diff += Math.abs(req.body.scores[7] - person.scores[7]);
            diff += Math.abs(req.body.scores[8] - person.scores[8]);
            diff += Math.abs(req.body.scores[9] - person.scores[9]);
            if (diff < lowestDiff) {
                match = person;
            }
        })
        friends.push(req.body);

        res.json(match);
    });
};