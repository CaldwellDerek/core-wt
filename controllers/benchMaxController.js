const express = require("express");
const router = express.Router();
const { User, BenchMax } = require("../models");

router.get("/", async (req, res) => {
    try {
        const benchMaxes = await BenchMax.findAll({
            where: {
                userID: req.session.userID
            },
            order: [
                ["benchMax", "DESC"]
            ]
        });
        if (benchMaxes){
            return res.status(200).json(benchMaxes);
        } else {
            return res.status(404).json({ msg: "Unable to find Bench Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.get("/highest", async (req, res) => {
    try {
        const benchMaxes = await BenchMax.findAll({
            order: [
                ["benchMax", "DESC"]
            ]
        });
        if (benchMaxes){
            try {
                const userData = await User.findOne({
                    where: {
                        id: benchMaxes[0].dataValues.userID
                    }
                });
                if (userData){
                    return res.status(200).json({ 
                        username: userData.dataValues.username,
                        weight: benchMaxes[0].dataValues.benchMax
                    });
                } else {
                    return res.status(404).json({ msg: "Unable to find User Data!" });
                }
            } catch (error) {
                return res.status(200).json({ msg: "No bench data exists." });
            }
        } else {
            return res.status(404).json({ msg: "Unable to find Bench Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.get("/all", async (req, res) => {
    try {
        const allBenchMaxes = await BenchMax.findAll();
        if (allBenchMaxes){
            return res.status(200).json(allBenchMaxes);
        } else {
            return res.status(404).json({ msg: "Unable to find Bench Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.post("/create", async (req, res) => {
    try {
        const newMax = await BenchMax.create({
            benchMax: req.body.benchMax,
            userID: req.session.userID
        });
        if (newMax){
            return res.status(200).json(newMax);
        } else {
            return res.status(404).json({ msg: "Unable to create new Bench Max!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

module.exports = router;