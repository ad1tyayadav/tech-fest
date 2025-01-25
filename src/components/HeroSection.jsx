import React from 'react';

function HeroSection() {
  return (
    <section className="mt-20 hero-section w-[100vw] h-[60vh] flex flex-col justify-center items-center text-center relative">
      <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 glitch-text">
        Robo Rumble 2.o
      </h1>
      <p className="text-xl mt-4 text-gray-300">
        17th - 18th February 2025...
      </p>
      {/* Prize Pool Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500 via-green-500 to-cyan-200 rounded-lg shadow-lg transform transition-all hover:scale-105">
  <h2 className="text-4xl font-bold text-white animate-pulse">
    Prize Pool: ₹95,000
  </h2>
</div>
      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <button
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-lg font-semibold rounded-lg"
          onClick={() => window.open('/auth')}
        >
          Register Now
        </button>
        <button
          className="px-6 py-3 bg-transparent border border-cyan-400 hover:bg-cyan-400 text-lg font-semibold rounded-lg"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1GgkCJRB_qgqnfGfcEdDZxwhrz0LAwe9q/view?usp=sharing',
              '_blank'
            )
          }
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
