import React from "react";

function DisplayRecipe({label, cuisine, image, ingredients, calories}) {

    return( 
    
    <div className="display-recipe">
    
        <div className="container-recipe">

            <div >
                <h2 className="recipe-label">{label}</h2>
                <p className="recipe-label">Cuisine: {cuisine}</p>
                </div>

            <div>
                <img className="recipe-image" src={image} alt="food"/>
            </div>
            
            <br/>

            <p className="calories-info">INGREDIENTS</p>
            
            <ul className="list">
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}

            </ul>
            
            <p className="calories-info">Nutritional value: {calories.toFixed()} calories</p>

        </div>
</div>
    )

}

export default DisplayRecipe;