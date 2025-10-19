import { useLoaderData } from "react-router-dom";
import EventsPage from "./EventsPage";

const AllEvents = () => {
  const eventsData = useLoaderData();
  const data = eventsData.events;

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 drop-shadow-2xl">
            All Events
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-rose-400 via-purple-500 to-orange-500 rounded-full mx-auto shadow-lg shadow-purple-400/50 mb-6"></div>
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-lg">
            Explore all competitions and performances
          </p>
        </div>

        {/* Events Content */}
        <div>
          <EventsPage eData={data} />
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
