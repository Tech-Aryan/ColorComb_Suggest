const mongoose = require("mongoose");

const ColorSchema = new mongoose.Schema({
  shirtColor: { type: String, required: true },
  pantColor: { type: String, required: true },
});

module.exports = mongoose.model("Color", ColorSchema);
