const express = require("express")
const { ProductModel } = require("../Model/product_model")
// const app = express()
const getRouter = express()
getRouter.get("/",async(req,res)=>{
    const q =  req.query
    console.log(q)
    try {
        if(!req.query.price){
            let data =  await ProductModel.find({category:req.query.category})
            res.send(data)
        }else if(req.query.price){ 
            let data =  await ProductModel.find({category:req.query.category}).sort({price:req.query.price})
            res.send(data)
        }
    } catch (error) {
        res.send({"msg":error.messege})
    }
})
getRouter.get("/:id",async(req,res)=>{
    const {id} =  req.params
    console.log(id)
    try {
            let data =  await ProductModel.find({_id:id})
            res.send(data)
       
    } catch (error) {
        res.send({"msg":error.messege})
    }
})
module.exports = {getRouter}