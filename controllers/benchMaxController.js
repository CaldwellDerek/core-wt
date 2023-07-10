const express = require("express");
const router = express.Router();
const { BenchMax } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allBenchMaxes = await BenchMax.findAll({
            where: {
                userID: req.session.userID
            },
            order: [
                ["benchMax", "DESC"]
            ]
        });
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