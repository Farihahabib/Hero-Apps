import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayput from "../Layouts/MainLayput";

import Error from "../Pages/Error";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element:   <MainLayput />,
    errorElement: <Error />,
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
    ]

  },
 
]);
export default router;