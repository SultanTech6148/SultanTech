import Footer from '../../Component/Footer'
import IconChangeCarousel from '../../Component/IconChange-Carousel';
import { Link } from "react-router-dom";
import Whatsappfloat from '../../Component/Whatsapp-float';


import { Helmet } from "react-helmet";

<Helmet>
  {/* Basic SEO */}
  <title>Data Science | Sultan Tech</title>
  <meta name="description" content="Sultan Tech delivers scalable and innovative web, mobile, and enterprise applications tailored to your vision. Let's build the future with code." />
  <meta name="keywords" content="Sultan Tech,@sultan,@tech,@Sultan,@Tech,data science, data analysis, machine learning, big data, data visualization, predictive analytics, artificial intelligence, data mining, data modeling, business intelligence, data consulting, statistical analysis, data engineering, AI solutions, data science services,@datascience, @dataanalysis, @machinelearning, @bigdata, @datavisualization, @predictiveanalytics, @artificialintelligence, @datamining, @datamodeling, @businessintelligence, @dataconsulting, @statisticalanalysis, @dataengineering, @AIsolutions, @datascienceservices,#datascience, #dataanalysis, #machinelearning, #bigdata, #datavisualization, #predictiveanalytics, #artificialintelligence, #datamining, #datamodeling, #businessintelligence, #dataconsulting, #statisticalanalysis, #dataengineering, #AIsolutions, #datascienceservices" />
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

]



function DataScienceService({ imageSrc, altText, heading, description }) {
  return (
    <div className="service-card">
      <img
        alt={altText}
        className="service-icon"
        src={imageSrc}
      />
      <h3>{heading}</h3>
      <p>{description}</p>
     <Link to="/contact">
  <button className='service-button'>Learn More</button>
</Link>
    </div>
  );
}

function DataScienceTalent(){
  return(
    <>
    <div id="datascience-Talent-main-container">
      <div id="datascience-Talent-second-container">
        <h2>Unlock Insights with Advanced Data Science Solutions</h2>
        <p>Transform your data into actionable intelligence with our cutting-edge analytics, machine learning, and predictive modeling services.</p>
         <Link to="/contact">
  <button>Get in Touch</button>
</Link>
      </div>
    </div>
    </>
  )
}




function DataScience() {
  return (
    <>
      <div id="data-science-main-container">
        <div id="data-science-second-main-container">
          <div id="data-science-header-left" className="slide-in-left">
            <h2>Unlock the Power of Your Data with Expert Data Science Solutions</h2>
            <p>From predictive modeling to advanced analytics, we help you turn data into actionable insights</p>
          </div>          
          <div id="data-science-header-right">
            <img 
              src="https://cdn.dribbble.com/userupload/25559492/file/original-f5c47b21ece1441518dc53682451144d.gif" 
              alt="Data science illustration" 
            />
          </div>          
        </div>
      </div>
      <div id="data-science-service">
        <div id="data-science-second-service-container">
      <IconChangeCarousel icons={codingIcons} interval={3000} />

          <div id="data-science-service-heading">
            <h2>Our Data Science Services</h2>
          </div>
          <div id="data-science-service-box-container">
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=gZUexCJi0ObL&format=png&color=007bff"
            altText="Data Engineering"
            heading="Data Engineering "
            description="Builds systems to collect, store, and process large-scale data efficiently"/>
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=11351&format=png&color=007bff"
            altText="Data Cleaning & Preprocessing "
            heading="Data Cleaning & Preprocessing "
            description="Prepares raw data by handling missing values, errors, and formatting issues."/>
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=11349&format=png&color=007bff"
            altText="Exploratory Data Analysis (EDA)"
            heading="Exploratory Data Analysis (EDA)"
            description="Uncovers patterns and insights through statistical summaries and visualizations."/>
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=iUDJxrHYhzTG&format=png&color=007bff"
            altText="Predictive Modeling"
            heading="Predictive Modeling"
            description="Uses historical data to forecast future outcomes with machine learning algorithms."/>
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=61864&format=png&color=007bff"
            altText="Machine Learning & AI "
            heading="Machine Learning & AI "
            description="Develops models that learn from data to automate decision-making."/>
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=63496&format=png&color=007bff"
            altText="Natural Language Processing (NLP) "
            heading="Natural Language Processing (NLP) "
            description="Analyzes and understands human language in text or speech form."/>
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=Q2PtQwZYa56H&format=png&color=007bff"
            altText="Data Visualization"
            heading="Data Visualization"
            description="Communicates data insights clearly using charts, graphs, and dashboards."/>
            <DataScienceService 
            imageSrc="https://img.icons8.com/?size=100&id=77231&format=png&color=007bff"
            altText="MLOps & Model Deployment"
            heading="MLOps & Model Deployment"
            description="Ensures smooth integration of machine learning models into production systems."/>

          </div>
          <DataScienceTalent/>
        </div>
      </div>
      <Footer/>
      <Whatsappfloat/>
    </>
  );
}
export default DataScience;
