
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center pt-24 px-4">
      <div className="container mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-nova-blue to-nova-purple">
          Create Anything. Instantly.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Harness the power of next-generation AI to generate stunning designs, videos, applications, and automated workflows from a single text prompt.
        </p>
        <a
          href="#pricing"
          className="inline-block px-8 py-4 bg-nova-blue text-white font-semibold rounded-lg shadow-lg shadow-nova-blue/30 hover:shadow-glow-blue transform hover:-translate-y-1 transition-all duration-300"
        >
          Try NovaAI Free
        </a>
        <div className="mt-16 w-full max-w-4xl mx-auto h-64 md:h-96 rounded-2xl bg-black/20 border border-nova-purple/20 shadow-2xl shadow-nova-purple/10 flex items-center justify-center p-4">
            <img src="https://picsum.photos/seed/ai-abstract/1200/600" alt="AI Abstract Visualization" className="w-full h-full object-cover rounded-xl opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
