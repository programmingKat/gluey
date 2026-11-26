const mongoose = require("mongoose")

const MealSchema = new mongoose.Schema({
    mealName:{
        type: String,
        default: "not analyzed",
        required: false
    }, 
    image:{
        type: String, 
        required: true,
    }, 
    cloudinaryId:{
        type: String, 
        require: true,
    }, 
    createdAt: {
        type:Date, 
        default:Date.now,
        require:true,
    }
})

module.exports = mongoose.model("Meal", MealSchema)