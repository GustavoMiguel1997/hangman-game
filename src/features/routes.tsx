import { createBrowserRouter } from "react-router-dom";

import { App } from "@components/App/App";

import { Home } from "./home/Home";
import { Tutorial } from "./tutorial/Tutorial";
import { Category } from "./category/Category";
import { Game } from "./game/Game";

export const router = createBrowserRouter([
  {
    path: "/hangman-game",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tutorial",
        element: <Tutorial />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "game",
        element: <Game />,
      },
    ],
  },
]);
