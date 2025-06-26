"use client";


import React, {useState} from "react";

// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import {
 
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
 
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme/ModeToggle";
import Link from "next/link";

const Header = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
 
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false);
  const [megaMenuSubItemsOpen, setMegaMenuSubItemsOpen] = useState("");

  return (
    <section className="">
      <nav className="flex items-center justify-between w-full relative max-w-11/12 mx-auto py-8 ">
        {/* logo */}
        <img
          src="/Upskillify.png"
          alt="logo"
          className="w-[150px] "
        />

        {/* nav links */}

        <div className="flex items-center gap-8 cursor-pointer">
          <ul className="flex gap-6">
            <Link href="/">Home</Link>
            <li>Course Details</li>
            <li>Support</li>
            <Link href="/dashboard"> Dashboard</Link>
            <li>Blog</li>
            <li>My Classes</li>
          </ul>
          <ModeToggle></ModeToggle>
        </div>
        {/* user account */}
        <div className="flex items-center gap-[15px]">
          <div
            className="flex items-center gap-[10px] cursor-pointer relative"
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          >
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                alt="avatar"
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
            </div>

            <h1 className="text-[1rem] dark:text-[#abc2d3] font-[400] text-gray-600 sm:block hidden">
              Dhon Deo
            </h1>

            <div
              className={`${
                accountMenuOpen
                  ? "translate-y-0 opacity-100 z-[1]"
                  : "translate-y-[10px] opacity-0 z-[-1]"
              } bg-white w-max rounded-md absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
            >
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                <FiUser />
                View Profile
              </p>
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                <IoSettingsOutline />
                Settings
              </p>
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                <FiUser />
                View Profile
              </p>

              <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50">
                  <TbLogout2 />
                  Logout
                </p>
              </div>
            </div>

            <IoIosArrowUp
              className={`${
                accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
              } transition-all duration-300 dark:text-[#abc2d3] text-gray-600 sm:block hidden`}
            />
          </div>

          <CiMenuFries
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="text-[1.8rem] dark:text-[#abc2d3] text-[#424242]c cursor-pointer md:hidden flex"
          />
        </div>

        {/* mobile sidebar */}
        <aside
          className={` ${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-[200px] opacity-0 z-[-1]"
          } md:hidden bg-white p-4 text-center absolute dark:bg-slate-700 top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li
              onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
              className="hover:text-[#3B9DF8] group dark:text-[#abc2d3] transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
            >
              Products
              <IoIosArrowDown
                className={`${
                  isMegaMenuCollapse ? "rotate-0" : "rotate-[180deg]"
                } text-gray-600 group-hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300`}
              />
            </li>

            {/* product mega menu */}
            <div
              onClick={() => setMegaMenuSubItemsOpen("more_product")}
              className={`${
                isMegaMenuCollapse ? "hidden" : "block"
              } group font-[500] ml-6`}
            >
              <h4 className="text-left flex dark:text-[#abc2d3] items-center gap-[5px]">
                More Products
                <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
              </h4>

              <ul
                className={`${
                  megaMenuSubItemsOpen === "more_product" ? "flex" : "hidden"
                } pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}
              >
                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer dark:text-[#abc2d3] capitalize">
                  Demo App
                </li>
                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer dark:text-[#abc2d3] capitalize">
                  CRM
                </li>
                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer dark:text-[#abc2d3] capitalize">
                  CMS
                </li>
              </ul>
            </div>

            <div
              onClick={() => setMegaMenuSubItemsOpen("ecosystem")}
              className={`${
                isMegaMenuCollapse ? "hidden" : "block"
              } font-[500] ml-6`}
            >
              <h4 className="text-left flex dark:text-[#abc2d3] items-center gap-[5px]">
                Ecosystem
                <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
              </h4>

              <ul
                className={`${
                  megaMenuSubItemsOpen === "ecosystem" ? "flex" : "hidden"
                } pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}
              >
                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer dark:text-[#abc2d3] capitalize">
                  Directory
                </li>
                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer dark:text-[#abc2d3] capitalize">
                  Bookings
                </li>
                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer dark:text-[#abc2d3] capitalize">
                  User feedback
                </li>
                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer dark:text-[#abc2d3] capitalize">
                  Task Manager
                </li>
              </ul>
            </div>

            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-500 cursor-poin ter capitalize">
              Features
            </li>
            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-500 cursor-pointer capitalize">
              Support
            </li>
            <Button>Name</Button>
          </ul>
        </aside>
      </nav>
    </section>
  );
};

export default Header;
