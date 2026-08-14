const validator = require("validator");
const { user: UserModel } = require("../models");
const { where } = require("sequelize");

const validateRegister = async (req, res, next) => {
    try {
        let { name, email, password } = req.body;
        name = name?.trim();

        email = email?.trim().toLowerCase();
        console.log({ name, email, password })
        if (!name || !email || !password) {
            return res.status(400).json({
                status: false,
                message: "Bad Request",
                data: null
            })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                status: false,
                message: "Invalid Email",
                data: null
            })
        }

        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            return res.status(400).json({
                status: false,
                message: "Weak Password"
            })
        }

        // Has the Condiction Account been created yet
        const ConditionAccount = await UserModel.findOne({
            where : {
                email
            }
        })
        if (ConditionAccount) {
            return res.status(400).json({
                status: false,
                message: "Email AlReady Registered"
            })
        }
        req.body.name = name
        req.body.email = email
        next()
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

const validasiLogin = async (req, res, next) => {
    let { email, password } = req.body;
    try {
        email = email?.trim().toLowerCase();
        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Bad Request"
            })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                status: false,
                message: "Invalid Email"
            })
        }


        req.body.email = email
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    validasiLogin,
    validateRegister
}