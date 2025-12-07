import React from 'react';

export interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      {product.image ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        <img src={product.image!} alt={product.name} className="product-card-image" />
      ) : (
        <div className="product-card-image-placeholder">[Image of {product.category}]</div>
      )}
      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-price">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;