import HomeVideoHeader from '../assets/Home-Header-BG.mp4';
import HomeAfterHeader from '../Component/HomeAfterHeader';
import HomeAbout from '../Component/HomeAbout';
import HomeManage from '../Component/HomeManage';
import HomeOurServices from '../Component/HomeOurServices';
import Footer from '../Component/Footer';
import HomeBlog from '../Component/HomeBlog';


function Home() {
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
    <HomeManage/>
    <HomeBlog/>
    <Footer/>
    </>
  );
}

export default Home;
