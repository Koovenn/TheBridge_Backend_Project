import { Router } from "express";
import { prisma } from "../prisma/index.js";
const router = Router();

router.get('/characters', async (req, res) => {
    const characters = await prisma.characters.findMany();
    res.json(characters);
});

router.post('/characters', async (req, res) => {
    const newCharacter = await prisma.characters.create({
        data: req.body,
    });
    res.json(newCharacter);
});

export default router;