import React, { useState } from 'react';
import FooterLogo from '../assets/Logo-white.png';
import { Link } from 'react-router-dom';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = {
    fb: {
      default: 'https://img.icons8.com/?size=100&id=8818&format=png&color=FFFFFF',
      hover: 'https://img.icons8.com/?size=100&id=8818&format=png&color=007bff',
    },
    insta: {
      default: 'https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=FFFFFF',
      hover: 'https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=007bff',
    },
    linkedin: {
      default: 'https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF',
      hover: 'https://img.icons8.com/?size=100&id=8808&format=png&color=007bff',
    },
    threads: {
      default: 'https://img.icons8.com/?size=100&id=AS2a6aA9BwK3&format=png&color=FFFFFF',
      hover: 'https://img.icons8.com/?size=100&id=AS2a6aA9BwK3&format=png&color=007bff',
    },
  };

  return (
    <div>
      <div id="footer-main-container">
        <div id="footer-left-container">
          <div id="footer-left-top-container">
            <div id="footer-logo-container">
              <img src={FooterLogo} alt="Footer Logo" />
            </div>
            <div id="footer-social-main-container">
              {Object.keys(icons).map((key) => (
                <a
                  href="#"
                  key={key}
                  onMouseEnter={() => setHoveredIcon(key)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <img
                    src={hoveredIcon === key ? icons[key].hover : icons[key].default}
                    alt={key}
                    title={key}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div id="footer-right-container">
          <div id="footer-right-left-container">
            <h6>Quick Links</h6>
            <Link to="/services/software-development">Software Development</Link>
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/seo">SEO</Link>
            <Link to="/services/digital-marketing">Digital Marketing</Link>
            <Link to="/services/graphic-designing">Graphic Designing</Link>
            <Link to="/services/ui-ux-design">UI UX Design</Link>
            <Link to="/services/data-science">Data Science</Link>
            <Link to="/services/game-development">Game Development</Link>
          </div>
          <div id="footer-right-right-container">
            <div id="footer-contact-container">
              <div id="footer-contact-left">
                <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF" alt="Phone-Icon" />
                <h6>+92 3462019181</h6>
              </div>
              <div id="footer-contact-right">
                <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=FFFFFF" alt="email icon" />
                <h6>sultantech.org@gmail.com</h6>
              </div>
            </div>
            {/* <h6>Terms & Condition</h6>
            <h6>Privacy Policy</h6> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
