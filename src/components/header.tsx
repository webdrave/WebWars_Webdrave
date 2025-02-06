"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingNav() {
  const logos = [
    { src: "/logo/gulogo.png", alt: "Galgotias University Logo" },
    { src: "/logo/iccsai_logo.jpeg", alt: "ICCSAI Logo" },
    { src: "/logo/ieee.png", alt: "IEEE Logo" },
    { src: "/logo/gustudentchapter.png", alt: "GU Student Chapter Logo" },
    { src: "/logo/sdg.png", alt: "SDG Logo" },
    { src: "/logo/wie.png", alt: "WIE Logo" },
  ];

  const [currentLogo, setCurrentLogo] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [logos.length]); // ✅ Add 'logos.length' as a dependency

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Guidelines", link: "/guidelines" },
    { name: "ICCSAI-2023", link: "/iccsai-2023" },
    { name: "Committee", link: "/committee" },
    { name: "Registrations", link: "/registrations" },
    { name: "Submit your paper", link: "/submit-paper", special: true },
  ];

  return (
    <div className="fixed top-4 left-4 right-4 z-[5000] flex justify-center">
      <nav className="flex items-center justify-between p-4 border border-white/20 rounded-full shadow-lg max-w-5xl w-full backdrop-blur-lg bg-white/10 dark:bg-black/10">
        <div className="flex items-center space-x-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLogo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={logos[currentLogo].src}
                alt={logos[currentLogo].alt}
                width={500}
                height={500}
                className="h-8 w-auto object-fill"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                navItem.special
                  ? "bg-[#222222] text-white hover:bg-[#212121]"
                  : "text-[#222222] hover:text-gray-700"
              }`}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <span className="material-icons text-black">menu</span>{" "}
            {/* You can replace this with your preferred icon */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-transparent p-4 z-[5001] backdrop-blur-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((navItem, idx) => (
              <Link
                key={idx}
                href={navItem.link}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  navItem.special
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "text-black hover:text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
