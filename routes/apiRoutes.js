const db = require('../models');
const router = require('express').Router();
//ref activity 14

// get all  workoutes -GET
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(allWorkouts => {
            console.log("---------all workouts------------");
            console.log(allWorkouts);
            res.json(allWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// get all workouts in range -GET
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .limit(7)
        .then(workoutsRange => {
            console.log("------workouts in range-------");
            console.log(workoutsRange);
            res.json(workoutsRange);
        })
        .catch(err => {
            res.json(err);
        });
});

// create new workut -POST
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(workout => {
            console.log("--------new workout---------");
            console.log(workout);
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

// add exercise to a workout -PUT
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
            { 
                _id: req.params.id
            },







            {
                //$inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body },
            },
                { new: true }
            )
            ////////////////////////////////
            .aggregate(
                // Limit to relevant documents and potentially take advantage of an index
                { $match: {
                    _id: req.params.id
                }},
            
                { $project: {
                    _id: req.params.id,
                    totalDuration: { $add: ["$duration"] }
                }}
            )



////////////////////////////
        .then(workout => {
            console.log("---------edited workout----------");
            console.log(workout);
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;
