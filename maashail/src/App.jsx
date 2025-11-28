import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

import { useCart } from './pages/CartContext.jsx'
import Popup from './components/Popup.jsx'

import Faq from './pages/Faq.jsx'
import Shipping from './pages/Shipping.jsx'
import Returns from './pages/Returns.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

import ScrollToTop from './components/ScrollToTop.jsx'

const App = () => {
  const { showPopup, popupMessage } = useCart();

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Popup message={popupMessage} show={showPopup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App