"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { 
    FaStar, 
    FaPlay, 
    FaUsers, 
    FaClock, 
    FaGraduationCap, 
    FaFire, 
    FaChartLine,
    FaTrophy
} from "react-icons/fa";
import { 
    FiArrowRight, 
    FiBookOpen, 
    FiTrendingUp, 
    FiAward,
    FiCalendar,
    FiTarget,
    FiZap,
    FiStar
} from "react-icons/fi";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
               
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Welcome Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="space-y-2">
                                <p className="text-blue-100 font-medium">Welcome back 👋</p>
                                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                    Shakil Ahmed Billal
                                </h1>
                                <p className="text-xl text-blue-100 max-w-2xl">
                                    Ready for your next lesson? Continue your learning journey and unlock new skills today.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                                    <FiTarget className="w-6 h-6 text-white mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-white">12</p>
                                    <p className="text-sm text-blue-100">Completed</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                                    {/* <FiFire className="w-6 h-6 text-orange-300 mx-auto mb-2" /> */}
                                    <p className="text-2xl font-bold text-white">7</p>
                                    <p className="text-sm text-blue-100">Day Streak</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                                    <FaTrophy className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-white">3</p>
                                    <p className="text-sm text-blue-100">Certificates</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                                    <FiZap className="w-6 h-6 text-green-300 mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-white">85%</p>
                                    <p className="text-sm text-blue-100">Accuracy</p>
                                </div>
                            </div>
                        </div>

                        {/* Progress Card */}
                        <div className="lg:justify-self-end w-full max-w-sm">
                            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-0 shadow-xl">
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <div className="relative inline-flex">
                                            <svg className="w-24 h-24 transform -rotate-90">
                                                <circle
                                                    cx="48"
                                                    cy="48"
                                                    r="40"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="transparent"
                                                    className="text-gray-200 dark:text-gray-700"
                                                />
                                                <circle
                                                    cx="48"
                                                    cy="48"
                                                    r="40"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="8"
                                                    fill="transparent"
                                                    strokeDasharray={`${2 * Math.PI * 40}`}
                                                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.75)}`}
                                                    className="transition-all duration-500"
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#3B82F6" />
                                                        <stop offset="100%" stopColor="#8B5CF6" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-gray-900 dark:text-white">75%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Weekly Goal</span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">15/20 lessons</span>
                                        </div>
                                        <Progress value={75} className="h-2" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                            5 more lessons to reach your weekly goal! 🎯
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            
             {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}


            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Course Tabs */}
                <Tabs defaultValue="spanishEnglish" className="w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Courses</h2>
                            <p className="text-gray-600 dark:text-gray-400">Continue learning where you left off</p>
                        </div>
                        <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                            <TabsTrigger
                                value="spanishEnglish"
                                className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white px-6 py-3 rounded-lg font-medium transition-all"
                            >
                                <FiBookOpen className="w-4 h-4 mr-2" />
                                Language Course
                            </TabsTrigger>
                            <TabsTrigger
                                value="onlineClasses"
                                className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white px-6 py-3 rounded-lg font-medium transition-all"
                            >
                                <FaPlay className="w-4 h-4 mr-2" />
                                Live Classes
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Spanish English Course */}
                    <TabsContent value="spanishEnglish" className="space-y-8">
                        <Card className="p-0 overflow-hidden bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                                {/* Course Image */}
                                <div className="lg:col-span-2 relative">
                                    <img
                                        src="/image/PuroPuri-English-Shikhi-Package-Banner-2.png"
                                        alt="Spanish English Course"
                                        className="w-full h-64 lg:h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-emerald-500 hover:bg-emerald-500 text-white border-0">
                                            <FiStar className="w-3 h-3 mr-1" />
                                            Premium
                                        </Badge>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center gap-2 text-sm">
                                            <FaClock className="w-4 h-4" />
                                            <span>8 weeks • Self-paced</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="lg:col-span-3 p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                Spanish English Mastery Course
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                Master both Spanish and English with interactive lessons designed for accelerated learning.
                                            </p>
                                            
                                            {/* Rating */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">4.8</span>
                                                <span className="text-sm text-gray-500">•</span>
                                                <span className="text-sm text-gray-600 dark:text-gray-400">2,130 students</span>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                            42 lessons
                                        </Badge>
                                    </div>

                                    {/* Course Progress */}
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Course Progress</span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">12 of 42 completed</span>
                                        </div>
                                        <Progress value={28} className="h-2 mb-2" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Next: Intermediate Conversation Practice</p>
                                    </div>

                                    {/* Key Features */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <FiBookOpen className="w-4 h-4 text-blue-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Interactive Lessons</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiAward className="w-4 h-4 text-purple-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Certificate Included</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaUsers className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Community Access</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaClock className="w-4 h-4 text-orange-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Lifetime Access</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link href="/course" className="flex-1">
                                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-6 text-lg">
                                                <FaPlay className="w-4 h-4 mr-2" />
                                                Continue Learning
                                            </Button>
                                        </Link>
                                        <Button variant="outline" className="px-8 py-6 text-lg">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Live Classes */}
                    <TabsContent value="onlineClasses" className="space-y-8">
                        <Card className="overflow-hidden bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                                {/* Class Image */}
                                <div className="lg:col-span-2 relative">
                                    <img
                                        src="/image/PuroPuri-English-Shikhi-Package-Banner-2.png"
                                        alt="Live Online Classes"
                                        className="w-full h-64 lg:h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-red-500 hover:bg-red-500 text-white border-0 animate-pulse">
                                            <div className="w-2 h-2 bg-white rounded-full mr-2" />
                                            Live Now
                                        </Badge>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
                                            <p className="text-sm font-medium mb-1">Next Live Session</p>
                                            <p className="text-lg font-bold">Today, 2:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Class Content */}
                                <div className="lg:col-span-3 p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                Live Interactive Classes
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                Join live sessions with expert mentors. Real-time interaction and personalized feedback.
                                            </p>
                                        </div>
                                        <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-100">
                                            18 spots left
                                        </Badge>
                                    </div>

                                    {/* Upcoming Session */}
                                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src="/api/placeholder/48/48" alt="Instructor" />
                                                <AvatarFallback>MR</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">Maria Rodriguez</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Expert Language Instructor</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <FiCalendar className="w-4 h-4" />
                                                <span>Advanced Conversation</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaClock className="w-4 h-4" />
                                                <span>60 minutes</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaUsers className="w-4 h-4" />
                                                <span>32 students</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Class Features */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <FaUsers className="w-4 h-4 text-blue-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Interactive Sessions</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaGraduationCap className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Expert Mentors</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiCalendar className="w-4 h-4 text-purple-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Flexible Schedule</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiAward className="w-4 h-4 text-orange-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Completion Certificate</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link href="/course" className="flex-1">
                                            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-6 text-lg">
                                                <FaPlay className="w-4 h-4 mr-2" />
                                                Join Live Class
                                            </Button>
                                        </Link>
                                        <Button variant="outline" className="px-8 py-6 text-lg">
                                            View Schedule
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;