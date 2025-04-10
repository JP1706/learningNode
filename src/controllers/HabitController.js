const getHabitById = async (req, res) => {
  try {
    const habit = await habitModel.findById(req.params.habitId);
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.status(200).json({ data: habit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
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

const getAllHabitsById = async ( req, res) => {
    try {
        const allHabits = await habitModel.findById({ userId : req.params.id})

        if(allHabits.length === 0) {
            res.status(404).json({
                message : "Habits Not Submitted Yet"
            })
        }
        res.status(201).json({
            message : "Habits Found Successfully",
            data : allHabits
        })
    }
    catch(err) {
        message : err.message
    }
}

const updateHabits = async (req, res) => {
    try {
        const updateHabit = await habitModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(201).json({
            message: "Habits Updated Successfully",
            data: updateHabit
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { addHabit, getAllHabits, updateHabits, getAllHabitsById, getHabitById }