const express = require("express");
const prisma = require("../prisma/index.js");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newCharacter = await prisma.characters.create({
      data: req.body,
    });
    res.json(newCharacter);
  } catch (error) {
    res.json("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const characters = await prisma.characters.findMany();
  res.json(characters);
  } catch (error) {
    res.json("Server error");
  }
});

module.exports = router;
