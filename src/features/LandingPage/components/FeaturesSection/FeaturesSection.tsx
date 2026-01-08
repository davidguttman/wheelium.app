import { History, LineChart, Bell, Zap, LucideIcon } from 'lucide-react';
import './FeaturesSection.css';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Backtest Your Rules",
      description: "Pick any symbol and test your strategy—entry delta, profit target, DTE, and more. See exactly how your rules would have performed.",
      Icon: History
    },
    {
      title: "Trade Analytics",
      description: "Import your trades and match opens to closes automatically. Discover which symbols, deltas, and timeframes give you the best annualized return on capital.",
      Icon: LineChart
    },
    {
      title: "Smart Alerts",
      description: "Get notified when it's time to act—50% profit hit, price approaching your strike for a roll, or any rule you set. Never miss an optimal exit.",
      Icon: Bell
    },
    {
      title: "One-Click Execution",
      description: "When you're ready, connect your brokerage and execute trades directly. Place orders without leaving Wheelium.",
      Icon: Zap
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Built for Wheel Traders</h2>
        <p>From backtesting to execution, everything you need to run the wheel.</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
