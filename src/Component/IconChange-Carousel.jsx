import { useEffect, useState } from "react";

function IconChangeCarousel({ icons = [], interval = 2000 }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    // Responsive: update visibleCount based on screen width
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(3);       // mobile
      else if (width < 1024) setVisibleCount(4); // tablet
      else setVisibleCount(5);                   // desktop
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (icons.length <= visibleCount) return;

    const timer = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, interval);

    return () => clearInterval(timer);
  }, [icons.length, interval, visibleCount]);

  // Get a slice of icons to show
  const getVisibleIcons = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex <= icons.length) {
      return icons.slice(startIndex, endIndex);
    } else {
      // Wrap around when reaching the end
      return [...icons.slice(startIndex), ...icons.slice(0, endIndex - icons.length)];
    }
  };

  return (
    <div id="icon-carousel-container">
      <div id="icon-second-carousel-container">
        {getVisibleIcons().map((icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt={`icon-${idx}`}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "80px",
              margin: "0 10px",
              objectFit: "contain",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default IconChangeCarousel;
