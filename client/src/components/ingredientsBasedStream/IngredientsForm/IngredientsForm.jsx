// src/components/ingredientsBasedStream/IngredientsForm/IngredientsForm.js
import React, { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import './IngredientsForm.css';
import SuggestionsList from './SuggestionsList/SuggestionsList';
import SelectedIngredientsList from './SelectedIngredientsList/SelectedIngredientsList';

function IngredientsForm({ ingredients }) {

  const { inputValue, setInputValue } = useContext(FormContext); 
  const { suggestions, setSuggestions } = useContext(FormContext); 
  const { setIngredients } = useContext(FormContext); 


  // Handle input change in IngredientForm
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleAutocomplete(value);
  };

    // Get autocomplete suggestions for ingredients via spooncular API
    async function handleAutocomplete(query) {
    if (query.length > 1) {
        try {
            const response = await fetch(`/api/autocomplete?query=${query}`);
            const suggestions = await response.json();
            setSuggestions(suggestions);
        } catch (error) {
            console.error('Error fetching autocomplete suggestions:', error);
            console.log(response.statusText)
        }
    } else {
        setSuggestions([]);
    }
} 

    // Add clicked suggestion to ingredients
    const handleSuggestionClick = (suggestion) => {
        setIngredients((prevIngredients) => {
            const updatedIngredients = [...prevIngredients, suggestion];
            return updatedIngredients;
        });
        setInputValue('');
        setSuggestions([]);
        };

  return (
    <>
      <div className='ingredientForm' aria-labelledby="ingredients-label">
        <fieldset>
          <legend id="ingredients-label" className="visually-hidden">Available Ingredients</legend>
          <label htmlFor="ingredients">Enter your available ingredients:</label><br />
          <input
            type="text"
            id="ingredients"
            className='ingredients'
            name="ingredients"
            placeholder="Enter your existing ingredients..."
            value={inputValue}
            onChange={handleInputChange}
            aria-autocomplete="list"
            aria-controls="suggestions-list"
          />
          {suggestions.length > 0 && (
            <SuggestionsList
              suggestions={suggestions}
              id="suggestions-list"
              onSuggestionClick={handleSuggestionClick}
            />
          )}
        </fieldset>
      </div>
      {ingredients.length > 0 && (
        <SelectedIngredientsList ingredients={ingredients} />
      )}
    </>
  );
}

export default IngredientsForm;
