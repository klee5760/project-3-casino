const router = require("express").Router();
const casinoRoutes = require("./casino");

router.use("/casino", casinoRoutes);

module.exports = router;