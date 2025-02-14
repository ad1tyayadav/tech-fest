import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-02-17T00:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative top-10 countdown-section text-center py-10">
      {/* Green Registration Deadline Banner */}
      <div className="relative bg-green-600 text-white text-lg sm:text-xl font-bold py-1 mb-10 ">
        Last Date of Registration: 10th February
      </div>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl text-primary glitch-text text-yellow-500 font-bold"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Event Starts In
      </motion.h2>
      <motion.div
        className="countdown-timer flex flex-wrap justify-center gap-4 mt-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit} 
            className="time-block bg-black border border-primary rounded-lg p-4 w-20 sm:w-24 md:w-32"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="number text-4xl sm:text-5xl md:text-6xl text-secondary">{value}</span>
            <span className="label text-primary text-sm sm:text-base md:text-lg">{unit}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className="text-xl mt-4 text-gray-300 mb-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        17th - 18th February 2025...
      </motion.p>
      <motion.section
        className="mt-4 py-6 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-primary  text-cyan-500 font-bold mb-8 ">Backed by the Best</h2>

        {/* Logos with Individual Titles */}
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-4">Innovation Partner</h3>
            <img
              src="/csjaf.png"
              alt="Innovation Partner"
              className="h-40 sm:h-44 md:h-48 w-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-4">Title Sponsor</h3>
            <img
              src="/Nkosh.png"
              alt="Title Sponsor"
              className="h-40 sm:h-44 md:h-48 w-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-4">Institutional Partner</h3>
            <img
              src="/csjmuw.png"
              alt="Institutional Partner"
              className="h-40 sm:h-44 md:h-48 w-auto rounded-lg"
            />
          </div>
        </div>
</motion.section>



    </section>
  );
}

export default CountdownTimer;
