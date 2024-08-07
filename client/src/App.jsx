  import React, { useState, useEffect, useRef } from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Header from './components/Header/Header'; 
  import RecipeCardsContainer from './components/displayRecipes/RecipeCardsContainer/RecipeCardsContainer';
  import FormContainer from './components/ingredientsBasedStream/FormContainer/FormContainer';
  import SubmitButton from './components/SubmitButton/SubmitButton';
  import BackToMenuButton from './components/BackToSettingsButton/BackToSettingsButton';
  import SelectedRecipeDetails from './components/displayRecipes/SelectedRecipeDetails/SelectedRecipeDetails';


  function App() {

    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [dietChoice, setDietChoice] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [intoleranceExisting, setIntoleranceExisting] = useState(null); //used to display the intolerances checkboxes in case user clicks yes when asked
    const [selectedIntolerances, setSelectedIntolerances] = useState([]); //the array for the actual selected intolerances
    const [readyForSubmission, setReadyForSubmission] = useState(false)
    const submitButtonRef = useRef(null);
    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState(false);
    const [activeButton, setActiveButton] = useState('');



    // Handle input change in IngredientForm
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        handleAutocomplete(value);  
    };

    // Get autocomplete suggestions for ingredients via spooancular API
    async function handleAutocomplete(query) {
        if (query.length > 1) {
            try {
                const response = await fetch(`/api/autocomplete?query=${query}`);
                const suggestions = await response.json();
                setSuggestions(suggestions);
            } catch (error) {
                console.error('Error fetching autocomplete suggestions:', error);
            }
        } else {
            setSuggestions([]);
        }
    }

    // Add clicked suggestion to ingredients
    const handleSuggestionClick = (suggestion) => {
    setIngredients((prevIngredients) => {
        const updatedIngredients = [...prevIngredients, suggestion];
        return updatedIngredients;
    });
    setInputValue('');
    setSuggestions([]);
    };

    // Delete ingredient from selected ingredients
    const handleDeleteIngredient = (ingredientToDelete) => {
        setIngredients((prevIngredients) => {
            const updatedIngredients = prevIngredients.filter(ingredient => ingredient !== ingredientToDelete);
            return updatedIngredients;
        });
    };

    // Passed to DietForm to update dietChoice
    const handleDietChoiceChange = (preference) => {
        setDietChoice(preference);
    };

    const handleDietButtonClick = (preference) => {
      setActiveButton(preference);
      handleDietChoiceChange(preference);
    };

    //pass to Inolerances form to update intolerances choice
    const handleIntolerancesDecision = (choice) => {
        setIntoleranceExisting(choice);
        choice === false && setSelectedIntolerances([]);
      };  
    
    
    //updates intolerances and displays submit button
    const handleSelectedIntolerancesChange = (intolerance) => {
      setSelectedIntolerances((prevSelectedIntolerances) => {
        if (prevSelectedIntolerances.includes(intolerance)) {
          const updatedSelectedIntolerances = prevSelectedIntolerances.filter(item => item !== intolerance);
          return updatedSelectedIntolerances
        } else {
          const updatedSelectedIntolerances = [...prevSelectedIntolerances, intolerance];
          return updatedSelectedIntolerances
        }
      });
    };
    
    //displays the button that triggers api call only when all requirements are met
    useEffect(() => {
      const isReadyForSubmission = dietChoice !== '' && 
        ((intoleranceExisting === true && selectedIntolerances.length > 0) || 
        (intoleranceExisting === false)) && 
        ingredients.length > 0;
      setReadyForSubmission(isReadyForSubmission);
    }, [dietChoice, intoleranceExisting, selectedIntolerances, ingredients]);

    useEffect(() => {
      if (readyForSubmission && submitButtonRef.current) {
          submitButtonRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [readyForSubmission]); 


  // Get recipes based on choices
  async function handlerecipesRequest() {
    const ingredientsParam = ingredients.join(',');
    const intolerancesParam = selectedIntolerances.join(',');
    const dietParam = dietChoice;

    const url = `/api/recipes?ingredients=${ingredientsParam}&intolerances=${intolerancesParam}&diet=${dietParam}`;
    console.log('url:', url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.totalResults > 0) {
          const updatedRecipes = data.results;
          setRecipes(updatedRecipes);
          console.log('Retrieved recipes:', updatedRecipes);

        } else {
            console.log('No recipes found.');
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
  }

  //Get recipe with provisioned id.

  useEffect(() => {
  if(recipes.length > 0) {
    setDisplayRecipes(true); //used as condition to render the recipes container
    setReadyForSubmission(false);
  }}, [recipes])

  //render the menu/settings again
  const handleBackToSettingClick = () => {
    setDisplayRecipes(false);
    setReadyForSubmission(true);
  }



  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                {!displayRecipes && 
                <FormContainer 
                  inputValue={inputValue}
                  suggestions={suggestions}
                  ingredients={ingredients}
                  onInputChange={handleInputChange}
                  onIngredientAdd={handleSuggestionClick} 
                  onIngredientDelete={handleDeleteIngredient} 
                  dietChoice={dietChoice}
                  onDietButtonClick = {handleDietButtonClick}
                  activeButton = {activeButton}
                  onIntolerancesDecisionChange={handleIntolerancesDecision}
                  intoleranceExisting={intoleranceExisting}
                  selectedIntolerances={selectedIntolerances}
                  onSelectedIntolerancesChange = {handleSelectedIntolerancesChange}
                />}
                {readyForSubmission && <SubmitButton ref={submitButtonRef} onSubmitButtonClick={handlerecipesRequest} />}
                {displayRecipes && <BackToMenuButton onBackToSettingsClick = {handleBackToSettingClick} />}
                {displayRecipes && <RecipeCardsContainer recipes={recipes}/>}
                {displayRecipes && <BackToMenuButton onBackToSettingsClick = {handleBackToSettingClick} />}
              </div>
            } 
          />

          <Route 
            path="/recipe/:id" 
            element={
              <SelectedRecipeDetails />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

