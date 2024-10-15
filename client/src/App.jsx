  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import { FormProvider } from './context/FormContext';
  import { RecipesProvider } from './context/RecipesContext';
  import { useNavigate } from 'react-router-dom';
  import './App.css';
  import Header from './components/Header/Header'; 
  import FormContainer from './components/ingredientsBasedStream/FormContainer/FormContainer';
  import RecipeCardsContainer from './components/displayRecipes/RecipeCardsContainer/RecipeCardsContainer';
  import SelectedRecipeDetails from './components/displayRecipes/SelectedRecipeDetails/SelectedRecipeDetails';


  function App() {
  
  return (
      <div className="App">
        <div className="background-overlay">
          <Router>
            <FormProvider>
              <RecipesProvider>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Header />
                          <FormContainer/>
                        </>
                      } 
                    />
                    <Route 
                      path="/recipes" 
                      element={
                        <RecipeCardsContainer/>
                      } 
                    />  
                    <Route 
                      path="/recipe/:id" 
                      element={
                        <SelectedRecipeDetails />
                      } 
                    />
                  </Routes>
                </RecipesProvider>
              </FormProvider>
          </Router>
        </div>
      </div>
  );
}

export default App;