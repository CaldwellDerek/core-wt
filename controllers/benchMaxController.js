const express = require("express");
const router = express.Router();
const { BenchMax } = require("../models");

router.get("/", async (req, res) => {
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
})

module.exports = router;