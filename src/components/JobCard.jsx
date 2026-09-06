import { FiMapPin, FiBriefcase, FiUsers, FiClock } from 'react-icons/fi';
import { openApplicationForm } from '../config';

const JobCard = ({ job, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-slate-200 group cursor-pointer">
      
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden" onClick={() => openApplicationForm()}>
        <img src={job.image} alt={job.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-semibold flex items-center gap-2">
            Click to Apply <span className="text-orange-400">&rarr;</span>
          </span>
        </div>
        {job.urgent && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wide uppercase">
            Urgent Hiring
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{job.title}</h3>
        <p className="text-slate-500 text-sm mb-5 line-clamp-2 leading-relaxed">{job.description}</p>
        
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-slate-700 mt-auto mb-6">
          <div className="flex items-center gap-2"><FiMapPin className="text-orange-500 shrink-0" /> <span className="truncate">{job.location}</span></div>
          <div className="flex items-center gap-2"><FiBriefcase className="text-orange-500 shrink-0" /> <span className="truncate">{job.experience}</span></div>
          <div className="flex items-center gap-2"><FiUsers className="text-orange-500 shrink-0" /> <span>{job.openings} Pos.</span></div>
          <div className="flex items-center gap-2 font-bold text-slate-900"><FiClock className="text-orange-500 shrink-0" /> <span className="truncate">{job.salary}</span></div>
        </div>
      </div>
      
      {/* Footer Buttons */}
      <div className="px-6 py-5 bg-slate-50 border-t border-slate-100 flex gap-3">
        <button onClick={() => onViewDetails(job)} className="flex-1 py-2.5 border-2 border-slate-800 text-slate-800 rounded-lg font-bold hover:bg-slate-800 hover:text-white transition-colors text-sm shadow-sm">
          Details
        </button>
        <button onClick={openApplicationForm} className="flex-1 py-2.5 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors text-sm shadow-md hover:shadow-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;