const express = require("express");
const router = express.Router();

/*


      ALL YOUR ROUTES HEREEEEEE!!!!!!


      
      */

//Don´t modify this route, keep it at the bottom.
router.get("/", function(req, res) {
  res.sendStatus(404);
});

module.exports = router;
