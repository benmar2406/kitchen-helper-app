import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RecipeCardsContainer.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import BackButton from '../../BackButton/BackButton';
import NoRecipesMessage from '../Messages/NoRecipesMessage';
import RequestErrorMessage from '../Messages/RequestErrorMessage';
import Loading from '../../Loading/Loading';
import useGetRecipes from '../../../hooks/useGetRecipes'


function RecipeCardsContainer() {

    const navigate = useNavigate(); 
    const { state } = useLocation();  
    const { ingredients, selectedIntolerances, dietChoice } = state || {};


    const { data, recipes, requestCompleted, isLoading, isError } = useGetRecipes(ingredients, selectedIntolerances, dietChoice);

    //render the menu/settings again when back to settings button is clicked 
    const handleBackToSettingClick = () => {
        navigate('/')
    }

    return (
        <>
            {isLoading && <Loading />}
            {isError && <RequestErrorMessage />}
            {recipes.length > 8 && <BackButton onClick={handleBackToSettingClick} />}
            
            <div className='RecipeCardsContainer'>
                {requestCompleted && data.length > 0 ? (
                    recipes.map((recipe, id) => (
                        <RecipeCard key={id} recipe={recipe} />
                    ))
                ) : (
                    requestCompleted && <NoRecipesMessage />
                )}
            </div>
            <BackButton onClick={(handleBackToSettingClick)} />
        </>
        );
    }
         
export default RecipeCardsContainer;