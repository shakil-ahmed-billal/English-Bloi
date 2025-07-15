"use client";

import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";

import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme/ModeToggle";
import Link from "next/link";

const Header = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);


  return (
    <section className="w-full  bg-white dark:bg-gray-900 transition-all duration-300">
      <nav className="flex items-center justify-between w-full relative max-w-11/12 mx-auto py-8  bg-white dark:bg-gray-900 transition-all duration-300">
        {/* Logo */}
        <img
          src="/Upskillify.png"
          alt="logo"
          className="w-[150px] md:w-[160px] transition-all duration-300"
        />

        {/* Nav Links for Desktop and Tablet */}
        <div className="hidden md:flex items-center gap-8 cursor-pointer">
          <ul className="flex gap-6 text-gray-600 dark:text-gray-300 font-semibold">
            <Link href="/">Home</Link>
            <li>Course Details</li>
            <li>Support</li>
            <Link href="/dashboard">Dashboard</Link>
            <li>Blog</li>
            <li>My Classes</li>
          </ul>
          <ModeToggle />
        </div>

        {/* User Account */}
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          >
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                alt="avatar"
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white"></div>
            </div>

            <h1 className="text-[1rem] dark:text-gray-200 font-[400] text-gray-600 sm:block hidden">
              Dhon Deo
            </h1>

            {/* Account Menu */}
            <div
              className={`${accountMenuOpen
                ? "translate-y-0 opacity-100 z-[1]"
                : "translate-y-[10px] opacity-0 z-[-1]"
                } bg-white dark:bg-slate-800 rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px] shadow-md`}
            >
              <p className="flex items-center gap-[5px] rounded-md p-[8px] text-[1rem] dark:text-[#abc2d3] hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-600">
                <FiUser />
                View Profile
              </p>
              <p className="flex items-center gap-[5px] rounded-md p-[8px] text-[1rem] dark:text-[#abc2d3] hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-600">
                <IoSettingsOutline />
                Settings
              </p>
              <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                <p className="flex items-center gap-[5px] rounded-md p-[8px] text-[1rem] dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/20 text-red-500">
                  <TbLogout2 />
                  Logout
                </p>
              </div>
            </div>

            <IoIosArrowUp
              className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
                } transition-all duration-300 dark:text-[#abc2d3] text-gray-600`}
            />
          </div>

          {/* Mobile Sidebar Toggle */}
          <CiMenuFries
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="text-[1.8rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer md:hidden flex"
          />
        </div>

        {/* Mobile Sidebar */}
        <aside
          className={`${mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
            } md:hidden bg-white p-4 text-center absolute dark:bg-slate-700 top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-start gap-[20px] text-[1rem] text-gray-600 dark:text-gray-300 flex flex-col">


            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] cursor-pointer capitalize">Features</li>
            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] cursor-pointer capitalize ">Support</li>
            <Button>Name</Button>
          </ul>
        </aside>
      </nav>
    </section>
  );
};

export default Header;
