import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RestaurantMenu() {

    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetchMenu();
    }, []);

    async function fetchMenu() {
      const data =  await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6909835&lng=77.44527719999999&restaurantId=${params.resId}&isMenuUx4=true&submitAction=ENTER`);
      const menuData = await data.json();

      console.log(menuData);
    }

    return (
        <h1 style={{marginTop: '100px'}}>RestaurantMenu</h1>
    )
}

export default RestaurantMenu;