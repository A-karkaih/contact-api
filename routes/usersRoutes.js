const express = require("express");
const router = express.Router();
const { registerUser , loginUser,currentUser } = require("../cntrollers/usersController");



router.post("/register",registerUser );

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;