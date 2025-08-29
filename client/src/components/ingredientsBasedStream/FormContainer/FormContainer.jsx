import { useState, useEffect, useContext, useRef, useMemo } from 'react';
import { FormContext } from '../../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import './FormContainer.css';
import IngredientsForm from '../IngredientsForm/IngredientsForm';
import DietForm from '../DietForm/DietForm';
import IntolerancesForm from '../IntolerancesForm/IntolerancesForm';
import SubmitButton from '../../SubmitButton/SubmitButton';
import NoRecipesMessage from '../../displayRecipes/Messages/NoRecipesMessage';

function FormContainer() {
  const submitButtonRef = useRef(null);
  const navigate = useNavigate();

  const [displayDietForm, setDisplayDietForm] = useState(false);
  const [hasDisplayedDietForm, setHasDisplayedDietForm] = useState(false);

  const {
    ingredients,
    selectedIntolerances,
    intoleranceExisting,
    dietChoice,
    readyForSubmission,
    setReadyForSubmission,
    noRecipesFound,
    setNoRecipesFound,
    setIngredients, 
  } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (readyForSubmission) {
      navigate('/recipes', {
        state: { ingredients, selectedIntolerances, dietChoice },
      });
    }
  };

  const handleIngredientsChange = (nextIngredients) => {
    setIngredients(nextIngredients);

    if (nextIngredients.length > 0 && !hasDisplayedDietForm) {
      setDisplayDietForm(true);
      setHasDisplayedDietForm(true);
    }

    if (nextIngredients.length === 0) {
      setDisplayDietForm(false);
    }

    setNoRecipesFound(false);
  };

  const computedReadyForSubmission = useMemo(() => {
    return (
      dietChoice !== '' &&
      ((intoleranceExisting === true && selectedIntolerances.length > 0) ||
        intoleranceExisting === false) &&
      ingredients.length > 0
    );
  }, [dietChoice, intoleranceExisting, selectedIntolerances.length, ingredients.length]);

  useEffect(() => {
    setReadyForSubmission(computedReadyForSubmission);
  }, [computedReadyForSubmission, setReadyForSubmission]);

  useEffect(() => {
    if (readyForSubmission && submitButtonRef.current) {
      submitButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [readyForSubmission]);

  return (
    <form className="FormContainer" onSubmit={handleSubmit}>
      <IngredientsForm ingredients={ingredients} onChange={handleIngredientsChange} />

      <div className={`blend-in-wrapper ${displayDietForm ? 'visible' : 'hidden'}`}>
        <DietForm dietChoice={dietChoice} />
      </div>

      <div className={`blend-in-wrapper ${dietChoice !== '' ? 'visible' : 'hidden'}`}>
        <IntolerancesForm />
      </div>

      <SubmitButton
        ref={submitButtonRef}
        onSubmitButtonClick={handleSubmit}
        readyForSubmission={readyForSubmission}
      />

      {noRecipesFound && <NoRecipesMessage />}
    </form>
  );
}

export default FormContainer;
