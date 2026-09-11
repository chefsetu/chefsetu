import { useEffect } from 'react';
import { FiX, FiMapPin, FiBriefcase, FiUsers, FiClock, FiCheckCircle } from 'react-icons/fi';
import { openApplicationForm } from '../config';

const JobDetailsModal = ({ job, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4 transition-opacity" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fadeIn" onClick={(e) => e.stopPropagation()}>
        
        <button className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors" onClick={onClose}>
          <FiX size={24} />
        </button>
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-100">
          {job.urgent && <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Urgent Hiring</span>}
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
              {job.title}
            </h2>

            <p className="text-sm font-semibold text-orange-600 mb-4">
              {job.company}
            </p>
          
          <div className="flex flex-wrap gap-3 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"><FiMapPin className="text-orange-500" /> {job.location}</span>
            <span className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"><FiBriefcase className="text-orange-500" /> {job.experience}</span>
            <span className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"><FiUsers className="text-orange-500" /> {job.openings} Positions</span>
            <span className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"><FiClock className="text-orange-500" /> {job.employmentType}</span>
          </div>
          <div className="text-2xl font-black text-slate-900">{job.salary}</div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-8 bg-slate-50">
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Job Description</h4>
            <p className="text-slate-600 leading-relaxed">{job.description}</p>
          </div>

          {job.responsibilities && (
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">Responsibilities</h4>
              <ul className="space-y-3">
                {job.responsibilities.map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 items-start">
                    <FiCheckCircle className="text-orange-500 mt-1 shrink-0 w-5 h-5" /> 
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements && (
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">Requirements</h4>
              <ul className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 items-start">
                    <FiCheckCircle className="text-orange-500 mt-1 shrink-0 w-5 h-5" /> 
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 md:p-8 border-t border-slate-100 bg-white flex justify-end gap-3 rounded-b-2xl sticky bottom-0">
          <button onClick={onClose} className="px-6 py-3 border-2 border-slate-200 text-slate-600 rounded-lg font-bold hover:bg-slate-50 transition-colors">Close</button>
          <button onClick={openApplicationForm} className="px-8 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">Apply Now</button>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsModal;