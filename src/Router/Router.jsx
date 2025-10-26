import { createBrowserRouter, useParams } from "react-router-dom";
import { useEffect } from "react";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import Speakers from "../components/pages/Events/Speakers";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/pages/ErrorPage";
import Payment from "../components/pages/payment/Payment";
import Report from "../components/pages/payment/PaymentsReport/Report";
import Team from "../components/pages/Team/Team";
import Spornsor from "../components/pages/Home/Sponsors/Spornsor";
import Gallery from "../components/pages/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/events-data.json"),
      },

      {
        path: "/events",
        element: <ExternalRedirect to={`${import.meta.env.VITE_MAIN_SITE_URL}`} />,
      },
      {
        path: "/event/:id",
        element: <EventExternalRedirect />,
      },
      {
        path: "/Speakers",
        element: (
          <PrivateRoute>
            <Speakers />
          </PrivateRoute>
        ),
        loader: () => fetch("/events-data.json"),
      },

      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: () => fetch("/events-data.json"),
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/sponsors",
        element: <Spornsor />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: '/paymentsReport',
        element: <PrivateRoute>
          <Report />
        </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  return null;
}

function EventExternalRedirect() {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_MAIN_SITE_URL}`;
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
}
