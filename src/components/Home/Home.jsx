import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { 
  FiPlay, 
  FiBookOpen, 
  FiUsers, 
  FiStar, 
  FiAward, 
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
  FiGlobe,
  FiClock,
  FiTarget,
  FiZap,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';
import { 
  FaGraduationCap, 
  FaRocket, 
  FaHeart, 
  FaChartLine,
  FaLanguage,
  FaCode,
  FaDesktop,
  FaPalette,
  FaCamera,
  FaMusic
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/20 hover:bg-white/20 text-white border-0 px-4 py-2 text-sm font-medium">
                  🚀 Join 50,000+ Students Worldwide
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Learn Skills That
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Matter Most
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                  Transform your career with expert-led courses. From coding to design, master in-demand skills with our interactive learning platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-6 px-8 text-lg rounded-xl shadow-lg">
                  <FiPlay className="w-5 h-5 mr-2" />
                  Start Learning Free
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 py-6 px-8 text-lg rounded-xl font-semibold">
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">50K+</p>
                  <p className="text-blue-100 text-sm">Active Students</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">300+</p>
                  <p className="text-blue-100 text-sm">Expert Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">4.9/5</p>
                  <p className="text-blue-100 text-sm">Student Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image/Video */}
            <div className="relative w-10/12 flex mx-auto  align-items-end justify-end">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 flex   align-items-end justify-end">
                <img 
                  src="/image/image-1.webp" 
                  alt="Learning Platform Preview" 
                  className="w-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 p-4 rounded-full shadow-lg">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
                  <FaRocket className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose UpSkillify?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide the most comprehensive learning experience with cutting-edge technology and expert instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiBookOpen className="w-8 h-8" />,
                title: "Expert-Led Courses",
                description: "Learn from industry professionals with years of real-world experience.",
                color: "bg-blue-500"
              },
              {
                icon: <FiUsers className="w-8 h-8" />,
                title: "Community Learning",
                description: "Join a vibrant community of learners and collaborate on projects.",
                color: "bg-green-500"
              },
              {
                icon: <FiZap className="w-8 h-8" />,
                title: "Interactive Content",
                description: "Hands-on projects and interactive exercises for better retention.",
                color: "bg-purple-500"
              },
              {
                icon: <FiAward className="w-8 h-8" />,
                title: "Certified Learning",
                description: "Earn industry-recognized certificates upon course completion.",
                color: "bg-orange-500"
              },
              {
                icon: <FiClock className="w-8 h-8" />,
                title: "Flexible Schedule",
                description: "Learn at your own pace with lifetime access to course materials.",
                color: "bg-pink-500"
              },
              {
                icon: <FiTrendingUp className="w-8 h-8" />,
                title: "Career Growth",
                description: "Track your progress and advance your career with new skills.",
                color: "bg-indigo-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800">
                <CardContent className="p-8">
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our most loved courses that have helped thousands of students achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/api/placeholder/400/250",
                category: "Programming",
                title: "Full Stack Web Development",
                instructor: "John Smith",
                rating: 4.9,
                students: 1234,
                price: "$89",
                icon: <FaCode className="w-5 h-5" />,
                color: "bg-blue-500"
              },
              {
                image: "/api/placeholder/400/250",
                category: "Design",
                title: "UI/UX Design Masterclass",
                instructor: "Sarah Johnson",
                rating: 4.8,
                students: 987,
                price: "$79",
                icon: <FaPalette className="w-5 h-5" />,
                color: "bg-purple-500"
              },
              {
                image: "/api/placeholder/400/250",
                category: "Language",
                title: "Spanish English Course",
                instructor: "Maria Rodriguez",
                rating: 4.9,
                students: 2156,
                price: "$69",
                icon: <FaLanguage className="w-5 h-5" />,
                color: "bg-green-500"
              },
              {
                image: "/api/placeholder/400/250",
                category: "Marketing",
                title: "Digital Marketing Strategy",
                instructor: "Mike Davis",
                rating: 4.7,
                students: 856,
                price: "$99",
                icon: <FaChartLine className="w-5 h-5" />,
                color: "bg-orange-500"
              },
              {
                image: "/api/placeholder/400/250",
                category: "Photography",
                title: "Professional Photography",
                instructor: "Emma Wilson",
                rating: 4.8,
                students: 654,
                price: "$79",
                icon: <FaCamera className="w-5 h-5" />,
                color: "bg-pink-500"
              },
              {
                image: "/api/placeholder/400/250",
                category: "Music",
                title: "Music Production Basics",
                instructor: "Alex Brown",
                rating: 4.6,
                students: 432,
                price: "$89",
                icon: <FaMusic className="w-5 h-5" />,
                color: "bg-indigo-500"
              }
            ].map((course, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900 border-0 shadow-lg">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${course.color} hover:${course.color} text-white border-0`}>
                      {course.icon}
                      <span className="ml-2">{course.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg">
                      <FaHeart className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    by {course.instructor}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-900 dark:text-white">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <FiUsers className="w-4 h-4" />
                      <span className="text-sm">{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {course.price}
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3 text-lg font-medium">
              View All Courses
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied learners who have transformed their careers with our courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Frontend Developer",
                company: "Google",
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "UpSkillify transformed my career completely. The courses are well-structured and the instructors are amazing. I landed my dream job at Google!"
              },
              {
                name: "Marcus Johnson",
                role: "UX Designer",
                company: "Apple",
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "The design courses here are top-notch. I learned practical skills that I immediately applied at work. Highly recommend to anyone looking to upskill."
              },
              {
                name: "Elena Rodriguez",
                role: "Data Scientist",
                company: "Microsoft",
                avatar: "/api/placeholder/64/64",
                rating: 5,
                text: "Excellent platform with comprehensive courses. The community support is incredible, and the learning path is very well designed."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "Students Worldwide", icon: <FiUsers className="w-8 h-8" /> },
              { number: "300+", label: "Expert Courses", icon: <FiBookOpen className="w-8 h-8" /> },
              { number: "95%", label: "Success Rate", icon: <FiTarget className="w-8 h-8" /> },
              { number: "24/7", label: "Support Available", icon: <FiGlobe className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already transforming their careers. Start with a free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 text-lg rounded-xl shadow-lg">
                <FiPlay className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" className="py-4 px-8 text-lg font-semibold rounded-xl">
                View Pricing Plans
              </Button>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get the latest course updates and learning tips.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* old footer */}
    </div>
  );
};

export default Home;