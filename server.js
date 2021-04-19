const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;

//const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//note: workoutTracker
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", { useNewUrlParser: true });

//routes
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

// homepage: get '/', /index.html 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/index.html"));
});

// exercise page: get '/exercise', /exercise.html
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/exercise.html"));
});

// stats page: get '/stats', /stats.html
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/stats.html"));
});

// app.post("/submit", ({ body }, res) => {
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});