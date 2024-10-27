import React, { useState, useEffect, useContext, useRef } from 'react';
import { FormContext } from '../../../context/FormContext';
import { RecipesContext } from '../../../context/RecipesContext';
import { useLocation, useNavigate } from 'react-router-dom';
import './FormContainer.css';
import IngredientsForm from '../IngredientsForm/IngredientsForm';
import DietForm from '../DietForm/DietForm';
import IntolerancesForm from '../IntolerancesForm/IntolerancesForm';
import SubmitButton from '../../SubmitButton/SubmitButton';


function FormContainer() {

  const location = useLocation();  
  const submitButtonRef = useRef()
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
    setNoRecipesFound
    }
  = useContext(FormContext); 


  const handleSubmit = (event) => {
    event.preventDefault();
    if (readyForSubmission) {
      navigate('/recipes', {
        state: {
          ingredients, 
          selectedIntolerances, 
          dietChoice,
        }
      });
    }
  };
  
  useEffect(() => {
    if (ingredients.length > 0 && !hasDisplayedDietForm) {
      setDisplayDietForm(true);
      setHasDisplayedDietForm(true);
    } else if (ingredients.length > 0) {
      setDisplayDietForm(true);
    }
  }, [ingredients, hasDisplayedDietForm]);

    //displays the submit button that triggers api call for recipes only when all requirements are met or when user clicks from recipes back to settings
    useEffect(() => {
      
        const isReadyForSubmission = dietChoice !== '' && 
          ((intoleranceExisting === true && selectedIntolerances.length > 0) || 
          (intoleranceExisting === false)) && 
          ingredients.length > 0;
        setReadyForSubmission(isReadyForSubmission);
  
    }, [dietChoice, intoleranceExisting, selectedIntolerances, ingredients, setReadyForSubmission]);
  
      useEffect(() => {
        if (readyForSubmission && submitButtonRef.current) {
          submitButtonRef.current.scrollIntoView({
            behavior: 'smooth',  
            block: 'center',     
          })
        }}, [readyForSubmission])
      



  //disable "no recipe found" message when an ingredient is changed
  useEffect(() => {
    setNoRecipesFound(false);
  }, [ dietChoice, ingredients, intoleranceExisting, selectedIntolerances])



  return (
    <>
      <form className="FormContainer" onSubmit={handleSubmit}>
        <IngredientsForm ingredients={ingredients} />
        <div 
          className={`blend-in-wrapper ${displayDietForm ? 'visible' : 'hidden'}`}
          ingredients={ingredients}
          >
          <DietForm
            dietChoice={dietChoice}
          />
        </div>
        <div className={`blend-in-wrapper ${dietChoice !== '' ? 'visible' : 'hidden'}`}>
          <IntolerancesForm/>
        </div>
        <SubmitButton 
            ref={submitButtonRef} 
            onSubmitButtonClick={handleSubmit} 
            readyForSubmission={readyForSubmission}/>
        {noRecipesFound && <NoRecipesMessage />}
      </form>
    </>
  );
}

export default FormContainer;