import HomeVideoHeader from '../assets/Home-Header-BG.mp4';
import HomeAfterHeader from '../Component/HomeAfterHeader';
import HomeAbout from '../Component/HomeAbout';
import HomeManage from '../Component/HomeManage';
import HomeOurServices from '../Component/HomeOurServices';
import Footer from '../Component/Footer';
import IconChangeCarousel from "../Component/IconChange-Carousel"
import Whatsappfloat from '../Component/Whatsapp-float';



function Home() {

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
  return (
    <>
    <div id="Home-main-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        id="background-video"
      >
        <source src={HomeVideoHeader} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div id="Home-second-main-container">
        <h1>Building the Future with Code</h1>
        <p>Sultan Tech delivers smart, scalable software solutions—from concept to launch. We combine creativity and solid engineering to build web, mobile, and enterprise apps that bring your vision to life.</p>
      </div>
    </div>
    <HomeAfterHeader/>
    <HomeAbout/>
    <HomeOurServices/>
    <IconChangeCarousel icons={codingIcons} interval={3000} />

    <HomeManage/>
    <Footer/>
      <Whatsappfloat/>

    </>
  );
}

export default Home;
