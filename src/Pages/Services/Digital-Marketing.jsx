import Footer from "../../Component/Footer"
import Whatsappfloat from "../../Component/Whatsapp-float";


function DigitalServiceCard({ title, description, image, buttonText = "Learn More" }) {
  return (
    <div className="digital-service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}



function DigitalMarketing() {
const services = [
  {
    title: "Social Media Marketing",
    description: "Engage your audience with tailored content and paid campaigns.",
    image: "https://cdn-icons-png.flaticon.com/512/733/733547.png"
  },
  {
    title: "Search Engine Optimization",
    description: "Improve your site’s visibility and rank higher in search results.",
    image: "https://cdn-icons-png.flaticon.com/512/281/281769.png"
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Drive instant traffic and leads through strategic ad placements.",
    image: "https://cdn-icons-png.flaticon.com/512/3107/3107963.png"
  },
  {
    title: "Content Marketing",
    description: "Build trust and authority with high-quality, valuable content.",
    image: "https://cdn-icons-png.flaticon.com/512/4359/4359973.png"
  },
  {
    title: "Email Marketing",
    description: "Reach your audience directly and nurture leads into customers.",
    image: "https://cdn-icons-png.flaticon.com/512/561/561127.png"
  },
  {
    title: "Web Design & Development",
    description: "Create fast, mobile-friendly websites that convert visitors.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
  },
  {
    title: "E-commerce Marketing",
    description: "Boost online sales through multi-channel e-commerce strategies.",
    image: "https://cdn-icons-png.flaticon.com/512/891/891419.png"
  },
  {
    title: "Brand Strategy",
    description: "Define your brand’s voice, identity, and market position.",
    image: "https://cdn-icons-png.flaticon.com/512/1042/1042335.png"
  },
  {
    title: "Influencer Marketing",
    description: "Collaborate with influencers to authentically promote your brand.",
    image: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
  }
];


  return (
    <div>
      <div id="digital-marketing-header-main">
        <div id="digital-marketing-second-header">
          <h1 className="slide-down">Accelerate Your Growth with Proven Digital Marketing Solutions</h1>
          <p className="slide-left">From SEO to social media, we craft strategies that drive measurable results for your business.</p>
          <button className="slide-up">Get a Free Consultation</button>
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
      {/* <div id="digital-marketing-after-header-main">
        <div id="digital-marketing-after-header-second">
          <h4>WE HELP YOU GET NOTICED ONLINE</h4>
          <h2>PAKISTAN BEST DIGITAL MARKETING COMPANY</h2>
          <p>Sultan Tech is one of the leading Digital Marketing Companies in Pakistan, delivering results-driven digital marketing solutions since 2013. We help businesses grow from the ground up—building strong brand identities and transforming them into trusted names for their target audiences. At Sultan Tech, we combine creative strategy with deep industry knowledge, staying ahead of global trends in IT and digital marketing to bring innovative solutions to our clients.</p>
        </div>
      </div> */}
      <Footer/>
      <Whatsappfloat/>

    </div>
  );
}

export default DigitalMarketing;
