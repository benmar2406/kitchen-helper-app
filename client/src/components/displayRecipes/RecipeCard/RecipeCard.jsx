import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
    return (
        <div className='recipeCard'>
            <div className='recipeImageContainer'>
                <img className = 'recipeImage'
                    src={recipe.image}
                    alt={recipe.title}
                />
                <h3 className='recipeTitle'>{recipe.title}</h3>
            </div>  
            <Link to ={`/recipe/${recipe.id}`} className='recipeButton'>Get recipe</Link>
        </div>
    );
}

export default RecipeCard;