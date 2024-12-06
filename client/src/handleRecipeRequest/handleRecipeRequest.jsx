//send request to serve: get recipes based on user choices


  async function handleRecipesRequest() {
    const ingredientsParam = ingredients.join(',');
    const intolerancesParam = selectedIntolerances.join(',');
    const dietParam = dietChoice;
    setIsLoading(true);
    const url = `/api/recipes?ingredients=${ingredientsParam}&intolerances=${intolerancesParam}&diet=${dietParam}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIsLoading(false);
        if (data.totalResults > 0) {
          const updatedRecipes = data.results;
          setRecipes(updatedRecipes);
          console.log('Retrieved recipes:', updatedRecipes);
          setDisplayRecipes(true); 
          setNoRecipesFound(false); 

        } else {
            console.log('No recipes found.');
            setNoRecipesFound(true); 
            setDisplayRecipes(false);
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
  }

  export default handleRecipesRequest;

