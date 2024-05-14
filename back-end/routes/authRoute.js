const { handleRegister, handleLogin } = require("../controllers/authController");

const router = require("express").Router();


router
    .post("/register",handleRegister)
    .post("/login",handleLogin)

module.exports = router