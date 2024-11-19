const express = require("express");
const router = express.Router();
const Color = require("../models/Color");

// Add a color combination
router.post("/", async (req, res) => {
  try {
    const { shirtColor, pantColor } = req.body;
    const newColor = new Color({ shirtColor, pantColor });
    await newColor.save();
    res.json(newColor);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all color combinations
router.get("/", async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
