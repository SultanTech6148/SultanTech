// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import DataScience from './Pages/Services/Data-Science';
import DigitalMarketing from './Pages/Services/Digital-Marketing';
import GameDevelopment from './Pages/Services/Game-Development';
import GraphicDesigning from './Pages/Services/Graphic-Designing';
import Seo from './Pages/Services/Seo';
import SoftwareDevelopement from './Pages/Services/Software-Developement';
import UIUXDesign from './Pages/Services/UI-UX-Design';
import WebDevelopement from './Pages/Services/Web-Developement';

import Navbar from "./Navbar";

function App() {
  const location = useLocation();

  // Map routes to document titles
  const titles = {
    "/": "Sultan Tech - Your Vission Our Passion",
    "/about": "About Us - Sultan Tech",
    "/contact": "Contact - Sultan Tech",

    "/services/software-development": "Software Development - Sultan Tech",
    "/services/web-development": "Web Development - Sultan Tech",
    "/services/seo": "SEO Services - Sultan Tech",
    "/services/digital-marketing": "Digital Marketing - Sultan Tech",
    "/services/graphic-designing": "Graphic Designing - Sultan Tech",
    "/services/ui-ux-design": "UI/UX Design - Sultan Tech",
    "/services/data-science": "Data Science - Sultan Tech",
    "/services/game-development": "Game Development - Sultan Tech",
  };

  // Map routes to canonical URLs
  const canonicalUrls = {
    "/": "https://sultantech6148.github.io/SultanTech/",
    "/about": "https://sultantech6148.github.io/SultanTech/about",
    "/contact": "https://sultantech6148.github.io/SultanTech/contact",

    "/services/software-development": "https://sultantech6148.github.io/SultanTech/services/software-development",
    "/services/web-development": "https://sultantech6148.github.io/SultanTech/services/web-development",
    "/services/seo": "https://sultantech6148.github.io/SultanTech/services/seo",
    "/services/digital-marketing": "https://sultantech6148.github.io/SultanTech/services/digital-marketing",
    "/services/graphic-designing": "https://sultantech6148.github.io/SultanTech/services/graphic-designing",
    "/services/ui-ux-design": "https://sultantech6148.github.io/SultanTech/services/ui-ux-design",
    "/services/data-science": "https://sultantech6148.github.io/SultanTech/services/data-science",
    "/services/game-development": "https://sultantech6148.github.io/SultanTech/services/game-development",
  };

  // Update document title and canonical link on route change
  useEffect(() => {
    // Set page title
    const currentTitle = titles[location.pathname] || "My Website";
    document.title = currentTitle;

    // Set canonical link
    const canonicalUrl = canonicalUrls[location.pathname] || "https://yourdomain.com";

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return (
    <>
      <Navbar /> {/* Navbar should always be visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services Routes */}
        <Route path="/services/software-development" element={<SoftwareDevelopement />} />
        <Route path="/services/web-development" element={<WebDevelopement />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/data-science" element={<DataScience />} />
        <Route path="/services/game-development" element={<GameDevelopment />} />
      </Routes>
    </>
  );
}

export default App;
