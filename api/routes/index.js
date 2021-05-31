const express = require("express");
const router = express.Router();
const passport = require('passport')
const User = require('../Models/User')

router.post("/register", async (req, res , next) => {
    console.log("entro")
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

router.post("/login", passport.authenticate('local', {failureRedirect: '/login'}), (req, res, next) => {
    res.send([req.body, req.user])
})

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  console.log("entro aca");
  res.sendStatus(404);
});

module.exports = router;
