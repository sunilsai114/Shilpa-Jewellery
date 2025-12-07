import React from 'react';

function renderBoldMarkdown(text: string) {
  const parts: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
    parts.push(<strong key={`b-${i++}`}>{m[1]}</strong>);
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export const About: React.FC = () => {
  const p1 = `Shilpa Jewellery is more than just a store; it’s a **family legacy** spanning three generations in Andhra Pradesh. Since **1965**, we have been committed to the **purity and authenticity** of every piece we craft.`;
  const p2 = `Our ornaments are rooted in **traditional Telugu designs**, passed down through generations, ensuring you receive a piece of heritage. We use only **92.5% pure sterling silver** and offer bespoke **customization** for weddings and special occasions. Trust, craftsmanship, and purity are the silver threads woven into everything we do.`;

  return (
    <section id="about" className="about">
      <h2 className="section-title">Our Story & Craftsmanship</h2>
      <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
        <p>{renderBoldMarkdown(p1)}</p>
        <p>{renderBoldMarkdown(p2)}</p>
        <p>Visit us to experience the artistry that makes us a trusted name locally.</p>
      </div>
    </section>
  );
};

export default About;