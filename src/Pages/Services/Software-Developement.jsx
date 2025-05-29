import React from "react";
import { useNavigate } from "react-router-dom";
import IconChangeCarousel from "../../Component/IconChange-Carousel";
import Footer from "../../Component/Footer";
import MobImage from "../../assets/software-left-after-header.png";
import BeforeFooterimg from "../../assets/Software-Techs.png";
import Whatsappfloat from "../../Component/Whatsapp-float";


import { Helmet } from "react-helmet";

<Helmet>
  {/* Basic SEO */}
  <title>Software Development | Sultan Tech</title>
  <meta name="description" content="Sultan Tech delivers scalable and innovative web, mobile, and enterprise applications tailored to your vision. Let's build the future with code." />
  <meta name="keywords" content="Sultan Tech,@sultan,@tech,@Sultan,@Tech,software development, custom software, software solutions, software engineering, application development, software consulting, enterprise software, software design, software maintenance, agile development, software services, cloud software, software product development, software outsourcing, software testing,#softwaredevelopment, #customsoftware, #softwaresolutions, #softwareengineering, #applicationdevelopment, #softwareconsulting, #enterprisesoftware, #softwaredesign, #softwaremaintenance, #agiledevelopment, #softwareservices, #cloudsoftware, #softwareproductdevelopment, #softwareoutsourcing, #softwaretesting,@softwaredevelopment, @customsoftware, @softwaresolutions, @softwareengineering, @applicationdevelopment, @softwareconsulting, @enterprisesoftware, @softwaredesign, @softwaremaintenance, @agiledevelopment, @softwareservices, @cloudsoftware, @softwareproductdevelopment, @softwareoutsourcing, @softwaretesting" />
  <meta name="author" content="Sultan Tech" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="rating" content="General" />
  <meta name="distribution" content="Global" />
  <meta name="revisit-after" content="7 days" />
  <meta name="theme-color" content="#0D0D0D" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="language" content="English" />

  {/* Canonical URL */}
  <link rel="canonical" href="" />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content="Sultan Tech | Your Vision Our Passion" />
  <meta property="og:description" content="Smart, scalable software—from concept to launch. Discover how Sultan Tech brings your digital ideas to life." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="" />
  <meta property="og:image" content="" />
  <meta property="og:site_name" content="Sultan Tech" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sultan Tech | Your Vision Our Passion" />
  <meta name="twitter:description" content="We build modern web and mobile solutions. Contact Sultan Tech today." />
  <meta name="twitter:image" content="" />
  <meta name="twitter:site" content="@SultanTech" />
  <meta name="twitter:creator" content="@SultanTech" />

  {/* Apple-specific */}
  <meta name="apple-mobile-web-app-title" content="Sultan Tech" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-touch-icon" content="" />
  <link rel="apple-touch-icon" sizes="180x180" href="" />

  {/* Favicon */}
  <link rel="icon" href="" />
  <link rel="shortcut icon" href="" />
  <script type="application/ld+json">
    {`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "url/#organization",
  "name": "Sultan Tech",
  "url": "",
  "logo": {
    "@type": "ImageObject",
    "url": "url/images/logo.webp"
  },
  "email": "contact@sultantech.com",
  "sameAs": [
  social links
  ]
},
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "url/#website",
  "url": "",
  "name": "Sultan Tech",
  "publisher": {
    "@id": "url/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "url/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-US"
},
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "url/#home",
  "url": "",
  "name": "Sultan Tech - Your Vision Our Passion",
  "isPartOf": {
    "@id": "url/#website"
  },
  "about": {
    "@id": "url/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "@id": "url/images/hero.webp",
    "url": "url/images/hero.webp",
    "caption": "Sultan Tech software development services"
  },
  "author": {
    "@type": "Person",
    "@id": "url/#founder",
    "name": "Your Name",
    "url": "url/founder"
  },
  "datePublished": "2024-12-28T00:00:00+00:00",
  "dateModified": "2024-12-28T00:00:00+00:00",
  "description": "Sultan Tech delivers scalable and innovative software solutions using the latest in web, mobile, and enterprise technologies to bring your vision to life.",
  "inLanguage": "en-US"
}
    `}
  </script>
</Helmet>



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
