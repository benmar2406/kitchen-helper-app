const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5001;
const apiKey = process.env.API_KEY; 
const baseUrl = 'https://api.spoonacular.com/'       

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

function errorHandler(err, req, res, next) {
  console.error(`Error occurred: ${err.message}`);
  console.error(`Stack trace: ${err.stack}`);
  console.error(`Request URL: ${req.url}`);

  if (err.response && err.response.status) {
    res.status(err.response.status);
    if (err.response.status === 402) {
      res.send('API Limit reached, try again later');
    } else {
      res.send(`Error ${err.response.status}: ${err.response.data.message || 'An error occurred'}`);
    }
  } else {
    res.status(500).send('Something went wrong, try again later');
  }
}


// Endpoint to get recipes
app.get('/api/recipes', async (req, res, next) => {
  const { ingredients, diet, intolerances } = req.query;
  const numberOfResults = 25;
  const url = `${baseUrl}recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${ingredients}&diet=${diet}&intolerances=${intolerances}&number=${numberOfResults}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    next(error); 
  }
});

// Endpoint to get a single recipe's details
app.get('/api/recipes/:id', async (req, res, next) => {
  const recipeId = req.params.id;
  const url = `${baseUrl}recipes/${recipeId}/information?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

// Endpoint to retrieve autocomplete suggestions
app.get('/api/autocomplete', async (req, res, next) => {
  const { query } = req.query;  
  const numberOfResults = 5;
  const url = `${baseUrl}food/ingredients/autocomplete?apiKey=${apiKey}&query=${query}&number=${numberOfResults}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
