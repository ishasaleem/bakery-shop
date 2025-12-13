import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-brown-500 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">Sweet Treats Bakery</div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#products" className="hover:text-yellow-300">Products</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
