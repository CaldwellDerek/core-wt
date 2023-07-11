const express = require("express");
const router = express.Router();
const { User, SquatMax } = require("../models");

router.get("/", async (req, res) => {
    try {
        const squatMaxes = await SquatMax.findAll({
            where: {
                userID: req.session.userID
            },
            order: [
                ["squatMax", "DESC"]
            ]
        });
        if (squatMaxes){
            return res.status(200).json(squatMaxes);
        } else {
            return res.status(404).json({ msg: "Unable to find Squat Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.get("/highest", async (req, res) => {
    try {
        const squatMaxes = await SquatMax.findAll({
            order: [
                ["squatMax", "DESC"]
            ]
        });
        if (squatMaxes){
            const userData = await User.findOne({
                where: {
                    id: squatMaxes[0].dataValues.userID
                }
            });
            if (userData){
                return res.status(200).json({ 
                    username: userData.dataValues.username,
                    weight: squatMaxes[0].dataValues.squatMax
                });
            } else {
                return res.status(404).json({ msg: "Unable to find User Data!" });
            }
        } else {
            return res.status(404).json({ msg: "Unable to find Squat Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.get("/all", async (req, res) => {
    try {
        const allSquatMaxes = await SquatMax.findAll();
        if (allSquatMaxes){
            return res.status(200).json(allSquatMaxes);
        } else {
            return res.status(404).json({ msg: "Unable to find Squat Maxes!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
});

router.post("/create", async (req, res) => {
    try {
        const newMax = await SquatMax.create({
            squatMax: req.body.squatMax,
            userID: req.session.userID
        });
        if (newMax){
            return res.status(200).json(newMax);
        } else {
            return res.status(404).json({ msg: "Unable to create new Squat Max!" });
        }
    } catch (error){
        console.log(error);
        return res.status(500).json({ msg: "An error has occurred!" });
    }
})

module.exports = router;