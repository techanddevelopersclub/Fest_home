import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/NavBar/Footer";

const Root = () => {
  const [isPageFolding, setIsPageFolding] = useState(false);
  const [previousPath, setPreviousPath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    // Only trigger folding animation when leaving home page to other pages
    if (previousPath === "/" && location.pathname !== "/") {
      setIsPageFolding(true);

      // Reset after animation completes
      const timer = setTimeout(() => {
        setIsPageFolding(false);
      }, 800);

      return () => clearTimeout(timer);
    }

    // Update previous path after state changes
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  return (
    <div className="min-h-screen bg-transparent relative flex flex-col">
      {/* Cosmic Background */}
      <div className="cosmic-bg fixed inset-0 -z-10">
        <div className="stars"></div>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />

        {/* Page Content with Folding Animation */}
        <div
          className={`relative z-1 transition-all duration-700 ease-in-out flex-grow ${
            isPageFolding ? "page-folding page-shadow" : ""
          }`}
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            marginTop: "0",
          }}
        >
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Root;
