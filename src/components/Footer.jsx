import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/course' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'FAQ', href: '/faq' },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.454-.676-6.263-1.84.32.038.637.05.97.05 1.92 0 3.687-.65 5.096-1.747-1.8-.037-3.32-1.22-3.843-2.85.252.037.504.063.77.063.37 0 .74-.05 1.085-.14-1.87-.377-3.28-2.03-3.28-4.017v-.05c.55.305 1.18.49 1.85.514a4.07 4.07 0 0 1-1.81-3.39c0-.75.2-1.45.55-2.05a11.62 11.62 0 0 0 8.42 4.27c-.06-.3-.09-.61-.09-.93 0-2.25 1.83-4.08 4.08-4.08 1.17 0 2.23.49 2.97 1.28a8.13 8.13 0 0 0 2.59-.99 4.07 4.07 0 0 1-1.79 2.25 8.16 8.16 0 0 0 2.34-.64 8.8 8.8 0 0 1-2.04 2.12z"/></svg>
  ) },
  { name: 'Facebook', href: '#', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ) },
  { name: 'Instagram', href: '#', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-11.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
  ) },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-400 via-fuchsia-500 to-blue-500 dark:from-fuchsia-900 dark:via-purple-900 dark:to-blue-900 text-white pt-10 pb-4 px-4 md:px-0 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold tracking-tight mb-2">Upskillify</span>
          <span className="text-sm opacity-80">Empowering Your Learning Journey</span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-0">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-yellow-200 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Socials */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {socialLinks.map(social => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
              target="_blank" rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Upskillify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;