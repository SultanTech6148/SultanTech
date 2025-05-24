import React from "react";
import { useNavigate } from "react-router-dom";
import IconChangeCarousel from "../../Component/IconChange-Carousel";
import Footer from "../../Component/Footer";
import MobImage from "../../assets/software-left-after-header.png";
import BeforeFooterimg from "../../assets/Software-Techs.png";
import Whatsappfloat from "../../Component/Whatsapp-float";

function SoftwareCard({ cards }) {
  return (
    <div className="software-card-container">
      {cards.map((card, index) => (
        <div className="software-card-box" key={index}>
          <img src={card.image} alt="icon" className="card-icon" />
          <p className="card-text">{card.text}</p>
          <p className="card-subtext">{card.subtext}</p>
        </div>
      ))}
    </div>
  );
}

function SoftwareDevelopement() {
  const navigate = useNavigate();

  const cardData = [
    { image: 'https://img.icons8.com/?size=100&id=Jggq8lzAwWZB&format=png&color=1A1A1A', text: 'CRM Software', subtext: 'Manage customer relationships' },
    { image: 'https://img.icons8.com/?size=100&id=92291&format=png&color=1A1A1A', text: 'ERP Platform', subtext: 'Integrate business processes' },
    { image: 'https://img.icons8.com/?size=100&id=pthEjNCmyg61&format=png&color=1A1A1A', text: 'Mobile App', subtext: 'On-the-go access for users' },
    { image: 'https://img.icons8.com/?size=100&id=P6ZYIof6BwLW&format=png&color=1A1A1A', text: 'E-Commerce Tool', subtext: 'Sell products online' },
    { image: 'https://img.icons8.com/?size=100&id=wdfmkgweCGDk&format=png&color=1A1A1A', text: 'Analytics Dashboard', subtext: 'Visualize key metrics' },
    { image: 'https://img.icons8.com/?size=100&id=9948&format=png&color=1A1A1A', text: 'Cloud Storage', subtext: 'Store and access files securely' },
    { image: 'https://img.icons8.com/?size=100&id=61307&format=png&color=1A1A1A', text: 'IoT Interface', subtext: 'Connect smart devices' },
    { image: 'https://img.icons8.com/?size=100&id=3EHe0F6zMIcG&format=png&color=1A1A1A', text: 'AI Assistant', subtext: 'Automate tasks with AI' },
  ];

  const codingIcons = [
    "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=22189&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=FIdVBOahSJu0&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=r5Y16PcDkoWI&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000"
  ];

  return (
    <div>
      <div id="software-page-header">
        <div id="software-page-header-second">
          <h1>Tailored Software Development Services</h1>
          <p>Scalable, high-performing software designed to meet the needs of complex operations.</p>
          <button onClick={() => navigate('/contact')}>Book A Free Demo</button>
        </div>
      </div>

      <IconChangeCarousel icons={codingIcons} interval={3000} />

      <div id="software-page-after-header-heading-container">
        <h2>Why Choose Intellectsoft as Your Custom Software Development Partner?</h2>
      </div>
      <div id="software-page-after-header-main-container">
        <div id="software-page-after-header-second-container">
          <div id="software-page-after-left">
            <p>Trusted by 35 Fortune 500 clients</p>
            <p>Backed by 250+ top IT experts</p>
            <p>Comprehensive full-cycle development services</p>
            <p>Custom-tailored solutions across industries</p>
            <p>Global presence with 9 offices in 7 countries</p>
            <p>Recognized in The Global Outsourcing 100 by IAOP</p>
            <p>ISO-certified for quality and security excellence</p>
            <p>Dedicated teams for seamless collaboration and faster results</p>
          </div>
          <div id="software-page-after-right">
            <img src={MobImage} alt="" />
          </div>
        </div>
      </div>

      <div id="software-page-after-header-heading-container">
        <h2>Our Software Services</h2>
      </div>
      <div id="sotfware-card-main-container">
        <SoftwareCard cards={cardData} />
      </div>

      <div id="software-page-before-footer-image-container">
        <img src={BeforeFooterimg} alt="" />
      </div>
      <Footer />
      <Whatsappfloat />
    </div>
  );
}

export default SoftwareDevelopement;
