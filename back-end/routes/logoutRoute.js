const handleLogOut = require("../controllers/logoutController")

const route = require("express").Router()

route.get("/",handleLogOut)

module.exports = route;