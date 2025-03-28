var queryModel = require("../models/QueryModel")

const addQuery = async(req, res) => {
    try {
        // console.log(req.body)
        const saveQuery = await queryModel.create(req.body)
        // console.log(saveQuery)

        res.status(201).json({
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

const getQueryById = async (req, res) => {
    try {
        const getQuery = await queryModel.find({userId : req.params.id})

        if(getQuery.length === 0) {
            res.status(404).json({
                message : "No Queries Found"
            })
        }
        else {
            res.status(201).json({
                message : "Queries Fetched Sucessfully",
                data : getQuery
            })
        }
    }
    catch(err) {
        res.status(500).json({
            message : err.message
        })
    }
}

module.exports = {addQuery, getQueries, getQueryById}