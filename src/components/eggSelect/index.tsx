import React, { useState, useEffect } from 'react';
import { Footer } from './components/Footer';

import Navbar from './components/Navbar';
import './index.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Dropdown } from './components/Dropdown';

const Egg = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <div className="flex items-center justify-center ">
        <hr className="w-1/2" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="flex items-center justify-center ">
        <hr className="w-1/2 " />
      </div>
      <Footer />
    </div>
  );
};

export default Egg;