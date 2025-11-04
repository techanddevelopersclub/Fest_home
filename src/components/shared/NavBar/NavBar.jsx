import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../../assets/video/logo.png";
import Loading from "../../Loading/Loading";

const NavBar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  if (loading) {
    return <> <Loading /> </>
  }
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg ${
              isActive ? 'text-yellow-400 font-semibold bg-white/5' : ''
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <a 
          href={import.meta.env.VITE_MAIN_SITE_URL || "#"}
          className="text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg cursor-pointer"
        >
          Events
        </a>
      </li>
      <li>
        <NavLink 
          to="/sponsors"
          className={({ isActive }) => 
            `text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg ${
              isActive ? 'text-yellow-400 font-semibold bg-white/5' : ''
            }`
          }
        >
          Sponsors
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/gallery"
          className={({ isActive }) => 
            `text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg ${
              isActive ? 'text-yellow-400 font-semibold bg-white/5' : ''
            }`
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about-us"
          className={({ isActive }) => 
            `text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg ${
              isActive ? 'text-yellow-400 font-semibold bg-white/5' : ''
            }`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/team"
          className={({ isActive }) => 
            `text-white/90 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg ${
              isActive ? 'text-yellow-400 font-semibold bg-white/5' : ''
            }`
          }
        >
          Team
        </NavLink>
      </li>
    </>
    
  );

  return (
    <div>
      <nav className="relative z-20 bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-md border-b border-white/10">
        <div className="navbar max-w-screen-xl mx-auto min-h-0 h-16 md:h-20 py-2 px-4 md:px-6">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden text-white hover:bg-white/10">
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link className="flex items-center" to="/">
              <img className="w-16 h-16 md:w-20 md:h-20 object-contain ml-2 md:ml-4" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex gap-2">
            <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={-1}
                    className="btn btn-ghost btn-circle avatar hover:bg-white/10"
                  >
                    <div className="w-10 h-10 rounded-full ring-2 ring-white/20">
                      <img src={user.photoURL} alt="User" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-3 shadow-lg menu menu-sm dropdown-content bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl w-56"
                  >
                    <li>
                      <a className="justify-between mb-3 items-center hover:bg-white/5">
                        <p className="text-lg font-display font-semibold text-white">
                          {user.displayName}
                        </p>
                      </a>
                    </li>
                    <li>
                      <Link
                        onClick={handleLogOut}
                        className="font-display text-sm text-white bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 rounded-lg px-4 py-2 text-center transition-all duration-300"
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
