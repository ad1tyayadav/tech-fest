import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function JoinUS() {
  const [showContact, setShowContact] = useState(false);

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
            JOIN US
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get all your doubts cleared, receive expert guidance, and access the support you need to build your own bot!
          </motion.p>
        </div>


        {/* Buttons */}
        <motion.div
          className="mt-16 flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            className="px-8 py-3 text-lg font-semibold text-black bg-cyan-500 rounded-full hover:bg-cyan-400 transition-transform transform hover:scale-105"
            to="https://chat.whatsapp.com/E8eCWNwATCxJg6ABYQXkrB"
          >
            Whatsapp Community
          </Link>

          {/* Contact Button */}
          <div className="relative">
            <button
              className="px-8 py-3 text-lg font-semibold text-black bg-cyan-500 rounded-full hover:bg-cyan-400 transition-transform transform hover:scale-105"
              onClick={() => setShowContact(!showContact)}
            >
              Contact
            </button>
            {showContact && (
              <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg">
                <a
                  href="tel:+919876543210"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  📞 +91 98765 43210
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="block px-4 py-2 hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp Chat
                </a>
              </div>
            )}
          </div>

          <Link
            className="px-8 py-3 text-lg font-semibold text-black bg-cyan-500 rounded-full hover:bg-cyan-400 transition-transform transform hover:scale-105"
            to="https://www.instagram.com/robo.rumble_2.o/"
          >
            Instagram
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default JoinUS;
