import React from "react";
import { motion } from "framer-motion";

function Schedule() {
  return (
    <section className="relative flex flex-col justify-center items-center w-[100vw] h-[90vh] text-white">
      {/* Glitching Text */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center text-yellow-400 glitch-text"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Schedule
      </motion.h1>
      <motion.p
        className="mt-6 text-lg sm:text-2xl md:text-3xl font-semibold text-center text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        The Future is Loading...
      </motion.p>

      {/* Robotic Styled Message */}
      <div className="mt-10">
        <motion.div
          className="flex flex-col justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-700 rounded-lg p-10 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-2xl sm:text-3xl font-bold text-black">
            Coming Soon...
          </p>
          <span className="block mt-4 text-lg sm:text-xl text-gray-100">
            Stay tuned for updates on the most thrilling events.
          </span>
        </motion.div>
      </div>

      {/* Decorative Pulses */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 blur-[120px] rounded-full animate-pulse"></div>
    </section>
  );
}

export default Schedule;
