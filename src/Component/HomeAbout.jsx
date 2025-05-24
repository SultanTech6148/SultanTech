import { useEffect } from 'react';
import TechBG from '../assets/TechPc.png'

function HomeAbout() {
  useEffect(() => {
    const leftSide = document.querySelector('.left-side');
    leftSide.classList.add('slide-in-left');
  }, []);

  return (
    <div className="home-about-container">
      <div className="left-side">
        <h2>About Us</h2>
        <p>
          At Sultan Tech, we are dedicated to providing a wide range of high-quality technology services tailored to meet the needs of individuals and businesses alike. From software development and IT consulting to digital marketing, automation tools, and custom tech solutions, our mission is to deliver innovative and reliable services that drive success. With a focus on excellence, efficiency, and customer satisfaction, Sultan Tech is your trusted partner in navigating the digital world.
        </p>
      </div>
      <div className="right-side">
        <img src={TechBG} alt="About" />
      </div>
    </div>
  );
}

export default HomeAbout;
