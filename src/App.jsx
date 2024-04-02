import "./App.css";
import Header from "./components/Header";
import Footer  from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import userContext from "./utils/userContext";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("John");

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{currentUser: userName, setUserName}}>
        <Header />
        <Outlet/>
        <Footer />
      </userContext.Provider>
    </Provider>
  );
}

export default App;
