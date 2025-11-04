import EventCard from "./EventCard";
import PropTypes from "prop-types";

const Events = ({ events }) => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-8 mb-20 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-6 drop-shadow-2xl">
          Upcoming Events
        </h2>
        <div className="h-1.5 w-40 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full mx-auto shadow-lg shadow-purple-500/50"></div>
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl mt-6 font-body font-light drop-shadow-lg">
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
