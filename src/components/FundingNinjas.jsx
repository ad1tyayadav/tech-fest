import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sponsors = [
  { id: 1, name: "CSJMIF", logo: "/inovation.jpg" },
  { id: 2, name: "Daily Wash", logo: "/dailywash.jpg" },
];

function FundingNinjas() {
  return (
    <div className="w-[100vw] sm:p-28">
      <section className="relative w-full py-10 text-white px-4 sm:px-20 min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 glitch-text">
            Funding Ninjas
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Our amazing sponsors fueling innovation and progress!
          </p>
        </div>

        {/* Sponsors Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              className="flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-16 flex justify-center">
          <Link
            className="px-8 py-3 text-lg font-semibold text-black bg-cyan-500 rounded-full hover:bg-cyan-400 transition-transform transform hover:scale-105"
            to={'/'}
          >
            Fuel Innovation with Us!
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FundingNinjas;
