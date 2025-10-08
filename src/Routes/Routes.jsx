import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayput from "../Layouts/MainLayput";

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
            loader: () => fetch('/apppinfo.json')
        },

        {
    path: "/Apps",
    element:   <Apps />,
  },
 {
    path: "/Installation",
    element:   <Installation />,
  },
    ]

  },
 
]);
export default router;