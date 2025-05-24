import IconChangeCarousel from "../../Component/IconChange-Carousel"
import UIUXBanner from "../../assets/uiUXBanner.png"
import Footer from "../../Component/Footer"


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
          <button>Schedule a Demo</button>
        </div>
      </div>
      <div id="ui-ux-after-header-main-container">
        <div id="ui-ux-after-header-second-container">
          <div id="ui-ux-after-left">
            <h2>Designing Experiences That Matter</h2>
            <p>At the heart of everything we do is a commitment to creating meaningful, user-centered design. We believe great UI/UX goes beyond aesthetics — it’s about understanding real people, solving real problems, and crafting digital experiences that feel natural, intuitive, and engaging. From wireframes to final interfaces, we focus on clarity, usability, and impact, ensuring every touchpoint enhances the user journey and strengthens your brand.</p>

          </div>
          <div id="ui-ux-after-right">
            <img src="https://cdn.prod.website-files.com/678ccce8ba65076a9fdb8a49/67c976dcf13d469e9d7c3306_Group%202.svg" alt="" />
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
    </div>
  )
}

export default UIUXDesign
