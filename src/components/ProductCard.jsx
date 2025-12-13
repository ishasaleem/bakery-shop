import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{product.name}</h2>
        <p className="text-gray-700 mt-2">${product.price}</p>
      </div>
    </div>
  );
}
