
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}></div>

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-nova-purple/20 rounded-full filter blur-3xl opacity-50 animate-pulse-glow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-nova-blue/20 rounded-full filter blur-3xl opacity-50 animate-pulse-glow animation-delay-2000"></div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <About />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
