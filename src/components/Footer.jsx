import Link from 'next/link';
import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';




const Footer = () => {
  return (
    <div className="">
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img src="/Upskillify.png" alt="UpSkillify" className="h-10 w-auto" />
              <p className="text-gray-400 leading-relaxed">
                Empowering learners worldwide with high-quality, accessible education that transforms careers and lives.
              </p>
              <div className="flex space-x-4">
                {/* Social Links */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/category/programming" className="hover:text-white transition-colors">Programming</Link></li>
                <li><Link href="/category/design" className="hover:text-white transition-colors">Design</Link></li>
                <li><Link href="/category/business" className="hover:text-white transition-colors">Business</Link></li>
                <li><Link href="/category/marketing" className="hover:text-white transition-colors">Marketing</Link></li>
                <li><Link href="/category/language" className="hover:text-white transition-colors">Languages</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5" />
                  <span>support@upskillify.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="w-5 h-5" />
                  <span>123 Learning St, Education City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 UpSkillify. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;