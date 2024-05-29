import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../Components/Contact';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={
          <>
           
          </>
        } />
       <Route path="/contact" element={<Contact />} />

      </Routes>
    </main>
  );
}

export default Main;
