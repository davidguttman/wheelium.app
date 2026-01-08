import { Search, TrendingUp, History, Bell, Zap, BarChart3, LucideIcon } from 'lucide-react';
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
      title: "Smart Options Scoring",
      description: "Rank contracts by Delta, TastyTrade metrics, and Greeks. Find high-probability setups instantly.",
      Icon: Search
    },
    {
      title: "Wheel Advisor Signals",
      description: "Actionable recommendations to Hold, Roll, or Close positions based on urgency and profit targets.",
      Icon: TrendingUp
    },
    {
      title: "Historical Backtesting",
      description: "Simulate full Wheel or rolling strategies over any date range using historical Polygon data.",
      Icon: History
    },
    {
      title: "Intelligent Alerts",
      description: "Never miss a move. Get Slack integration and proactive badges for urgent position management.",
      Icon: Bell
    },
    {
      title: "Seamless Execution",
      description: "Place multi-leg orders and manage your portfolio directly through secure Alpaca integration.",
      Icon: Zap
    },
    {
      title: "Portfolio Analytics",
      description: "Track annualized returns, visualize risk, and compare performance against the underlying stock.",
      Icon: BarChart3
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Engineered for Options Traders</h2>
        <p>Automate the heavy lifting and focus on strategy.</p>
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
