const express = require("express");
const router = express.Router();
const { Workout, Exercise } = require("../models");

router.get("/all", async (req, res) => {
    try {
        const allWorkouts = await Workout.findAll({
            where: {
                username: req.session.username
            },
            order: [
                ["createdAt", "DESC"]
            ]
        });
        if (allWorkouts){
            return res.status(200).json(allWorkouts);
        } else {
            return res.status(404).json({ msg: "Unable to find Workouts!" })
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

router.get("/all/exercises", async (req, res) => {
    try {
        const allWorkouts = await Workout.findAll({
            include: [{
                model: Exercise
            }]
        })
        if (allWorkouts){
            return res.status(200).json(allWorkouts);
        } else {
            return res.status(404).json({ msg: "No information found!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

router.post("/create", async (req, res) => {
    try {
        const newWorkout = await Workout.create({
            name: req.body.name,
            username: req.session.username
        });
        
        if (newWorkout){
            return res.status(200).json(newWorkout);
        } else {
            return res.status(404).json( {msg: "Something went wrong! "});
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        console.log("OKAY")
        const deleteWorkout = await Workout.destroy({
            where: {
                id: req.params.id
            }
        });
        
        if (deleteWorkout){
            return res.status(200).json( {msg: "Workout deleted. "});
        } else {
            return res.status(404).json( {msg: "Something went wrong! "});
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

module.exports = router;