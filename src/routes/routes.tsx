import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import environments from "../Environments/environments";

const routerList = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Home />,
    },
    {
      path: `/register`,
      element: <Register />,
    },
    {
      path: `/login`,
      element: <Login />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: `${environments.ghPageEnv}` }
);

export default routerList;
