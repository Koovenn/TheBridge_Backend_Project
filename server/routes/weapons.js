const express = require("express");
const prisma = require("../prisma/index.js");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newWeapons = await prisma.weapons.create({
      data: req.body,
    });
    res.json(newWeapons);
  } catch (error) {
    res.json("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const weapons = await prisma.weapons.findMany();
    res.json(weapons);
  } catch (error) {
    res.json("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneWeapon = await prisma.weapons.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.json(oneWeapon);
  } catch (error) {
    res.json("Server error");
  }
});

module.exports = router;
