import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SelectedRecipeDetails.css';

function SelectedRecipeDetails(props) {

    const { id } = useParams(); 
    const [recipeData, setRecipeData] = useState(null);

    // Endpoint to get a single recipes details
    const handleRecipeLoad = async (reciptId) => {
        const url = `/api/recipes/${reciptId}`;
        try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipeData(data);

        } catch (error) {
        console.error('Error:', error);
        }
    }
    
    useEffect(() => {
        handleRecipeLoad(id); 
      }, []);

     
    if (!recipeData) {
        return <div>Loading...</div>;
    } 

    return (
        <div className="selected-recipe-details">
            {recipeData.image && (<img className="recipe-img" src={recipeData.image} alt={recipeData.title}  />)}
            {recipeData.title && (<h1 className="recipe-title">{recipeData.title}</h1>)}
            {recipeData.extendedIngredients && (<div className="ingredient-container">
                <h2 className="ingredients-headline">Ingredients</h2>
                    <ul className="ingredients-list">
                        {recipeData.extendedIngredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.original}</li>
                        ))}
                    </ul>
                </div>
            )}
            {recipeData.instructions && (
                <div className="instructions-container">
                    <hr />
                    <h2 className="instruction-headline">Instructions</h2>
                    <article
                        className="recipe-instruction"
                        dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
                    />    
                </div>
            )}
            {recipeData.summary && (
                <div className="summary-container">
                <hr />
                <h2 className="summary-headline">Additional information</h2>
                    <article 
                        className="summary-text"
                        dangerouslySetInnerHTML={{ __html: recipeData.summary }}
                    />
                </div>
            )}
            {recipeData.winePairing && recipeData.winePairing.pairingText && (
                <div className='wine-container'>
                    <hr />
                    <h2 id="wine-headline">Wine pairing</h2>
                    <article id="wine-pairing">{recipeData.winePairing.pairingText}</article>
                </div>
            )}
        </div>
    );
}

export default SelectedRecipeDetails;