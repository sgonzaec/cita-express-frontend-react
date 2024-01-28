import { RouterProvider } from "react-router-dom";
import "./App.scss";
import routerList from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Context/AuthContext"

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={routerList} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  );
}

export default App;
