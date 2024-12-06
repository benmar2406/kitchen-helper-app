import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [intoleranceExisting, setIntoleranceExisting] = useState(null); // bool checked when intolerances are existing
  const [selectedIntolerances, setSelectedIntolerances] = useState([]); // the array for the actual selected intolerances
  const [dietChoice, setDietChoice] = useState('');
  const [readyForSubmission, setReadyForSubmission] = useState(false);
  const [displayRecipes, setDisplayRecipes] = useState(false);
  const [noRecipesFound, setNoRecipesFound] = useState()
  const [activeButton, setActiveButton] = useState('');


  return (
    <FormContext.Provider value={{ 
        inputValue, 
        setInputValue,
        suggestions, 
        setSuggestions, 
        ingredients, 
        setIngredients, 
        intoleranceExisting, 
        setIntoleranceExisting, 
        selectedIntolerances, 
        setSelectedIntolerances, 
        dietChoice, 
        setDietChoice, 
        readyForSubmission, 
        setReadyForSubmission,
        displayRecipes, 
        setDisplayRecipes, 
        noRecipesFound, 
        setNoRecipesFound,
        activeButton, 
        setActiveButton
    }}>
      {children}
    </FormContext.Provider>
  );
};
