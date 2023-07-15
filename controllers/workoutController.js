const express = require("express");
const router = express.Router();
const { Workout } = require("../models");

router.get("/all", async (req, res) => {
    try {
        const allWorkouts = await Workout.findAll({
            where: {
                username: req.session.username
            }
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

router.delete("/:id", async (req, res) => {
    try {
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