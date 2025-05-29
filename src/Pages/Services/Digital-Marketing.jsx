import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer";
import Whatsappfloat from "../../Component/Whatsapp-float";



import { Helmet } from "react-helmet";

<Helmet>
  {/* Basic SEO */}
  <title>Digital Marketing | Sultan Tech</title>
  <meta name="description" content="Sultan Tech delivers scalable and innovative web, mobile, and enterprise applications tailored to your vision. Let's build the future with code." />
  <meta name="keywords" content="Sultan Tech,@sultan,@tech,@Sultan,@Tech,digital marketing, online marketing, social media marketing, email marketing, PPC advertising, content marketing, SEO services, SEM, marketing strategy, digital advertising, influencer marketing, marketing automation, brand awareness, conversion optimization, digital campaigns,@digitalmarketing, @onlinemarketing, @socialmediamarketing, @emailmarketing, @PPCadvertising, @contentmarketing, @SEOservices, @SEM, @marketingstrategy, @digitaladvertising, @influencermarketing, @marketingautomation, @brandawareness, @conversionoptimization, @digitalcampaigns,#digitalmarketing, #onlinemarketing, #socialmediamarketing, #emailmarketing, #PPCadvertising, #contentmarketing, #SEOservices, #SEM, #marketingstrategy, #digitaladvertising, #influencermarketing, #marketingautomation, #brandawareness, #conversionoptimization, #digitalcampaigns" />
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



function DigitalServiceCard({ title, description, image, buttonText = "Learn More" }) {
  return (
    <div className="digital-service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/contact">
        <button>{buttonText}</button>
      </Link>
    </div>
  );
}

function DigitalMarketing() {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Engage your audience with tailored content and paid campaigns.",
      image: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      title: "Search Engine Optimization",
      description: "Improve your site’s visibility and rank higher in search results.",
      image: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Drive instant traffic and leads through strategic ad placements.",
      image: "https://cdn-icons-png.flaticon.com/512/3107/3107963.png",
    },
    {
      title: "Content Marketing",
      description: "Build trust and authority with high-quality, valuable content.",
      image: "https://cdn-icons-png.flaticon.com/512/4359/4359973.png",
    },
    {
      title: "Email Marketing",
      description: "Reach your audience directly and nurture leads into customers.",
      image: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    },
    {
      title: "Web Design & Development",
      description: "Create fast, mobile-friendly websites that convert visitors.",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "E-commerce Marketing",
      description: "Boost online sales through multi-channel e-commerce strategies.",
      image: "https://cdn-icons-png.flaticon.com/512/891/891419.png",
    },
    {
      title: "Brand Strategy",
      description: "Define your brand’s voice, identity, and market position.",
      image: "https://cdn-icons-png.flaticon.com/512/1042/1042335.png",
    },
    {
      title: "Influencer Marketing",
      description: "Collaborate with influencers to authentically promote your brand.",
      image: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    },
  ];

  return (
    <div>
      <div id="digital-marketing-header-main">
        <div id="digital-marketing-second-header">
          <h1 className="slide-down">
            Accelerate Your Growth with Proven Digital Marketing Solutions
          </h1>
          <p className="slide-left">
            From SEO to social media, we craft strategies that drive measurable results for your
            business.
          </p>
          <Link to="/contact">
            <button className="slide-up">Get a Free Consultation</button>
          </Link>
        </div>
      </div>

      <div id="digital-marketing-service-container">
        <div id="digital-marketing-service-second">
          {services.map((service, index) => (
            <DigitalServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>

      <Footer />
      <Whatsappfloat />
    </div>
  );
}

export default DigitalMarketing;
