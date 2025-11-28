import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import { products } from "../data/products";

const reviews = [
  {
    author: "Rajesh K.",
    rating: 5,
    text: "The product quality is excellent and the delivery was super fast. Highly recommend!",
  },
  {
    author: "Priya S.",
    rating: 4,
    text: "Great value for money. The images you sent were clear and helped me decide quickly.",
  },
];

const faq = [
  {
    question: "Is this product suitable for all skin types?",
    answer: "Yes, our oil is made from natural ingredients and is generally safe for all skin types. However, we recommend a patch test before full use.",
  },
  {
    question: "How often can I use this oil?",
    answer: "You can use it daily or as needed for pain relief and relaxation.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState("500ml");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setLoading(true);
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImage(foundProduct.images[0]);
      setPrice(foundProduct.price);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (product) {
      if (selectedSize === "1ltr") {
        setPrice(product.price * 2);
      } else {
        setPrice(product.price);
      }
    }
  }, [selectedSize, product]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, size: selectedSize, price });
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const recommendedProducts = products.filter(p => p.id !== product.id);
  const frequentlyBought = products.filter(p => p.id !== product.id);

  const totalFrequentlyBoughtPrice = frequentlyBought.reduce(
    (acc, item) => acc + item.price,
    product.price
  );

  return (
    <div className="bg-[#FFF4CC] min-h-screen py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Product Images & Basic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="flex mt-4 space-x-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                    selectedImage === img ? "border-[#0B2342]" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="text-[#0B2342]">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold text-gray-800 mb-6">
              ₹{price}
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size:</h3>
              <div className="flex space-x-2">
                {["500ml", "1ltr"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md px-4 py-2 transition ${
                      selectedSize === size
                        ? "bg-[#0B2342] text-white"
                        : "border-gray-400 hover:bg-[#0B2342] hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center mb-6">
              <h3 className="font-semibold mr-4">Quantity:</h3>
              <div className="flex items-center">
                <button onClick={handleDecrement} className="border rounded-md px-3 py-1">-</button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 border-t border-b text-center"
                />
                <button onClick={handleIncrement} className="border rounded-md px-3 py-1">+</button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#0B2342] text-white py-3 px-8 rounded-lg text-lg hover:bg-[#102E5D] transition w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Description, Details, Reviews */}
        <div className="mt-16">
          <div className="border-b border-gray-300 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 text-lg font-medium ${
                  activeTab === "description"
                    ? "border-b-2 border-[#0B2342] text-[#0B2342]"
                    : "text-gray-500"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 text-lg font-medium ${
                  activeTab === "reviews"
                    ? "border-b-2 border-[#0B2342] text-[#0B2342]"
                    : "text-gray-500"
                }`}
              >
                Reviews ({reviews.length})
              </button>
            </nav>
          </div>

          {activeTab === "description" && (
            <div className="space-y-8">
              <p className="text-gray-700">{product.description}</p>
              <div>
                <h3 className="text-xl font-semibold text-[#0B2342] mb-2">Benefits</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B2342] mb-2">Uses</h3>
                <p className="text-gray-700">{product.uses}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B2342] mb-2">Ingredients</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-8">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) =>
                        i < review.rating ? (
                          <FaStar key={i} className="text-yellow-500" />
                        ) : (
                          <FaRegStar key={i} className="text-gray-400" />
                        )
                      )}
                    </div>
                    <p className="ml-4 font-bold text-[#0B2342]">{review.author}</p>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B2342] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-lg text-[#0B2342]">{item.question}</h3>
                <p className="text-gray-700 mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Bought Together */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#0B2342] mb-6 text-center">
            Frequently Bought Together
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <img src={product.images[0]} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
              <p className="text-2xl mx-4">+</p>
            </div>
            {frequentlyBought.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <Link to={`/product/${item.id}`}>
                  <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                </Link>
                {index < frequentlyBought.length - 1 && <p className="text-2xl mx-4">+</p>}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-xl font-semibold text-gray-800">
              Total Price: ₹{totalFrequentlyBoughtPrice}
            </p>
            <button className="mt-4 bg-[#0B2342] text-white py-2 px-6 rounded-lg hover:bg-[#102E5D] transition">
              Add All to Cart
            </button>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B2342] mb-6">
            Recommended Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedProducts.map((recProduct) => (
              <div
                key={recProduct.id}
                className="bg-white shadow-lg rounded-xl p-4 text-center"
              >
                <Link to={`/product/${recProduct.id}`}>
                  <img
                    src={recProduct.images[0]}
                    alt={recProduct.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-[#0B2342] font-semibold">{recProduct.name}</h3>
                </Link>
                <p className="text-gray-600">₹{recProduct.price}</p>
                <button className="mt-2 bg-[#0B2342] text-white py-2 px-4 rounded-md hover:bg-[#102E5D] transition text-sm">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
