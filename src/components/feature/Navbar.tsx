import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://lsaapi-uploads.s3.amazonaws.com/1353/1750175758.png"
            alt="DIYAI Logo"
            className="h-8"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-gray-700 hover:text-primary font-medium cursor-pointer whitespace-nowrap"
          >
            FAQ
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://app.diyai.ai/login"
            className="text-primary font-medium hover:text-primary/80 whitespace-nowrap cursor-pointer"
          >
            Sign In
          </a>
          <a
            href="https://app.diyai.ai/signup"
            className="bg-primary text-white px-4 py-2 rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Set Up Your FREE Agent
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;