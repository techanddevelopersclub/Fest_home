import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="footer footer-center p-8 text-gray-300 border-t border-gray-700/50">
        <aside className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl text-rose-400">©</span>
              <span className="font-bold text-2xl text-white">2025 Cieszyc</span>
            </div>
            <p className="text-base text-gray-400 font-medium">All rights reserved</p>
          </div>
        </aside>

        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-base text-gray-400">
            <a href="#" className="hover:text-rose-400 transition-colors duration-200 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </span>
            </a>
            <a href="#" className="hover:text-rose-400 transition-colors duration-200 font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-rose-400 transition-colors duration-200 font-medium">Terms of Service</a>
            <a href="#" className="hover:text-rose-400 transition-colors duration-200 font-medium">Contact Us</a>
          </div>
        </div>

        <div className="mt-6 text-center text-base text-gray-500">
          <p className="font-medium">Powered by Innovation • Crafted with Passion</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
