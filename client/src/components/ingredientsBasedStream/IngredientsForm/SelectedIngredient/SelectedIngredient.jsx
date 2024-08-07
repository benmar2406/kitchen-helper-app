import React from 'react';
import './SelectedIngredient.css';

function SelectedIngredient({ ingredient, onClick }) {
    return (
            <li className='SelectedIngredient' onClick={() => onClick(ingredient)}>
                {ingredient}
            </li>
    );
}

export default SelectedIngredient;
