import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div
      className="relative top-0 left-0 w-[100vw] min-h-screen flex flex-col justify-center items-center text-gray-200 bg-transparent z-[9999]"
    >
      {/* Animated Error Text */}
      <motion.h1
        className="text-7xl sm:text-9xl font-extrabold text-cyan-400 glitch-text"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      {/* Funny Message */}
      <motion.p
        className="mt-6 text-2xl sm:text-3xl font-semibold text-red-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Oops! Looks like you've wandered into the void. 🛠️  
      </motion.p>
      <p className="mt-4 text-lg text-gray-300 text-center">
        This page is as empty as my fridge after a coding marathon.
      </p>

      {/* Call-to-Action Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg shadow-md transition"
        >
          Go Home
        </Link>
      </motion.div>

      {/* Animation/Decoration */}
      <motion.div
        className="mt-16"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <p className="text-gray-500 text-center text-sm">
          Don't worry, our robots are already fixing it! 🤖⚙️
        </p>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
