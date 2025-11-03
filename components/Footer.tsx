
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nova-dark/50 py-8 px-4 border-t border-nova-purple/20">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} NovaAI Studio. All Rights Reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
