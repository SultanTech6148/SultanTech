// src/App.jsx
import { Routes, Route } from "react-router-dom";

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
