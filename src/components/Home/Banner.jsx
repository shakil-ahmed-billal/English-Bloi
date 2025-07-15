import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="w-full mx-auto py-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-black transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 dark:text-yellow-400">
            Unlock Your <span className="text-yellow-400">Skills</span> <br />
            with <span className="text-yellow-400">UpSkillify</span>
          </h1>
          <p className="text-lg text-white/90 mb-8 dark:text-gray-300">
            Learn English, Programming, and more. Build your future with practical skills taught by experts.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6">
            <Link href="/dashboard">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black transition-colors duration-300 shadow-lg">
              Explore Courses
            </Button>
            </Link>
            <Link href="/dashboard">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-300">
              Join Now
            </Button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/image/image-1.webp"
            alt="Learning Illustration"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
