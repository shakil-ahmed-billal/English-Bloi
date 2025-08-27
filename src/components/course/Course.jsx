"use client";

import { useState } from "react";
import { FiArrowLeft, FiCheckCircle, FiChevronDown, FiChevronRight, FiSearch, FiPlay, FiBookOpen, FiClock, FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";
import course from "../../../public/course.json";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Dialog, DialogContent } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import Player from "../videos/Player";

const getTotalLessons = (course) => course.reduce((acc, sec) => acc + sec.videos.length, 0);
const getCompletedLessons = (course) => 0; // Placeholder, implement completion logic as needed

const Course = () => {
  const [videoInfo, setVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  // For demo, use first section/lesson as current
  const currentSection = course[activeIndex] || course[0];
  const currentLesson = currentSection?.videos[0] || { title: "Select a lesson" };

  const totalLessons = getTotalLessons(course);
  const completedLessons = getCompletedLessons(course);
  const progressPercentage = (completedLessons / totalLessons) * 100 || 0;

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleVideoSelect = (info) => {
    console.log("Selected Video Info:", info);
    setVideo(info);
    setIsMobileDrawerOpen(false);
  };

  // Sidebar Section
  const Sidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'h-full' : 'h-[calc(100vh-2rem)] sticky top-4'}`}>
      <Card className="h-full border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-2xl py-0">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Header Section */}
          <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-blue-600/10 to-cyan-600/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-sm opacity-70"></div>
                <div className="relative p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
                  <FiBookOpen className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg tracking-tight">Course Progress</h3>
                <p className="text-slate-300 text-sm font-medium">Module {activeIndex !== null ? activeIndex + 1 : 1} of {course.length}</p>
              </div>
            </div>
            
            {/* Progress Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-white">Overall Progress</span>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 font-medium px-3">
                  {completedLessons}/{totalLessons}
                </Badge>
              </div>
              <div className="space-y-2">
                <Progress value={progressPercentage} className="h-3 bg-slate-800/50">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-700 ease-out shadow-sm" 
                    style={{ width: `${progressPercentage}%` }}
                  />
                </Progress>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-slate-400">{Math.round(progressPercentage)}% Complete</p>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <FiTrendingUp className="w-3 h-3" />
                    <span>On track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="p-4 border-b border-slate-700/30">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search lessons..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-200 font-medium"
              />
            </div>
          </div>

          {/* Course Sections */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-4 space-y-2">
              {course.map((section, index) => {
                const isActive = activeIndex === index;
                const filteredVideos = section.videos.filter(v => 
                  v.title.toLowerCase().includes(search.toLowerCase())
                );
                if (search && filteredVideos.length === 0) return null;

                return (
                  <div key={index} className="group">
                    <Button
                      onClick={() => handleToggle(index)}
                      variant="ghost"
                      className={`w-full h-auto p-4 group/item justify-start rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-l-4 border-blue-500 shadow-lg hover:from-blue-600/25 hover:to-cyan-600/25'
                          : 'bg-slate-800/30 hover:bg-slate-800/50 border-l-4 border-transparent hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1 text-left min-w-0">
                        <div className={`p-2.5 rounded-lg transition-all duration-200 ${
                          isActive ? 'bg-blue-500/20 ring-2 ring-blue-500/20' : 'bg-slate-700/50 group-hover:bg-slate-700/60'
                        }`}>
                          <FiPlay className={`w-4 h-4 ${
                            isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-300'
                          }`} />
                        </div>
                        <div className="flex-1 flex-wrap min-w-0">
                          <p className={`font-semibold flex flex-wrap truncate leading-tight `}>{section.section}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-slate-400 font-medium">{section.videos.length} lessons</p>
                            {isActive && (
                              <Badge variant="outline" className="text-xs px-1.5 py-0.5 h-auto border-blue-400/30 text-blue-400">
                                Active
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className={`transition-transform duration-300 ${
                        isActive ? 'rotate-0' : '-rotate-90'
                      }`}>
                        <FiChevronDown className={`w-5 h-5 ${
                          isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-300'
                        }`} />
                      </div>
                    </Button>

                    {/* Improved Lessons List */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isActive ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      {isActive && (
                        <div className="ml-6 mr-2 space-y-1">
                          {filteredVideos.map((video, vidIdx) => (
                            <Button
                              key={vidIdx}
                              onClick={() => handleVideoSelect(video)}
                              variant="ghost"
                              className="w-full h-auto p-3 justify-start text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 group/item"
                            >
                              <div className="flex items-center gap-3 w-full">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover/item:bg-emerald-500/20 transition-colors ring-1 ring-emerald-500/20">
                                  <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                  <p className="font-medium truncate text-sm leading-tight">{video.title}</p>
                                  <div className="flex items-center gap-3 mt-1.5">
                                    <div className="flex items-center gap-1">
                                      <FiClock className="w-3 h-3 text-slate-500" />
                                      <span className="text-xs text-slate-500 font-medium">5 min</span>
                                    </div>
                                    <Badge variant="outline" className="text-xs px-1.5 py-0 h-auto border-slate-600/50 text-slate-400">
                                      Video
                                    </Badge>
                                  </div>
                                </div>
                                <div className="flex-shrink-0">
                                  <FiPlay className="w-4 h-4 text-slate-500 group-hover/item:text-blue-400 transition-colors" />
                                </div>
                              </div>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Footer */}
          <div className="p-4 border-t border-slate-700/30 bg-slate-800/30">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <FiUsers className="w-4 h-4" />
                <span className="font-medium">1.2k students</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <FiClock className="w-4 h-4" />
                <span className="font-medium">8h 30m total</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header - Matching UpSkillify Style */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-white tracking-tight truncate">
                {currentSection?.section || "Course Dashboard"}
              </h1>
              <p className="text-sm text-slate-400 font-medium hidden sm:block">
                Master the fundamentals with hands-on lessons
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="md:hidden border-slate-700/50 text-slate-300 hover:bg-slate-800/50 transition-colors rounded-xl font-medium"
            >
              <FiBookOpen className="w-4 h-4 mr-2" />
              Lessons
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Video Section */}
          <main className="lg:col-span-3 space-y-6">
            <Card className="py-0 bg-slate-900/95 backdrop-blur-xl border-slate-700/50 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Video Player */}
                <div className="relative">
                  {videoInfo ? (
                    <div className="aspect-video bg-black rounded-t-xl overflow-hidden">
                      <Player videoFile={videoInfo} />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/10 flex flex-col items-center justify-center text-center p-8 rounded-t-xl">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-30"></div>
                        <div className="relative w-20 h-20 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-700/50">
                          <FiPlay className="w-10 h-10 text-white ml-1" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Ready to Start Learning?</h3>
                      <p className="text-slate-300 max-w-md font-medium leading-relaxed">
                        Select a lesson from the course sidebar to begin your learning journey.
                      </p>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 min-w-0 space-y-3">
                      <h2 className="text-2xl font-bold text-white tracking-tight">
                        {videoInfo?.title || "Select a lesson to get started"}
                      </h2>
                      <p className="text-slate-300 leading-relaxed font-medium">
                        {videoInfo?.description || "Choose from our comprehensive course modules designed to take you from beginner to expert level."}
                      </p>
                    </div>
                    {videoInfo && (
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 font-medium">
                          <FiClock className="w-3 h-3 mr-1" />
                          5 min
                        </Badge>
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-medium">
                          <FiAward className="w-3 h-3 mr-1" />
                          Beginner
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {videoInfo && (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl">
                        <FiPlay className="w-4 h-4 mr-2" />
                        Continue Learning
                      </Button>
                      <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800/50 font-semibold rounded-xl transition-colors">
                        <FiCheckCircle className="w-4 h-4 mr-2" />
                        Mark as Complete
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Course Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-400">{totalLessons}</div>
                  <div className="text-sm text-slate-400 font-semibold">Total Lessons</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-emerald-400">{completedLessons}</div>
                  <div className="text-sm text-slate-400 font-semibold">Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/30 transition-colors">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-cyan-400">{Math.round(progressPercentage)}%</div>
                  <div className="text-sm text-slate-400 font-semibold">Progress</div>
                </CardContent>
              </Card>
            </div>
          </main>

          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <Sidebar />
          </aside>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Dialog open={isMobileDrawerOpen} onOpenChange={setIsMobileDrawerOpen}>
        <DialogContent className="fixed  bottom-0 h-[85vh] bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 rounded-t-2xl p-0 transition-all duration-300 shadow-2xl">
          <div className="flex items-center justify-between p-6 border-b border-slate-700/30">
            <h3 className="text-lg font-bold text-white tracking-tight">Course Lessons</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileDrawerOpen(false)}
              className="text-slate-400 hover:text-white rounded-xl transition-colors"
            >
              ✕
            </Button>
          </div>
          <div className="flex-1 overflow-hidden">
            <Sidebar isMobile />
          </div>
        </DialogContent>
      </Dialog>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb 0%, #0891b2 100%);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 rgba(30, 41, 59, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Course;