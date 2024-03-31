import { imageUrl } from "../utils/mockData";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummy }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
 
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
                onClick={() => handleAddItem(item)}
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