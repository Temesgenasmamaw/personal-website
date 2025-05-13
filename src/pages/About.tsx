
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Software engineer, problem solver, and lifelong learner.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Left Column - Image and Quick Info */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="mb-8">
                    <div className="relative rounded-lg overflow-hidden mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="John Developer"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2">John Developer</h2>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Senior Software Engineer</p>
                    
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Location:</span>
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Experience:</span>
                        <span>7+ years</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Education:</span>
                        <span>B.S. Computer Science</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Languages:</span>
                        <span>English, Spanish</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Main Content */}
              <div className="md:col-span-2">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>My Journey</h2>
                  <p>
                    Hello! I'm John, a passionate software engineer with over 7 years of experience building 
                    web and mobile applications. My journey in tech started during my undergraduate studies 
                    when I built my first website for a local non-profit organization.
                  </p>
                  
                  <p>
                    After graduating with a degree in Computer Science, I joined a startup where I 
                    helped build a SaaS platform from the ground up. This experience taught me how to 
                    wear multiple hats and solve problems across the entire stack.
                  </p>
                  
                  <p>
                    Over the years, I've worked with companies of all sizes, from early-stage startups 
                    to Fortune 500 enterprises. Each experience has shaped my approach to software development 
                    and reinforced my belief in writing clean, maintainable code.
                  </p>
                  
                  <h2>My Approach</h2>
                  <p>
                    I believe that the best software is built with both technical excellence and user empathy. 
                    I'm passionate about creating solutions that not only work well but are also intuitive and 
                    enjoyable to use.
                  </p>
                  
                  <p>
                    My technical philosophy includes:
                  </p>
                  
                  <ul>
                    <li><strong>User-Centric Design</strong>: Building with the end-user in mind first and foremost.</li>
                    <li><strong>Clean, Maintainable Code</strong>: Writing code that's easy to understand and extend.</li>
                    <li><strong>Performance Matters</strong>: Optimizing for speed and efficiency across all layers of the stack.</li>
                    <li><strong>Continuous Learning</strong>: Staying current with industry trends and best practices.</li>
                  </ul>
                  
                  <h2>Professional Experience</h2>
                  
                  <div className="mb-8 border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-400">TechCorp Inc. • 2020 - Present</p>
                    <p>
                      Leading the development of a cloud-based SaaS platform serving over 50,000 users.
                      Implemented microservices architecture that improved system reliability by 35%.
                      Mentoring junior developers and driving adoption of best practices across the engineering team.
                    </p>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Innovation Labs • 2017 - 2020</p>
                    <p>
                      Developed and maintained multiple client applications using React, Node.js, and AWS.
                      Led the migration from a monolithic architecture to microservices.
                      Reduced page load time by 60% through performance optimizations and code splitting.
                    </p>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-bold">Software Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">StartUp Vision • 2015 - 2017</p>
                    <p>
                      Joined as an early employee and contributed to building the company's first product.
                      Implemented key features that helped secure Series A funding.
                      Worked across the full stack including frontend, backend, and DevOps.
                    </p>
                  </div>
                  
                  <h2>Beyond Coding</h2>
                  <p>
                    When I'm not writing code, you can find me hiking in the mountains, experimenting 
                    with new cooking recipes, or reading science fiction. I'm also an active member of 
                    the local tech community, where I occasionally speak at meetups and mentor aspiring 
                    developers.
                  </p>
                  
                  <p>
                    I'm always open to discussing new opportunities, technical challenges, or just 
                    chatting about the latest tech trends. Feel free to reach out!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
