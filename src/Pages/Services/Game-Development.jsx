import React, { useEffect, useState } from 'react';
import Footer from "../../Component/Footer"

function GameDevelopment() {
  const fullText = "OUR games development studio DEVELOP GAMES FOR THESE KEY PLATFORMS";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(50); // typing speed

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      }, speed / 2);
    } else if (!isDeleting && index === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div>
      <div id="game-development-header-main-container">
        <div id="game-development-header-second">
          <h1>Game <span> Development </span>Services</h1>
        </div>
      </div>
      <div id="game-dev-after-header-main">
        <div id="game-dev-after-header-second">
          <div id="game-dev-after-header-second-left">
            <h2>{text}<span className="cursor">|</span></h2>
          </div>
        <div id="game-dev-after-header-second-right">
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=99273&format=png&color=007bff" alt="Mobile" class="card-img" />
    <div class="card-content">
      <h3>Mobile</h3>
      <p>Development for Android platforms.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=100419&format=png&color=007bff" alt="iOS" class="card-img" />
    <div class="card-content">
      <h3>iOS</h3>
      <p>iPhone & iPad game solutions.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=60719&format=png&color=007bff" alt="PC" class="card-img" />
    <div class="card-content">
      <h3>PC</h3>
      <p>Games for Windows and MacOS.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://img.icons8.com/?size=100&id=k9jE2OMmCxq3&format=png&color=007bff" alt="Console" class="card-img" />
    <div class="card-content">
      <h3>Console</h3>
      <p>PlayStation, Xbox, and more.</p>
    </div>
  </div>
</div>
        </div>
      </div>

      <div id="gamepage-create-section">
        <div id="gamepage-create-second-container">
          <h2>Let’s create something extraordinary together!</h2>
          <p>Let’s bring your vision to life and create something remarkable. Together, we can achieve the extraordinary.</p>
          <button>Contact Us</button>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default GameDevelopment;
