
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to full-time opportunities. 
          Whether you need a full-stack developer, mobile app specialist, or AI solution, let's create something amazing together.
        </p> */}
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/contact">
            <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
          <Link to="/projects">
            <Button className="border-white text-white hover:bg-blue-700 px-8 py-6 text-lg">
              View My Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
