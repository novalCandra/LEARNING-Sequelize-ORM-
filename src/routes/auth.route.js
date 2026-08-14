const express = require("express");

const { login, register } = require("../controller/auth.controller");
const { validasiLogin, validateRegister } = require("../middleware/validator")
const router = express.Router();

router.post(
    "/register",
    validateRegister,
    register
);

router.post("/login", validasiLogin, login);

module.exports = router