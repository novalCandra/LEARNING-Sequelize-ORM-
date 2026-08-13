const express = require("express");

const { index } = require("../controller/user.controller.js");

const router =
    express.Router();

router.get(
    "/",
    index
);

module.exports =  
router;