import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Offers } from './components/Offers.jsx';
import { SignIn } from './components/SignIn.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Profile from './components/Profile.jsx';
import { About } from './components/About.jsx';
import  Memo from './components/Memo.jsx';
import { Cart } from './components/Cart.jsx';

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Body/>
        },
        {
            path: "/offers",
            element: <Offers />
        },
        {
            path: "/sign-in",
            element: <SignIn />
        },
        {
            path: "/class",
            element: <About/>
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu/>
        },
        {
            path: "/memo",
            element: <Memo/>
        },
        {
            path: "/cart",
            element: <Cart/>
        }
      ]
    },   
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
