import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#FFF4CC] min-h-screen flex items-center justify-center ">
        <h2 className="text-[#0B2342] text-3xl font-semibold">
          Your cart is empty 🛍️
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF8E1] min-h-screen flex flex-col items-center py-12 mt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[90%] md:w-[700px]">
        <h1 className="text-4xl font-bold text-[#0B2342] mb-8">Cart</h1>

        {/* Table Header */}
        <div className="grid grid-cols-4 text-[#0B2342] font-semibold border-b border-gray-300 pb-3 mb-4">
          <p className="col-span-2">Product</p>
          <p>Price</p>
          <p>Quantity</p>
        </div>

        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="grid grid-cols-4 items-center border-b border-gray-200 py-4"
          >
            <div className="col-span-2 flex items-center space-x-4">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <span className="text-[#0B2342] font-medium">{item.name} ({item.size})</span>
            </div>
            <p className="text-[#0B2342] font-medium">₹{item.price}</p>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, item.size, e.target.value)}
                className="w-12 border border-[#0B2342] rounded-md text-center text-[#0B2342]"
              />
              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="text-[#0B2342] hover:text-red-600 text-lg font-bold"
              >
                ×
              </button>
            </div>
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-between items-center mt-8 text-[#0B2342] font-semibold text-lg">
          <p>Subtotal</p>
          <p>₹{subtotal}</p>
        </div>

        <div className="flex justify-between mt-8">
          <button className="bg-[#EADCA7] text-[#0B2342] font-semibold py-2 px-6 rounded-md hover:bg-[#E5D79B] transition">
            Update Cart
          </button>
          <button className="bg-[#0B2342] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#102E5D] transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
