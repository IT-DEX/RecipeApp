import React from "react";

function Letters({filteredIngredients, data, setIngredients}) {
    
    return <div className="buttons-container">

    <button className="letterButton" onClick={() => filteredIngredients("A")}>A</button>
    <button className="letterButton" onClick={() => filteredIngredients("B")}>B</button>
    <button className="letterButton" onClick={() => filteredIngredients("C")}>C</button>
    <button className="letterButton" onClick={() => filteredIngredients("G")}>G</button>
    <button className="letterButton" onClick={() => filteredIngredients("K")}>K</button>
    <button className="letterButton" onClick={() => filteredIngredients("M")}>M</button>
    <button className="letterButton" onClick={() => filteredIngredients("N")}>N</button>
    <button className="letterButton" onClick={() => filteredIngredients("O")}>O</button>
    <button className="letterButton" onClick={() => filteredIngredients("P")}>P</button>
    <button className="letterButton" onClick={() => filteredIngredients("S")}>S</button>
    <button className="letterButton" onClick={() => filteredIngredients("T")}>T</button>
    <button className="letterButtonOne" onClick={() => setIngredients(data)}>Show All</button>


    </div>
}

export default Letters;