import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuAPI } from "../utils/mockData";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const params = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const dummy = "Dummy Data";

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(`${menuAPI}${params.resId}`);
    const menuData = await data.json();

    setResInfo(menuData.data);

    console.log("resInfo", resInfo);
  }

  if (resInfo == null) {
    return <Shimmer />;
  } else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

    const categories =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    return (
      <div className="menu-container">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* categories accordions */}
        {categories.map((category, index) => (
          // controlled component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    );
  }
}

export default RestaurantMenu;
