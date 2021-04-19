const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    combinedWeight: {
        type: Number,
        default: 0
    },
    combinedDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;