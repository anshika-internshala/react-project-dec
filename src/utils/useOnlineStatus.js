// purpose --- to return online status
import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      console.log("offline");
      setOnlineStatus(false);
    });

    window.addEventListener("online", (e) => {
      console.log("online");
      setOnlineStatus(true);
    });
  },[]);

  return onlineStatus;
};

export default useOnlineStatus;
