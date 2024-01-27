import { RouterProvider } from "react-router-dom";
import "./App.scss";
import routerList from "./routes/routes";
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <>
      <RouterProvider router={routerList} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
