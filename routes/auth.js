// Init router
const express = require("express");
const router = express.Router();

// Load controllers
const authCtrl = reqlib("/controllers/auth");

// Routes
router.post("/login", authCtrl.login);
router.post("/register", authCtrl.register);

// Export router
module.exports = router;
