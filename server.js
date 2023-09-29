const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT
const connectDB = require("./config/db")

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/clients", require("./routes/clientsRoutes"))



app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`)
})