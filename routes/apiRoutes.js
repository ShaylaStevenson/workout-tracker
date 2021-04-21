const db = require('../models');
const router = require('express').Router();

// get all  workoutes -GET
router.get("/api/workouts", (req, res) => {

    db.Workout.find({}).then(allWorkouts => {
        //console.log("all workouts");
        //console.log(allWorkouts);
        res.json(allWorkouts);
    }).catch(err => {
        res.json(err);
    });
});



    // create new workut -POST
    // add exercise to a workout -PUT


module.exports = router;
