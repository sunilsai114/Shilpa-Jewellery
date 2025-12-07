import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Shilpa Jewellery</h1>
        <p>Authentic, Handcrafted Silver Ornaments from the Heart of Andhra Pradesh.</p>
        <div>
          <button className="btn btn-primary" onClick={() => scrollToSection('collections')}>
            View Collections
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Contact / Visit Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;