// // ref activity 15
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // define properties of the workout model
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
            },
            duration: Number,

            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});

 const Workout = mongoose.model("Workout", WorkoutSchema);
 module.exports = Workout;

 // Attempt to use helper function
 //   WorkoutSchema.methods.getTotalDuration = function() {
//     this.totalDuration = `${this.totalDuration}` + `${this.duration}`;
//     return this.totalDuration;
//   };