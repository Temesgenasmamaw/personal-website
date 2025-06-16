import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Temesgen Asmamaw',
  description: 'Learn more about Temesgen Asmamaw, a software engineer specializing in full-stack development and AI solutions.',
};

export default function About() {
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
                        alt="Temesgen Asmamaw"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>

                    <h2 className="text-2xl font-bold mb-2">
                      Temesgen Asmamaw
                    </h2>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      Full Stack Developer & AI Enthusiast
                    </p>

                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Location:</span>
                        <span>Ethiopia</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Experience:</span>
                        <span>1.5+ years</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Education:</span>
                        <span>B.Sc. Software Engineering</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Languages:</span>
                        <span>English, Amharic</span>
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
                    Hello! I'm Temesgen, a passionate software engineer with
                    over One and a half years of experience building web
                    applications, mobile apps, and AI solutions. My journey in
                    tech began during my studies at Bahir Dar University where I
                    graduated with a degree in Software Engineering in July
                    2023.
                  </p>

                  <p>
                    Since graduating, I've been working on diverse projects
                    spanning multiple domains. I've developed full-stack
                    applications using the MERN stack, created mobile
                    applications with Flutter, and implemented AI solutions for
                    real-world problems.
                  </p>

                  <p>
                    I'm particularly passionate about using technology to solve
                    practical problems, especially in areas like agriculture
                    where AI can make a significant impact in developing
                    regions.
                  </p>

                  <h2>My Approach</h2>
                  <p>
                    I believe that the best software is built with both
                    technical excellence and user empathy. I'm passionate about
                    creating solutions that not only work well but are also
                    intuitive and accessible to users with varying levels of
                    technical expertise.
                  </p>

                  <p>My technical philosophy includes:</p>

                  <ul>
                    <li>
                      <strong>User-Centric Design</strong>: Building with the
                      end-user in mind first and foremost.
                    </li>
                    <li>
                      <strong>Clean, Maintainable Code</strong>: Writing code
                      that's easy to understand and extend.
                    </li>
                    <li>
                      <strong>Performance Optimization</strong>: Ensuring
                      applications run efficiently on all devices.
                    </li>
                    <li>
                      <strong>Continuous Learning</strong>: Staying current with
                      industry trends and best practices.
                    </li>
                  </ul>

                  <h2>Professional Experience</h2>

                  <div className="mb-8 border-l-4 border-blue-500 pl-4">
                    <a
                      href="https://www.amharabank.com.et/"
                      className="text-2xl font-bold text-blue-600 "
                      target="_blank"
                    >
                   Amhara Bank
                    </a>
                    <p className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                      {" "}
                      Software Developer. 2023 - Present
                    </p>
                    <p>
                      Developing web applications using the MERN stack (MongoDB,
                      Express, React, Node.js). Creating mobile applications
                      with Flutter and Dart. Implementing AI/ML solutions using
                      Python, TensorFlow, and related technologies.
                    </p>
                  </div>

                  <div className="mb-8 border-l-4 border-blue-500 pl-4">
                    <h3 className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                      Software Engineering Intern
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tech Startup • 2022 - 2023
                    </p>
                    <p>
                      Assisted in developing features for web and mobile
                      applications. Participated in code reviews and agile
                      development processes. Gained hands-on experience with
                      industry-standard development workflows.
                    </p>
                  </div>

                  <h2>Education</h2>
                  <div className="mb-8 border-l-4 border-blue-500 pl-4">
                    <a
                      href={"https://10academy.org/"}
                      className="text-2xl font-bold text-blue-600 "
                      target="_blank"
                    >
                      10 Academy
                    </a>
                    <p className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                      Remote Education • Graduated November 2024
                    </p>
                    <p>
                      3-month Intensive Program, which included 12 weeks of
                      project-based training with essential topics in Machine
                      Learning Engineering, Data Engineering, and Financial
                      Analysis for the fintech sector in Ethiopia.
                    </p>
                  </div>

                  <div className="mb-8 border-l-4 border-blue-500 pl-4">
                    <a
                      href={"https://www.bdu.edu.et/bit/"}
                      className="text-2xl font-bold text-blue-600 "
                      target="_blank"
                    >
                      Bahir Dar University
                    </a>

                    <p className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                      Software Engineering • Graduated July 2023
                    </p>
                    <p>
                      Comprehensive curriculum covering software development,
                      database management, algorithms, computer networks, and
                      software engineering principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}