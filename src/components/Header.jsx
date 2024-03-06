import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faLifeRing,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faPercent} name="percent" /> Offers
          </li>
          <li>
            <FontAwesomeIcon icon={faLifeRing} /> Help
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} /> Sign In
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </li>
        </ul>
      </nav>
    );
};

export default Header;