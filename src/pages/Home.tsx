import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import CompanyOverview from '../components/sections/CompanyOverview';
import ProductCategories from '../components/sections/ProductCategories';
import Applications from '../components/sections/Applications';
import Certifications from '../components/sections/Certifications';

function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <CompanyOverview />
        <ProductCategories />
        <Applications />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default Home;