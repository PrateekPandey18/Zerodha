const mongoose = require("mongoose")

const {HoldingsSchema} = require("../schemas/HoldingSchma")

const HoldingsModel =  mongoose.model("holding", HoldingsSchema);

module.exports = {HoldingsModel}