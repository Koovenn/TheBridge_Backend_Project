const express = require("express");
const bcrypt = require("bcrypt");
const prisma = require("../prisma");
const router = express.Router();
const passport = require("passport");
const session = require("express-session");

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    });
    res.redirect("/auth/login-page");
  } catch (error) {
    console.log(error);
    res.redirect("/auth/register-page");
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/auth/login-page",
    failureFlash: true,
  })
);

router.get("/login-page", (req, res) => {
  res.render("login");
});

router.get("/register-page", (req, res) => {
  res.render("register");
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/auth/login-page");
  });
});

router.get("/logged-in", passport.authenticate('session', { session: false }), (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
