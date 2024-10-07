import './IngredientsForm.css';
import SuggestionsList from './SuggestionsList/SuggestionsList';
import SelectedIngredientsList from './SelectedIngredientsList/SelectedIngredientsList';

function IngredientsForm(props) {
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
                        value={props.inputValue}
                        onChange={props.onInputChange}
                        aria-autocomplete="list"
                        aria-controls="suggestions-list"
                        aria-expanded={props.suggestions.length > 0}
                    />
                    {props.suggestions.length > 0 && (
                        <SuggestionsList
                            suggestions={props.suggestions}
                            onSuggestionClick={props.onIngredientAdd}
                            id="suggestions-list"
                        />
                    )}
                </fieldset>
            </div>
            {props.ingredients.length > 0 && (
                <SelectedIngredientsList
                    ingredients={props.ingredients}
                    onIngredientClick={props.onIngredientDelete}
                />
            )}
        </>
    );
}

export default IngredientsForm;
