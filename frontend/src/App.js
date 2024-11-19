import React, { useState } from 'react';
import ColorComboForm from './ColorComboForm';

const App = () => {
  const [newCombo, setNewCombo] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white">
      <div className="text-center max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-5xl font-extrabold mb-6">Color Combination Magic ✨</h1>
        <p className="text-xl mb-8">Enter the colors of your shirt and pant, and get stylish suggestions!</p>

        <ColorComboForm onSubmit={setNewCombo} />
        
        {/* New Combination Display */}
        {newCombo && (
          <div className="mt-6 p-6 rounded-lg bg-green-900 shadow-2xl transform transition-all hover:scale-105 duration-300">
            <h3 className="text-3xl font-bold text-black">Your New Combination:</h3>
            <p className="text-xl text-gray-300 mt-4">{newCombo.shirtColor} shirt + {newCombo.pantColor} pant - {newCombo.suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
