import React, { useState, useMemo } from "react";
import { jobs } from "../data/jobs";
import JobSearch from "./JobSearch";
import JobCard from "./JobCard";
import JobDetailsModal from "./JobDetailsModal";
import ApplyModal from "./ApplyModal";

const matchesExperience = (jobExp = "", selectedExp = "") => {
  if (!selectedExp) return true;
  const text = String(jobExp).toLowerCase();

  if (selectedExp === "fresher") {
    return text.includes("fresher") || /\b0\b/.test(text);
  }

  const match = text.match(/\d+/);
  if (!match) return false;
  const years = parseInt(match[0], 10);

  if (selectedExp === "1-3") return years >= 1 && years <= 3;
  if (selectedExp === "3-5") return years >= 3 && years <= 5;
  if (selectedExp === "5-10+") return years >= 5;

  return true;
};

const JobListings = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    experience: "",
  });

  const [selectedJob, setSelectedJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const keyword = filters.keyword.trim().toLowerCase();
      const location = filters.location.trim().toLowerCase();
      const category = filters.category.trim().toLowerCase();

      const matchesKeyword =
        !keyword ||
        job.title?.toLowerCase().includes(keyword) ||
        job.company?.toLowerCase().includes(keyword) ||
        job.description?.toLowerCase().includes(keyword);

      const matchesLocation =
        !location ||
        job.location?.toLowerCase().includes(location.replace(/-/g, " ")) ||
        job.location?.toLowerCase().includes(location);

      const matchesCategory =
        !category ||
        job.category?.toLowerCase().includes(category) ||
        job.title?.toLowerCase().includes(category);

      const isExpMatch = matchesExperience(job.experience, filters.experience);

      return matchesKeyword && matchesLocation && matchesCategory && isExpMatch;
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      keyword: "",
      location: "",
      category: "",
      experience: "",
    });
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      {/* Search & Experience Filter Bar */}
      <JobSearch filters={filters} setFilters={setFilters} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Available Opportunities{" "}
            <span className="text-orange-600">({filteredJobs.length})</span>
          </h2>

          {(filters.keyword ||
            filters.location ||
            filters.category ||
            filters.experience) && (
            <button
              onClick={resetFilters}
              className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline cursor-pointer"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm">
            <p className="text-lg font-medium text-slate-600">
              No jobs found matching your filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onViewDetails={() => setSelectedJob(job)}
                onApply={() => setApplyJob(job)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApply={() => {
            setApplyJob(selectedJob);
            setSelectedJob(null);
          }}
        />
      )}

      {/* Apply Modal */}
      {applyJob && (
        <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />
      )}
    </section>
  );
};

export default JobListings;