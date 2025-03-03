import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import FerriteTransformers from './Pages/FerriteTransformers';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="fixed" />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          
           <Route path="/products/ferrite-transformers" element={<FerriteTransformers />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
