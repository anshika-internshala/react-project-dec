import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faLifeRing,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  // Subscribed to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="flex justify-between items-center py-0 px-2.5 bg-white sm:bg-gray-600">
      <img
        width="100px"
        src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
        alt="Restaurant Logo"
      />
      <ul>
        <li>
          <span>Online Status: {onlineStatus ? "🟢" : "🔴"}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPercent} name="percent" />{" "}
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faLifeRing} /> Help
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} /> <Link to="/sign-in">SignIn</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          <Link to="/cart">Cart - {cartItems.length} items</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
