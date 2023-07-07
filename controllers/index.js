const express = require("express");
const router = express.Router();

const frontEndRoutes = require("./frontEndController");
router.use("/", frontEndRoutes);

const userRoutes = require("./userController");
router.use("/api/users", userRoutes);

const benchRoutes = require("./benchMaxController");
router.use("/api/bench", benchRoutes);

const sessionRoutes = require("./sessionsController");
router.use("/api/sessions", sessionRoutes);

module.exports = router;