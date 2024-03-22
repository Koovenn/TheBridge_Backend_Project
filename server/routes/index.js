const express = require("express");
const router = express.Router();

router.use("/characters", require("./characters"));
router.use("/weapons", require("./weapons"));
router.use("/auth", require("./auth"));
router.use("/home", require("./home"));

module.exports = router;
