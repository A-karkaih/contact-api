const asyncHandler = require("express-async-handler");

//@Desc Register a user
//@route  Post /api/users/register
//@access  public

const registerUser = asyncHandler(async (req, res) => {

    res.json({ message: "Register the user" })

});

//@Desc Login a user
//@route  Post /api/users/login
//@access  public

const loginUser = asyncHandler(async (req, res) => {

    res.json({ message: "Login the user" })

});

//@Desc Cureent  user info
//@route  get /api/users/current
//@access  rivate

const currentUser = asyncHandler(async (req, res) => {

    res.json({ message: "Current user information " })

});



module.exports = { registerUser , loginUser ,currentUser};