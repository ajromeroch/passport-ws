const express = require("express");
const router = express.Router();

const User = require('../Models/User');

router.post("/", async (req, res , next) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
        })
        res.send(user)    
    } catch (err) {
        console.log(err)
    }
})

module.exports = User;
