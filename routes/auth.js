
const express		= require("express")
const router		= express.Router()

const authController		= require("./../controllers/authController")

const routeGuard			= require("./../middlewares/route-guard")


router.get("/register", routeGuard.authAreas, authController.register)


router.post("/register", routeGuard.authAreas, authController.registerForm)


router.get("/login", routeGuard.authAreas, authController.login)

router.post("/login", routeGuard.authAreas, authController.loginForm)

router.get("/logout", authController.logout)


module.exports = router