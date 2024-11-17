import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To empower enterprises with intelligent solutions that transform raw data into actionable insights."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible with AI, making complex operations simple and intuitive."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Your success is our priority. We work closely with enterprises to deliver solutions that drive real business value."
    }
  ];

  return (
    <div id="about" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About K-AI Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're on a mission to revolutionize enterprise operations through
            innovative AI solutions that make complex processes simple and intuitive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}