import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FDEFC8] text-[#0A345B] py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#0A345B] mb-4">Maashail</h2>
          <p className="text-sm leading-relaxed">
            Bringing you the best products with quality and trust. 
            Shop fresh, reliable, and fast — only at Maashail.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#0A345B] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/shop" className="hover:text-blue-500">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-[#0A345B] mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-blue-500">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-blue-500">Returns</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#0A345B] mb-4">Get in Touch</h3>
          <p className="text-sm">Email: shoprahatrooh@gmail.com</p>
          <p className="text-sm">Phone: +91 9580342304</p>
          <p className="text-sm">Location: F2/16, Basement-1, Ansari Road, Daryaganj, Delhi -110002</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Maashail. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
