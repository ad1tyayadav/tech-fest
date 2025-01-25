import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";

function App() {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
    });

    // Scroll to the top of the page whenever the route changes
    locoScroll.scrollTo(0, { duration: 0 });

    // Cleanup on component unmount
    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, [location.pathname]); // Re-run the effect whenever the route changes

  return (
    <>
      <Navbar />
      <div ref={scrollRef} data-scroll-container className="min-h-screen text-white w-full">
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
