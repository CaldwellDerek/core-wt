const express = require("express");
const router = express.Router();

const frontEndRoutes = require("./frontEndController");
router.use("/", frontEndRoutes);

const userRoutes = require("./userController");
router.use("/api/users", userRoutes);

const benchRoutes = require("./benchMaxController");
router.use("/api/bench", benchRoutes);

const squatRoutes = require("./squatMaxController");
router.use("/api/squat", squatRoutes);

const deadliftRoutes = require("./deadliftMaxController");
router.use("/api/deadlift", deadliftRoutes);

const sessionRoutes = require("./sessionsController");
router.use("/api/sessions", sessionRoutes);

module.exports = router;