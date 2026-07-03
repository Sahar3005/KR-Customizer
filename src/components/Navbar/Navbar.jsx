import { useState } from "react";
import "./Navbar.css";
import {
  FaChevronDown,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container navbar-container">

        <div className="logo">
          <img src="/logo3.png"/>
        </div>

        {/* Hamburger */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <ul className="nav-links">

            <li
              className="dropdown"
              onClick={() => setShowcaseOpen(!showcaseOpen)}
            >
              <div className="drop-title">
                Showcase
                <FaChevronDown
                  className={`dropdown-icon ${showcaseOpen ? "rotate" : ""
                    }`}
                />
              </div>

              {showcaseOpen && (
                <ul className="dropdown-menu">
                  <li>Bakery</li>
                  <li>Fashion</li>
                  <li>Jewellery</li>
                  <li>Gifting</li>
                </ul>
              )}
            </li>

            <li>
              <a href="#industry">About Us</a>
              </li>

            <li>
              <a href="#footer">Contact</a>
            </li>

          </ul>

          <button className="demo-btn">
            Book a Demo
          </button>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;