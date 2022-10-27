import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Categories from "../pages/categories/Categories";
import Course from "../pages/courses/Course";
import Courses from "../pages/courses/Courses";
import About from "../pages/others/About";
import Checkout from "../pages/shared/checkout/Checkout";
import ErrorPage from "../pages/shared/errorPage/ErrorPage";
import Home from "../pages/shared/Home";
import Login from "../pages/shared/loginRegister/Login";
import Register from "../pages/shared/loginRegister/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Categories />,
        loader: ({ params }) =>
          fetch(`https://server-side-three.vercel.app/category/${params.id}`),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("https://server-side-three.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-side-three.vercel.app/courses/${params.id}`),
      },
      {
        path: "/pay-now",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
