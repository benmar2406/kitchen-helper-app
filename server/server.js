const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5001;
const apiKey = process.env.API_KEY; 
const baseUrl = 'https://api.spoonacular.com/'       

app.use(express.static(path.join(__dirname, '../client/dist')));

// Endpoint to get recipes
app.get('/api/recipes', async (req, res) => {
  const { ingredients, diet, intolerances } = req.query;
  const numberOfResults = 25;
    const url = `${baseUrl}recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${ingredients}&diet=${diet}&intolerances=${intolerances}&number=${numberOfResults}`;

  const checkIntolerances = (intolerances) => intolerances.length > 0 ? intolerances : "None set";
  console.log(`Request for receipe list received. \nIngredient query: ${ingredients}. Diet: ${diet}. intolerances: ${checkIntolerances(intolerances)}`);

  try {
    const response = await axios.get(url);
    console.log("Recipe list received");
    console.log("Status: " + response.status);
    res.json(response.data);
    console.log("Response sent to client");

  } catch (error) {
    console.error('Error fetching recipes:', error);
    if (error.response && error.response.status === 402) {
      res.status(402).send('API Limit reached');
    } else {
      res.status(500).send('Error fetching recipes');
    }
  }
});

// Endpoint to get a single recipes details
app.get('/api/recipes/:id', async (req, res) => {
  const recipeId = req.params.id;
  const url = `${baseUrl}recipes/${recipeId}/information?apiKey=${apiKey}`;

  console.log("Request for receipe id received. Id: " + recipeId);
  
  try {
    const response = await axios.get(url);
    console.log("Recipe received.");
    console.log("Status: " + response.status);
    res.json(response.data);
    console.log("Response sent to client")
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    res.status(500).send('Error fetching recipe details');
  }
});

// Endpoint to retrieve autocomplete suggestion
app.get('/api/autocomplete', async (req, res) => {
  const { query } = req.query;  
  const numberOfResults = 5;
  const url = `${baseUrl}food/ingredients/autocomplete?apiKey=${apiKey}&query=${query}&number=${numberOfResults}`;
  console.log(url);


  try {
    const response = await axios.get(url);
    console.log(response);
    res.json(response.data);  
  } catch (error) {
    console.error('Error fetching autocomplete results:', error);
    res.status(500).send('Error fetching autocomplete results');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
