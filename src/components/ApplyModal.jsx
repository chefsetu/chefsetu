import { useEffect, useState } from 'react';
import { FiX, FiUser, FiBriefcase } from 'react-icons/fi';
import { openApplicationForm, openEmployerForm } from '../config';

const ApplyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-apply-modal', handleOpen);
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('open-apply-modal', handleOpen);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4 transition-all" onClick={() => setIsOpen(false)}>
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl relative animate-fadeIn overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors z-10" 
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>
        
        {/* Modal Header */}
        <div className="p-8 md:p-10 text-center border-b border-slate-100">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome to ChefSetu</h2>
          <p className="text-slate-600 text-lg">Please select how you would like to proceed.</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 gap-6 bg-slate-50">
          
          {/* Job Seeker Option */}
          <div 
            onClick={() => { openApplicationForm(); setIsOpen(false); }}
            className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group text-center flex flex-col items-center transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
              <FiUser className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">I am a Job Seeker</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Apply for premium roles across luxury hotels, restaurants, and professional kitchens.
            </p>
            <span className="mt-auto text-orange-500 font-bold group-hover:text-orange-600">Proceed to Application &rarr;</span>
          </div>

          {/* Employer Option */}
          <div 
            onClick={() => { openEmployerForm(); setIsOpen(false); }}
            className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group text-center flex flex-col items-center transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300 shadow-sm">
              <FiBriefcase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">I am an Employer</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Post job requirements, register your business, and hire top-tier hospitality professionals.
            </p>
            <span className="mt-auto text-slate-700 font-bold group-hover:text-slate-900">Register Business &rarr;</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ApplyModal;