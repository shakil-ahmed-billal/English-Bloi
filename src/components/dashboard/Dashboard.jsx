"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 pb-10">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold md:my-8 my-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Welcome back, Shakil Ahmed Billal 👋 <br />
                Ready for your next lesson?
            </h1>

            {/* Tabs */}
            <Tabs defaultValue="spanishEnglish" className="w-full">
                <TabsList className="bg-[#1e293b] dark:bg-[#121212] border border-white/10 rounded-t-lg mb-6">
                    <TabsTrigger
                        value="spanishEnglish"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white px-6 py-3 rounded-t-lg text-lg font-medium"
                    >
                        Spanish English
                    </TabsTrigger>
                    <TabsTrigger
                        value="onlineClasses"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white px-6 py-3 rounded-t-lg text-lg font-medium"
                    >
                        Online Classes
                    </TabsTrigger>
                </TabsList>

                {/* Spanish English Tab */}
                <TabsContent value="spanishEnglish">
                    <Card className="bg-[#1e293b] dark:bg-[#2d2d2d] border border-white/10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6 items-center px-6">
                            {/* Course Image */}
                            <img
                                src="/image/PuroPuri-English-Shikhi-Package-Banner-2.png"
                                alt="Course Banner"
                                className="w-full md:w-[40%] rounded-lg mb-6 md:mb-0"
                            />

                            {/* Course Info */}
                            <div className="flex-1">
                                <CardHeader className={"px-0"}>
                                    <CardTitle className="text-2xl text-cyan-400">
                                        Spanish English Course
                                    </CardTitle>
                                    <CardDescription className="text-white/80">
                                        Master both Spanish and English from scratch. Interactive lessons designed for quick learning.
                                    </CardDescription>
                                </CardHeader>

                                {/* Reviews and Rating Section */}
                                <div className="flex items-center gap-2 mt-4">
                                    <div className="flex items-center">
                                        {/* Display Rating Stars */}
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-gray-400" />
                                    </div>
                                    <p className="text-white/60 text-sm ml-2">4.0/5 (200 Reviews)</p>
                                </div>

                                {/* Reviews Section */}
                                <div className="mt-4">
                                    <div className="text-white/80 text-sm">
                                        <p>"Amazing course! I was able to learn both languages in just a few weeks." - John Doe</p>
                                        <p>"The course content is interactive and fun. Highly recommended!" - Jane Smith</p>
                                    </div>
                                    <p className="text-cyan-400 text-sm mt-2 cursor-pointer">View all reviews</p>
                                </div>

                                {/* Course Button */}
                                <CardFooter className="mt-6 px-0">
                                    <Link href="/course">
                                        <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 rounded-full text-lg py-3 px-6 transition-all duration-300">
                                            🚀 Start Learning
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                {/* Online Classes Tab */}
                <TabsContent value="onlineClasses">
                    <Card className="bg-[#1e293b] dark:bg-[#2d2d2d] border border-white/10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6 items-center p-6">
                            <img
                                src="/image/PuroPuri-English-Shikhi-Package-Banner-2.png"
                                alt="Online Class"
                                className="w-full md:w-[40%] rounded-lg mb-6 md:mb-0"
                            />
                            <div className="flex-1">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-cyan-400">
                                        Live Online Classes
                                    </CardTitle>
                                    <CardDescription className="text-white/80">
                                        Join live sessions with expert mentors. Interactive and
                                        engaging classes for real-time learning.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-6">
                                    <Link href="/course">
                                        <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 rounded-full text-lg py-3 px-6 transition-all duration-300">
                                            🎯 Join Now
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Dashboard;
