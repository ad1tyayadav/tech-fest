import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sponsors = [
  { id: 1, name: "CSJMIF", logo: "/inovation.jpg" },
  { id: 2, name: "Daily Wash", logo: "/dailywash.jpg" },
  { id: 3, name: "Redbull", logo: "/redbull2.png" },
  { id: 4, name: "Sahara", logo: "/sahara.jpg" }
];

function FundingNinjas() {
  return (
    <div className="w-[100vw] sm:p-28">
      <section className="relative w-full py-10 text-white px-4 sm:px-20 min-h-[80vh]">
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-yellow-400 glitch-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Funding Ninjas
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our amazing sponsors fueling innovation and progress!
          </motion.p>
        </div>

        {/* Sponsors Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            className="px-8 py-3 text-lg font-semibold text-black bg-cyan-500 rounded-full hover:bg-cyan-400 transition-transform transform hover:scale-105"
            to={'/'}
          >
            Fuel Innovation with Us!
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default FundingNinjas;
