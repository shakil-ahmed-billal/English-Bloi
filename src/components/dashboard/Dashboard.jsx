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

const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Welcome back, Shakil Ahmed Billal 👋 <br />
                Ready for your next lesson?
            </h1>

            {/* Tabs */}
            <Tabs defaultValue="spanishEnglish" className="w-full">
                <TabsList className="bg-[#1e293b] border border-white/10">
                    <TabsTrigger
                        value="spanishEnglish"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white"
                    >
                        Spanish English
                    </TabsTrigger>
                    <TabsTrigger
                        value="onlineClasses"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white"
                    >
                        Online Classes
                    </TabsTrigger>
                </TabsList>

                {/* Spanish English Tab */}
                <TabsContent value="spanishEnglish">
                    <Card className="bg-[#1e293b] border border-white/10">
                        <div className="flex flex-col md:flex-row gap-6 items-center p-4">
                            <img
                                src="/image/PuroPuri-English-Shikhi-Package-Banner-2.png"
                                alt="Course Banner"
                                className="w-full md:w-[40%] rounded-lg"
                            />
                            <div className="flex-1">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-cyan-400">
                                        Spanish English Course
                                    </CardTitle>
                                    <CardDescription className="text-white/80">
                                        Master both Spanish and English from scratch. Interactive
                                        lessons designed for quick learning.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-4">
                                    <Link href="/course">
                                        <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500">
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
                    <Card className="bg-[#1e293b] border border-white/10">
                        <div className="flex flex-col md:flex-row gap-6 items-center p-4">
                            <img
                                src="/image/PuroPuri-English-Shikhi-Package-Banner-2.png"
                                alt="Online Class"
                                className="w-full md:w-[40%] rounded-lg"
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
                                <CardFooter className="mt-4">
                                    <Link href="/course">
                                        <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500">
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
