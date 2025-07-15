"use client";

import React from 'react';

// Feature data
const features = [
  {
    badge: 'Lifestyle',
    badgeColor: 'bg-blue-200 text-blue-700',
    title: 'AI Personalization',
    description: 'Our AI system, designed according to your learning style, will guide you, challenge you, and track your progress so you never get lost.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#E0E7FF"/>
        <path d="M24 14l4 12h-8l4-12z" fill="#6366F1"/>
        <circle cx="24" cy="32" r="2" fill="#6366F1"/>
      </svg>
    ),
    bg: 'bg-blue-50'
  },
  {
    badge: 'Mentorship',
    badgeColor: 'bg-purple-200 text-purple-700',
    title: '1:1 Mentorship',
    description: 'A team of skilled mentors will be by your side. They will personally plan and guide you to reach your goals, answer your questions, and provide tailored support.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#F3E8FF"/>
        <rect x="18" y="28" width="12" height="4" rx="2" fill="#A21CAF"/>
        <rect x="22" y="16" width="4" height="12" rx="2" fill="#A21CAF"/>
      </svg>
    ),
    bg: 'bg-purple-50'
  },
  {
    badge: 'Live Sessions',
    badgeColor: 'bg-orange-200 text-orange-700',
    title: 'Support Sessions',
    description: 'Our system provides live classes 3 times a day. You can ask questions, share your screen, clarify doubts, and receive real-time help, anytime you need.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#FFE4E6"/>
        <rect x="16" y="28" width="16" height="4" rx="2" fill="#F43F5E"/>
        <rect x="20" y="16" width="8" height="12" rx="2" fill="#F43F5E"/>
      </svg>
    ),
    bg: 'bg-pink-50'
  },
  {
    badge: 'Live Sessions',
    badgeColor: 'bg-orange-200 text-orange-700',
    title: 'Support Sessions',
    description: 'Our system provides live classes 3 times a day. You can ask questions, share your screen, clarify doubts, and receive real-time help, anytime you need.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#FFE4E6"/>
        <rect x="16" y="28" width="16" height="4" rx="2" fill="#F43F5E"/>
        <rect x="20" y="16" width="8" height="12" rx="2" fill="#F43F5E"/>
      </svg>
    ),
    bg: 'bg-pink-50'
  },
  {
    badge: 'Live Sessions',
    badgeColor: 'bg-orange-200 text-orange-700',
    title: 'Support Sessions',
    description: 'Our system provides live classes 3 times a day. You can ask questions, share your screen, clarify doubts, and receive real-time help, anytime you need.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#FFE4E6"/>
        <rect x="16" y="28" width="16" height="4" rx="2" fill="#F43F5E"/>
        <rect x="20" y="16" width="8" height="12" rx="2" fill="#F43F5E"/>
      </svg>
    ),
    bg: 'bg-pink-50'
  },
  {
    badge: 'Live Sessions',
    badgeColor: 'bg-orange-200 text-orange-700',
    title: 'Support Sessions',
    description: 'Our system provides live classes 3 times a day. You can ask questions, share your screen, clarify doubts, and receive real-time help, anytime you need.',
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="24" fill="#FFE4E6"/>
        <rect x="16" y="28" width="16" height="4" rx="2" fill="#F43F5E"/>
        <rect x="20" y="16" width="8" height="12" rx="2" fill="#F43F5E"/>
      </svg>
    ),
    bg: 'bg-pink-50'
  }
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-[#121212] transition-all">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500">
          The X Factor of This Bootcamp
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className={`rounded-3xl p-6 ${feature.bg} shadow-sm flex flex-col items-start transition-all duration-300`}>
              <span className={`px-4 py-1 rounded-full text-sm font-semibold mb-4 ${feature.badgeColor}`}>{feature.badge}</span>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
              <p className="text-gray-700 dark:text-black leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
