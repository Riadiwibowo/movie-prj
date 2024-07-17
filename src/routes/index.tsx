import Authentication from "../features/auth";
import Detail from "../features/detail/movie-detail";
import Home from "../features/home";
import Layout from "../component/layout";
import Movie from "../features/movie";
import MovieDetail from "../features/detail/movie-detail";
import ProtectedRoutes from "./protected-routes";
import TvShow from "../features/tv-show";
import TvShowDetail from "../features/detail/tvshow-detail";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/movie",
            element: <Movie />,
          },
          {
            path: "/tv-show",
            element: <TvShow />,
          },
          {
            path: "/movie/:id",
            element: <MovieDetail />,
          },
          {
            path: "/tv-show/:id",
            element: <TvShowDetail />,
          },
          {
            path: "/login",
            element: <Authentication />,
          },
        ],
      },
    ],
  },
]);
