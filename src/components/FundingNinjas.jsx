import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sponsors = [
  { id: 1, name: "CSJMIF", logo: "/inovation.jpg" },
  { id: 2, name: "Daily Wash", logo: "/dailywash.jpg" },
  { id: 3, name: "Redbull", logo: "/redbull2.png" },
  { id: 4, name: "Sahara", logo: "/sahara.jpg" },
  { id: 5, name: "Nkosh", logo: "/Nkosh.png" },
  { id: 6, name: "Dominos", logo: "/dominos.png" }
];

function FundingNinjas() {
  const titleSponsor = sponsors.find((sponsor) => sponsor.id === 5);

  return (
    <div className="w-[100vw] sm:p-28">
      <section className="relative w-full py-10 text-white px-4 sm:px-20 min-h-[80vh]">
        
        {/* Heading */}
        <div className="text-center">
          <motion.h1
            className="text-5xl font-extrabold text-yellow-400 glitch-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

        {/* Title Sponsor Section */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-cyan-400"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Title Sponsor
          </motion.h2>

          {titleSponsor && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={titleSponsor.logo}
                alt={titleSponsor.name}
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
              />
              <p className="mt-4 text-xl font-semibold text-gray-300">
                {titleSponsor.name}
              </p>
            </motion.div>
          )}

        </div>

        

        {/* Sponsors Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {sponsors
            .filter((sponsor) => sponsor.id !== 5) // Exclude title sponsor
            .map((sponsor) => (
              <motion.div
                key={sponsor.id}
                className="flex justify-center items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-full border-4 border-gray-500 shadow-lg"
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
