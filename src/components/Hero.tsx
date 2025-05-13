
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                John Developer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Software Engineer specializing in web development, cloud architecture, and building scalable applications.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/projects">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-900 hover:text-white px-8 py-6 text-lg">
                  Contact Me
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p className="font-mono">Current tech stack:</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">AWS</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block md:w-2/5">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Developer"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
