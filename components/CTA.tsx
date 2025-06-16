import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/contact">
            <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
          <Link href="/projects">
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