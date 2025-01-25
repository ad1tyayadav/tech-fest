import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/ad1tyayadav/tech-fest/contributors")
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => console.error("Error fetching contributors:", error));
  }, []);

  return (
    <section className="w-[100vw] min-h-screen py-12 mt-20 px-4 sm:px-8 text-gray-200">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 text-center mb-12">
          Our <span className="text-yellow-500 glitch-text text-4xl sm:text-7xl">Contributors</span>
        </h2>

        {/* Contributors Grid */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-500 hover:to-blue-900 rounded-xl p-6 w-full max-w-[300px] shadow-lg transform transition-transform hover:scale-105"
            >
              {/* Contributor Avatar */}
              <div className="relative w-36 h-36 mx-auto rounded-full border-4 border-cyan-400">
                <img
                  src={contributor.avatar_url}
                  alt={`${contributor.login}'s avatar`}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              {/* Contributor Name */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">{contributor.login}</h3>
                <p className="text-lg text-gray-300">
                  Contributions: {contributor.contributions}
                </p>
              </div>

              {/* View Profile Button */}
              <div className="mt-4 text-center">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md transition"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contributors;
