import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import TechBoxIMG1 from '../assets/techbox1.png';
import TechBoxIMG2 from '../assets/techbox2.png';
import TechBoxIMG3 from '../assets/techbox3.png';
import TechBoxIMG4 from '../assets/techbox4.png';

const topBoxes = [
  { id: 0, title: 'Handle Product Complexity' },
  { id: 1, title: 'Reduce Expenses' },
  { id: 2, title: 'Growth through Innovation' },
  { id: 3, title: 'Transform the customer experience' }
];

const bottomSlides = [
  {
    image: TechBoxIMG1,
    heading: 'Handle Product Complexity',
    text: 'Managing product complexity involves addressing factors like technical challenges, operational issues, and market demands. This can include integrating various technologies, coordinating teams, and responding to customer needs. By simplifying processes, eliminating unnecessary features, and focusing on core functions, businesses can reduce complexity while maintaining product effectiveness. Continuously prioritizing essential elements ensures the product stays scalable and aligned with market requirements.',
    buttonText: 'Contact Us'
  },
  {
    image: TechBoxIMG2,
    heading: 'Reduce Expenses',
    text: 'Reducing expenses involves identifying areas where costs can be minimized without compromising product quality or operational efficiency. This can include streamlining processes, eliminating waste, negotiating better deals with suppliers, and optimizing resource allocation. By carefully assessing spending patterns and focusing on cost-effective strategies, businesses can achieve significant savings while maintaining their core operations and value propositions. Effective expense reduction ensures long-term sustainability and profitability.',
    buttonText: 'Contact Us'
  },
  {
    image: TechBoxIMG3,
    heading: 'Growth through Innovation',
    text: 'Growth through innovation involves leveraging new ideas, technologies, and strategies to drive expansion and improve performance. By fostering a culture of creativity and continuously exploring novel solutions, businesses can open up new opportunities, enhance their offerings, and stay ahead of competitors. This approach not only fuels business growth but also enables companies to adapt to changing market demands and deliver greater value to customers.',
    buttonText: 'Contact Us'
  },
  {
    image: TechBoxIMG4,
    heading: 'Transform the customer experience',
    text: 'Transforming the customer experience involves rethinking and improving every interaction a customer has with a brand, from the initial contact to post-purchase support. By enhancing touchpoints, personalizing services, and ensuring seamless communication, businesses can create a more satisfying and memorable experience for their customers. This approach not only boosts customer satisfaction but also fosters loyalty and encourages repeat business.',
    buttonText: 'Contact Us'
  }
];

function HomeManage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const startAutoRotate = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bottomSlides.length);
    }, 10000);
  };

  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleBoxClick = (index) => {
    setCurrentSlide(index);
    startAutoRotate(); // Reset timer on click
  };

  const getButtonColor = (index) => {
    switch (index) {
      case 0: return '#133b84';  
      case 1: return '#235593';
      case 2: return '#0551b0';  
      case 3: return '#2780ee';
      default: return '#007bff';
    }
  };

  return (
    <div id="home-manage-main-container">
      {/* Top Section */}
      <div className="top-boxes">
        {topBoxes.map((box, index) => (
          <div
            key={box.id}
            className={`tech-box ${currentSlide === index ? `active-box box-${index}` : ''}`}
            onClick={() => handleBoxClick(index)}
          >
            <h3>{box.title}</h3>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="content-left">
          <h2>{bottomSlides[currentSlide].heading}</h2>
          <p>{bottomSlides[currentSlide].text}</p>
          <Link 
            to="/contact" 
            className="contact-button"
            style={{
              backgroundColor: getButtonColor(currentSlide),
              textDecoration: 'none',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '4px',
              display: 'inline-block',
              marginTop: '10px'
            }}
          >
            {bottomSlides[currentSlide].buttonText}
          </Link>
        </div>
        <div className="content-right">
          <img src={bottomSlides[currentSlide].image} alt="Slide" />
        </div>
      </div>
    </div>
  );
}

export default HomeManage;
