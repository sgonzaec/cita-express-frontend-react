import { createBrowserRouter } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error/Error";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: < />,
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
