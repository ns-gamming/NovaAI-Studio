
import React from 'react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals starting out with AI.',
    features: ['100 content generations/mo', 'Basic video templates', 'Community support'],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'For professionals and small teams.',
    features: ['Unlimited generations', 'Advanced AI models', 'Custom video exports', 'Priority email support'],
    isPopular: true,
  },
  {
    name: 'Ultimate',
    price: '$99',
    description: 'For large teams and enterprises.',
    features: ['All Pro features', 'API access', 'Team collaboration tools', 'Dedicated support'],
    isPopular: false,
  },
];

const PricingCard: React.FC<{ tier: typeof tiers[0] }> = ({ tier }) => (
  <div className={`relative bg-gray-900/50 p-8 rounded-xl border ${tier.isPopular ? 'border-nova-blue shadow-glow-blue' : 'border-nova-purple/20'} flex flex-col`}>
    {tier.isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-nova-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
    <p className="text-gray-400 mb-6">{tier.description}</p>
    <p className="text-4xl font-bold mb-6">{tier.price}<span className="text-base font-normal text-gray-400">/mo</span></p>
    <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
      {tier.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-nova-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {feature}
        </li>
      ))}
    </ul>
    <a href="#" className={`w-full text-center py-3 font-semibold rounded-lg transition-all duration-300 ${tier.isPopular ? 'bg-nova-blue text-white hover:shadow-glow-blue' : 'bg-nova-purple/50 text-white hover:bg-nova-purple'}`}>
      Subscribe
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing for Everyone</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Choose the plan that's right for you and unlock the full potential of AI creation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
