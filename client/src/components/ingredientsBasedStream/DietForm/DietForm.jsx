import React from 'react';
import './DietForm.css';

function DietForm(props) {


  return (
    <div id="DietForm">
      <label>Diet Preference:</label><br />
      <button
        className={`toggleButton ${props.activeButton === 'vegan' ? 'active' : ''}`}
        onClick={() => props.onDietButtonClick('vegan')}
      >
        Vegan
      </button>
      <button
        className={`toggleButton ${props.activeButton === 'vegetarian' ? 'active' : ''}`}
        onClick={() => props.onDietButtonClick('vegetarian')}
      >
        Vegetarian
      </button>
      <button
        className={`toggleButton ${props.activeButton === 'omnivore' ? 'active' : ''}`}
        onClick={() => props.onDietButtonClick('omnivore')}
      >
        Omnivore
      </button>
    </div>
  );
};

export default DietForm;

