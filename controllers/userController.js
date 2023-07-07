const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");

// Returns all users
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

// Logs user in
router.post("/login", async (req, res) => {
    try {
        const findUser = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (findUser && bcrypt.compareSync(req.body.password, findUser.password)){
            req.session.userID = findUser.id;
            res.session.username = findUser.username;
            res.status(200).json(findUser);
        } else {
            res.status(401).json({msg: "Incorrect email or password!"});
        }
    } catch (error){
        console.log(error);
        res.status(500).json({ msg: "An error has occurred!" });
    }
})

// Creates new user
router.post("/create", async (req, res) => {
    try {
        const newUser = await User.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password
        });
        
        if (newUser){
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            res.status(200).json(newUser);
        } else {
            res.status(404).json( {msg: "Something went wrong! "});
        }
    } catch (error){
        console.log(error);
        res.status(500).json({ msg: "An error has occurred!" });
    }
})

module.exports = router;