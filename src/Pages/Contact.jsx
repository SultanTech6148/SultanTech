import { useEffect } from "react";
import Footer from "../Component/Footer";
import Whatsappfloat from "../Component/Whatsapp-float";

import { Helmet } from "react-helmet";

<Helmet>
  {/* Basic SEO */}
  <title>Contact | Sultan Tech</title>
  <meta name="description" content="Sultan Tech delivers scalable and innovative web, mobile, and enterprise applications tailored to your vision. Let's build the future with code." />
  <meta name="keywords" content="Sultan Tech,@sultan,@tech,@Sultan,@Tech,contact, contact us, get in touch, customer support, support, help, contact information, phone number, email address, office location, visit us, customer service, reach out, contact form, business hours, location map, contact details, request information, schedule a call, ask a question,#contact, #contactus, #getintouch, #customersupport, #support, #help, #contactinformation, #phonenumber, #emailaddress, #officelocation, #visitus, #customerservice, #reachout, #contactform, #businesshours, #locationmap, #contactdetails, #requestinformation, #scheduleacall, #askquestion,@contact, @contactus, @getintouch, @customersupport, @support, @help, @contactinformation, @phonenumber, @emailaddress, @officelocation, @visitus, @customerservice, @reachout, @contactform, @businesshours, @locationmap, @contactdetails, @requestinformation, @scheduleacall, @askquestion" />
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


function Contact() {
  useEffect(() => {
    // Dynamically load Calendly's widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="contact-page-top-container">
        <div id="contact-page-top-second-main-container">
          <h1>Contact US </h1>
          <h2>Speak with an Expert</h2>
          <p>Work Smarter, Save Time, Reduce Costs — Make Every Move Count</p>
          <span>You Can Book a 30 Minutes Slot and Discuss Your Business Requirements!</span>
        </div>
      </div>

      <div id="contact-bottom-container">
        <div id="contact-bottom-second-container">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/sultantech-org/30min"
            style={{ minWidth: "320px", height: "630px" }}
          ></div>
        </div>
      </div>

      <Footer />
      <Whatsappfloat />
    </div>
  );
}

export default Contact;
