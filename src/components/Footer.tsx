import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-4 py-10">
      <div className="container mx-auto max-w-7xl">
        <div className="border-y border-t border-gray-700 py-10">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            {/* Logos */}
            <div className="flex flex-row w-full md:w-1/2 items-center gap-6 md:gap-14 justify-center mb-6 md:mb-0">
              <img
                src="/logo/fGu.png"
                alt="Logo 1"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              />
              <img
                src="/logo/fIcc.png"
                alt="Logo 2"
                className="w-22 h-24 md:w-30 md:h-32"
              />
            </div>

            <div className="w-full md:w-1/2 px-4 md:px-28 flex flex-col gap-6 md:gap-10 items-center md:items-start">
              {/* Address */}
              <div className="flex items-start gap-2 mb-4 md:mb-0">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-xs md:text-sm ">
                  Plot No. 2, Yamuna Expy, opposite Buddha International Circuit, 
                  Sector 17A, Greater Noida, Uttar Pradesh 201301
                </p>
              </div>

              {/* Social Media */}
              <div className="flex flex-col md:flex-row items-center md:justify-start gap-4 md:gap-6">
                <p className="text-sm">Follow Us</p>
                <div className="flex gap-4 md:gap-6">
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
            <a href="#" className="text-sm hover:text-blue-400 transition-colors">
              ABOUT US
            </a>
            <a href="#" className="text-sm hover:text-blue-400 transition-colors">
              EVENTS
            </a>
            <a href="#" className="text-sm hover:text-blue-400 transition-colors">
              GALLERY
            </a>
            <a href="#" className="text-sm hover:text-blue-400 transition-colors">
              PROGRAM
            </a>
            <a href="#" className="text-sm hover:text-blue-400 transition-colors">
              IEEE U.P.
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-400">© 2018-2024 ICCSAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;