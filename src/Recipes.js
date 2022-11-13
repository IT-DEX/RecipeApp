import React from "react";
import { useEffect, useState } from 'react';
import recipesBackground from './background-search.jpg';
import DisplayRecipe from "./DisplayRecipe";

function Recipes() {

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');

     useEffect( () => {
    const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchRequest}&app_id=17867b4b&app_key=70be88604b71ed9ebdc21b7eefb32d4b`);
    const data = await response.json();
    setMyRecipes(data.hits);
    console.log(data.hits);

}
getRecipe();
}, [searchRequest])
    

const recipeSearch = (e) => {
  console.log(e.target.value)
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setSearchRequest(mySearch);
}

    return (

    <div>
      
      <div>
        <img className="img-background" src={recipesBackground} alt='food'/>
      </div>


      <div className="recipes-info">
        <h1>
        Search a recipe database of over 2.3 million recipes. 
        </h1>
        <p className="recipes-intro">
        We order recipes by their cookability and quality, so you can always count on 
        getting the best recipes! 
        </p>
      

      <div className="searchField-container">
        <form onSubmit={finalSearch}>
          <input className="searchField" placeholder="Search..."
          onChange={recipeSearch} value={mySearch}
          />
        </form>

        <button id="submitButton">Search</button>

      </div>
      </div>

      <div className='cont'>
          
          {myRecipes.map(element => (
            <DisplayRecipe
            label = {element.recipe.label} 
            cuisine = {element.recipe.cuisineType}
            image = {element.recipe.image} 
            ingredients = {element.recipe.ingredientLines}
            calories = {element.recipe.calories}
            />
          ))}
      </div>





    </div>
        )
}
export default Recipes;