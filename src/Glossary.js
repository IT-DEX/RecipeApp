import React from "react";
import { useState } from 'react';
import { data } from './data';
import glossaryBackground from './background-search.jpg'
import Letters from './Letter-buttons';
import Ingredients from './Ingredients';

function Glossary() {

    const [ingredients, setIngredients] = useState(data);

    const chosenIngredients = (searchTerm) => {
        const newIngredient = data.filter(element => element.searchTerm === searchTerm);
        setIngredients(newIngredient);
    }

    return (

    <div>

        <div>
            <img className="img-background" src={glossaryBackground} alt='background here'/>
        </div>

        <div>
            <Letters 
                filteredIngredients = {chosenIngredients}
                data={data}
                setIngredients={setIngredients}
                />
            <Ingredients anyIngredients = {ingredients}/>
        </div>
    
    
    
    
    
    
    
    
    </div>
        )
}
export default Glossary;