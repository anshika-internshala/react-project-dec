import Search from "./Search";
// import { swiggyRestaurants } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { TopRatedRestaurants } from "./TopRatedRestaurants";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants ] = useState(restaurants);

  //let filteredRestaurants = restaurantList;

  // empty dependency array , useEffect will be called only once

  useEffect(() => {
    console.log("use effect has been executed");
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6909835&lng=77.44527719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();

    // Optional Chaining
    const restaurants =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

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
      <Search searchFunction={searchRestaurants}/>
      <TopRatedRestaurants filter={filterTopRatedRestaurants} />
      <div className="restaurantCards">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard resDetails={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
