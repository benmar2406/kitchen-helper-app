import './IngredientsForm.css';
import SuggestionsList from './SuggestionsList/SuggestionsList';
import SelectedIngredientsList from './SelectedIngredientsList/SelectedIngredientsList';

function IngredientsForm(props) {

    return (
        <div className="IngredientsForm">
            <form className='ingredientForm'>
                <label htmlFor="ingredients">Enter your available ingredients:</label><br />
                <input
                    type="text"
                    id="ingredients"
                    className='ingredients'
                    name="ingredients"
                    placeholder="Enter your existing ingredients..."
                    value={props.inputValue}
                    onChange={props.onInputChange}
                />
                {props.suggestions.length > 0 && <SuggestionsList suggestions={props.suggestions} onSuggestionClick={props.onIngredientAdd} />}
            </form>
            {props.ingredients.length > 0 && <SelectedIngredientsList ingredients={props.ingredients} onIngredientClick={props.onIngredientDelete}/>}
        </div>
    );
}

export default IngredientsForm;
