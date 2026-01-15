import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../features/LandingPage/components/Footer/Footer';
import './LegalPage.css';

const PrivacyPolicy: React.FC = () => {
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

          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: January 15, 2026</p>

          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Wheelium ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you use our service.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Email address and any other information
                you provide when creating an account or joining our waitlist.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our Service,
                including features used, pages visited, and actions taken.
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, operating system, and device
                identifiers.
              </li>
              <li>
                <strong>Trading Data:</strong> If you choose to connect brokerage accounts,
                we may access trade history and account information necessary to provide our services.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information in the
              following circumstances:
            </p>
            <ul>
              <li>With service providers who assist in operating our Service</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information. However, no method of transmission over the Internet or
              electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to
              provide you services. We may also retain and use your information to comply with
              legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to collect and track information
              about your use of our Service. You can instruct your browser to refuse all cookies
              or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Third-Party Services</h2>
            <p>
              Our Service may contain links to third-party websites or services. We are not
              responsible for the privacy practices of these third parties. We encourage you
              to read the privacy policies of any third-party services you access.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 18 years of age. We do not knowingly
              collect personal information from children under 18.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please
              contact us at <a href="mailto:privacy@wheelium.app">privacy@wheelium.app</a>.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
