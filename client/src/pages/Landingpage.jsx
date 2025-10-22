import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import KeyFeatures from '../components/KeyFeatures.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <KeyFeatures />
          <HowItWorks />
        </div>
        <CallToAction /> {/* This should also be centered / full width */}
      </main>
      <Footer />
    </div>
  );
}

export default App;