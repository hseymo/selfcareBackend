const express = require('express');
const router = express.Router();

const userRoutes = require("./userController")
router.use("/users",userRoutes)

const goalsRoutes = require("./goalsController")
router.use("/goals",goalsRoutes)

const fitnessRoutes = require("./fitnessController")
router.use("/fitness",fitnessRoutes)

const hydrationRoutes = require("./hydrationController")
router.use("/hydration",hydrationRoutes)

const mindfulnessRoutes = require("./mindfulnessController")
router.use("/mindfulness",mindfulnessRoutes)

const sleepRoutes = require("./sleepController")
router.use("/sleep",sleepRoutes)

module.exports = router;