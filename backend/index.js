
const express = require("express");
const { dbConnection } = require("./dbConnection");
const { adminRouter } = require("./Routes/adminRoutes");
const { getRouter } = require("./Routes/get_products.route");
require("dotenv").config()

const app = express()
app.use("/",getRouter)
app.use("/admin",adminRouter)
app.listen(process.env.PORT,dbConnection);

