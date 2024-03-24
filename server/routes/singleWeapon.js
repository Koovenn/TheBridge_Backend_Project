const express = require("express");
const prisma = require("../prisma/index.js");
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
      const singleWeapon = await prisma.weapons.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.json(singleWeapon);
    } catch (error) {
      res.json("Server error");
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const deleteWeapon = await prisma.weapons.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.json(deleteWeapon);
    } catch (error) {
      res.json("Server error");
    }
  });
  
  module.exports = router;