const express = require("express");
const router = express.Router();

router.use("/characters", require("./characters"));
router.use("/singleCharacter", require("./singleCharacter"));
router.use("/weapons", require("./weapons"));
router.use("/singleWeapon", require("./singleWeapon"));
router.use("/auth", require("./auth"));
router.use("/home", require("./home"));

module.exports = router;
