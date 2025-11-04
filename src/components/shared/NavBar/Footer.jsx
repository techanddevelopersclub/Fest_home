import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="footer footer-center p-8 text-gray-300 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <aside className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl text-rose-400">©</span>
              <span className="font-bold text-2xl text-white">2025 Cieszyc</span>
            </div>
            <p className="text-base text-gray-400 font-body font-light">All rights reserved</p>
          </div>
        </aside>

        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-base text-gray-400">
          <a href="https://www.instagram.com/cieszyc_ihet/" className="hover:text-purple-400 transition-colors duration-200 font-body font-light">
  <span className="flex items-center gap-2">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
    </svg>
    Instagram
  </span>
</a>

            {/* <a href="#" className="hover:text-rose-400 transition-colors duration-200 font-medium">Privacy Policy</a> */}
            {/* <a href="#" className="hover:text-rose-400 transition-colors duration-200 font-medium">Terms of Service</a> */}
            <Link to="/contact-us" className="hover:text-purple-400 transition-colors duration-200 font-medium font-display">Contact Us</Link>
          </div>
        </div>

        <div className="mt-6 text-center text-base text-gray-500">
          <p className="font-body font-light">Powered by Innovation • Crafted with Passion</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
