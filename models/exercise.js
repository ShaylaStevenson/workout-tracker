// ref activity 15
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    // define properties of the exercise model
    name: String,
    type:  String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
    //if cardio number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;
