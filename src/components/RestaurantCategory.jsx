import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <>
      {/* Header */}
      <div className="restaurant-category-container">
        <div
          className="inner-container"
          onClick={handleClick}
        >
          <span>
            <b>{data.title} ({data.itemCards.length})</b>
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </>
  );
};

export default RestaurantCategory;