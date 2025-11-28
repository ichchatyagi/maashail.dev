import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logonew1.png"; 
import Lotus from "../assets/lotus.png"; 
import Image from "../assets/img1-removebg-preview.png";
import Image2 from "../assets/img2-removebg-preview.png";
import Image3 from "../assets/img3-removebg-preview.png";
import Image4 from "../assets/img4-removebg-preview.png";
import Image5 from "../assets/img5-removebg-preview.png";
import Marquee from "react-fast-marquee";

import { products } from "../data/products";
import { useCart } from "./CartContext";

const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = Object.values(products).slice(0, 3);

  return (
    <div className="bg-[#FFF4CC] text-gray-800 mt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b2545] mb-4">
           Pure Ayurveda. True Relief. <span className="text-[#0b2545]"></span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
          Rahat Rooh Ayurvedic Oil — Pure Relief, Naturally.<br />
          A powerful blend of Ayurvedic herbs that soothes pain, relaxes muscles, and restores balance — bringing comfort with every drop.<br/>

          🛒 Shop Now & Experience True Ayurvedic Healing.
          </p>
          <Link
            to="/shop"
            className="bg-[#d62828] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#bb2525] transition-all"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="MaaShail Logo"
            className="w-64 md:w-80"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-12 bg-[#fffaf0]">
        <h2 className="text-3xl font-bold text-[#0b2545] mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md text-center p-4 hover:shadow-xl transition-all"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="mx-auto mb-4 rounded-md h-48 w-full object-cover"
                />
                <h3 className="text-lg font-semibold text-[#0b2545]">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-600 mb-3">₹{product.price}</p>
              <button
                onClick={() => addToCart({ ...product, quantity: 1, size: "M" })}
                className="bg-[#0b2545] text-white px-5 py-2 rounded-md hover:bg-[#1d3557] transition-all"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text */}
        <div>
          <h3 className="text-3xl font-bold text-[#0b2545] mb-4">✨ Rahat Rooh — A Journey of Ayurvedic Purity Since 1881</h3>
          <p className="text-gray-700">
            For over 140 years, Rahat Rooh has been a trusted name in Ayurvedic care — blending heritage, purity, and the healing touch of nature.<br/>
            Each drop is infused with time-honoured herbs that nourish, strengthen, and rejuvenate, leaving your hair radiant and your senses refreshed.<br/>
Rooted in tradition, perfected through generations — Rahat Rooh is more than oil, it’s a legacy of natural beauty and wellness.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img src={Lotus} alt="Lotus" className="w-48 md:w-auto" />
        </div>
      </section>
      
      <Marquee>
   <img src={Image} alt="Image 1" className="inline-block w-28 mr-4" />
   <img src={Image2} alt="Image 2" className="inline-block w-28 mr-4" />
   <img src={Image3} alt="Image 3" className="inline-block w-28 mr-4" />
   <img src={Image4} alt="Image 4" className="inline-block w-28 mr-4" />
   <img src={Image5} alt="Image 5" className="inline-block w-28 mr-4" />
</Marquee>

    </div>
    
  );
};

export default Home;
