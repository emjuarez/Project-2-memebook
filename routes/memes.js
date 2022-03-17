const express = require("express")
const router = express.Router()

const memeController = require("./../controllers/memeController")

const routeGuard = require("./../middlewares/route-guard")


router.get("/", memeController.getMemes)

router.get("/create", memeController.createMeme)

router.post("/create",routeGuard.privateAreas, memeController.createMemeForm)

router.get("/:memeID", routeGuard.privateAreas, memeController.getDetails)

router.get("/:memeID/edit", routeGuard.privateAreas, memeController.editMeme)

router.post("/:memeID/edit", memeController.editMemeForm)

router.get("/:memeID/delete", routeGuard.privateAreas, memeController.deleteMeme)

router.post("/create", routeGuard.privateAreas, memeController.fileUploader)
   

module.exports = router