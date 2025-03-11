var queryModel = require("../models/QueryModel")

const addQuery = async(req, res) => {
    try {
        // console.log(req.body)
        const saveQuery = await queryModel.create(req.body)
        // console.log(saveQuery)

        res.status(200).json({
            message : "Query Added",
            data : saveQuery
        })
    }
    catch (err) {
        res.status(500).json({
            message : err.message
        })
    }
}

const getQueries = async(req, res) => {
    try {
        // const getAllQueries = await queryModel.findById(req.params.id)
        const getAllQueries = await queryModel.find()

        res.status(200).json({
            data : getAllQueries
        })
    }
    catch(err) {
        res.status(500).json({
            message : err.message
        })
    }
}

module.exports = {addQuery, getQueries}