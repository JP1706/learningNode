const routes = require("express").Router()
const habitControllers = require("../controllers/HabitController")
routes.post("/addHabit", habitControllers.addHabit)
routes.get("/getAllHabits", habitControllers.getAllHabits)
routes.put("/updateHabits/:id", habitControllers.updateHabits)
routes.get("/getHabitsById/:id", habitControllers.getAllHabitsById)
module.exports = routes