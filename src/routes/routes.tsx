import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error/>
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error/>,
  },
]);

export default routerList;
