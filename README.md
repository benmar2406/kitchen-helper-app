# Recipe Finder App

## Overview

The **Recipe Finder App** is a web application that allows users to search for recipes based on the ingredients they have on hand. The app is divided into two main parts: the client, built with React, and the backend, powered by an Express server that communicates with the Spoonacular API.

## Features

- Search for recipes based on available ingredients
- Display detailed recipe information
- User-friendly interface
- Support for various diets and dietary preferences

## Architecture: Client-Server

The application consists of two main components:

- **Client**: A front-end built using React/Vite that provides a responsive and intuitive interface for users to input ingredients and view recipe results.
- **Server**: A back-end built using Express, responsible for handling API requests to Spoonacular, processing data, and sending it to the client.

## Spoonacular API: endpoints used:
- https://spoonacular.com/food-api/docs#Search-Recipes-Complex
- https://spoonacular.com/food-api/docs#Get-Recipe-Information


## Installation and Setup

To run the app locally, follow these steps:

### Prerequisites

- Node.js and npm installed 
- A Spoonacular API key (you can get one [here](https://spoonacular.com/food-api))
- navigate to server directory
- setup your .env file: API_KEY=your_api_key_here

### Start server and client locally
- navigate to main directory
- npm start (Starts both server and client locally)

## Hosting on Render.com
- project is hosted on [render.com](https://render.com/)
- project link: https://kitchen-helper-app.onrender.com/  


