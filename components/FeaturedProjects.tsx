import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredProjects = [
  // Web Apps
  {
    id: 1,
    title: "Quiz Application",
    description: "A full-stack MERN application for creating and taking quizzes. Features include user authentication, quiz creation tools, leaderboards, and real-time scoring.",
    image: "https://www.codewithrandom.com/wp-content/uploads/2022/08/Thumbnail-Bhai-6.png",
    tech: ["NextJs", "Express.js", "MongoDB", "JWT"],
    link: "/projects/1"
  },
  {
    id: 2,
    title: "Course Selling Platform",
    description: "A comprehensive MERN stack platform for instructors to create and sell courses online, with features like payment integration",
    image: "/images/course_selling.png",
    tech: ["Nextjs", "Redux",  "Express", "MongoDB", "Stripe"],
    link: "/projects/2",
    category: "Web App"
  },

  // Mobile Apps
  {
    id: 3,
    title: "Fintech Mobile App",
    description: "A Flutter-based mobile application for financial management with features like transaction tracking, budget planning, and financial analytics dashboard.",
    image: "https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2020/03/8d2dbcf715a859b51068a726f75d1bc9-1024x768.png",
    tech: ["Flutter", "Dart", "REST APIs"],
    link: "/projects/2"
  },
  {
    id: 4,
    title: "Groccery Mobile App",
    description: "A Flutter-based mobile application for financial management with features like transaction tracking, budget planning, and financial analytics dashboard.",
    image: "https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/sites/3/2022/04/03170556/app-like-instacart-development-min.jpg",
    tech: ["Flutter", "Dart",  "REST APIs"],
    link: "/projects/3"
  },
  // AI projects
  {
    id: 5,
    title: "Plant Disease Classification",
    description: "AI-based application that uses computer vision to identify plant diseases from images. Implemented using TensorFlow and deployed as both a web and mobile application.",
    image: "https://globalowls.com/wp-content/uploads/2025/04/What-is-an-AI-Plant-Disease-Identifier.jpg",
    tech: ["Python", "TensorFlow", "CNN", "Flutter"],
    link: "/projects/4"
  },
  {
    id: 6,
    title: "Crop production prediction",
    description: "Machine learning system that predicts crop yield based on various parameters like soil quality, weather conditions, and historical data to help farmers optimize their production.",
    image: "https://onlinelibrary.wiley.com/cms/asset/c488f845-17e2-42a6-ab7e-7e9254752b3f/js2022923-fig-0016-m.jpg",
    tech: ["Python", "Pandas", "Scikit learn", "Data Analysis", "Fast API"],
    link: "/projects/5"
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

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Take a look at some of the applications and systems I've built throughout my career.
          </p>
        </div>
        
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900" >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;