import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto  py-5 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Unlock Your <span className="text-yellow-300">Skills</span> <br />
            with <span className="text-yellow-300">UpSkillify</span>
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Learn English, Programming, and more. Build your future with practical skills taught by experts.
          </p>

          <div className="flex gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Explore Courses
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
              Join Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/image/image-1.webp"
            alt="Learning Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
