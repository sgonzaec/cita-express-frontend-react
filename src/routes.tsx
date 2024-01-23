import { createBrowserRouter } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

const routerList = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routerList;
