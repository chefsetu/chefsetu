import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { openApplyModal } from '../config'; // <-- Changed import here
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="ChefSetu Logo" className="w-[100px] h-auto object-contain" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex space-x-8 items-center h-full">
            <Link to="/" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">About</Link>
            
            {/* FIND JOBS DROPDOWN */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-slate-600 hover:text-orange-500 font-medium transition-colors">
                Find Jobs <FiChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[70px] -left-4 w-64 bg-white border border-slate-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden z-50">
                <Link to="/jobs" className="px-5 py-3.5 text-slate-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors border-b border-slate-50">
                  Full Time Jobs
                </Link>
                <Link to="/internships" className="px-5 py-3.5 text-slate-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors">
                  5-Star Hotel Internships
                </Link>
              </div>
            </div>

            <Link to="/careers" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Career Paths</Link>
            <Link to="/employer" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">For Businesses</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {/* <-- Updated onClick to openApplyModal --> */}
            <button onClick={openApplyModal} className="bg-slate-900 hover:bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-md">
              Apply Now
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 hover:text-orange-500 p-2">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Home</Link>
            <Link to="/about" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">About</Link>
            
            {/* Mobile Nested Menu for Jobs */}
            <div className="pt-2 pb-1 bg-slate-50 rounded-xl px-2 my-2 border border-slate-100">
              <p className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Find Jobs</p>
              <Link to="/jobs" onClick={closeMenu} className="block px-3 py-3 pl-6 text-slate-800 font-semibold hover:text-orange-600 rounded-md">
                Full Time Jobs
              </Link>
              <Link to="/internships" onClick={closeMenu} className="block px-3 py-3 pl-6 text-slate-800 font-semibold hover:text-orange-600 rounded-md border-t border-slate-200/60">
                5-Star Hotel Internships
              </Link>
            </div>

            <Link to="/careers" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Career Paths</Link>
            <Link to="/employer" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">For Businesses</Link>
            
            {/* <-- Updated onClick to openApplyModal --> */}
            <button onClick={() => { openApplyModal(); closeMenu(); }} className="w-full mt-4 bg-orange-500 text-white px-3 py-3 rounded-md font-bold shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );F
};

export default Navbar;