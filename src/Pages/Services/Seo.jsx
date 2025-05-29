
import Footer from "../../Component/Footer"
import Whatsappfloat from "../../Component/Whatsapp-float";






function SeoCard({ image, heading, text }) {
  return (
    <div id="seo-card-box">
      <img src={image} alt={heading} className="seo-card-image" />
      <h3 className="seo-card-heading">{heading}</h3>
      <p className="seo-card-text">{text}</p>
    </div>
  );
}

function Seo() {
  return (
    <div>
      <div id="seo-page-header-main">
        <div id="seo-page-header-second">
          <h6>Affordable SEO Services</h6>
          <h1>A Fresh Approach to Modern SEO Services</h1>
        </div>
      </div>
      <div id="seo-page-after-header-main">
        <div id="seo-page-after-header-second">
          <h2>So, Why is SEO Still So Important?</h2>
          <h3>What is SEO?</h3>
          <p>Search engine optimization (SEO) is the process of helping customers connect with your business online through a variety of optimization tactics designed to increase your organic search traffic.</p>
          <p>Our team uses modern SEO services, backed by the best digital marketing practices, to increase your organic traffic & search engine rankings for vetted, targeted keywords and long-tail phrases that drive business to your site. Search engine optimization services are the foundation for any successful online marketing strategy, however, finding the right SEO company can be a challenge. Let our SEO experts simplify the process for you by designing a successful SEO strategy that fits your goals and budget.</p>
          <h3>How Does SEO Work?</h3>
          <p>It all starts with the search engines (like Google). Every search engine sends out crawlers to gather all the content and information they can from across the internet in order to build an index. When a query comes through, the search engine’s algorithm sifts through that index in order to provide the most important and relevant information in the search results, commonly know as the search engine rankings.</p>
          <p>And that’s where SEO comes in. Optimization allows us to help search engines understand what’s on your website, the value your business has to offer, and how you connect to relevant keywords. It’s the foundation that drives organic traffic to your website and strengthens every aspect of your digital marketing strategy.</p>
          <p>But major search engines are constantly evolving their algorithms and strategies to meet rising user demands. That’s why it’s essential to maintain a sustainable optimization strategy that is continuously working for you and your business.</p>
          <h3>Growing Your Business with SEO</h3>
          <p>3.5 billion searches are made everyday on Google alone, and with so many competing for top spots in the search results, gaining visibility is key. But it’s through expert keyword research and SEO refinement that your business will earn the visibility it deserves to effectively add to your bottom line.</p>
          <p>By partnering with an SEO provider, you have a full team of experts working toward your digital success. So whatever your goal is—driving traffic, generating leads, maximizing sales, increasing brand awareness—we’ve got you covered. You could say our SEO strategies are optimized for success.</p>

        </div>
      </div>
      <div id="Seo-our-service-heading">
        <h2>Our SEO Service</h2>
      </div>
      <div id="seo-service-box-container">
        <div id="seo-service-box-second-container">
           <SeoCard 
        image="https://img.icons8.com/?size=100&id=42444&format=png&color=FFFFFF" 
        heading="Local SEO" 
        text="If you hope to dominate, you need a complete local SEO strategy that drives and delivers results." 
      />
      <SeoCard 
        image="	https://img.icons8.com/?size=100&id=42205&format=png&color=FFFFFF" 
        heading="Technical SEO" 
        text="Technical SEO provides businesses with the foundation required to scale marketing success." 
      />
      <SeoCard 
        image="https://img.icons8.com/?size=100&id=42220&format=png&color=FFFFFF" 
        heading="SEO Analytics" 
        text="All of our SEO services feature a basic analytics package. If you're ready for a bit more, explore!" 
      />
        </div>
      </div>
      <Footer/>
      <Whatsappfloat/>

    </div>
  )
}

export default Seo