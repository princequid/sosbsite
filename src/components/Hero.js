import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to Our Community</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">Join us in faith, fellowship, and service. Discover events, sermons, and ways to connect.</p>
        <a href="#events" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">Learn More</a>
      </div>
      {/* Animation keyframes */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero; 