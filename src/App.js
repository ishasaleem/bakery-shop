import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <Home />
      <ProductList />

      <section
        id="contact"
        className="bg-yellow-50 py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">Email: hello@sweettreats.com</p>
        <p className="text-lg">Phone: +123 456 7890</p>
      </section>

      <footer className="bg-brown-500 p-4 text-white text-center">
        &copy; 2025 Sweet Treats Bakery
      </footer>
    </div>
  );
}

export default App;
