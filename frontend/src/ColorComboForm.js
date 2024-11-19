import React, { useState } from 'react';

const ColorComboForm = ({ onSubmit }) => {
  const [shirtColor, setShirtColor] = useState('');
  const [pantColor, setPantColor] = useState('');
  const [newCombo, setNewCombo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shirtColor || !pantColor) {
      alert("Both shirt and pant colors are required!");
      return;
    }

    const response = await fetch('http://localhost:5000/api/colors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shirtColor, pantColor }),
    });

    const data = await response.json();
    if (data.shirtColor && data.pantColor) {
      setNewCombo(data);  
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from--500 via-teal-500  rounded-xl shadow-xl transform transition-all hover:scale-105 duration-300">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Color Combination App</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-lg text-white font-medium">Shirt Color</label>
          <input
            type="text"
            className="p-3 rounded-lg text-gray-800 text-lg"
            value={shirtColor}
            onChange={(e) => setShirtColor(e.target.value)}
            placeholder="Enter shirt color"
            required
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-lg text-white font-medium">Pant Color</label>
          <input
            type="text"
            className="p-3 rounded-lg text-gray-800 text-lg"
            value={pantColor}
            onChange={(e) => setPantColor(e.target.value)}
            placeholder="Enter pant color"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-black-50 text-white rounded-lg font-semibold hover:bg-black-100 transition duration-300"
        >
          Save Combination
        </button>
      </form>

      {newCombo && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md transform transition-all hover:scale-105 duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">New Combination Saved:</h3>
          <p className="text-lg text-gray-600">{newCombo.shirtColor} shirt + {newCombo.pantColor} pant - {newCombo.suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default ColorComboForm;
