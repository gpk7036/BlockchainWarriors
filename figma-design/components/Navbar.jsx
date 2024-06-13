"use client"
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative w-full lg:bg-[#191818] text-white rounded-xl flex items-center p-4 md:h-[50px]">
      <div className="flex items-center w-full">
        {/* Hamburger Icon (Visible on smaller screens) */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 mt-2 bg-[#191818] w-full md:w-auto md:static md:flex md:items-center md:gap-6 rounded-xl md:mt-0 md:text-sm`}
        >
          <p className="p-4 md:p-1 lg:p-2">Home</p>
          <p className="p-4 md:p-1 lg:p-2">100</p>
          <p className="p-4 md:p-1 lg:p-2">Tokenomics</p>
          <p className="p-4 md:p-1 lg:p-2">Roadmap</p>
          <p className="p-4 md:p-1 lg:p-2 flex items-center gap-2">
            Coming Soon
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="15"
                height="15"
              >
                <path
                  fill="#fafafa"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
}
