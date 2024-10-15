import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { RecipesContext } from '../../../context/RecipesContext';
import './RecipeCardsContainer.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import BackButton from '../../BackButton/BackButton';
import NoRecipesMessage from '../NoRecipesMessage/NoRecipesMessage';
import Loading from '../../Loading/Loading';


// fetch recipes request
const fetchRecipes = async ({ ingredients, selectedIntolerances, dietChoice }) => {
    const ingredientsParam = ingredients.join(',');
    const intolerancesParam = selectedIntolerances.join(',');
    const dietParam = dietChoice;
    const url = `/api/recipes?ingredients=${ingredientsParam}&intolerances=${intolerancesParam}&diet=${dietParam}`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data.results;
  };

function RecipeCardsContainer() {
    const navigate = useNavigate(); 
    const { state } = useLocation();  
    const { ingredients, selectedIntolerances, dietChoice } = state || {};


    const [requestCompleted, setRequestCompleted] = useState(false)
    
    const { recipes, setRecipes } = useContext(RecipesContext); 

    const { isLoading, isError, data } = useQuery(
        ['recipes', { ingredients, selectedIntolerances, dietChoice }],
        () => fetchRecipes({ ingredients, selectedIntolerances, dietChoice }),
        {
          enabled: !!ingredients,
          onSuccess: (data) => {
            setRecipes(data);
            console.log('API response:', data);  
            setRecipes(data);
            setRequestCompleted(true)
          },        
        }
      );


    //render the menu/settings again when back to settings button is clicked 
    const handleBackToSettingClick = () => {

        navigate('/', {
            
          });
    }

    return (
        <>
            {isLoading && <Loading />}
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
            <BackButton onClick={handleBackToSettingClick} />
        </>
        );
    }
         
export default RecipeCardsContainer;