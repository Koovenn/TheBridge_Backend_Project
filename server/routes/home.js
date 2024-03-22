const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated.js");

router.get("/", isAuthenticated, (req, res) => {
  try {
    res.render("home", { user: req.user });
  } catch (error) {
    res.json("Server error");
  }
});

module.exports = router;
