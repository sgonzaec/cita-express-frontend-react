import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import environments from "../Environments/environments";
import { useAuth } from "../Context/AuthContext";
import Profile from "../Pages/Profile/Profile";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OurServices from "../Pages/OurServices/OurServices";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Appoiments from "../Pages/Appiments/Appoiments";

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
      path: "/our-services",
      element: <OurServices />,
    },
    {
      path:"/about-us",
      element: <AboutUs />,
    },
    {
      path:"/our-team",
      element: <OurTeam/>,
    },
    {
      path: "/my-appoiments",
      element: <AuthenticatedRoute element={<Appoiments />} />,
    },
    {
      path: "/general-appoiments",
      element: <Appoiments />,
    },
    {
      path: "*",
      element: <Error />,
    },

  ],
  { basename: `${environments.ghPageEnv}` }
);

export default routerList;
