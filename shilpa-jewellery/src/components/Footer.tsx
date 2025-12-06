import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <a href="#collections">Necklaces</a>
          <a href="#collections">Bangles & Bracelets</a>
          <a href="#collections">Pooja Items</a>
          <a href="#collections">Gift Articles</a>
        </div>

        <div className="footer-section">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/srivallisilver" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/srivallisilver" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
          <p style={{marginTop: '15px', color: '#FEEEDD'}}>
            #12-34-56, Main Road,<br/>
            Vijayawada, Andhra Pradesh
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Srivalli Silver Arts. Handcrafted silver ornaments from Andhra Pradesh.
      </div>
    </footer>
  );
};

export default Footer;