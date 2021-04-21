//dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//local connection
const PORT = process.env.PORT || 3000;

//const Workout = require("./models/Workout.js");

//use express()
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect to mongodb atlas and heroku
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workoutTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//listening...
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


