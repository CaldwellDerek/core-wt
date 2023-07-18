const express = require("express");
const router = express.Router();
const { Exercise } = require("../models");

router.get("/all", async (req, res) => {
    try {
        const allExercises = await Exercise.findAll();
        if (allExercises){
            return res.status(200).json(allExercises);
        } else {
            return res.status(404).json({ msg: "Unable to find Exercises!" })
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

router.post("/create", async (req, res) => {
    try {
        const newExercise = await Exercise.create({
            name: req.body.name,
            sets: req.body.sets,
            reps: req.body.reps,
            workoutID: req.body.workoutID
        });
        
        if (newExercise){
            return res.status(200).json(newExercise);
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
        const deleteExercise = await Exercise.destroy({
            where: {
                id: req.params.id
            }
        });
        
        if (deleteExercise){
            return res.status(200).json( {msg: "Exercise deleted. "});
        } else {
            return res.status(404).json( {msg: "Something went wrong! "});
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

router.delete("/many/:id", async (req, res) => {
    try {
        const deleteExercise = await Exercise.destroy({
            where: {
                workoutID: req.params.id
            }
        });
        
        if (deleteExercise){
            return res.status(200).json( {msg: "Exercises deleted. "});
        } else {
            return res.status(404).json( {msg: "Something went wrong! "});
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})


module.exports = router;