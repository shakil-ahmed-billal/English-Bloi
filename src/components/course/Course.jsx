"use client";

import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import course from "../../../public/course.json";
import Player from "../videos/Player";
import { Button } from "../ui/button";

const Course = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleVideoSelect = (url) => {
    setVideoUrl(url);
    setIsMobileDrawerOpen(false);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Mobile Button */}
      <div className="md:hidden flex justify-end px-4 mt-4">
        <Button
          onClick={() => setIsMobileDrawerOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500"
        >
          <FaFolderOpen size={20} />
        </Button>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Video Section */}
        <main className="md:col-span-2 lg:col-span-3 rounded-lg bg-[#1E293B] shadow-md p-6 flex flex-col items-center">
          {videoUrl ? (
            <div className="w-full aspect-video mb-6">
                <Player videoUrl={videoUrl} />
              </div>
          ) : (
            <div className="text-white/70 text-center text-lg">
              📺 Select a video from the course folder to start learning.
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 rounded-lg bg-[#1E293B] shadow-md p-4 space-y-4">
          <h2 className="text-xl font-semibold text-cyan-400">📁 Course Sections</h2>

          {course.map((section, index) => (
            <div key={index} className="border border-white/10 rounded-md overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center px-4 py-2 text-left bg-white/5 hover:bg-white/10 transition"
              >
                <span className="font-medium text-white">{section.section}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <ul className="bg-white/5 px-6 py-2 space-y-2">
                  {section.videos.map((video, vidIdx) => (
                    <li
                      key={vidIdx}
                      onClick={() => handleVideoSelect(video.link)}
                      className="cursor-pointer text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition"
                    >
                      🎬 {video.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
      </div>

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed bottom-0 left-0 right-0 h-[60vh] bg-[#1E293B] z-50 rounded-t-2xl shadow-2xl p-4 overflow-y-auto transition-all">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-cyan-400">Course Sections</h3>
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="text-white text-xl hover:text-red-500"
            >
              ✕
            </button>
          </div>

          {course.map((section, index) => (
            <div key={index} className="border border-white/10 rounded-md mb-3 overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center px-4 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                <span className="font-medium text-white">{section.section}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <ul className="bg-white/5 px-6 py-2 space-y-2">
                  {section.videos.map((video, vidIdx) => (
                    <li
                      key={vidIdx}
                      onClick={() => handleVideoSelect(video.link)}
                      className="cursor-pointer text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition"
                    >
                      🎬 {video.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Course;
