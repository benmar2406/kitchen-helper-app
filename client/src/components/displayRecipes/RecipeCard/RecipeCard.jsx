import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard(props) {
    return (
        <div className='recipeCard'>
            <div className='recipeImageContainer'>
                <img className = 'recipeImage'
                    src={props.recipe.image}
                    alt={props.recipe.title}
                />
                <h3 className='recipeTitle'>{props.recipe.title}</h3>
            </div>  
            <Link to ={`/recipe/${props.recipe.id}`} className='recipeButton'>Get recipe</Link>
        </div>
    );
}

export default RecipeCard;