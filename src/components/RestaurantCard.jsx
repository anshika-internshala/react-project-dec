import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { imageUrl } from "../utils/mockData";
import userContext from "../utils/userContext";
import { useContext } from "react";

export const RestaurantCard = (props) => {
    // Object Destructuring
    const { name, avgRating, cuisines, locality, sla , cloudinaryImageId} =
      props.resDetails;

    const { currentUser } = useContext(userContext);
  
    return (
      <div className="restaurantCard">
        <img
          width="200px"
          height="150px"
          src={`${imageUrl}${cloudinaryImageId}`}
          alt=""
        />
        <h2>{name}</h2>
        <span>
          <FontAwesomeIcon icon={faStar} /> {avgRating}
        </span>
        <span>{cuisines}</span>
        <span>{locality}</span>
        <span>{currentUser}</span>
      </div>
    );
  };