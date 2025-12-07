import React from 'react';

// Define interface for highlight structure
interface Highlight {
    title: string;
    description: string;
    image: string;
}

const highlights: Highlight[] = [
  { title: "Telugu Weddings", description: "Silver plays a vital role in Telugu wedding rituals and trousseaus, symbolizing prosperity.", image: "Telugu Wedding Silver Ornaments" },
  { title: "Sankranti & Ugadi", description: "Silver pooja items are used to welcome the new year and harvest, signifying good fortune.", image: "Ugadi Silver Pooja Items" },
  { title: "Daily Pooja", description: "From silver deepams (lamps) to thalis, we offer pure items for everyday devotion.", image: "Silver Deepam" },
  { title: "Temple Inspirations", description: "Our Nakshi work draws heavily from the rich architecture of Andhra Pradesh temples.", image: "Temple Style Silver Jewellery" },
];

export const CulturalHighlights: React.FC = () => {
  return (
    <section id="culture" className="cultural-highlights" style={{backgroundColor: '#F7F1E9'}}>
      <h2 className="section-title">Silver in Telugu Tradition</h2>
      <div className="product-grid">
        {highlights.map((item, index) => (
          <div key={index} className="product-card">
            <div className="product-card-image-placeholder" style={{height: '150px'}}>
              [{item.image} Placeholder]
            </div>
            <div className="product-card-content" style={{textAlign: 'center'}}>
              <h3>{item.title}</h3>
              <p style={{fontSize: '0.9em'}}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CulturalHighlights;