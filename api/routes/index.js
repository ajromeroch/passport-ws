const express = require("express");
const router = express.Router();

const usersController = require('./users')

router.use("/register", usersController)

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  console.log("entro aca");
  res.sendStatus(404);
});

module.exports = router;
