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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fadeIn" onClick={(e) => e.stopPropagation()}>
        
        <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-urgent hover:bg-red-50 rounded-full transition-colors" onClick={onClose}>
          <FiX size={24} />
        </button>
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-100">
          {job.urgent && <span className="inline-block bg-urgent/10 text-urgent text-xs font-bold px-3 py-1 rounded-full mb-4">URGENT HIRING</span>}
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{job.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full"><FiMapPin className="text-gold" /> {job.location}</span>
            <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full"><FiBriefcase className="text-gold" /> {job.experience}</span>
            <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full"><FiUsers className="text-gold" /> {job.openings} Positions</span>
            <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full"><FiClock className="text-gold" /> {job.employmentType}</span>
          </div>
          <div className="text-xl font-bold text-navy">{job.salary}</div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-6 bg-gray-50/50">
          <div>
            <h4 className="text-lg font-bold text-navy mb-2">Job Description</h4>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          {job.responsibilities && (
            <div>
              <h4 className="text-lg font-bold text-navy mb-3">Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-600 items-start">
                    <FiCheckCircle className="text-gold mt-1 shrink-0" /> <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements && (
            <div>
              <h4 className="text-lg font-bold text-navy mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-600 items-start">
                    <FiCheckCircle className="text-gold mt-1 shrink-0" /> <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 md:p-8 border-t border-gray-100 bg-white flex justify-end gap-3 rounded-b-2xl">
          <button onClick={onClose} className="px-6 py-2.5 border-2 border-gray-200 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Close</button>
          <button onClick={openApplicationForm} className="px-6 py-2.5 bg-gold text-white rounded-lg font-semibold hover:bg-orange-500 shadow-md transition-colors">Apply Now</button>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsModal;