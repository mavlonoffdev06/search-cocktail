import React from "react";
import '../main/Main.css'


const Mainitem = (getMeal) => {
    console.log(getMeal.data)
    return (
        <>
                <div className="card">
                    <img src={getMeal.data.strMealThumb} alt="meal" />
                    <div className="card__info">
                        <h2>{getMeal.data.strMeal.length > 10 ? getMeal.data.strMeal.slice(0, 10) + "..." : getMeal.data.strMeal}</h2>
                    </div>
                    <div className="recipe">
                        <h2>Recipe</h2>
                        <img src={getMeal.data.strMealThumb} />
                        <p>{getMeal.data.strInstructions.length > 200 ? getMeal.data.strInstructions.slice(0, 200) + "..." : getMeal.data.strInstructions}</p>
                        <a href={getMeal.data.strSource} target='blank'><i class="fa-solid fa-circle-play"></i>Watch video</a>
                    </div>
                </div>
        </>
    )
}
export default Mainitem;