const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let colorCombinations = []; // Store color combinations in memory

const suggestCombination = (shirtColor, pantColor) => {
  const contrastColors = {
    red: ['black', 'white', 'grey', 'navy', 'beige'],
    blue: ['white', 'beige', 'grey', 'brown', 'yellow'],
    black: ['white', 'grey', 'beige', 'blue'],
    grey: ['navy', 'black', 'white', 'burgundy', 'pink'],
    green: ['beige', 'brown', 'black', 'yellow'],
    yellow: ['blue', 'grey', 'white', 'green'],
    pink: ['grey', 'white', 'black', 'beige'],
    white: ['black', 'navy', 'brown', 'blue'],
    brown: ['blue', 'green', 'white', 'beige'],
    purple: ['yellow', 'grey', 'white', 'black'],
    orange: ['blue', 'grey', 'white', 'brown'],
    navy: ['yellow', 'white', 'grey', 'green'],
    turquoise: ['orange', 'grey', 'white', 'black'],
    beige: ['navy', 'black', 'blue', 'brown'],
    gold: ['black', 'red', 'blue', 'white'],
  };

  if (!contrastColors[shirtColor]) {
    return `No data available for the shirt color: ${shirtColor}`;
  }

  const validPantColors = contrastColors[shirtColor];

  if (validPantColors.includes(pantColor)) {
    return "Perfect match!";
  } else {
    return `Consider pairing a ${shirtColor} shirt with one of these pants: ${validPantColors.join(', ')}.`;
  }
};

// Add a new color combination
app.post('/api/colors', (req, res) => {
  const { shirtColor, pantColor } = req.body;

  if (!shirtColor || !pantColor) {
    return res.status(400).json({ error: 'Shirt color and pant color are required.' });
  }

  const suggestion = suggestCombination(shirtColor, pantColor);
  const newCombo = { shirtColor, pantColor, suggestion };

  // Log the new combination to verify it's being added
  console.log('Adding new combination:', newCombo);

  colorCombinations.push(newCombo);

  res.status(201).json(newCombo);
});

// Get all color combinations (not used for display, just for future use)
app.get('/api/colors', (req, res) => {
  res.json(colorCombinations);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
