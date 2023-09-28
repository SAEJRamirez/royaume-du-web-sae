const express = require("express");
const { addClient } = require("../controllers/clientsController");
const router = express.Router();

router.post("/", addClient)

module.exports = router