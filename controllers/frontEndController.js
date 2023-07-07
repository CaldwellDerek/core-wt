const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", (req, res)=> {
    res.render("login");
})

router.get("/signup", (req, res) => {
    res.render("signup");
})

module.exports = router;