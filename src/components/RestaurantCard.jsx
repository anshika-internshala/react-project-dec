import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { imageUrl } from "../utils/mockData";

export const RestaurantCard = (props) => {
    // Object Destructuring
    const { name, avgRating, cuisines, locality, sla , cloudinaryImageId} =
      props.resDetails;
  
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
          <FontAwesomeIcon icon={faStar} /> {avgRating} {sla.deliveryTime}
        </span>
        <span>{cuisines}</span>
        <span>{locality}</span>
      </div>
    );
  };