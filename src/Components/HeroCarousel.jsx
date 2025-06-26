import React, { useEffect, useState } from 'react';
import './HeroCarousel.css';

const slides = [
  {
    id: 1,
    image: 'https://drive.google.com/uc?export=view&id=1g-x9SyIM6SKN0gMPyAy8lt1qd66y8pF',
  },
  {
    id: 2,
    image: 'https://drive.google.com/uc?export=view&id=1MyJmd7eMKBs26mWQfDYbDtyEwoacq8b',
  },
  {
    id: 3,
    image: 'https://drive.google.com/uc?export=view&id=1T1UkqhDjy6s4M06Mbpo2XFE4GEgCmmCF',
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="carousel-wrapper">
        <div className="carousel-slide">
          <img src={slides[current].image} alt={`Slide ${current + 1}`} />
        </div>
        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${current === idx ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      <div className="hero-content" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Empowering Rural Talent for a Brighter Tomorrow</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Join a unified platform where rural students access competitive exams, scholarships, and expert guidance — all in one place.
        </p>
      </div>
    </div>
  );
};

export default HeroCarousel;