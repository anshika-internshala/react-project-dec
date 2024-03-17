import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Offers } from './components/Offers.jsx';
import { SignIn } from './components/SignIn.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';

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
            path: "/restaurant/:resId",
            element: <RestaurantMenu/>
        }
      ]
    },   
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
