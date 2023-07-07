const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async (req, res)=> {
    try {
        const allUsers = await User.findAll();
        if (allUsers){
            res.status(200).json(allUsers);
        } else {
            res.status(404).json({ msg: "Unable to find Users!" })
        }
    } catch (error){
        console.log(error);
        res.status(500).json({ msg: "An error has occurred!" });
    }
})

module.exports = router;