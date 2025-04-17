import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "IT Executive",
    company: "SK Khetan Group",
    period: "Fep 2023 - March 2023",
    description: "Worked on various IT projects, focusing on system optimization and user support"
  },
  {
    role: "Web Developer Intern",
    company: "MuskOwl", 
    period: "May 2022 - July 2022",
    description: "Assisted in developing web applications using React and Node.js, contributing to both front-end and back-end development"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 section-animate">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div 
              key={job.company} 
              className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
              <div className="text-blue-600 mb-2">{job.company}</div>
              <div className="text-gray-500 mb-4">{job.period}</div>
              <p className="text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}