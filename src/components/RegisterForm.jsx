import React, { useState } from "react";
import { motion } from "framer-motion";

function RegisterForm() {
  const [error, setError] = useState("");

  return (
    <div className="w-[100vw] relative z-[10] min-h-screen mt-20 text-gray-200 flex flex-col items-center">
      {/* Page Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold text-center text-cyan-400 mt-12"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-yellow-500 glitch-text">Robo Rumble 2.0</span>
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-center mt-4 px-4 sm:px-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The ultimate robotics showdown! Gear up to design, build, and battle your bots
        in a high-stakes competition that combines innovation, teamwork, and adrenaline!
      </motion.p>

      {/* Event Highlights */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          {
            title: "🤖 Robot Combat",
            description:
              "Bring your battle bots to life and compete in our epic robo arena!",
          },
          {
            title: "⚙️ Innovation Hub",
            description:
              "Showcase cutting-edge ideas and futuristic designs with your team.",
          },
          {
            title: "🏆 Grand Prizes",
            description:
              "Exciting cash rewards and recognition for the most outstanding bots!",
          },
        ].map((highlight, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-2">
              {highlight.title}
            </h3>
            <p className="text-gray-300">{highlight.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Registration Section */}
      <motion.div
        className="w-full max-w-lg mt-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8 shadow-lg relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Glowing Border */}
        <div className="absolute inset-0 -z-10 blur-lg bg-gradient-to-r from-cyan-500 via-yellow-500 to-purple-500 rounded-lg animate-pulse"></div>

        <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-6">
          Ready to Join?
        </h2>

        {error && (
          <div className="bg-red-500 text-white text-center py-2 rounded-md mb-4">
            {error}
          </div>
        )}

        <button
          type="button"
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-cyan-500 text-black rounded-lg text-lg font-bold hover:scale-105 transition-transform shadow-lg"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
          }}
          onClick={() =>
            window.open("https://forms.gle/wDGQ4TP64GdPkgE9A", "_blank")
          }
        >
          🚀 Register Now
        </button>
        <p className="text-gray-300 text-sm text-center mt-4">
          Secure your spot and join the ultimate robotics challenge.
        </p>
      </motion.div>

      {/* Fun Footer */}
      <motion.div
        className="mt-16 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <p>Got questions? Drop us a message at <span className="text-cyan-400">adit786yadav@gmail.com</span></p>
        <p className="mt-2">See you on the battlefield! ⚔️🤖</p>
      </motion.div>
    </div>
  );
}

export default RegisterForm;
