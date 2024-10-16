import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [isError, setIsError] = useState(false);


  return (
    <RecipesContext.Provider value={{ recipes, setRecipes, isError, setIsError  }}>
      {children}
    </RecipesContext.Provider>
  );
};