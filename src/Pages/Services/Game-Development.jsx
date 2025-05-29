import React, { useEffect, useState } from 'react';
import Footer from "../../Component/Footer"
import { Link } from 'react-router-dom';
import Whatsappfloat from '../../Component/Whatsapp-float';



import { Helmet } from "react-helmet";

<Helmet>
  {/* Basic SEO */}
  <title>Game Development | Sultan Tech</title>
  <meta name="description" content="Sultan Tech delivers scalable and innovative web, mobile, and enterprise applications tailored to your vision. Let's build the future with code." />
  <meta name="keywords" content="Sultan Tech,@sultan,@tech,@Sultan,@Tech,game development, mobile game development, game design, indie game development, 3D game development, Unity development, Unreal Engine, game programming, multiplayer games, VR game development, game art design, game testing, game development services, game development company,@gamedevelopment, @mobilegamedevelopment, @gamedesign, @indiegamedevelopment, @3Dgamedevelopment, @Unitydevelopment, @UnrealEngine, @gameprogramming, @multiplayergames, @VRgamedevelopment, @gameartdesign, @gametesting, @gamedevelopmentservices, @gamedevelopmentcompany,#gamedevelopment, #mobilegamedevelopment, #gamedesign, #indiegamedevelopment, #3Dgamedevelopment, #Unitydevelopment, #UnrealEngine, #gameprogramming, #multiplayergames, #VRgamedevelopment, #gameartdesign, #gametesting, #gamedevelopmentservices, #gamedevelopmentcompany" />
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


function GameDevelopment() {
  const fullText = "OUR games development studio DEVELOP GAMES FOR THESE KEY PLATFORMS";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(50); // typing speed

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      }, speed / 2);
    } else if (!isDeleting && index === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div>
      <div id="game-development-header-main-container">
        <div id="game-development-header-second">
          <h1>Game <span> Development </span>Services</h1>
        </div>
      </div>
      <div id="game-dev-after-header-main">
        <div id="game-dev-after-header-second">
          <div id="game-dev-after-header-second-left">
            <h2>{text}<span className="cursor">|</span></h2>
          </div>
        <div id="game-dev-after-header-second-right">
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=99273&format=png&color=007bff" alt="Mobile" class="card-img" />
    <div class="card-content">
      <h3>Mobile</h3>
      <p>Development for Android platforms.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=100419&format=png&color=007bff" alt="iOS" class="card-img" />
    <div class="card-content">
      <h3>iOS</h3>
      <p>iPhone & iPad game solutions.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=60719&format=png&color=007bff" alt="PC" class="card-img" />
    <div class="card-content">
      <h3>PC</h3>
      <p>Games for Windows and MacOS.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=k9jE2OMmCxq3&format=png&color=007bff" alt="Console" class="card-img" />
    <div class="card-content">
      <h3>Console</h3>
      <p>PlayStation, Xbox, and more.</p>
    </div>
  </div>
</div>
        </div>
      </div>

      <div id="gamepage-create-section">
        <div id="gamepage-create-second-container">
          <h2>Let’s create something extraordinary together!</h2>
          <p>Let’s bring your vision to life and create something remarkable. Together, we can achieve the extraordinary.</p>
          <Link to="/contact">
  <button>Contact Us</button>
</Link>
        </div>
      </div>

      <Footer/>
      <Whatsappfloat/>

    </div>
  );
}

export default GameDevelopment;
