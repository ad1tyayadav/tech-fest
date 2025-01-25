import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          className="text-2xl font-extrabold text-cyan-400 hover:text-cyan-300 transition"
          to="/"
        >
          RR'25
        </Link>

        {/* Hamburger Icon */}
        <button
          className="text-3xl text-cyan-400 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex md:space-x-8 items-center text-lg flex-col md:flex-row fixed md:static top-16 md:top-auto left-0 w-full md:w-auto bg-gray-900 md:bg-transparent py-6 md:py-0 shadow-lg md:shadow-none`}
        >
          <Link
            to="/events"
            className={`block md:inline-block px-4 py-2 ${
              isActive('/events')
                ? 'text-cyan-400 font-bold'
                : 'text-white hover:text-cyan-400'
            } transition`}
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/schedule"
            className={`block md:inline-block px-4 py-2 ${
              isActive('/schedule')
                ? 'text-cyan-400 font-bold'
                : 'text-white hover:text-cyan-400'
            } transition`}
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            to="/teams"
            className={`block md:inline-block px-4 py-2 ${
              isActive('/teams')
                ? 'text-cyan-400 font-bold'
                : 'text-white hover:text-cyan-400'
            } transition`}
            onClick={() => setIsOpen(false)}
          >
            Robo Rishis
          </Link>
          <Link
            to="/"
            className={`block md:inline-block px-4 py-2 ${
              isActive('/')
                ? 'text-cyan-400 font-bold'
                : 'text-white hover:text-cyan-400'
            } transition`}
            onClick={() => setIsOpen(false)}
          >
            Bug Busters
          </Link>
          <Link
            to="/funding-ninjas"
            className={`block md:inline-block px-4 py-2 ${
              isActive('/funding-ninjas')
                ? 'text-cyan-400 font-bold'
                : 'text-white hover:text-cyan-400'
            } transition`}
            onClick={() => setIsOpen(false)}
          >
            Funding Ninjas
          </Link>
        </div>

        {/* Right-Side Button */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link
            to="/auth"
            className="inline-block px-6 py-2 text-black bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
