import { FiMapPin, FiBriefcase, FiUsers, FiClock } from 'react-icons/fi';
import { openApplicationForm } from '../config';

const JobCard = ({ job, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-gray-100 group">
      
      {/* Image Container */}
      <div className="relative h-56 cursor-pointer overflow-hidden" onClick={() => openApplicationForm()}>
        <img src={job.image} alt={job.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-semibold">Click to Apply &rarr;</span>
        </div>
        {job.urgent && (
          <span className="absolute top-4 right-4 bg-urgent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            URGENT HIRING
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-navy mb-2 line-clamp-1">{job.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{job.description}</p>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-700 mt-auto mb-6">
          <div className="flex items-center gap-2"><FiMapPin className="text-gold" /> <span className="truncate">{job.location}</span></div>
          <div className="flex items-center gap-2"><FiBriefcase className="text-gold" /> <span className="truncate">{job.experience}</span></div>
          <div className="flex items-center gap-2"><FiUsers className="text-gold" /> <span>{job.openings} Pos.</span></div>
          <div className="flex items-center gap-2 font-bold text-navy"><FiClock className="text-gold" /> <span className="truncate">{job.salary}</span></div>
        </div>
      </div>
      
      {/* Footer Buttons */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex gap-3">
        <button onClick={() => onViewDetails(job)} className="flex-1 py-2.5 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors text-sm">
          Details
        </button>
        <button onClick={openApplicationForm} className="flex-1 py-2.5 bg-gold text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors text-sm shadow-md">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;