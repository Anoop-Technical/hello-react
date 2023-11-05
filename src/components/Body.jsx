import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        // Optional Chaining
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(listOfRestaurant.length === 0){
    //     return <h1 style={{textAlign: "center"}}>Loading...</h1>
    // }

    return listOfRestaurant.length === 0 ? <h1 style={{ textAlign: "center" }}>Loading...</h1> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="search here..." className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => {
                        //filter restaurant
                        console.log(searchText)
                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}>TOP RATED RESTAURANTS</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;

