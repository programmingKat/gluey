const mongoose = require("mongoose");
const Meal = require("./Meal").schema;

const ChildSchema = new mongoose.Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  birthDate: { type: String, unique: false },
  height: { type: String, unique: false },
  weight: { type: String, unique: false },
  meals: {type: [Meal], }
});

module.exports = mongoose.model("Child", ChildSchema);