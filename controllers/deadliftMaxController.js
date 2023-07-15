const express = require("express");
const router = express.Router();
const { User, DeadliftMax } = require("../models");

router.get("/", async (req, res) => {
    try {
        const deadliftMaxes = await DeadliftMax.findAll({
            where: {
                userID: req.session.userID
            },
            order: [
                ["deadliftMax", "DESC"]
            ]
        });
        if (deadliftMaxes){
            return res.status(200).json(deadliftMaxes);
        } else {
            return res.status(404).json({ msg: "Unable to find Deadlift Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.get("/highest", async (req, res) => {
    try {
        const deadliftMaxes = await DeadliftMax.findAll({
            order: [
                ["deadliftMax", "DESC"]
            ]
        });
        try {
            if (deadliftMaxes){
                const userData = await User.findOne({
                    where: {
                        id: deadliftMaxes[0].dataValues.userID
                    }
                });
                if (userData){
                    return res.status(200).json({ 
                        username: userData.dataValues.username,
                        weight: deadliftMaxes[0].dataValues.deadliftMax
                    });
                } else {
                    return res.status(404).json({ msg: "Unable to find User Data!" });
                }
            } else {
                return res.status(404).json({ msg: "Unable to find Deadlift Maxes!" });
            }
        } catch (error) {
            return res.status(200).json({ msg: "No deadlift data exists." });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.get("/all", async (req, res) => {
    try {
        const allDeadliftMaxes = await DeadliftMax.findAll();
        if (allDeadliftMaxes){
            return res.status(200).json(allDeadliftMaxes);
        } else {
            return res.status(404).json({ msg: "Unable to find Deadlift Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.post("/create", async (req, res) => {
    try {
        const newMax = await DeadliftMax.create({
            deadliftMax: req.body.deadliftMax,
            userID: req.session.userID
        });
        if (newMax){
            return res.status(200).json(newMax);
        } else {
            return res.status(404).json({ msg: "Unable to create new Deadlift Max!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

module.exports = router;