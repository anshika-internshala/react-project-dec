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
import { useContext, useState } from "react";
import userContext from "../utils/userContext";
import Login from "./Login";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [visible, setVisible] = useState(false);
      
  const { currentUser } = useContext(userContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Subscribed to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const openModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  }

  const setLoggedIn = (val) => {
    setIsLoggedIn(val);
  }

  return (
    <>
    <nav className="flex justify-between items-center py-0 px-2.5 bg-white border">
      <img
        width="100px"
        src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
        alt="Restaurant Logo"
      />
      <ul>
      <li>
          <h2>{currentUser}</h2>
      </li>
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
        {/* <li>
          <FontAwesomeIcon icon={faUser} /> <Link to="/sign-in">SignIn</Link>
        </li> */}
        <li>
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          <Link to="/cart">Cart - {cartItems.length} items</Link>
        </li>
        <li>
          {
            sessionStorage.getItem("accessToken") ? (<button>LogOut</button>): (
              <button
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick = {openModal}
            >
              Login
            </button>
            )
          }
       
        </li>
      </ul>
    </nav>

    <Login
      isVisible = {visible}
      onClose ={closeModal}
      setLoggedIn = {setLoggedIn}
    >

    </Login>
  </>
  );
};

export default Header;
