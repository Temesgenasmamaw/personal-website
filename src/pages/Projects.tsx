
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
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "/projects/1",
    category: "Web App"
  },
  {
    id: 2,
    title: "AI Task Management",
    description: "An AI-powered task management application that helps users organize their work and prioritize tasks based on machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    link: "/projects/2",
    category: "AI & ML"
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A scalable real-time chat application supporting one-on-one and group conversations with features like read receipts and rich media sharing.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React", "WebSockets", "Node.js", "Redis", "AWS"],
    link: "/projects/3",
    category: "Web App"
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "A comprehensive inventory management system designed for small to medium-sized businesses, with barcode scanning, reporting, and supplier management.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React", "TypeScript", "Node.js", "MySQL", "Redux"],
    link: "/projects/4",
    category: "Enterprise"
  },
  {
    id: 5,
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress with social features and integration with wearable devices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React Native", "Firebase", "Redux", "GraphQL", "Expo"],
    link: "/projects/5",
    category: "Mobile App"
  },
  {
    id: 6,
    title: "Customer Analytics Dashboard",
    description: "A data visualization dashboard for businesses to track customer behavior, sales metrics, and marketing campaign performance in real-time.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL", "AWS"],
    link: "/projects/6",
    category: "Data Viz"
  }
];

const Projects = () => {
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
                mobile apps, and enterprise solutions.
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
                    
                    <a
                      href={project.link}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      View Project →
                    </a>
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
};

export default Projects;
