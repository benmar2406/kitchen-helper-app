import { useContext } from 'react';
import { FormContext } from '../../../../context/FormContext';
import './SelectedIngredientsList.css';
import SelectedIngredient from '../SelectedIngredient/SelectedIngredient';

function SelectedIngredientsList() {

    const { setIngredients, ingredients } = useContext(FormContext); 

    // Delete ingredient from selected ingredients
    const handleDeleteIngredient = (ingredientToDelete) => {
        setIngredients((prevIngredients) => {
            const updatedIngredients = prevIngredients.filter(ingredient => ingredient !== ingredientToDelete);
            return updatedIngredients;
        });
    };


    return (
            <ul 
                className="SelectedIngredientsList"
                role='presentation'>
                {ingredients.map((ingredient, id) => (
                    <SelectedIngredient 
                        key={id} 
                        ingredient={ingredient} 
                        onClick={handleDeleteIngredient}
                    />
                ))}
            </ul>
    );
}

export default SelectedIngredientsList;
