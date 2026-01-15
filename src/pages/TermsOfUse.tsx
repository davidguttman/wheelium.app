import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../features/LandingPage/components/Footer/Footer';
import './LegalPage.css';

const TermsOfUse: React.FC = () => {
  const starsSmRef = useRef<HTMLDivElement>(null);
  const starsMdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (starsSmRef.current) {
        starsSmRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (starsMdRef.current) {
        starsMdRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="legal-page">
      <div className="stars-container">
        <div className="stars-sm" ref={starsSmRef}></div>
        <div className="stars-md" ref={starsMdRef}></div>
      </div>
      <div className="horizon-glow"></div>
      <div className="content-wrapper">
        <div className="legal-content">
          <nav className="legal-nav">
            <Link to="/">← Back to Home</Link>
          </nav>

          <h1 className="legal-title">Terms of Use</h1>
          <p className="legal-updated">Last updated: January 15, 2026</p>

          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Wheelium ("Service"), you agree to be bound by these Terms of Use.
              If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Service</h2>
            <p>
              Wheelium provides tools for options trading analysis, backtesting, and trade management.
              The Service is designed to assist users in analyzing and executing options trading strategies,
              particularly the wheel strategy.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Not Financial Advice</h2>
            <p>
              The information provided through Wheelium is for educational and informational purposes only.
              It does not constitute financial advice, investment advice, trading advice, or any other type
              of advice. You should not treat any of the Service's content as such.
            </p>
            <p>
              Trading options involves substantial risk of loss and is not suitable for all investors.
              Past performance is not indicative of future results. You are solely responsible for your
              trading decisions and should consult with a qualified financial advisor before making any
              investment decisions.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. User Accounts</h2>
            <p>
              To access certain features of the Service, you may be required to create an account.
              You are responsible for maintaining the confidentiality of your account credentials and
              for all activities that occur under your account.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to the Service or its related systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
              <li>Share your account credentials with third parties</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Service, including but not limited to
              text, graphics, logos, and software, are the exclusive property of Wheelium and are
              protected by intellectual property laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Wheelium shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to
              loss of profits, data, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind,
              either express or implied. We do not guarantee that the Service will be uninterrupted,
              secure, or error-free.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any
              material changes by posting the updated Terms on this page. Your continued use of
              the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at{' '}
              <a href="mailto:legal@wheelium.app">legal@wheelium.app</a>.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default TermsOfUse;
