import { useLoaderData } from "react-router-dom";

import Events from "../Events/Events";
import AboutFea from "./AboutFea/AboutFea";
import Banner from "./Banner/Banner";
import Schedule from "./../Events/Schedule";


const Home = () => {
  const data = useLoaderData();
  const events = data.events;
  return (
    <div>
      <div className="mb-8">
        <Banner />
      </div>

      <div data-aos="fade-right">
        <AboutFea />
      </div>
      
      <Events events={events} />

      <div className="mt-32">
        <Schedule />
      </div>
    </div>
  );
};

export default Home;
