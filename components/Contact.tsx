
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Have a question or want to partner with us? We'd love to hear from you.
        </p>
        <div className="max-w-xl mx-auto bg-gray-900/50 border border-nova-blue/20 p-8 rounded-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-nova-blue transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-nova-blue transition-all duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-nova-blue transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-nova-blue text-white font-semibold rounded-lg hover:shadow-glow-blue transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12">
          <p className="text-gray-400">Email: <a href="mailto:contact@novaai.studio" className="text-nova-blue hover:underline">contact@novaai.studio</a></p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Add social links here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
