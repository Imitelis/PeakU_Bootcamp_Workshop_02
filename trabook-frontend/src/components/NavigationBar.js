import { useLocation } from "react-router-dom";
import logo from "../misc/logo.png";

const NavigationBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isPlans = location.pathname === "/plans";
  const isTrips = location.pathname === "/trips";
  const isBlog = location.pathname === "/blog";

  return (
    <div className="navigation-bar navbar navbar-expand-md navbar-white bg-orange-50 h-20 flex items-center justify-between fixed top-0 z-10 w-full">
      <div className="navbar-brand ml-36 w-30 h-auto" id="logo">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            title="Trabook"
            className="w-full h-auto"
          />
        </a>
      </div>
      <nav id="navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-2">
            <a
              className={`nav-link text-gray-500 ${
                isHome
                  ? "text-orange-500 hover:text-orange-400"
                  : "text-gray-500 hover:text-orange-500"
              }`}
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item px-2">
            <a
              className={`nav-link text-gray-500 ${
                isAbout
                  ? "text-orange-500 hover:text-orange-400"
                  : "text-gray-500 hover:text-orange-500"
              }`}
              href="/about"
            >
              About
            </a>
          </li>
          <li className="nav-item px-2">
            <a
              className={`nav-link text-gray-500 ${
                isPlans
                  ? "text-orange-500 hover:text-orange-400"
                  : "text-gray-500 hover:text-orange-500"
              }`}
              href="/plans"
            >
              Destination
            </a>
          </li>
          <li className="nav-item px-2">
            <a
              className={`nav-link text-gray-500 ${
                isTrips
                  ? "text-orange-500 hover:text-orange-400"
                  : "text-gray-500 hover:text-orange-500"
              }`}
              href="/trips"
            >
              Tour
            </a>
          </li>
          <li className="nav-item px-2">
            <a
              className={`nav-link text-gray-500 ${
                isBlog
                  ? "text-orange-500 hover:text-orange-400"
                  : "text-gray-500 hover:text-orange-500"
              }`}
              href="/blog"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-login mr-36">
        <button className="text-md px-10 text-orange-500 hover:text-orange-400">
          Login
        </button>
        <button className="text-md px-10 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
