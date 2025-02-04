import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: "Raju Ranjan Yadav",
      role: "Lead-Organiser",
      image: "./raju.jpeg",
      linkedin: "https://www.linkedin.com/in/raju-ranjan-yadav-078222256/",
      github: "https://github.com/milliondreamsblog",
    },
    {
      name: "Devanshu Verma",
      role: "Team-Organiser",
      image: "./devanshu.jpeg", // Replace with actual image URLs
      linkedin: "https://www.linkedin.com/in/devanshu-verma-1487b026a/",
      github: "https://github.com/milliondreamsblog",
    },
    {
      name: "Aditya Yadav",
      role: "Team-Dev",
      image: "https://avatars.githubusercontent.com/u/152635984?v=4", // Replace with actual image URLs
      linkedin: "https://www.linkedin.com/in/aditya-yadav-39b20529a/",
      github: "https://github.com/adityayadav",
    },
    {
      name: "Akshat Darshi",
      role: "Tech-Lead",
      image: "./akshat.jpeg",
      linkedin: "https://www.linkedin.com/in/akshat-darshi/",
      github: "https://github.com/milliondreamsblog",
    },
    {
      name: "Ayush Kanoujiya",
      role: "Event-Lead",
      image: "./ayush.jpeg",
      linkedin: "https://www.linkedin.com/in/ayush-kanoujiya-50a1b825a/",
      github: "https://github.com/milliondreamsblog",
    },
  ];

  return (
    <div className="w-[100vw] min-h-screen to-black text-gray-200 py-12 px-4 sm:px-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl mt-20 sm:text-5xl font-extrabold text-cyan-400 text-center mb-12">
          Meet the <span className="text-red-500 glitch-text">Team</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-500 hover:to-blue-900 rounded-xl p-6 w-full max-w-[300px] shadow-lg transform transition-transform hover:scale-105"
            >
              {/* Profile Picture */}
              <div className="relative w-36 h-36 mx-auto rounded-full border-4 border-cyan-400">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg text-gray-300">{member.role}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-4">
                <Link
                  to={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  <FaLinkedin size={28} />
                </Link>
                <Link
                  to={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  <FaGithub size={28} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
