import EventCard from "./EventCard";
import PropTypes from "prop-types";

const Events = ({ events }) => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-8 mb-20 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
          Upcoming Events
        </h2>
        <div className="h-1.5 w-40 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 rounded-full mx-auto shadow-lg shadow-rose-400/50"></div>
        <p className="text-white text-lg sm:text-xl md:text-2xl mt-6 font-medium drop-shadow-lg">
          Exciting competitions and performances await you
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} eventsData={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
Events.propTypes = {
  events: PropTypes.array,
};
