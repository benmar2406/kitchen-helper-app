import React from 'react';
import './RecipeCardsContainer.css';
import RecipeCard from '../RecipeCard/RecipeCard'; 


function RecipeCardsContainer(props) {
    return (
        <div className='RecipeCardsContainer'>
            {props.recipes.map((recipe, id) => (
                <RecipeCard key={id} recipe={recipe} />
        ))}
        </div>

       )};

export default RecipeCardsContainer;