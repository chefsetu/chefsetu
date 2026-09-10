import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { openApplicationForm } from '../config';
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

          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">About</Link>
            <Link to="/jobs" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Find Jobs</Link>
            <Link to="/careers" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Career Paths</Link>
            <Link to="/employer" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">For Hotels</Link>
            
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={openApplicationForm} className="bg-slate-900 hover:bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-md">
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

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Home</Link>
            <Link to="/jobs" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Find Jobs</Link>
            <Link to="/careers" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Career Paths</Link>
            <Link to="/employer" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">For Hotels</Link>
            <Link to="/about" onClick={closeMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md">About</Link>
            <button onClick={() => { openApplicationForm(); closeMenu(); }} className="w-full mt-4 bg-orange-500 text-white px-3 py-3 rounded-md font-bold shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;