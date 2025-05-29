import { useEffect, useState } from "react";
import Banner from "../../assets/Graphics-page-banner.png"
import Footer from "../../Component/Footer"
import Whatsappfloat from "../../Component/Whatsapp-float";
import { Link } from "react-router-dom";





function GraphicServiceCard({ image, title, description }) {
  return (
    <div className="graphic-service-card-box">
      <img src={image} alt={title} style={{ width: '60px', height: '60px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}



function GraphicDesigning() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  

const cardData = [
  {
    image: 'https://img.icons8.com/?size=100&id=pa1EAroNj2pc&format=png&color=0066d3', // Add image path here
    title: '2D Animation',
    description: 'Bring ideas to life with fluid and engaging 2D animations.',
  },
  {
    image: 'https://img.icons8.com/?size=100&id=UHV3NZVcqOCT&format=png&color=0066d3', // Add image path here
    title: '3D Animation',
    description: 'Add depth and realism to your stories with stunning 3D visuals.',
  },
  {
    image: 'https://img.icons8.com/?size=100&id=KC5vXCg2mswh&format=png&color=0066d3', // Add image path here
    title: 'Logos',
    description: 'Craft memorable logos that define your brand identity.',
  },
  {
    image: 'https://img.icons8.com/?size=100&id=25986&format=png&color=0066d3', // Add image path here
    title: 'Branding Identities',
    description: 'Create consistent brand experiences across all platforms.',
  },
  {
    image: 'https://img.icons8.com/?size=100&id=7zq1LnO2khHG&format=png&color=0066d3', // Add image path here
    title: 'Flyers & Brochures',
    description: 'Market your message with compelling print designs.',
  },
  {
    image: 'https://img.icons8.com/?size=100&id=8MZqlo95fqD8&format=png&color=0066d3', // Add image path here
    title: 'Illustration',
    description: 'Custom illustrations that visually narrate your story.',
  },
  {
    image: 'https://img.icons8.com/?size=100&id=Of9jnoRhst7S&format=png&color=0066d3', // Add image path here
    title: 'Mock Ups',
    description: 'Visualize your products and designs in real-world settings.',
  },
  {
    image: 'https://img.icons8.com/?size=100&id=34554&format=png&color=0066d3', // Add image path here
    title: 'UI/UX Design',
    description: 'Design user interfaces that are both beautiful and intuitive.',
  },
];

  return (
    <div>
      <div id="graphic-page-header-main">
        <div id="graphic-page-header-second">
          <div id="graphic-page-header-left">
            <h1>ELEGANT, ON TREND DESIGNS</h1>
            <p>We bring you the goodness of charismatic designs.</p>
            <Link to="/contact">
  <button>Learn More</button>
</Link>
          </div>
          <div id="graphic-page-header-right">
            <img
              src="https://sirsyed.edu.pk/img/gd.png"alt="" className={loaded ? "popup-image" : ""}/>
          </div>
        </div>
      </div>
      <div id="graphic-page-after-header-main-container">
        <div id="graphic-page-after-header-second-container">
          <h2>WEB & GRAPHIC DESIGNING</h2>
          <p>Connect to your audience through persuasive web and graphic designing. Any successful business will undoubtedly have an attractive identity to promote its products and services. Till date, we have delivered thousands of designs to our hundreds of clients worldwide; from early startups to well-established firms. We cover all design verticals from web to logo, brochures, product catalogues, custom business cards and a lot more.</p>
          <p>We don’t design for brands only but for the people also who tend to interact with those brands. We believe that brands who consider the preferences of their target audience religiously are going to get better results – more engaged, loyal consumers and hence more leads and sales.</p>
        </div>
      </div>
      <div id="graphic-page-3card-container">
        <div id="graphic-page-3card-second-container">
          {/* 1 */}
          <div id="three-card-box">  
            <img src="https://img.icons8.com/?size=100&id=113140&format=png&color=FFFFFF" alt="Graphic Design" className="card-image"/>
            <h2 className="card-heading">Creative</h2>
            <p className="card-paragraph">To effectively reach the target audience, we offer quality graphic design services that are highly imaginative to please the unique aesthetics of the target audience.</p>
            </div>
            {/* end */}
            {/* 2*/}
          <div id="three-card-box">  
            <img src="https://img.icons8.com/?size=100&id=9378&format=png&color=FFFFFF" alt="Graphic Design" className="card-image"/>
            <h2 className="card-heading">Innovative</h2>
            <p className="card-paragraph">Innovation is a key factor to beat the competition in the crowded digital market. We make sure that our designs serve the purpose!</p>
            </div>
            {/* end */}
            {/* 3 */}
          <div id="three-card-box">  
            <img src="https://img.icons8.com/?size=100&id=118374&format=png&color=FFFFFF" alt="Graphic Design" className="card-image"/>
            <h2 className="card-heading">Comunitative</h2>
            <p className="card-paragraph">Our distinctive graphics creations serve as a complete package that communicate your brand message in the industry effectively.</p>
            </div>
            {/* end */}
        </div>
      </div>
      <div id="graphics-page-banner-container">
        <div id="graphics-page-banner-second-container">
          <img src={Banner} alt="" />
        </div>
      </div>
      <div id="graphics-page-our-services-heading">
        <h3>Our Graphics Services</h3>
      </div>
      <div id="graphics-page-service-card-container">
       <div id="graphics-page-service-card-second-container">
  {cardData.map((card, index) => (
    <GraphicServiceCard
      key={index}
      image={card.image}
      title={card.title}
      description={card.description}
    />
  ))}
</div>

      </div>
      <Footer/>
      <Whatsappfloat/>

    </div>
  );
}

export default GraphicDesigning;
