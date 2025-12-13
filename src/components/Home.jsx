import React from "react";
import heroImage from "../assets/images/bakery-hero.jpg"; // Make sure to add an image here

function Home() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20 bg-yellow-50">
      {/* Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-brown-700 mb-4">
          Welcome to Sweet Treats Bakery
        </h1>
        <p className="text-lg md:text-xl mb-6 text-brown-500">
          Freshly baked delights for every occasion!
        </p>
        <button className="bg-brown-700 text-white py-3 px-6 rounded-lg hover:bg-brown-800 transition duration-300">
          Order Now
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={heroImage} alt="Bakery treats" className="rounded-xl max-w-full shadow-lg" />
      </div>
    </section>
  );
}

export default Home;
