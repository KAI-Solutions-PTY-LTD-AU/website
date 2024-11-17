import React from 'react';
import { Network, Lock, Zap, Share2, Search, Cloud } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Connected Knowledge",
      description: "Create bidirectional links between notes and watch your knowledge graph grow organically."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure by Design",
      description: "Your data is encrypted before it leaves your device, ensuring complete privacy."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Enhancement",
      description: "Let AI suggest connections, summarize content, and generate insights from your notes."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Selective Sharing",
      description: "Share specific notes or entire knowledge spaces with team members or the public."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Semantic Search",
      description: "Find not just keywords, but concepts and related ideas across your knowledge base."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Sync Everywhere",
      description: "Access your knowledge base from any device, with real-time synchronization."
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features that Empower Your Thinking
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every feature is designed to help you capture, connect, and cultivate your ideas
            with unprecedented ease and security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}