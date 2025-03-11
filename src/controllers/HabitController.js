const habitModel = require("../models/HabitsModel")


const addHabit = async (req, res) => {

    try {
        // console.log(res.body);
        const savedHabit = await habitModel.create(req.body)
        // console.log(savedHabit);

        res.status(201).json({
            message: "habit added sucessfully",
            data: savedHabit

        })



    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

const getAllHabits = async (req, res) => {
    try {

        const habits = await habitModel.find()
        res.status(201).json({
            message: "all habits",
            data: habits
        })


    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

module.exports = { addHabit, getAllHabits }