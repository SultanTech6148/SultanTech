import IconChangeCarousel from "../../Component/IconChange-Carousel"
import UIUXBanner from "../../assets/uiUXBanner.png"
import Footer from "../../Component/Footer"
import AfterHeaderRightImage from "../../assets/UIUX-after-header-right.png"
import Whatsappfloat from "../../Component/Whatsapp-float"
import { Link } from "react-router-dom";


import { Helmet } from "react-helmet";

<Helmet>
  {/* Basic SEO */}
  <title>UI UX Design | Sultan Tech</title>
  <meta name="description" content="Sultan Tech delivers scalable and innovative web, mobile, and enterprise applications tailored to your vision. Let's build the future with code." />
  <meta name="keywords" content="Sultan Tech,@sultan,@tech,@Sultan,@Tech,UI design, UX design, user interface design, user experience design, mobile app design, website UI/UX, responsive design, interaction design, prototyping, wireframing, usability testing, UI/UX services, design consulting, user-centered design, product design,@UIDesign, @UXDesign, @userinterfacedesign, @userexperiencedesign, @mobileappdesign, @websiteUIUX, @responsivedesign, @interactiondesign, @prototyping, @wireframing, @usabilitytesting, @UIUXservices, @designconsulting, @usercentereddesign, @productdesign,#UIDesign, #UXDesign, #userinterfacedesign, #userexperiencedesign, #mobileappdesign, #websiteUIUX, #responsivedesign, #interactiondesign, #prototyping, #wireframing, #usabilitytesting, #UIUXservices, #designconsulting, #usercentereddesign, #productdesign" />
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




function UIUXCard({ imageSrc, heading, description, bgColor = "#ffffff" }) {

  return (
    <div className="ui-card" style={{ backgroundColor: bgColor }}>
      <div className="ui-card-image-container">
        <img src={imageSrc} alt={heading} className="ui-card-icon" />
      </div>
      <h2 className="ui-card-heading">{heading}</h2>
      <p className="ui-card-description">{description}</p>
    </div>
  );
}



function UIUXDesign() {

 const codingIcons = [
  "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=37iEIiYKRoDs&format=png&color=000000",
"https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=37iEIiYKRoDs&format=png&color=000000"

]

  return (
    <div>
      <div id="ui-ux-header-main-container">
        <div id="ui-ux-header-second-main-container">
          <h1>Top UI UX Design Services</h1>
          <p>Solve the pressing product design challenges with InvoZone’s UI/UX and design wizards.</p>
          <Link to="/contact">
  <button>Learn More</button>
</Link>
        </div>
      </div>
      <div id="ui-ux-after-header-main-container">
        <div id="ui-ux-after-header-second-container">
          <div id="ui-ux-after-left">
            <h2>Designing Experiences That Matter</h2>
            <p>At the heart of everything we do is a commitment to creating meaningful, user-centered design. We believe great UI/UX goes beyond aesthetics — it’s about understanding real people, solving real problems, and crafting digital experiences that feel natural, intuitive, and engaging. From wireframes to final interfaces, we focus on clarity, usability, and impact, ensuring every touchpoint enhances the user journey and strengthens your brand.</p>

          </div>
          <div id="ui-ux-after-right">
            <img src={AfterHeaderRightImage} alt="" />
          </div>
        </div>
      </div>

          <IconChangeCarousel icons={codingIcons} interval={3000} />


      <div id="ui-ux-service-heading">
        <h2>Our UI UX Services</h2>
      </div>
      <div id="ui-ux-service-box-container">
        <div id="ui-ux-service-box-second-container">
          <UIUXCard 
          imageSrc="https://img.icons8.com/?size=100&id=110369&format=png&color=007bff" 
          heading="Mobile App UI UX Design" 
          description="Build a flawless user interface for your mobile users to provide a seamless experience on their phone screens. InvoZone designs mobile apps according to iOS and Android conventions." 
          bgColor="#f9f9f9" 
          />
          <UIUXCard 
          imageSrc="https://img.icons8.com/?size=100&id=34554&format=png&color=007bff" 
          heading="Web UI UX Design" 
          description="Simplify your technically complex products in cahoots with InvoZone’s UI/UX development services to grow web traffic through modern design aesthetics and dynamic features. " 
          bgColor="#f9f9f9" 
          />
          <UIUXCard 
          imageSrc="https://img.icons8.com/?size=100&id=1671&format=png&color=007bff" 
          heading="UI UX Brand Identity" 
          description="Drive brand growth with thoroughly researched visual designs for your brand. CTA, icons, color scheme, or typography - InvoZone is an ideal umbrella term for them. " 
          bgColor="#f9f9f9" 
          />
          <UIUXCard 
          imageSrc="https://img.icons8.com/?size=100&id=7687&format=png&color=007bff" 
          heading="HCI Design" 
          description="Maximize operational efficiency and improve productivity through InvoZone’s research, interviews and persona development to deliver user-friendly HCI designs. " 
          bgColor="#f9f9f9" 
          />
        </div>
      </div>
      <div id="ui-ux-banner-main-container">
        <img src={UIUXBanner} alt="" />
      </div>
      <Footer/>
      <Whatsappfloat/>

    </div>
  )
}

export default UIUXDesign
