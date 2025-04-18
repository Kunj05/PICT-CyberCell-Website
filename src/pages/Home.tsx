import { useState } from 'react';
import Hero from '../components/Hero';
import ToolsShowcase from '../components/ToolsShowcase/Tools';
import ImageSlider from '../components/ImageSlider';
import Stats from '../components/Stats';
import { ArrowRight, X } from 'lucide-react';

const Home = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCard, setShowCard] = useState(true);

  return (
    <>
      <Hero />
      <ToolsShowcase />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white mb-12 text-center">
          Previous Events
        </h2>
        <ImageSlider />
        <Stats />
      </div>

      {showCard && (
        <div className={`fixed bottom-8 right-8 bg-gradient-to-r from-gray-900 to-blue-900 ${isMinimized ? 'p-3' : 'p-6'} rounded-lg shadow-2xl transition-all duration-300 border border-blue-500/20 ${isMinimized ? 'max-h-12' : 'max-w-xs'}`}>
          {!isMinimized && (
            <button 
              onClick={() => setIsMinimized(true)}
              className="absolute -top-2 -right-2 bg-blue-900 rounded-full p-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <X size={16} />
            </button>
          )}          
          {!isMinimized && (
            <>
              <h3 className="text-blue-400 font-bold text-xl mb-4">Upcoming CTF!</h3>
              <p className="text-gray-300 mb-4">Join our next Capture The Flag competition. Test your cybersecurity skills!</p>
            </>
          )}
          <a 
            href="https://unstop.com/hackathons/lakshya-ctf-2025-pune-institute-of-computer-technology-pict-school-of-technology-and-management-pict-stm-pune-1465777" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-all hover:translate-x-2"
            onClick={() => isMinimized && setIsMinimized(false)}
          >
            Register for CTF
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      )}</>
  );
};

export default Home;