const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    return res.render("login");
})

router.get("/signout", (req, res)=> {
    req.session.destroy();
    return res.render("login");
})

router.get("/signup", (req, res) => {
    return res.render("signup");
})

router.get("/home", (req, res) => {
    return res.render("home")
})

router.get("/workout", (req, res) => {
    return res.render("exercises")
})

router.get("/my-workout", (req, res) => {
    return res.render("my-workouts")
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