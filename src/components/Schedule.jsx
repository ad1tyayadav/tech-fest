import React from "react";
import { motion } from "framer-motion";

function Schedule() {
  const events = [
  {
    day: "Day 1 - February 17, 2025",
    activities: [
      { name: "🏆 Opening Ceremony", time: "11:00 AM" },
      { name: "🤖 Robo Obstacle Race", time: "11:30 AM - 1:30 PM", venue: "📍 Innovation Cell, near BOB" },
      { name: "🚀 Line Following Bot", time: "11:30 AM - 2:00 PM" }, // Venue Removed
      { name: "🎭 Showcase & Exhibition", time: "11:30 AM - 2:00 PM", venue: "📍 Innovation Cell Garden" },
      { name: "🏅 Result Declaration (LFR and Showcase & Exhibition)", time: "4:00 PM", venue: "📍 Innovation Cell" }
    ]
  },
  {
    day: "Day 2 - February 18, 2025",
    activities: [
      { name: "⚔️ Robo-War", time: "10:30 AM - 1:30 PM", venue: "📍 OAT, UIET" },
      { name: "⚽ Robo-Soccer", time: "10:30 AM - 1:30 PM", venue: "📍 OAT, UIET" },
      { name: "🏅 Result Declaration (Robo-War, Robo-Soccer, Robo-Obstacle Race)", time: "4:00 PM", venue: "📍 OAT, UIET" },
      { name: "🎤 Closing Ceremony", time: "4:00 PM", venue: "📍 OAT, UIET" }
    ]
  }
];


  return (
    <section className="relative flex flex-col justify-center items-center w-[100vw] min-h-[100vh] text-white p-6 bg-gradient-to-br from-black to-gray-900">
      {/* Title with a Glitch Effect */}
      <motion.h1
  className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center text-yellow-400 glitch-text mb-10 px-6 py-14"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Event Schedule 📅
</motion.h1>


      <motion.div
        className="w-full max-w-5xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {events.map((day, index) => (
          <motion.div
            key={index}
            className="mb-10 bg-black/60 border border-blue-500 shadow-xl shadow-blue-500/30 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden group"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            {/* Day Title */}
            <h2 className="text-2xl font-bold text-blue-400 mb-6">{day.day}</h2>
            
            {day.activities.map((activity, actIndex) => (
              <div
                key={actIndex}
                className="flex items-center justify-between border-b border-gray-600 py-4 last:border-none group-hover:border-gray-400 transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{activity.name}</h3>
                  {activity.venue && (
                    <p className="text-sm text-gray-400 mt-1">{activity.venue}</p>
                  )}
                </div>
                <p className="px-4 py-1 text-sm font-semibold bg-blue-600/30 text-white rounded-md shadow">
                  {activity.time}
                </p>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Note */}
      <motion.p
        className="mt-6 text-lg text-center text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        ⚠️ Note: Result of Robo-obstacle race will be declared on Day 2
      </motion.p>

      {/* Animated Glows */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/20 blur-[120px] rounded-full animate-pulse"></div>
    </section>
  );
}

export default Schedule;
