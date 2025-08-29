// src/components/ingredientsBasedStream/IngredientsForm/IngredientsForm.js
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import './IngredientsForm.css';
import SuggestionsList from './SuggestionsList/SuggestionsList';
import SelectedIngredientsList from './SelectedIngredientsList/SelectedIngredientsList';

function IngredientsForm({ ingredients, onChange }) {
  const { inputValue, setInputValue, suggestions, setSuggestions } = useContext(FormContext);

  // Handle input change in IngredientForm
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleAutocomplete(value);
  };

  // Get autocomplete suggestions for ingredients via spoonacular API
  async function handleAutocomplete(query) {
    if (query.length > 2) {
      try {
        const response = await fetch(`/api/autocomplete?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    const next = [...ingredients, suggestion];
    onChange?.(next);          
    setInputValue('');         
    setSuggestions([]);
  };

  const handleRemoveIngredient = (toRemove) => {
    const next = ingredients.filter((ing) => ing.id !== toRemove.id);
    onChange?.(next);
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
            className='ingredients-input'
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
        <SelectedIngredientsList
          ingredients={ingredients}
          onRemove={handleRemoveIngredient}   
        />
      )}
    </>
  );
}

export default IngredientsForm;
