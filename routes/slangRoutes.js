const express = require("express");
const Slang = require("../models/Slang");

const router = express.Router();

// ✅ Add a slang term
router.post("/add", async (req, res) => {
  try {
    const { word, meaning } = req.body;
    const newSlang = new Slang({ word, meaning });
    await newSlang.save();
    res.status(201).json({ message: "Slang added successfully!", slang: newSlang });
  } catch (error) {
    res.status(500).json({ error: "Error adding slang term" });
  }
});

// ✅ Get all slang terms
router.get("/", async (req, res) => {
  try {
    const slangTerms = await Slang.find();
    res.json(slangTerms);
  } catch (error) {
    res.status(500).json({ error: "Error fetching slang terms" });
  }
});

// ✅ Update a slang term
router.put("/update/:id", async (req, res) => {
  try {
    const updatedSlang = await Slang.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Slang updated!", slang: updatedSlang });
  } catch (error) {
    res.status(500).json({ error: "Error updating slang term" });
  }
});

// ✅ Delete a slang term
router.delete("/delete/:id", async (req, res) => {
  try {
    await Slang.findByIdAndDelete(req.params.id);
    res.json({ message: "Slang deleted!" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting slang term" });
  }
});

module.exports = router;
