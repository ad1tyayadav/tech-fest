import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="mt-36 hero-section w-[100vw] h-[60vh] flex flex-col justify-center items-center text-center relative">
      <motion.h1
        className="text-6xl mt-20 md:text-8xl font-extrabold text-yellow-400 glitch-text"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Robo Rumble 2.o
      </motion.h1>
      <p className="text-xl mt-4 text-gray-300">
        17th - 18th February 2025...
      </p>
      {/* Prize Pool Section */}
      <motion.div
        className="mt-20 p-6 bg-gradient-to-r from-violet-500 via-green-500 to-grey-700 rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-white animate-pulse">
          Prize Pool: ₹95,000
        </h2>
      </motion.div>
      {/* Buttons */}
      <div className="mt-20 flex space-x-4">
        <button
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-lg font-semibold rounded-lg"
          onClick={() => window.open('/auth')}
        >
          Register Now
        </button>
        <button
          className="px-6 py-3 bg-transparent border border-cyan-400 hover:bg-cyan-400 text-lg font-semibold rounded-lg"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1gcdGpn3te8TLFwwC4PJhyf2KqJ02cJrL/view?usp=sharing',
              '_blank'
            )
          }
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
