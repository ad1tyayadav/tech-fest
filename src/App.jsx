import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";

function App() {
  const scrollRef = useRef(null); // Reference for the scroll container
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current, // The scroll container element
      smooth: true, // Enable smooth scrolling
      smoothMobile: true, // Enable smooth scrolling on mobile
    });

    // Scroll to the top of the page whenever the route changes
    locoScroll.scrollTo(0, { duration: 0 }); // Immediately reset scroll position to top on route change

    // Cleanup on component unmount
    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, [location.pathname]); // Re-run the effect whenever the route changes

  return (
    <>
      <Navbar />
      <div ref={scrollRef} data-scroll-container className="relative min-h-screen bg-gray-900 text-white w-full">
        <ParticleBackground />
        <main className="w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
