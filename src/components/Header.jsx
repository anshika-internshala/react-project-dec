import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faLifeRing,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <img
        width="100px"
        src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
        alt="Restaurant Logo"
      />
      <ul>
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
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </li>
      </ul>
    </nav>
  );
};

export default Header;
