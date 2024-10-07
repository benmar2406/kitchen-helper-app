import React from 'react';
import './DietForm.css';

function DietForm(props) {
  return (
    <div id="DietForm" role="group" aria-labelledby="diet-preference-label">
      <label>Diet Preference:</label><br />
      <button
        type="button"
        className={`toggleButton ${props.activeButton === 'vegan' ? 'active' : ''}`}
        aria-pressed={props.activeButton === 'vegan'}
        onClick={() => props.onDietButtonClick('vegan')}
      >
        Vegan
      </button>
      <button
        type="button"
        className={`toggleButton ${props.activeButton === 'vegetarian' ? 'active' : ''}`}
        aria-pressed={props.activeButton === 'vegetarian'}
        onClick={() => props.onDietButtonClick('vegetarian')}
      >
        Vegetarian
      </button>
      <button
        type="button"
        className={`toggleButton ${props.activeButton === 'omnivore' ? 'active' : ''}`}
        aria-pressed={props.activeButton === 'omnivore'}
        onClick={() => props.onDietButtonClick('omnivore')}
      >
        Omnivore
      </button>
    </div>
  );
};

export default DietForm;
