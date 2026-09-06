import { useState } from 'react';
import { jobs } from '../data/jobs';
import JobSearch from './JobSearch';
import JobCard from './JobCard';
import JobDetailsModal from './JobDetailsModal';

const JobListings = () => {
  const [filters, setFilters] = useState({ keyword: '', location: '', category: '' });
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter(job => {
    const matchKeyword = job.title.toLowerCase().includes(filters.keyword.toLowerCase()) || 
                         job.description.toLowerCase().includes(filters.keyword.toLowerCase());
    const matchLocation = filters.location === '' || job.location === filters.location;
    const matchCategory = filters.category === '' || job.category === filters.category;
    return matchKeyword && matchLocation && matchCategory;
  });

  return (
    <section id="jobs" className="py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-4">
        
        <JobSearch filters={filters} setFilters={setFilters} />

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Immediate Job Openings</h2>
          <p className="text-gray-600 text-lg">Explore current opportunities and take the next step in your career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onViewDetails={setSelectedJob} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-2">No jobs found matching your criteria.</h3>
              <p className="text-gray-500">Try adjusting your search filters to find more opportunities.</p>
            </div>
          )}
        </div>
      </div>

      {selectedJob && (
        <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
};

export default JobListings;