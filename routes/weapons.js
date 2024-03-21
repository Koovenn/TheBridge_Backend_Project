const express = require("express");
const prisma = require("../prisma/index.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const weapons = await prisma.weapons.findMany();
  res.json(weapons);
});

router.post("/", async (req, res) => {
  const newWeapons = await prisma.weapons.create({
    data: req.body,
  });
  res.json(newWeapons);
});

module.exports = router;
