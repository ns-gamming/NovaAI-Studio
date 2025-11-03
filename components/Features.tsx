
import React from 'react';
import ContentIcon from './icons/ContentIcon';
import VideoIcon from './icons/VideoIcon';
import AppIcon from './icons/AppIcon';
import AutomationIcon from './icons/AutomationIcon';

const features = [
  {
    icon: <ContentIcon />,
    title: 'Content Generation',
    description: 'Instantly create high-quality articles, social media posts, and marketing copy tailored to your brand voice.',
  },
  {
    icon: <VideoIcon />,
    title: 'Video Creation',
    description: 'Generate professional-grade short videos and animations from text descriptions in minutes.',
  },
  {
    icon: <AppIcon />,
    title: 'App Building',
    description: 'Describe your application idea, and let our AI generate the foundational code and UI components for you.',
  },
  {
    icon: <AutomationIcon />,
    title: 'Smart Automation',
    description: 'Design and deploy complex workflows that connect your favorite apps and automate repetitive tasks.',
  },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 border border-nova-purple/20 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-nova-purple/60 hover:shadow-glow-purple transform hover:-translate-y-2">
    <div className="mb-4 text-nova-purple">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Future of Creation is Here</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          NovaAI Studio combines multiple AI models into one seamless platform, empowering you to build faster and better.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
