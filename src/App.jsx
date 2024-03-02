import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPercent, faLifeRing, faUser, faCartShopping, faStar} from "@fortawesome/free-solid-svg-icons";

/**
 *  Header
 *    Navigation Bar
 *  Body
 *    Search Component
 *    Restaurant Card
 *  Footer
 *    Copyright
 *    Links
 *    Address
 */

const Header = () => {
  return (
    <>
      <nav>
        <img width="100px" src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" alt="Restaurant Logo" />
        <ul>
          <li><FontAwesomeIcon icon={faPercent} name="percent" /> Offers</li>
          <li><FontAwesomeIcon icon={faLifeRing} /> Help</li>
          <li><FontAwesomeIcon icon={faUser} /> Sign In</li>
          <li><FontAwesomeIcon icon={faCartShopping} /> Cart</li>
        </ul>
      </nav>
    </>
  )
}

const Search = () => {
  return (
    <>
      <input type="text" id="search" className="searchInput"/> 
      <label htmlFor="search" className="searchLabel">Search</label>
    </>
   
  )
}

const RestaurantCard = (props) => {
  return (
    <div className='restaurantCard'>
      <img width="200px" height="150px" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/533d5ee221cb729dcf42faeb8761f57d" alt="" />
      <h2>{props.name}</h2>
      <span><FontAwesomeIcon icon={faStar} /> 3.8  45mins</span>
      <span>Burgers American</span>
      <span>Chandni Chowk</span>
    </div>
  )
}
// props to component ---- passing arguments to function
const Body = () => {
  return (
    <div className='bodyComponent'>
      <Search />
      <div className='restaurantCards'>
        <RestaurantCard name="BurgerKing" rating="" cuisines=""/>
        <RestaurantCard name="KFC"/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
      
    </div>  
  )
}

function App() {
  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

export default App
