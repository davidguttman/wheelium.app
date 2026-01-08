
import React, { useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist push:', email);
    alert(`Thanks for joining the Wheelium waitlist!`);
    setEmail('');
  };

  return (
    <section className="hero-section">
      <div className="hero-pill">Introducing Wheelium</div>
      <h1 className="hero-title">
        Master the <span className="hero-title-italic">Wheel Strategy.</span>
      </h1>
      <p className="hero-subtitle">
        Your complete options trading companion. Search high-probability signals, backtest strategies, and execute seamlessly on Alpaca.
      </p>

      <form className="waitlist-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="waitlist-input"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Get Early Access</Button>
      </form>
      <div className="hero-divider"></div>
    </section>
  );
};

export default HeroSection;
