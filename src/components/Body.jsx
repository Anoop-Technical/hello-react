import { useState } from "react";
import { resList } from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                    setListOfRestaurant(filteredList);
                }}>TOP RATED RESTAURANTS</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;

