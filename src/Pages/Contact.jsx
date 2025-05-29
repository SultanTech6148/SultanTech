import { useEffect } from "react";
import Footer from "../Component/Footer";
import Whatsappfloat from "../Component/Whatsapp-float";



function Contact() {
  useEffect(() => {
    // Dynamically load Calendly's widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="contact-page-top-container">
        <div id="contact-page-top-second-main-container">
          <h1>Contact US </h1>
          <h2>Speak with an Expert</h2>
          <p>Work Smarter, Save Time, Reduce Costs — Make Every Move Count</p>
          <span>You Can Book a 30 Minutes Slot and Discuss Your Business Requirements!</span>
        </div>
      </div>

      <div id="contact-bottom-container">
        <div id="contact-bottom-second-container">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/sultantech-org/30min"
            style={{ minWidth: "320px", height: "630px" }}
          ></div>
        </div>
      </div>

      <Footer />
      <Whatsappfloat />
    </div>
  );
}

export default Contact;
