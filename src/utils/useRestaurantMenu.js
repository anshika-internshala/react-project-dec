import { menuAPI } from "../utils/mockData";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);

      async function fetchMenu() {
        const data = await fetch(`${menuAPI}${resId}`);
        const menuData = await data.json();
    
        setResInfo(menuData.data);
    
        console.log("resInfo", resInfo);
      }

      return resInfo;   
}

export default useRestaurantMenu;

/**
 * check whether person is online/offline
 * if person is offline , then in body component , show message that person is offline
 * Also in nav bar , show online status. Online Status: 🟢 or 🔴 
 */