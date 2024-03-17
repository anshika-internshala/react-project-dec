import Search from "./Search";
// import { swiggyRestaurants } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { TopRatedRestaurants } from "./TopRatedRestaurants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  //let filteredRestaurants = restaurantList;

  // no dependency array , then useEffect will be called on every render
  // empty dependency array , useEffect will be called only once after initial render

  useEffect(() => {
    console.log("use effect has been executed");
    fetchData();
  }, []);


  async function fetchData() {
    console.log("Data is fetched");
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6909835&lng=77.44527719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();

    console.log(data);

    const card = data?.data?.cards[2].card.card.gridElements == undefined ? data?.data?.cards[4].card.card.gridElements : data?.data?.cards[2].card.card.gridElements;

    // Optional Chaining
    const restaurants = card.infoWithStyle?.restaurants;
      
      setRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    console.log(restaurants);
  }

  console.log("Body Component has been rendered");

  function filterTopRatedRestaurants() {
    let filteredRestaurantsList = restaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) >= 4.5
    );

    setFilteredRestaurants(filteredRestaurantsList);

    console.log("filterd restaurants ", filteredRestaurants);
  }

  function searchRestaurants(searchText) {
    console.log("search text", searchText);
    let searchRestaurants = restaurants.filter((restaurant) =>
      restaurant.info.name.toUpperCase().includes(searchText.toUpperCase())
    );

    setFilteredRestaurants(searchRestaurants);

    console.log(searchRestaurants);
  }

  return (
    <div className="bodyComponent">
      <Search searchFunction={searchRestaurants} />
      <TopRatedRestaurants filter={filterTopRatedRestaurants} />

      <div className="restaurantCards">
        {filteredRestaurants.length == 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link to= {"/restaurant/" + restaurant.info.id}>
              <RestaurantCard key={restaurant.info.id} resDetails={restaurant.info} />
            </Link>    
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
