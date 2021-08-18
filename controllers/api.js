const router = require('express').Router();
const path = require("path");
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration",
            },
        },
    },])
        .then((workoutdb) => {
            res.json(workoutdb);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then((workoutdb) => {
            res.json(workoutdb);
        })
        .catch((err) => {
            res.json(err);
        });

    router.put("/api/workouts/:id", ({ params, body }, res) => {

        Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
            .then((workoutdb) => {
                res.json(workoutdb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    router.get("/api/workouts/range", (req, res) => {
        Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                },
            },
        },])
            .sort({ _id: -1 })
            .limit(7)
            .then((workoutdb) => {
                console.log(workoutdb);
                res.json(workoutdb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

});

module.exports = router;