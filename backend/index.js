
const express = require("express");
const { dbConnection } = require("./dbConnection");
const { getRouter } = require("./Routes/get_products.route");
require("dotenv").config()

const app = express()
app.use("/",getRouter)
app.listen(process.env.PORT,dbConnection);

