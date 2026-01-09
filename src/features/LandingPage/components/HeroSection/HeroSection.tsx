import { useState, useEffect } from 'react';
import { Button } from '../../../../components/Button/Button';
import { saasco } from '../../../../utils/saasco';
import './HeroSection.css';

const WAITLIST_KEY = 'wheelium_waitlist';
const WAITLIST_START = new Date('2026-01-01T00:00:00Z').getTime(); // Fixed start date
const SIGNUP_INTERVAL = 15 * 60 * 1000; // 15 minutes

function getQueuePosition(): number {
  return Math.floor((Date.now() - WAITLIST_START) / SIGNUP_INTERVAL) + 1;
}

function generateUserId(position: number): string {
  const padded = position.toString().padStart(8, '0');
  const rand = Math.random().toString(36).slice(2, 6);
  return `ln-${padded}-${rand}`;
}

type WaitlistData = {
  email: string;
  queuePosition: number;
  userId: string;
};

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [queuePosition, setQueuePosition] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(WAITLIST_KEY);
    if (saved) {
      const data: WaitlistData = JSON.parse(saved);
      setQueuePosition(data.queuePosition);
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const position = getQueuePosition();
    const userId = generateUserId(position);
    setQueuePosition(position);

    const data: WaitlistData = { email, queuePosition: position, userId };
    localStorage.setItem(WAITLIST_KEY, JSON.stringify(data));

    saasco.identify(userId, {
      email,
      queuePosition: position,
    });

    setSubmitted(true);
  };

  return (
    <section className="hero-section">
      <div className="hero-pill">Introducing Wheelium</div>
      <h1 className="hero-title">
        From Wheel Strategy to <span className="hero-title-italic">Wheel System.</span>
      </h1>
      <p className="hero-subtitle">
        Backtest your rules, track what works, and never miss an entry or exit.
      </p>

      <div className="waitlist-container">
        <form className={`waitlist-form ${submitted ? 'fade-out' : ''}`} onSubmit={handleSubmit}>
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

        {submitted && (
          <div className="success-message fade-in">
            <p className="success-title">You're on the list!</p>
            <p className="success-detail">
              You're currently #{queuePosition.toLocaleString()} in line. Stay tuned for ways to get access sooner.
            </p>
          </div>
        )}
      </div>

      <div className="hero-divider"></div>
    </section>
  );
};

export default HeroSection;
