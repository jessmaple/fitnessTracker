var db = require("../models");
var mongoose = require("mongoose");
function apiRoutes(app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find().then(function (results) {
      res.json(results);
    });
  });
  app.post("/api/workouts", function (req, res) {
    db.Workout.create({}).then(function (results) {
      res.json(results);
    });
  });
  app.put("/api/workouts/:id", function (req, res) {
  
    db.Workout.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      { $push: { exercises: req.body } },
      function (error, success) {
        if (error) {
          console.log(error);
          res.json(err);
        } else {
          console.log(success);
          res.json(success);
        }
      }
    );
  });



  app.get("/api/workouts/range", function(req, res){
      db.Workout.find().then(function(results){
          res.json(results)
      })
  })
}

module.exports = apiRoutes;
