
const express			= require("express")
const router			= express.Router()

const indexController 	= require("./../controllers/indexController")

const routeGuard		= require("./../middlewares/route-guard")


router.get("/", indexController.getHome)


router.get("/profile", routeGuard.privateAreas, indexController.getProfile)



module.exports = router