import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { RecipesContext } from '../context/RecipesContext';

const useGetSelectedRecipe = (id) => {
  
  const fetchSelectedRecipe = async (id) => {
    const url = `/api/recipes/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch recipe data');
    }
    const data = await response.json();
    return data;
};

const { isLoading, isError, data: recipeData } = useQuery(
  ['recipe', id], 
  () => fetchSelectedRecipe(id), 
  {
      onSuccess: (data) => {
          const storageId = Math.floor(1000 + Math.random() * 9000);
          localStorage.setItem('recipes-data-' + storageId, JSON.stringify(data));
      },
  }
);
  
  return { isLoading, isError, recipeData }

}

export default useGetSelectedRecipe;