import React, { useState, useEffect } from 'react';
import './FormContainer.css';
import IngredientsForm from '../IngredientsForm/IngredientsForm';
import DietForm from '../DietForm/DietForm';
import IntolerancesForm from '../IntolerancesForm/IntolerancesForm';

function FormContainer(props) {
  const [displayDietForm, setDisplayDietForm] = useState(false);
  const [hasDisplayedDietForm, setHasDisplayedDietForm] = useState(false);

  useEffect(() => {
    if (props.ingredients.length > 0 && !hasDisplayedDietForm) {
      setDisplayDietForm(true);
      setHasDisplayedDietForm(true);
    } else if (props.ingredients.length > 0) {
      setDisplayDietForm(true);
    }
  }, [props.ingredients, hasDisplayedDietForm]);

  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <form className="FormContainer" onSubmit={handleSubmit} aria-label="This guided form let's you enter your available ingredients and allows to define several other criteria. According to your settings the appropriate recipes will be displayed.">
      <IngredientsForm
        inputValue={props.inputValue}
        suggestions={props.suggestions}
        ingredients={props.ingredients}
        onInputChange={props.onInputChange}
        onIngredientAdd={props.onIngredientAdd}
        onIngredientDelete={props.onIngredientDelete}
      />
      {(
        <div className={`blend-in-wrapper ${displayDietForm ? 'visible' : 'hidden'}`}>
          <DietForm
            dietChoice={props.dietChoice}
            onDietButtonClick={props.onDietButtonClick}
            activeButton={props.activeButton}
          />
        </div>
      )}
      {(
        <div className={`blend-in-wrapper ${props.dietChoice !== '' ? 'visible' : 'hidden'}`}> 
          <IntolerancesForm
            onIntolerancesDecisionChange={props.onIntolerancesDecisionChange}
            intoleranceExisting={props.intoleranceExisting}
            selectedIntolerances={props.selectedIntolerances}
            onSelectedIntolerancesChange={props.onSelectedIntolerancesChange}
          />
        </div>
      )}
    </form>
  );
}

export default FormContainer;
