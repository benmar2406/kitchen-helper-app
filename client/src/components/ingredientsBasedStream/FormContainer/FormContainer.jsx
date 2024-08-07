import React, { useState, useEffect } from 'react';
import './FormContainer.css';
import IngredientsForm from '../IngredientsForm/IngredientsForm';
import DietForm from '../DietForm/DietForm';
import IntolerancesForm from '../IntolerancesForm/IntolerancesForm';

function FormContainer(props) {
  const [displayDietForm, setDisplayDietForm] = useState(false);
  const [hasDisplayedDietForm, setHasDisplayedDietForm] = useState(false);

//render the diet form when at least one ingredient is selected but keep on displaying it when user deletes all ingredients
  useEffect(() => {
    if (props.ingredients.length > 0 && !hasDisplayedDietForm) {
      setDisplayDietForm(true);
      setHasDisplayedDietForm(true);
    } else if (props.ingredients.length > 0) {
      setDisplayDietForm(true);
    }
  }, [props.ingredients, hasDisplayedDietForm]);


  return (
    <div className="FormContainer">
      <IngredientsForm
        inputValue={props.inputValue}
        suggestions={props.suggestions}
        ingredients={props.ingredients}
        onInputChange={props.onInputChange}
        onIngredientAdd={props.onIngredientAdd}
        onIngredientDelete={props.onIngredientDelete}
      />
      {displayDietForm && (
        <DietForm
          dietChoice={props.dietChoice}
          onDietButtonClick ={props.onDietButtonClick}
          activeButton = {props.activeButton}
        />
      )}
      {props.dietChoice !== '' && (
        <IntolerancesForm
          onIntolerancesDecisionChange={props.onIntolerancesDecisionChange}
          intoleranceExisting={props.intoleranceExisting}
          selectedIntolerances={props.selectedIntolerances}
          onSelectedIntolerancesChange={props.onSelectedIntolerancesChange}
        />
      )}
    </div>
  );
}

export default FormContainer;
