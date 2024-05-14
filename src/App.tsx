import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Navigate to={"/home"} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
