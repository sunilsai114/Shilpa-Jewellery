import React, { useState } from 'react';
import { ProductCard } from './ProductCard'; // Import component (named)
import type { Product } from './ProductCard'; // Import type-only interface

// Placeholder data using the Product interface
const productsData: Product[] = [
  {
    id: 1,
    category: 'Necklaces',
    name: 'Temple Nakshi Necklace',
    description: 'Intricately carved deity design with pure silver.',
    price: 'Request Price',
    image: '/images/temple-nakshi.jpg'
  },
  {
    id: 2,
    category: 'Bangles',
    name: 'Hyderabad Kara Bangle',
    description: 'Traditional thick Kara bangle set for festive wear.',
    price: '₹ 15,000',
    image: '/images/hyderabad-kara.jpg'
  },
  {
    id: 3,
    category: 'Rings',
    name: 'Purity Promise Ring',
    description: 'Simple, elegant design for daily use.',
    price: '₹ 2,500',
    image: '/images/purity-promise-ring.jpg'
  },
  {
    id: 4,
    category: 'Anklets',
    name: 'Andhra Paayal (Pair)',
    description: 'Traditional, melodic anklets, a symbol of heritage.',
    price: '₹ 4,000',
    image: '/images/andhra-paayal.jpg'
  },
  {
    id: 5,
    category: 'Pooja Items',
    name: 'Silver Kalash & Spoon',
    description: 'Essential items for daily pooja/ritual use.',
    price: 'Request Price',
    image: '/images/silver-kalash-spoon.jpg'
  },
  {
    id: 6,
    category: 'Gift Articles',
    name: 'Miniature Tirupati Balaji',
    description: 'Perfect gift article, high-purity silver.',
    price: '₹ 8,000',
    image: '/images/miniature-tirupati.jpg'
  },
  {
    id: 7,
    category: 'Necklaces',
    name: 'Kasulaperu Replica',
    description: 'A timeless Andhra favorite, coin design.',
    price: 'Request Price',
    image: '/images/kasulaperu-replica.jpg'
  },
  {
    id: 8,
    category: 'Bangles',
    name: 'Floral Engraved Kadas',
    description: 'Set of two broad kadas with floral engravings.',
    price: '₹ 18,500',
    image: '/images/floral-kadas.jpg'
  },
];

const categories: string[] = ['All', 'Necklaces', 'Bangles', 'Rings', 'Anklets', 'Pooja Items', 'Gift Articles'];

export const Collections: React.FC = () => {
  // 💡 Explicitly setting the state type to string
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts: Product[] = productsData.filter(product => 
    activeCategory === 'All' || product.category === activeCategory
  );

  return (
    <section id="collections" className="collections">
      <h2 className="section-title">Our Pure Silver Collections</h2>
      
      <div className="collections-tabs">
        {categories.map((category: string) => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Collections;