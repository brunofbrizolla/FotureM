import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { AiAdvantage } from './components/AiAdvantage';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AiAdvantage />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;