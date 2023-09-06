import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ num }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SPARKLE
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                O NAMA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/danceservices"
                className="nav-links"
                onClick={closeMobileMenu}>
                VRSTE PLESOVA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/appointments"
                className="nav-links"
                onClick={closeMobileMenu}>
                ZAKAZANI TERMINI
              </Link>
            </li>
            <li className="nav-item">
              <div>
                <p className="nav-links">{num}</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
