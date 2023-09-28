const asyncHandler = require("express-async-handler")
const clientsModel = require("../models/clientsModel")

const addClient = asyncHandler(async(req, res) => {
    if(!req.body.email) {
        throw new Error("Merci de remplir le champs email")
    }

    const client = await clientsModel.create({
        email: req.body.email
    })

    res.status(200).json(client)
})

module.exports = {
    addClient
}