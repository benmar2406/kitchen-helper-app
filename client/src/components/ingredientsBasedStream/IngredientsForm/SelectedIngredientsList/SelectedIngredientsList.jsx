import React from 'react';
import './SelectedIngredientsList.css';
import SelectedIngredient from '../SelectedIngredient/SelectedIngredient';

function SuggestionsList(props) {
    return (
            <ul className="SelectedIngredientsList">
                {props.ingredients.map((ingredient, id) => (
                    <SelectedIngredient key={id} ingredient={ingredient} onClick={props.onIngredientClick}/>
                ))}
            </ul>
    );
}

export default SuggestionsList;
