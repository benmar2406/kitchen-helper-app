import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { RecipesContext } from '../context/RecipesContext';

const useGetRecipes = (ingredients, selectedIntolerances, dietChoice) => {

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
        

  const { recipes, setRecipes } = useContext(RecipesContext);

  const [requestCompleted, setRequestCompleted] = useState(false)

  const { isLoading, isError, data } = useQuery(
      ['recipes', { ingredients, selectedIntolerances, dietChoice }],
      () => fetchRecipes({ ingredients, selectedIntolerances, dietChoice }),
      {
        enabled: !!ingredients,
        onSuccess: (data) => {
          setRecipes(data);
          setRequestCompleted(true);
          const id = Math.floor(1000 + Math.random() * 9000);
          localStorage.setItem('recipes-data-' + id, JSON.stringify(data));
        },
      }
    );


    return { data, recipes, requestCompleted, isLoading, isError }
}

export default useGetRecipes;