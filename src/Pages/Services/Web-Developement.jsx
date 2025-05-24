import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconChangeCarousel from "../../Component/IconChange-Carousel"
import Footer from '../../Component/Footer';
import Whatsappfloat from '../../Component/Whatsapp-float';

function FAQ({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="web-dev-faq">
      {items.map(({ question, answer }, index) => (
        <div key={index} className="web-dev-faq-item">
          <button
            className="web-dev-faq-question"
            onClick={() => toggleIndex(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            {question}
            <span className={`web-dev-faq-icon ${activeIndex === index ? 'open' : ''}`}>
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="web-dev-faq-answer"
            >
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function WebServiceCard({ icon, title, description, buttonText, closeMenu }) {
  return (
    <div className="web-dev-card">
      <div className="web-dev-icon">
        <span role="img" aria-label="icon">{icon}</span>
      </div>
      <h2 className="web-dev-title">{title}</h2>
      <p className="web-dev-description">{description}</p>
      <Link to="/contact" onClick={closeMenu} className="web-dev-button-link">
        <button className="web-dev-button">{buttonText}</button>
      </Link>
    </div>
  );
}

function WebDevelopement() {
  const codingIcons = [
    "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=13460&format=png&color=000000"
  ];

  // Removed onButtonClick handlers here since you want all buttons to link to contact page
  const services = [
    {
      icon: '💻',
      title: 'Custom Website Development',
      description: 'Build fully tailored websites optimized for your business goals.',
      buttonText: 'Learn More',
    },
    {
      icon: '⚙️',
      title: 'API Integration',
      description: 'Seamlessly connect your apps with third-party APIs for enhanced functionality.',
      buttonText: 'Explore APIs',
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Improve loading speed and responsiveness for better user experience.',
      buttonText: 'Optimize Now',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Create websites that look perfect on any device or screen size.',
      buttonText: 'See Examples',
    },
    {
      icon: '🔒',
      title: 'Website Security',
      description: 'Protect your website with top-notch security measures and monitoring.',
      buttonText: 'Get Protected',
    },
    {
      icon: '⚡',
      title: 'SEO Optimization',
      description: 'Boost your search rankings with smart SEO strategies tailored to your site.',
      buttonText: 'Improve SEO',
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Build secure and scalable online stores that convert visitors into customers.',
      buttonText: 'Start Selling',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Design user-friendly interfaces that enhance engagement and satisfaction.',
      buttonText: 'Discover More',
    },
  ];

  const faqItems = [
    {
      question: 'What is web development?',
      answer: 'Web development is the process of building and maintaining websites...',
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'It depends on the project complexity, but usually it takes between 4 to 12 weeks.',
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes, we offer ongoing maintenance and support packages.',
    },
  ];

  return (
    <div>
      <div id="web-dev-header-main-container">
        <div id="web-dev-header-second-container">
          <div id="web-dev-header-left">
            <h2>Web Design & Development</h2>
            <p>
              We create visually stunning, responsive websites that combine design and
              functionality to elevate your online presence.
            </p>
            <button onClick={() => window.location.href = "/contact"}>Schedule Demo</button>
          </div>
          <div id="web-dev-header-right">{/* Add your image or content here */}</div>
        </div>
      </div>

      <div id="web-card-container">
        <h1>Our Web Development Services</h1>
        <div
          id="web-card-second-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {services.map((service, index) => (
            <WebServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <IconChangeCarousel icons={codingIcons} interval={3000} />

      <div id="web-dev-image-main-container">{/* Optional graphic or image */}</div>
      <FAQ items={faqItems} />
      <Footer />
      <Whatsappfloat />
    </div>
  );
}

export default WebDevelopement;
