
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          At NovaAI Studio, we believe that creativity should have no limits. Our mission is to democratize content creation by building powerful, intuitive AI tools that are accessible to everyone. We're empowering the next generation of creators, developers, and innovators to bring their ideas to life faster than ever before. We envision a future where AI acts as a creative partner, amplifying human potential and opening up new frontiers of digital expression.
        </p>
      </div>
    </section>
  );
};

export default About;
