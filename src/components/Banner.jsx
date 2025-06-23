"use client";

import { useState } from "react";
import course from "../../public/course.json";
import Player from "./videos/Player";
import { FaFolderOpen } from "react-icons/fa";

const Banner = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleVideoSelect = (url) => {
    setVideoUrl(url);
    setIsMobileDrawerOpen(false); // Close drawer after selection
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold tracking-wide">🎓 My Course Platform</h1>
        <p className="text-sm mt-1">Learn and Grow at Your Own Pace </p>
        <p>kausar</p>
      </header>

      {/* Mobile Folder Icon Button */}
      <div className="md:hidden flex justify-end px-4 mt-4">
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
          onClick={() => setIsMobileDrawerOpen(true)}
        >
          <FaFolderOpen size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {/* Sidebar (visible only on md+) */}
        <aside className="hidden md:block md:col-span-1 bg-white rounded-lg shadow-md p-4 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">📁 Course Sections</h2>

          {course.map((section, index) => (
            <div key={index} className="border rounded-md overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center px-4 py-2 text-left bg-gray-100 hover:bg-blue-100 transition"
              >
                <span className="font-medium text-gray-800">{section.section}</span>
                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>

              {activeIndex === index && (
                <ul className="bg-white px-6 py-2 space-y-2">
                  {section.videos.map((video, vidIdx) => (
                    <li
                      key={vidIdx}
                      onClick={() => handleVideoSelect(video.link)}
                      className="cursor-pointer text-sm text-blue-700 hover:text-blue-900 hover:underline transition"
                    >
                      🎬 {video.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Video Panel */}
        <main className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          {videoUrl ? (
            <>
              <div className="w-full aspect-video mb-6">
                <Player videoUrl={videoUrl} />
              </div>

              <div className="w-full flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  ⏯️ Play / Pause
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
                  ⏪ Rewind 10s
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
                  ⏩ Forward 10s
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  onClick={() => setVideoUrl(null)}
                >
                  ❌ Close Video
                </button>
              </div>
            </>
          ) : (
            <div className="text-gray-500 text-center text-lg">
              📺 Select a video from the folder to begin.
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer Slider */}
      {isMobileDrawerOpen && (
        <div className="fixed bottom-0 left-0 right-0 h-[60vh] bg-white z-50 rounded-t-2xl shadow-2xl p-4 overflow-y-auto transition-all">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Course Sections</h3>
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="text-gray-600 text-xl hover:text-red-500"
            >
              ✕
            </button>
          </div>

          {/* Drawer Content */}
          {course.map((section, index) => (
            <div key={index} className="border rounded-md mb-3 overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-blue-100 transition"
              >
                <span className="font-medium text-gray-800">{section.section}</span>
                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>

              {activeIndex === index && (
                <ul className="bg-white px-6 py-2 space-y-2">
                  {section.videos.map((video, vidIdx) => (
                    <li
                      key={vidIdx}
                      onClick={() => handleVideoSelect(video.link)}
                      className="cursor-pointer text-sm text-blue-700 hover:text-blue-900 hover:underline transition"
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

export default Banner;
