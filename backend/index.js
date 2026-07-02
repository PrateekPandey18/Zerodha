require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const {HoldingsModel} = require("./model/HoldingsModel")
const {PositionsModel} = require("./model/PositionsModel")
const PORT = process.env.PORT ||3002

const app = express()
const uri = process.env.MONGO_URL;

// app.get("/setup",async(req,res) =>{
//     let tempHoldings = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ]
//   tempHoldings.forEach((item)=>{
//     let newHolding = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     })
//     newHolding.save();
//   })
//   res.send("done")
// })


app.listen(PORT,()=>{
    console.log("app started")
    mongoose.connect(uri) 
})  