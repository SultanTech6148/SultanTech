import { useEffect, useRef, useState } from 'react';

function HomeOurServices() {
  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "We build fast, modern websites that convert visitors into customers.",
      img: "https://img.icons8.com/?size=100&id=9918&format=png&color=005487"
    },
    {
      title: "Mobile App Development",
      desc: "Create powerful mobile apps for iOS and Android users.",
      img: "https://img.icons8.com/?size=100&id=mKw0bj7l7Yly&format=png&color=005487"
    },
    {
      title: "Software Development",
      desc: "Clean, modern design that enhances user experience.",
      img: "https://img.icons8.com/?size=100&id=12680&format=png&color=005487"
    },
    {
      title: "SEO",
      desc: "Boost your visibility and traffic with SEO best practices.",
      img: "https://img.icons8.com/?size=100&id=JtOasgwoFNyW&format=png&color=005487"
    },
    {
      title: "Digital Marketing",
      desc: "Smart campaigns that reach the right audience effectively.",
      img: "https://img.icons8.com/?size=100&id=iV2d2QjFyUYL&format=png&color=005487"
    },
    {
      title: "Graphic Designing",
      desc: "Custom online stores with secure payment integrations.",
      img: "https://img.icons8.com/?size=100&id=LgpyAjEsu7MH&format=png&color=005487"
    },
    {
      title: "Data Science",
      desc: "Ongoing care to ensure your systems run smoothly.",
      img: "https://img.icons8.com/?size=100&id=Sc4kXyZfQ8TU&format=png&color=005487"
    },
    {
      title: "Game Development",
      desc: "Expert advice and guidance tailored to your goals.",
      img: "https://img.icons8.com/?size=100&id=fIaRc62dB0NE&format=png&color=005487"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-heading-wrapper" ref={headingRef}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1087/1087922.png"
          alt="services icon"
          className="services-heading-img"
        />
        <h2 className={`services-heading ${animate ? 'slide-up' : ''}`}>
          Our Services
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeOurServices;
