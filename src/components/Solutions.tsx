import React from 'react';
import { Database, BarChart, Layout, MessageSquare, Zap, Shield } from 'lucide-react';

export default function Solutions() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language to SQL",
      description: "Transform plain English queries into precise SQL statements automatically."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Get instant insights with dynamic visualizations and real-time data processing."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Custom Dashboards",
      description: "Create intuitive dashboards tailored to your team's specific needs."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Connect seamlessly with your existing databases and data warehouses."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Insights",
      description: "Let AI discover patterns and anomalies in your data automatically."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with major security standards."
    }
  ];

  return (
    <div id="solutions" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            OpsAI Platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your operations with our flagship AI-powered platform that turns
            complex data into actionable insights.
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