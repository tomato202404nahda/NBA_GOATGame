import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import { createContext, useState } from "react";
import { User } from "./types";
import Ranking from "./pages/ranking/Ranking";
import Header from "./components/header/Header";

export const RankingContext = createContext(null);

function App() {
  const [value, setValue] = useState<User>();
  const router = [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/ranking",
      element: <Ranking />,
    },
    {
      path: "/",
      element: <Navigate to={"/home"} />,
    },
  ];

  return (
    <>
      <Header />
      <RankingContext.Provider value={[value, setValue]}>
        <Routes>
          {router.map((e) => {
            return <Route path={e.path} element={e.element}></Route>;
          })}
        </Routes>
      </RankingContext.Provider>
    </>
  );
}

export default App;
