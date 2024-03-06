import Search from "./Search";
import { restaurantList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { TopRatedRestaurants } from "./TopRatedRestaurants";
import { useState } from "react";

const Body = () => {

    const [filteredRestaurants, setFilteredRestaurants ] = useState(restaurantList);

    //let filteredRestaurants = restaurantList;

    function filterTopRatedRestaurants() {
        let filteredRestaurantsList = restaurantList.filter(
          (restaurant) => parseFloat(restaurant.rating) > 4
        );

        setFilteredRestaurants(filteredRestaurantsList);


        console.log("filterd restaurants ", filteredRestaurants);
      }

    return (
      <div className="bodyComponent">
        <Search />
        <TopRatedRestaurants filter={filterTopRatedRestaurants} />
        <div className="restaurantCards">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard resDetails={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;