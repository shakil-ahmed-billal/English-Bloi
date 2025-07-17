'use client'
import { useState } from "react";


const faqs = [
  {
    icon: (
      <span className="inline-block text-2xl mr-2">🔎</span>
    ),
    question: 'Who is this course for?',
    answer:
      'If you are starting from scratch or have tried learning web development but struggled to get a job, this course is for you. Whether you are from a CSE background or not, if you are serious about building a career in web development, this course will guide you step by step.',
  },
  {
    icon: <span className="inline-block text-2xl mr-2">💼</span>,
    question: 'How do you guarantee a job or internship?',
    answer: 'We provide personalized mentorship, real-world projects, and job preparation support to maximize your chances of landing a job or internship.',
  },
  {
    icon: <span className="inline-block text-2xl mr-2">🤖</span>,
    question: 'Will AI take away developer jobs?',
    answer: 'AI will change the way developers work, but skilled developers will always be in demand to build, maintain, and improve technology.',
  },
  {
    icon: <span className="inline-block text-2xl mr-2">🎓</span>,
    question: 'Can non-CSE or non-major background students get a job or internship in web development?',
    answer: 'Absolutely! Our course is designed for everyone, regardless of academic background. Dedication and practice are key.',
  },
  {
    icon: <span className="inline-block text-2xl mr-2">🕒</span>,
    question: 'Can I do a job or internship while studying?',
    answer: 'Yes, many of our students balance their studies with jobs or internships. We help you manage your time and priorities.',
  },
  {
    icon: <span className="inline-block text-2xl mr-2">📚</span>,
    question: 'Can I complete this course while studying and taking exams?',
    answer: 'Yes! The course is flexible and designed to fit around your academic schedule.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 px-2 md:px-0 flex justify-center">
      <div className="w-11/12 rounded-3xl bg-pink-50 dark:bg-[#23182b] shadow-lg p-4 md:p-8 transition-colors">
        {/* Expanded Main Question */}
        <div className="rounded-2xl bg-pink-100 dark:bg-[#2d203a] p-6 mb-4 flex flex-col gap-2 relative">
          <div className="flex items-center mb-2">
            {faqs[0].icon}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{faqs[0].question}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg">{faqs[0].answer}</p>
          <button
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-[#3a294a] text-xl text-gray-700 dark:text-gray-200 shadow hover:bg-gray-100 dark:hover:bg-[#4a3560] transition"
            aria-label="Collapse"
            onClick={() => setOpenIndex(-1)}
          >
            –
          </button>
        </div>
        {/* Accordion for other questions */}
        <div className="divide-y divide-pink-200 dark:divide-[#3a294a]">
          {faqs.slice(1).map((faq, idx) => {
            const realIdx = idx + 1;
            const isOpen = openIndex === realIdx;
            return (
              <div key={realIdx} className="py-4">
                <button
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : realIdx)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.icon}
                    {faq.question}
                  </span>
                  <span className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-[#3a294a] text-xl text-gray-700 dark:text-gray-200 shadow">
                    {isOpen ? '–' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-2 pl-10 text-gray-700 dark:text-gray-200 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Call to Action Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-gray-900 dark:bg-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-800 dark:hover:bg-fuchsia-700 transition">
            Start Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;