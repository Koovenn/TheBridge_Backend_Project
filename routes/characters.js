const express = require("express");
const prisma = require("../prisma/index.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const characters = await prisma.characters.findMany();
  res.json(characters);
});

router.post("/", async (req, res) => {
  const newCharacter = await prisma.characters.create({
    data: req.body,
  });
  res.json(newCharacter);
});

module.exports = router;
