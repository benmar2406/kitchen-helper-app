import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import './DietForm.css';

function DietForm() {

  const { setDietChoice}  = useContext(FormContext);
  const { activeButton, setActiveButton } = useContext(FormContext);



  const handleDietButtonClick = (preference) => {
    setActiveButton(preference);
    handleDietChoiceChange(preference);
  };

  // Update dietChoice
  const handleDietChoiceChange = (preference) => {
    setDietChoice(preference);
};

  return (
    <div id="DietForm" role="group" aria-labelledby="diet-preference-label">
      <label>Diet Preference:</label><br />
      <button
        type="button"
        className={`toggleButton ${activeButton === 'vegan' ? 'active' : ''}`}
        aria-pressed={activeButton === 'vegan'}
        onClick={() => handleDietButtonClick('vegan')}
      >
        Vegan
      </button>
      <button
        type="button"
        className={`toggleButton ${activeButton === 'vegetarian' ? 'active' : ''}`}
        aria-pressed={activeButton === 'vegetarian'}
        onClick={() => handleDietButtonClick('vegetarian')}
      >
        Vegetarian
      </button>
      <button
        type="button"
        className={`toggleButton ${activeButton === 'omnivore' ? 'active' : ''}`}
        aria-pressed={activeButton === 'omnivore'}
        onClick={() => handleDietButtonClick('omnivore')}
      >
        Omnivore
      </button>
    </div>
  );
};

export default DietForm;
