import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Wheelium. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/terms">Terms of Use</Link>
          <span className="footer-divider">·</span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <p className="footer-note">Not financial advice. For educational purposes only.</p>
      </div>
    </footer>
  );
};

export default Footer;
