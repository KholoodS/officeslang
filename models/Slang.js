const mongoose = require("mongoose");

const slangSchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true },
  meaning: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Slang", slangSchema);
