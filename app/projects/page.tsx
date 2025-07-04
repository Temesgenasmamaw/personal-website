'use client'

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  category: string;
}

const projects: Project[] = [
  // Web Apps
  {
    id: 1,
    title: "Quiz Application",
    description: "A full-stack MERN application for creating and taking quizzes. Features include user authentication, quiz creation tools, leaderboards, and real-time scoring.",
    image: "https://www.codewithrandom.com/wp-content/uploads/2022/08/Thumbnail-Bhai-6.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "/projects/1",
    category: "Web App"
  },
  {
    id: 2,
    title: "Course Selling Platform",
    description: "A comprehensive MERN stack platform for instructors to create and sell courses online, with features like content management, payment integration, and student progress tracking.",
    image: "/images/course_selling.png",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "/projects/2",
    category: "Web App"
  },
  // Mobile Apps
  {
    id: 3,
    title: "Fintech Mobile App",
    description: "A Flutter-based mobile application for financial management with features like transaction tracking, budget planning, and financial analytics dashboard.",
    image: "https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2020/03/8d2dbcf715a859b51068a726f75d1bc9-1024x768.png",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    link: "/projects/3",
    category: "Mobile App"
  },
  {
    id: 4,
    title: "Grocery Mobile App",
    description: "A Flutter-based mobile app for seamless grocery shopping, featuring barcode scanning, smart shopping lists, price comparisons, and personalized deals. Manage your pantry, track expenses, and get AI-powered recommendations for meal planning.",
    image: "https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/sites/3/2022/04/03170556/app-like-instacart-development-min.jpg",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    link: "/projects/3",
    category: "Mobile App"
  },

  // AI projects
  {
    id: 5,
    title: "Plant Disease Classification",
    description: "AI-based application that uses computer vision to identify plant diseases from images. Implemented using TensorFlow and deployed as both a web and mobile application.",
    image: "https://globalowls.com/wp-content/uploads/2025/04/What-is-an-AI-Plant-Disease-Identifier.jpg",
    tech: ["Python", "TensorFlow", "CNN", "Flutter", "RESTful API"],
    link: "/projects/4",
    category: "AI & ML"
  },
  {
    id: 6,
    title: "Crop Production Prediction",
    description: "Machine learning system that predicts crop yield based on various parameters like soil quality, weather conditions, and historical data to help farmers optimize their production.",
    image: "https://onlinelibrary.wiley.com/cms/asset/c488f845-17e2-42a6-ab7e-7e9254752b3f/js2022923-fig-0016-m.jpg",
    tech: ["Python", "Scikit-learn", "Pandas", "Data Analysis", "Regression Models"],
    link: "/projects/5",
    category: "AI & ML"
  },
  {
    id: 7,
    title: "Fraud Detection System",
    description: "AI-powered system that analyzes transaction patterns to detect and flag potentially fraudulent activities in real-time, helping businesses reduce financial losses.",
    image: "https://financialcrimeacademy.org/wp-content/uploads/2022/05/2-43-1024x576.jpg",
    tech: ["Python", "TensorFlow", "Anomaly Detection", "Data Mining", "Statistical Analysis"],
    link: "/projects/6",
    category: "AI & ML"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const categories = Array.from(new Set(projects.map(project => project.category)));
  const filteredProjects = filter ? projects.filter(project => project.category === filter) : projects;
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A collection of my work across various domains including web applications, 
                mobile apps, and AI/ML solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter */}
        <section className="py-8 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => setFilter(null)}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    filter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                        {project.category}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col items-start space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}