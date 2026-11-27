
import { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiShield,
  FiCalendar,
} from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { openApplyModal } from '../config';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300 border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2">
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                alt="ChefSetu Logo"
                className="w-[100px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex space-x-5 items-center h-full">

            {/* Home */}
            <Link
              to="/"
              className="text-slate-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="text-slate-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              About
            </Link>

            {/* Find Jobs */}
            <Link
              to="/jobs"
              className="text-slate-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Find Jobs
            </Link>

            {/* Career Paths */}
            <Link
              to="/careers"
              className="text-slate-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Career Paths
            </Link>

            {/* For Hotels */}
            <Link
              to="/employer"
              className="text-slate-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              For Hotels
            </Link>

            {/* Events */}
            <Link
              to="/events"
              className="flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-bold transition-colors whitespace-nowrap"
            >
              <FiCalendar className="w-4 h-4" />
              Events
            </Link>

            {/* Chef Protect */}
            <Link
              to="/protection"
              className="flex items-center text-orange-600 hover:text-orange-700 font-bold transition-colors whitespace-nowrap"
            >
              <FiShield className="mr-1.5" />
              Chef Protect
            </Link>

            {/* Job Seekers */}
            <Link
              to="/job-seekers"
              className="text-slate-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Job Seekers
            </Link>

            {/* Interview Prep */}
            <Link
              to="/interview-prep"
              className="text-slate-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Interview Prep
            </Link>

          </div>

          {/* DESKTOP APPLY BUTTON */}
          <div className="hidden lg:flex items-center ml-4">

            <button
              type="button"
              onClick={openApplyModal}
              className="bg-slate-900 hover:bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-md whitespace-nowrap"
            >
              Apply Now
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center">

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-orange-500 p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FiX size={28} />
              ) : (
                <FiMenu size={28} />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full max-h-[85vh] overflow-y-auto">

          <div className="px-4 pt-2 pb-6 space-y-1">

            {/* Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md"
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={closeMenu}
              className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md"
            >
              About
            </Link>

            {/* Find Jobs */}
            <Link
              to="/jobs"
              onClick={closeMenu}
              className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md"
            >
              Find Jobs
            </Link>

            {/* Career Paths */}
            <Link
              to="/careers"
              onClick={closeMenu}
              className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md"
            >
              Career Paths
            </Link>

            {/* For Hotels */}
            <Link
              to="/employer"
              onClick={closeMenu}
              className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md"
            >
              For Hotels
            </Link>

            {/* Job Seekers */}
            <Link
              to="/job-seekers"
              onClick={closeMenu}
              className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md"
            >
              Job Seekers
            </Link>

            {/* Interview Prep */}
            <Link
              to="/interview-prep"
              onClick={closeMenu}
              className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md"
            >
              Interview Prep
            </Link>

            {/* Events */}
            <Link
              to="/events"
              onClick={closeMenu}
              className="flex items-center px-3 py-3 text-orange-600 font-bold hover:bg-orange-50 rounded-md"
            >
              <FiCalendar className="mr-2" />
              Events
            </Link>

            {/* Chef Protect */}
            <Link
              to="/protection"
              onClick={closeMenu}
              className="flex items-center px-3 py-3 text-orange-600 font-bold hover:bg-orange-50 rounded-md"
            >
              <FiShield className="mr-2" />
              Chef Protect & Rights
            </Link>

            {/* Apply Now */}
            <button
              type="button"
              onClick={() => {
                openApplyModal();
                closeMenu();
              }}
              className="w-full mt-4 bg-orange-500 text-white px-3 py-3 rounded-md font-bold shadow-md hover:bg-orange-600 transition-colors"
            >
              Apply Now
            </button>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
