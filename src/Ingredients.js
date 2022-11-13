import React from "react";
import { useState } from 'react';

function Ingredients({anyIngredients}){

const [showText, setShowText] = useState(false);

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
}
    
    return (
      <div className="products">
    
        {anyIngredients.map((element => {
          const {id, name, image, description, showMore} = element;
  
          return (
            <div className="ingredient-card" key={id}>
                <h3 className="ingredient-name">{name}</h3>
                <img className="ingredient-image" src={image} width="250px" height="250px" alt='ingredient'/>
                <p className="ingredient-description"> {showMore? description : description.substring(0, 150) + "...."} 
                <button className='showtext-btn' onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
            
            </div>
          )
        }))}
  
      </div>
      )
  }
  
  export default Ingredients;