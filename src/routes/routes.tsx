import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import environments from "../Environments/environments";
import { useAuth } from "../Context/AuthContext";
import Profile from "../Pages/Profile/Profile";
import AboutUs from "../Pages/AboutUs/AboutUs";

const AuthenticatedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{element}</> : <Login />;
};

const routerList = createBrowserRouter(
  [
    {
      path: `/`,
      element: <AuthenticatedRoute element={<Home />} />,
    },
    {
      path: `/profile`,
      element: <AuthenticatedRoute element={<Profile />} />,
    },
    {
      path: `/register`,
      element: <Register />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path:"AboutUs",
      element: <AboutUs />
    }
  ],
  { basename: `${environments.ghPageEnv}` }
);

export default routerList;
