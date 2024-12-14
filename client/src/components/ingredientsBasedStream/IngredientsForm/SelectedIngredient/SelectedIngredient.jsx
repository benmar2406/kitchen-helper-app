import React from 'react';
import './SelectedIngredient.css';

function SelectedIngredient({ ingredient, onClick }) {
    return (
            <li 
                className='SelectedIngredient' 
                onClick={() => onClick(ingredient)}
                aria-label='click to delete ingredient from list'
                >
                {ingredient}
            </li>
    );
}

export default SelectedIngredient;
