import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Specials from './Specials';
import Merch from './Merch';
import Contact from './Contact';
import '../App.css';

function Main() {
  return (
    <div className="grid-container">
       <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Specials />
            <Merch />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </div>
  );
}

export default Main;
