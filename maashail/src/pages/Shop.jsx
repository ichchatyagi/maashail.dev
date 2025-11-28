import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

import { products } from "../data/products";

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#FFF4CC] min-h-screen mt-16  py-12">
      <div className="text-center text-[#0B2342] font-bold text-4xl mb-10">
        Shop Products
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {Object.values(products).map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-6 w-64 text-center"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-[#0B2342] font-semibold text-lg">
                {product.name}
              </h2>
            </Link>
            <p className="text-gray-600 mb-2">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#0B2342] text-white py-2 px-4 rounded-md hover:bg-[#102E5D] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
