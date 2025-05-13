
import { title } from 'process';
import React from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "NextJs", "JavaScript", "TypeScript", "Dart","Flutter", "Shadcn UI", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express","Python","RESTful APIs"]
  },
  {
    title:"Database",
    skills: ["MySql", "PostgreSql", "MongoDB"]
  },
  {
    title: "AI & ML",
    skills: ["Python", "TensorFlow", "Machine Learning", "Computer Vision", "Data Analysis", "Prediction Models"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker","VS Code", "Postman","Jupyter Notebook"]
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With experience in full-stack development, mobile applications, and AI/ML projects, 
            here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
