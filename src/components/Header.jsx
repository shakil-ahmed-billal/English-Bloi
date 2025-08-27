"use client";

import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { FiUser, FiBell, FiSearch, FiX } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme/ModeToggle";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import Link from "next/link";

const Header = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <section className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300">
      <nav className="flex items-center justify-between w-full relative container mx-auto px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="/Upskillify.png"
              alt="Upskillify"
              className="h-10 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li className="relative group">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 cursor-pointer">
                Course Details
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </li>
            <li className="relative group">
              <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 cursor-pointer">
                Support
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </li>
            <li className="relative group">
              <Link 
                href="/dashboard" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 cursor-pointer">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </li>
            <li className="relative group">
              <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 cursor-pointer">
                My Classes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </li>
          </ul>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center relative max-w-sm mx-4">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 h-10 bg-gray-50/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle - Desktop */}
          <div className="hidden md:flex">
            <ModeToggle />
          </div>

          {/* Notifications */}
          <div className="hidden sm:flex relative">
            <Button
              variant="ghost"
              size="sm"
              className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
            >
              <FiBell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 hover:bg-red-500 text-white text-xs">
                3
              </Badge>
            </Button>
          </div>

          {/* User Profile */}
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-slate-700 hover:ring-blue-500 dark:hover:ring-blue-400 transition-all duration-300">
                <img
                  src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5 border-2 border-white dark:border-slate-900 shadow-sm"></div>
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Dhon Deo
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Premium Member
              </span>
            </div>

            {/* Dropdown Arrow */}
            <IoIosArrowUp
              className={`${
                accountMenuOpen ? "rotate-0" : "rotate-180"
              } transition-all duration-300 text-gray-400 w-4 h-4 ml-1`}
            />

            {/* Account Dropdown Menu */}
            <div
              className={`${
                accountMenuOpen
                  ? "translate-y-0 opacity-100 visible"
                  : "translate-y-2 opacity-0 invisible"
              } absolute top-full right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 py-2 transition-all duration-300 z-50`}
            >
              {/* User Info Header */}
              <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Dhon Deo</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">dhon@example.com</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <FiUser className="w-4 h-4" />
                  View Profile
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <IoSettingsOutline className="w-4 h-4" />
                  Settings
                </button>
              </div>

              <div className="border-t border-gray-100 dark:border-slate-700 py-1 mt-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                  <TbLogout2 className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
          >
            {mobileSidebarOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <CiMenuFries className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          } lg:hidden fixed top-full right-0 w-full max-w-sm h-screen bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-l border-gray-200 dark:border-slate-800 transition-all duration-300 z-40`}
        >
          <div className="p-6 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 h-11 bg-gray-50/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-1">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200"
              >
                Home
              </Link>
              <button className="w-full flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200">
                Course Details
              </button>
              <button className="w-full flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200">
                Support
              </button>
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200"
              >
                Dashboard
              </Link>
              <button className="w-full flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200">
                Blog
              </button>
              <button className="w-full flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200">
                My Classes
              </button>
            </nav>

            {/* Mobile Theme Toggle & Actions */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-6 space-y-4">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                <ModeToggle />
              </div>
              
              <div className="flex items-center justify-between px-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative p-2 text-gray-600 dark:text-gray-400"
                >
                  <FiBell className="w-4 h-4" />
                  <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-red-500 hover:bg-red-500 text-white text-xs">
                    3
                  </Badge>
                </Button>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}
    </section>
  );
};

export default Header;