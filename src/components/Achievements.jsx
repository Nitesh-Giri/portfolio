import React from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: "Gold Medal",
    issuer: "Pacific University Udaipur",
    date: "2023",
    description: "Received gold medal for outstanding academic performance",
    image: "/assets/achievements/gold-medal.jpeg"
  },
  {
    title: "CSE Section of the Year 2024",
    issuer: "Lovely Professional University",
    date: "2024",
    description: "Recognized as the best section in the Computer Science department for the year 2024",
    image: "/assets/achievements/cse-section.png"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 section-animate">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <Trophy className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title} 
              className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full max-h-[300px] object-contain mb-4 rounded-md shadow-sm mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <div className="text-blue-600 mb-1">{achievement.issuer}</div>
              <div className="text-gray-500 mb-2">{achievement.date}</div>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
