const express = require("express")
const router = express.Router()

const memeController = require("./../controllers/memeController")

router.get("/", memeController.getMemes)

router.get("/create", memeController.createMeme)

router.post("/create", memeController.createMemeForm)

router.get("/:memeID", memeController.getDetails)

router.get("/:memeID/edit", memeController.editMeme)

router.post("/:memeID/edit", memeController.editMemeForm)

module.exports = router