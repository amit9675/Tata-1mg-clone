
const express = require("express");
const { dbConnection } = require("./dbConnection")
require("dotenv").config()

const app = express()
app.listen(process.env.PORT,dbConnection);

