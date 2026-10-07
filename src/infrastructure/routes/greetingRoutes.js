const { Router } = require("express");
const { getGreeting } = require("../controllers/greetingController.js");

const router = Router();

router.get("/", getGreeting);

module.exports = router;
