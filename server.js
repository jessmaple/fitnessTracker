var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");

htmlRoutes(app);
apiRoutes(app);

var mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.listen(port, function () {
  console.log("app is listening on http://localhost:" + port);
});
