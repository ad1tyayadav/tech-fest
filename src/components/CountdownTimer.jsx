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
    <section className="relative top-28 countdown-section text-center py-10">
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
        className="text-xl mt-4 text-gray-300"
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
        <h2 className="text-xl font-semibold text-cyan-400 mb-4">Sponsored By</h2>
        <img
          src="/inovation.jpg"
          alt="Funding Cell Logo"
          className="h-28 w-auto mx-auto rounded-lg"
        />
      </motion.section>
    </section>
  );
}

export default CountdownTimer;
