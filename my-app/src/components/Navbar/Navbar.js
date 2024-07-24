import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { title: 'About Us', link: '/about' },
    { title: 'Community', link: '/community' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' },
    { title: 'Other', link: '/other' }
  ];

  const NAV_CLASS = "bg-black text-white p-4 flex justify-between items-center glow-navbar";
  const GROUP_CLASS = "relative group";
  const CENTER_CONTAINER_CLASS = "hidden md:flex justify-center items-center space-x-4 ml-9"; // Adjusted for desktop view

  return (
    <nav className={NAV_CLASS}>
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-sm logo ml-5">X-ACK</div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50 relative">
          {isOpen ? (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Centered Navigation Links */}
      <div className={CENTER_CONTAINER_CLASS}>
        {NAV_LINKS.map((link, index) => (
          <div key={index} className={GROUP_CLASS}>
            <a href={link.link} className="glow-nav-link">
              {link.title}
              <span>
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.01221 0.101562L5.2251 3.88867L1.42432 0.101562L0.166504 1.35938L5.21143 6.66406L10.27 1.35938L9.01221 0.101562Z" fill="white"/>
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Right Section for Log in/Sign up */}
      <div className="hidden md:flex space-x-4 mr-5">
        <a href="#" className="login-link">Log in</a>
        <button className="bg-black text-white py-2 px-4 rounded-full glow-button sign-up-button">
          Sign up
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center space-y-6 md:hidden">
          {NAV_LINKS.map((link, index) => (
            <a key={index} href={link.link} onClick={() => setIsOpen(false)} className="text-white text-2xl">
              {link.title}
            </a>
          ))}
          <a href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl">
            Log in
          </a>
          <button className="bg-black text-white py-2 px-4 rounded-full glow-button" onClick={() => setIsOpen(false)}>
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}
