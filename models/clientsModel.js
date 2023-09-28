const mongoose = require("mongoose")

const clientsSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Merci de remplir un email"],
        unique: [true, "Cet email est déjà enregistré"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Clients", clientsSchema)