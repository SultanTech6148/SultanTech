
import Footer from "../../Component/Footer"
import Whatsappfloat from "../../Component/Whatsapp-float";




import { Helmet } from "react-helmet";

<Helmet>
  {/* Basic SEO */}
  <title>SEO | Sultan Tech</title>
  <meta name="description" content="Sultan Tech delivers scalable and innovative web, mobile, and enterprise applications tailored to your vision. Let's build the future with code." />
  <meta name="keywords" content="Sultan Tech,@sultan,@tech,@Sultan,@Tech,SEO services, search engine optimization, on-page SEO, off-page SEO, keyword research, link building, SEO audit, local SEO, technical SEO, content optimization, SEO strategy, organic traffic, SEO consulting, website ranking, SEO marketing,@SEOservices, @searchengineoptimization, @onpageSEO, @offpageSEO, @keywordresearch, @linkbuilding, @SEOaudit, @localSEO, @technicalSEO, @contentoptimization, @SEOStrategy, @organictraffic, @SEOconsulting, @websiteranking, @SEOmarketing,#SEOservices, #searchengineoptimization, #onpageSEO, #offpageSEO, #keywordresearch, #linkbuilding, #SEOaudit, #localSEO, #technicalSEO, #contentoptimization, #SEOStrategy, #organictraffic, #SEOconsulting, #websiteranking, #SEOmarketing" />
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