const router = require("express").Router();
const casinoController = require("../../controllers/casinoController");


router.route("/")
.get(casinoController.findAll)
.post(casinoController.create);

router.route("/:id")
.get(casinoController.findById)
.put(casinoController.update)
.delete(casinoController.remove);

module.exports = router;