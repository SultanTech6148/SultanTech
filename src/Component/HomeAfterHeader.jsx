import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 1000; // 1 second
          const stepTime = Math.abs(Math.floor(duration / end));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
              setHasAnimated(true);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, hasAnimated]);

  return <h3 ref={ref}>{count}+</h3>;
};

function HomeAfterHeader() {
  return (
    <div>
      <div id="Home-after-header-main-container">
        <div className="counting-container">
          <div className="count-item">
            <Counter end={100} />
            <p>Projects</p>
          </div>
          <div className="count-item">
            <Counter end={50} />
            <p>Clients</p>
          </div>
          <div className="count-item">
            <Counter end={200} />
            <p>Followers</p>
          </div>
          <div className="count-item">
            <Counter end={10} />
            <p>Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAfterHeader;
