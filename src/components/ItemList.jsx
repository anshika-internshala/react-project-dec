import { imageUrl } from "../utils/mockData";

const ItemList = ({ items, dummy }) => {
 
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="item-list-item">
            <div className="absolute">
              <button
                className="add-button"
                onClick={() => console.log("clicked")}
              >
                Add +
              </button>
            </div>
            <img src={imageUrl + item.card.info.imageId} className="item-image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;