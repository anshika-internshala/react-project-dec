import "./App.css";
import Header from "./components/Header";
import Footer  from "./components/Footer";
import { Outlet } from "react-router-dom";
import { MyButton } from "./components/MyButton";

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
