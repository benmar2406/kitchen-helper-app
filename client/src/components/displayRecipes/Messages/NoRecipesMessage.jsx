import React from 'react';
import './NoRecipesMessage.css';

function NoRecipesMessage(props) {
    return (
        <div className='no-recipes-mesage'>
            <span>Sorry, no recipes found for your query :(. <br /> Please adjust your settings to get results.</span>
        </div>)
        };

export default NoRecipesMessage