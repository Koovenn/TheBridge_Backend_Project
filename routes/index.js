import { Router } from "express";
const router = Router();

router.use("/characters", require("./characters"));
router.use("/weapons", require("./weapons"));

export default router;