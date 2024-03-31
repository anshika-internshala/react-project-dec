import { useSelector, useDispatch } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    console.log(cartItems);
    return (
        <div className="cart">
            <button onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems}/>
        </div>
    )
}