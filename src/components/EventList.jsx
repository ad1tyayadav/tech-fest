import React from 'react';
import EventCard from './EventCard';
import { events } from '../../public/eventsData';

const EventList = () => {
  return (
    <section className="relative w-[100vw] h-auto px-8 sm:px-0 bg-transparent text-center py-16">
      <h2 className="text-7xl font-extrabold text-yellow-400 glitch-text mt-28 sm:mt-20">Events</h2>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventList;
