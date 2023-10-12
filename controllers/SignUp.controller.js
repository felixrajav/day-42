const SignUpRouter = require('express').Router();
const userModel = require('../models/Users.models');
const bcrypt = require("bcrypt");
const saltRounds = 10;

SignUpRouter.post('/createUser', async (req, res, next) => {
    const data = req.body;

    try {
        const user = await userModel.findOne({ mail: data.email });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "Email is already in use",
            });
        }

        const hash = await bcrypt.hash(data.password, saltRounds);
        if (hash) {
            const NewUser = new userModel({ ...data, password: hash });
            const response = await NewUser.save();
            return res.status(200).json({
                result: response,
                success: true,
                message: "New user Added Successfully"
            });
        } else {
            return res.status(400).json({
                message: "Password is not in the required format",
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            Error: err
        });
    }
});

module.exports = SignUpRouter;
