const express = require("express");
const router = express.Router();
const { registerUser , loginUser,currentUser } = require("../cntrollers/usersController");
const validateToken = require("../cntrollers/middleware/validateTokenHandler");



router.post("/register",registerUser );

router.post("/login", loginUser);

router.get("/current",validateToken , currentUser);

module.exports = router;