"use client";

import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiArrowLeft, FiCheckCircle, FiSearch } from "react-icons/fi";
import course from "../../../public/course.json";
import Player from "../videos/Player";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Card, CardContent } from "../ui/card";

const getTotalLessons = (course) => course.reduce((acc, sec) => acc + sec.videos.length, 0);
const getCompletedLessons = (course) => 0; // Placeholder, implement completion logic as needed

const Course = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  // For demo, use first section/lesson as current
  const currentSection = course[activeIndex] || course[0];
  const currentLesson = currentSection?.videos[0] || { title: "Select a lesson" };

  const totalLessons = getTotalLessons(course);
  const completedLessons = getCompletedLessons(course);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleVideoSelect = (url) => {
    setVideoUrl(url);
    setIsMobileDrawerOpen(false);
  };

  // Sidebar Section
  const Sidebar = ({ isMobile = false }) => (
    <Card className={`rounded-2xl shadow-xl bg-[#18122B]/80 dark:bg-[#232136] border-0 ${isMobile ? '' : 'p-0'} w-full h-full`}>
      <CardContent className={isMobile ? 'p-0' : 'p-0'}>
        {/* Progress Bar */}
        <div className="px-4 pt-4 pb-2 sticky top-0 z-10 bg-[#18122B]/80 dark:bg-[#232136] rounded-t-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-200 font-medium">Running Module : {activeIndex !== null ? activeIndex + 1 : 1}</span>
            <span className="text-xs text-green-400 font-bold">{completedLessons}/{totalLessons}</span>
          </div>
          <div className="w-full h-2 bg-fuchsia-900/30 rounded-full overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-fuchsia-500 to-green-400 rounded-full transition-all" style={{ width: `${(completedLessons / totalLessons) * 100 || 0}%` }}></div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 py-2 sticky top-12 z-10 bg-[#18122B]/80 dark:bg-[#232136]">
          <div className="flex items-center gap-2 bg-fuchsia-900/20 rounded-lg px-3 py-2">
            <FiSearch className="text-fuchsia-400" />
            <input
              type="text"
              placeholder="Search Lesson"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-100 w-full placeholder:text-fuchsia-200"
            />
          </div>
        </div>
        {/* Lessons List */}
        <nav className="flex flex-col gap-4 px-2 pb-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: isMobile ? '60vh' : '70vh' }}>
          {course.map((section, index) => {
            const isActive = activeIndex === index;
            const filteredVideos = section.videos.filter(v => v.title.toLowerCase().includes(search.toLowerCase()));
            if (search && filteredVideos.length === 0) return null;
            return (
              <div key={index} className="group">
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all
                    ${isActive
                      ? 'bg-gradient-to-r from-fuchsia-800 via-fuchsia-700 to-fuchsia-600 border-l-4 border-fuchsia-400 shadow-md'
                      : 'bg-fuchsia-900/30 hover:bg-fuchsia-900/50 border-l-4 border-transparent'}
                    focus:outline-none focus:ring-2 focus:ring-fuchsia-400`}
                  aria-expanded={isActive}
                >
                  <span className={`font-semibold text-left flex-1 text-fuchsia-100 ${isActive ? 'text-fuchsia-200' : ''}`}>{section.section}</span>
                  <span className="ml-2 text-xl text-fuchsia-300">
                    {isActive ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} duration-300`}
                >
                  {isActive && (
                    <ul className="pl-8 pr-2 py-2 space-y-2">
                      {filteredVideos.map((video, vidIdx) => (
                        <li
                          key={vidIdx}
                          onClick={() => handleVideoSelect(video.link)}
                          className="cursor-pointer flex items-center gap-2 text-sm px-3 py-2 rounded-lg text-fuchsia-100 hover:bg-fuchsia-800/60 hover:text-green-300 transition"
                        >
                          <FiCheckCircle className="text-green-400" /> {video.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </nav>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#18122B] dark:bg-[#18122B] transition-colors">
      {/* Top Header */}
      <header className="sticky top-0 z-30 w-full bg-[#18122B] dark:bg-[#18122B] px-6 py-4 flex items-center gap-4 border-b border-fuchsia-900/40">
        <Button variant="ghost" size="icon" className="text-fuchsia-400 hover:bg-fuchsia-900/30">
          <FiArrowLeft size={22} />
        </Button>
        <h1 className="text-lg md:text-xl font-bold text-fuchsia-200 tracking-tight">{currentSection?.section || "Course Title"}</h1>
      </header>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6 px-2 md:px-6">
        {/* Video Section */}
        <main className="md:col-span-2 lg:col-span-3 flex flex-col gap-6">
          <Card className="rounded-2xl shadow-xl bg-[#232136] border-0">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                {videoUrl ? (
                  <div className="w-full aspect-video rounded-t-2xl overflow-hidden">
                    <Player videoUrl={videoUrl} />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center w-full aspect-video rounded-t-2xl bg-gradient-to-br from-fuchsia-900 via-fuchsia-800 to-fuchsia-700 text-fuchsia-200 text-xl font-semibold">
                    <span className="mb-2 text-3xl">📺</span>
                    Select a video from the course folder to start learning.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 h-[80vh] max-h-[80vh] overflow-y-auto custom-scrollbar">
          <Sidebar />
        </aside>
      </div>

      {/* Mobile Drawer */}
      <Dialog open={isMobileDrawerOpen} onOpenChange={setIsMobileDrawerOpen}>
        <DialogContent className="fixed bottom-0 left-0 right-0 h-[70vh] bg-[#232136] z-50 rounded-t-2xl shadow-2xl p-0 overflow-y-auto transition-all border-0">
          <div className="flex justify-between items-center mb-2 px-4 pt-4">
            <h3 className="text-lg font-bold text-fuchsia-200">Course Sections</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileDrawerOpen(false)}
              className="text-fuchsia-400 hover:text-red-500"
            >
              ✕
            </Button>
          </div>
          <div className="px-2 pb-4">
            <Sidebar isMobile />
          </div>
        </DialogContent>
      </Dialog>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #a21caf 0%, #f472b6 100%);
          border-radius: 8px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #a21caf #232136;
        }
      `}</style>
    </div>
  );
};

export default Course;
