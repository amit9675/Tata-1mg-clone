const express = require("express");
const { ProductModel } = require("../Model/product_model");
// const app = express()
const adminRouter = express();
adminRouter.get("/", async (req, res) => {
  try {
    let data = await ProductModel.find();
    res.send(data);
  } catch (error) {
    res.send({ msg: error.messege });
  }
})
adminRouter.post("/add",async(req,res)=>{
    try {
        let data = await ProductModel.find();
        res.send(data);
      } catch (error) {
        res.send({ msg: error.messege });
      }
})
