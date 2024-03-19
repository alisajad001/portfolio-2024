import React, { useState } from 'react';
import logo from '../assets/profile-img.png';

function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);

  // Navlinks
  const navLinks = [
    { text: 'Works', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md py-4 flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <img
        src={logo}
        alt="Ali Sajad profile image"
        className="rounded-md"
        width={40}
        height={40}
      />

      <nav className="space-x-4">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`text-gray-600 hover:text-gray-800 transition duration-500 text-lg font-semibold antialiased lowercase ${
              hoverIndex !== null && hoverIndex !== index ? 'text-gray-300' : ''
            }`}
          >
            {link.text}.
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
