const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", (req, res)=> {
    return res.render("login");
})

router.get("/signup", (req, res) => {
    return res.render("signup");
})

router.get("/home", (req, res) => {
    return res.render("home")
})

module.exports = router;