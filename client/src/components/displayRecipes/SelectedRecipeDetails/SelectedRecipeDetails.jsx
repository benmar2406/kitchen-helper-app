import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from "dompurify";
import './SelectedRecipeDetails.css';
import Loading from '../../Loading/Loading'
import BackToRecipesButton from '../BackToRecipesButton/BackToRecipesButton'

function SelectedRecipeDetails() {

    const navigate = useNavigate(); 
    
    const { id } = useParams(); 
    const [recipeData, setRecipeData] = useState(null);

    // Endpoint to get a single recipes details
    const handleRecipeLoad = async (recipeId) => {
        const url = `/api/recipes/${recipeId}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            localStorage.setItem(`recipe-${recipeId}`, JSON.stringify(data)); // Save to localStorage
            setRecipeData(data);

        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    useEffect(() => {
        handleRecipeLoad(id); 
      }, [id]);


    if (!recipeData) {
        return <Loading />;
    } 

    const handleBacktoRecipesClick = () => {
        navigate(-1);
    }

    const instructionsSanitized = DOMPurify.sanitize(recipeData.instructions);
    const summarySanitized = DOMPurify.sanitize(recipeData.summary);


    return (
        <div className="selected-recipe-details">
            <BackToRecipesButton onClick={handleBacktoRecipesClick} />
            {!recipeData && <Loading />}
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
                        dangerouslySetInnerHTML={{ __html: instructionsSanitized }}
                    />    
                </div>
            )}
            {recipeData.summary && (
                <div className="summary-container">
                <hr />
                <h2 className="summary-headline">Additional information</h2>
                    <article 
                        className="summary-text"
                        dangerouslySetInnerHTML={{ __html: summarySanitized }}
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
            <BackToRecipesButton onClick={handleBacktoRecipesClick} />
        </div>
    );
}

export default SelectedRecipeDetails;