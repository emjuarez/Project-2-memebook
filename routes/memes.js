const express = require("express")
const router = express.Router()

const memeController = require("./../controllers/memeController")

router.get("/", memeController.getMemes)


module.exports = router