import { Router } from "express";
import { prisma } from "../prisma/index.js";
const router = Router();

router.get('/weapons', async (req, res) => {
    const weapons = await prisma.weapons.findMany();
    res.json(weapons);
});

router.post('/weapons', async (req, res) => {
    const newWeapons = await prisma.weapons.create({
        data: req.body,
    });
    res.json(newWeapons);
});

export default router;