import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayput from "../Layouts/MainLayput";
import AppDetails from "../Pages/AppDetails"
import Error from "../Pages/Error";
import Installation from "../Pages/Installation";
import logo from '../assets/logo.png'
const router = createBrowserRouter([
  {
    path: "/",
    element:   <MainLayput />,
    errorElement: <Error />,
    hydrateFallbackElement: <img className="w-9" src={logo} alt="" />,
    children: [
        {
            index: true,
            element:   <Home />,
        
        },

        {
    path: "/Apps",
    element:   <Apps />,
  },
 {
    path: "/Installation",
    element:   <Installation />,
  },
  {
    path: '/app/:id',
    element: <AppDetails />

  }
    ]

  },
 
]);
export default router;