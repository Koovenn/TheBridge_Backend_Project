const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated.js");

router.get("/", isAuthenticated, (req, res) => {
  res.render("home", { user: req.user });
});

module.exports = router;
