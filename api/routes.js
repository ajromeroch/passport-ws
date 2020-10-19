const express = require("express");
const router = express.Router();

/*
  ALL YOUR ROUTES HERE!
*/

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
