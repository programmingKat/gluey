const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  birthDate: { type: String, unique: false },
  height: { type: String, unique: false },
  weight: { type: String, unique: false },
});

module.exports = mongoose.model("Child", ChildSchema);