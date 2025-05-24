import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Logo from '../src/assets/Logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" onClick={closeMenu}> <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>
      </Link>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
        <ul className="side-menu-list">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>

          {/* Expandable Services Submenu */}
          <li className="side-submenu">
            <span onClick={() => setIsServicesOpen(!isServicesOpen)}>
              Services <span className={`arrow ${isServicesOpen ? 'rotate' : ''}`}>▾</span>
            </span>
            <ul className={`submenu-list ${isServicesOpen ? 'open' : ''}`}>
              <li><Link to="/services/software-development" onClick={closeMenu}>Software Development</Link></li>
<li><Link to="/services/web-development" onClick={closeMenu}>Web Development</Link></li>
<li><Link to="/services/seo" onClick={closeMenu}>SEO</Link></li>
<li><Link to="/services/digital-marketing" onClick={closeMenu}>Digital Marketing</Link></li>
<li><Link to="/services/graphic-designing" onClick={closeMenu}>Graphic Designing</Link></li>
<li><Link to="/services/ui-ux-design" onClick={closeMenu}>UI UX Design</Link></li>
<li><Link to="/services/data-science" onClick={closeMenu}>Data Science</Link></li>
<li><Link to="/services/game-development" onClick={closeMenu}>Game Development</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
