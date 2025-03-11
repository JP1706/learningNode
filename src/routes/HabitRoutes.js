const routes = require("express").Router()
const habitControllers = require("../controllers/HabitController")
routes.post("/addHabit",habitControllers.addHabit)
routes.get("/getAllHabits",habitControllers.getAllHabits)
module.exports = routes