import React, { useState } from "react";
import '../main/Main.css'
import Mainitem from "./MainItem";

const Main = () => {
    const [ search, setSearch ] = useState("");
    const [ Mymeal, setMeal ] = useState();
    const searchMeal = (evt) => {
        if (evt.key == "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) 
            .then( res => res.json())
            .then( data => { setMeal( data.meals ); 
            setSearch("") })
        }
    }
    return (
        <>
            <div className="main">
                <div className="main__search">
                    <h1>Search Your Favorite Food</h1>
                    <input type="search" placeholder="Search..." className="main__search-bar" onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
                </div>
                <div className="main__item-card">
                    {

                        (Mymeal == null) ? <p className="notSearch">Not found</p> :
                            Mymeal.map((res) => {
                                return (
                                    <Mainitem data={res} />)
                            }

                            )

                    }
                </div>
            </div>
        </>
    )
}
export default Main;