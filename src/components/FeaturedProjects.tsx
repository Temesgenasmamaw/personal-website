
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: "Quiz Application",
    description: "A full-stack MERN application for creating and taking quizzes. Features include user authentication, quiz creation tools, leaderboards, and real-time scoring.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "/projects/1"
  },
  {
    id: 2,
    title: "Grocery Mobile App",
    description: "A Flutter-based mobile application for financial management with features like transaction tracking, budget planning, and financial analytics dashboard.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["Flutter", "Dart", "REST APIs"],
    link: "/projects/3"
  },
  {
    id: 3,
    title: "Fintech Mobile App",
    description: "A Flutter-based mobile application for financial management with features like transaction tracking, budget planning, and financial analytics dashboard.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs", "Material Design"],
    link: "/projects/2"
  },
  {
    id: 4,
    title: "Plant Disease Classification",
    description: "AI-based application that uses computer vision to identify plant diseases from images. Implemented using TensorFlow and deployed as both a web and mobile application.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["Python", "TensorFlow", "CNN", "Flutter", "RESTful API"],
    link: "/projects/3"
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
                
                <Link to={project.link}>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
