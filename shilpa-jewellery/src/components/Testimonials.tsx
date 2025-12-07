import React from 'react';

interface Testimonial {
    quote: string;
    name: string;
    city: string;
}

interface TrustBadge {
    text: string;
    icon: string;
}

const testimonials: Testimonial[] = [
  { quote: "The Temple Necklace I bought for my daughter's wedding was exquisite. The finish and purity were exceptional. Highly recommend!", name: "Smt. Latha K.", city: "Guntur" },
  { quote: "I appreciate their custom design service. They brought my vision for a traditional Rakhi gift to life perfectly.", name: "Mr. Ramesh V.", city: "Vijayawada" },
  { quote: "Trusted family store for years. Always reliable and the best purity assurance in the city.", name: "Smt. Anjali P.", city: "Nellore" },
];

const trustBadges: TrustBadge[] = [
    { text: "92.5% Purity Assured", icon: "✨" },
    { text: "Local Trusted Store", icon: "📍" },
    { text: "Family-Run Since 1965", icon: "🕰️" },
    { text: "Custom Designs Available", icon: "🎨" },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="trust" className="testimonials">
      <h2 className="section-title">Trust & Assurance</h2>
      
      <div className="container" style={{maxWidth: '900px'}}>
        {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
                <p>"{t.quote}"</p>
                <small>— {t.name}, {t.city}</small>
            </div>
        ))}
      </div>

      <h3 style={{textAlign: 'center', marginTop: '40px', color: '#555', fontFamily: 'var(--font-sans)'}}>Why Choose Us?</h3>
      <div className="trust-grid">
        {trustBadges.map((badge, index) => (
            <div key={index} className="trust-badge">
                <div style={{fontSize: '2em', marginBottom: '10px'}}>{badge.icon}</div>
                <p><strong>{badge.text}</strong></p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;