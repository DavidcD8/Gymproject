// Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../Components/Hero';
import Promotions from './Promotions';
import About from '../Components/About';
import ContactUs from '../Components/ContactUs';
import Merch from '../Components/Merch';
import Membership from '../Components/Membership';



function Main() {
  return (
    <div className="grid-container">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Promotions />
            <Membership />
            <Merch />
            <About />
          
           </>
        } />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </div>
  );
}

export default Main;
