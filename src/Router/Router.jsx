import { createBrowserRouter, useParams } from "react-router-dom";
import { useEffect } from "react";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import Speakers from "../components/pages/Events/Speakers";
import ErrorPage from "../components/pages/ErrorPage";
import Team from "../components/pages/Team/Team";
import Spornsor from "../components/pages/Sponsors/Spornsor";
import Gallery from "../components/pages/Gallery/Gallery";
import ContactUs from "../components/pages/ContactUs/ContactUs";
import Brochure from "../components/pages/Brochure/Brochure";

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
        path: "/speakers",
        element: <Speakers />,
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
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/brouchre",
        element: <Brochure />,
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
