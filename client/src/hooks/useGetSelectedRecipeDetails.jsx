import { useQuery } from 'react-query';

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
);
  
  return { isLoading, isError, recipeData }

}

export default useGetSelectedRecipe;