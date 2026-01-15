import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Wheelium. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms.html">Terms of Use</a>
          <span className="footer-divider">·</span>
          <a href="/privacy.html">Privacy Policy</a>
        </div>
        <p className="footer-note">Not financial advice. For educational purposes only.</p>
      </div>
    </footer>
  );
};

export default Footer;
