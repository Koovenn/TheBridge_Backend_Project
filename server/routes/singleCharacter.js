const express = require("express");
const prisma = require("../prisma/index.js");
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
      const singleCharacter = await prisma.characters.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.json(singleCharacter);
    } catch (error) {
      res.json("Server error");
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const deleteChar = await prisma.characters.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.json(deleteChar);
    } catch (error) {
      res.json("Server error");
    }
  });
  
  module.exports = router;