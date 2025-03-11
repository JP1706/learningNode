var express = require("express")
var mongoose = require ("mongoose")
var cors = require("cors")

var app = express()

const corsOptions = {
    origin : 'http://localhost:5173'
}

app.use(cors()) // Allow request from front end
app.use(express.json()) // post api data will be in json

// Importing Role Routes
var roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)

// Importing User Routes
var userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)

// Importing Query Routes
var queryRoutes = require("./src/routes/QueryRoutes")
app.use(queryRoutes)

// Importing FileUploadRoutes
var fileUploadRoutes = require("./src/routes/FileUploadRoutes")
app.use(fileUploadRoutes)

// Importing Habit Routes
var habitRoutes = require("./src/routes/HabitRoutes")
app.use(habitRoutes)

// Importing Report Routes
var reportRoutes = require("./src/routes/ReportRoutes")
app.use(reportRoutes)

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/25_node_internship").then(()=>{
    console.log("Database Connected Successfully")
})


// Server Creation
const PORT = 3000
app.listen(PORT, ()=> {
    console.log("Server Started at port ", PORT)
})