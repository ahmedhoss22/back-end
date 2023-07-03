const auth = require("../controller/auth.controller")
const router = require("express").Router()
router.post("/register", auth.registerUser)
router.post("/login", auth.loginUser)
module.exports = router