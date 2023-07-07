const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    return res.render("login");
})

router.get("/signup", (req, res) => {
    return res.render("signup");
})

router.get("/home", (req, res) => {
    return res.render("home")
})

router.get("/bench", (req, res) => {
    return res.render("bench")
})

router.get("/squat", (req, res) => {
    return res.render("squat")
})

router.get("/deadlift", (req, res) => {
    return res.render("deadlift")
})

module.exports = router;