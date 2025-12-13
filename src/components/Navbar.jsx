import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-brown-500 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Sweet Treats
        </div>
        <div className="space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-yellow-200 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="hover:text-yellow-200 transition"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-200 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
