import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobSeekers } from "../data/jobSeekers";

const getInitials = (name) => {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

const JobSeekersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [visiblePhones, setVisiblePhones] = useState({});

  const togglePhoneVisibility = (id) => {
    setVisiblePhones((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredCandidates = useMemo(() => {
    return jobSeekers.filter((candidate) => {
      const matchesSearch =
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.experienceDetails
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesExp =
        experienceFilter === "All" || candidate.experience === experienceFilter;

      const matchesStatus =
        statusFilter === "All" || candidate.workingStatus === statusFilter;

      return matchesSearch && matchesExp && matchesStatus;
    });
  }, [searchTerm, experienceFilter, statusFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-gray-50 to-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-orange-700 uppercase bg-orange-100/80 border border-orange-200 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Hire Hospitality Talent
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Verified Job Seekers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover experienced chefs and hospitality professionals. View their
            resumes and contact them directly via Call or Email—no middlemen.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 mb-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="relative">
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search name, role, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500/80 focus:border-orange-500 transition-all"
            />
          </div>

          <select
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/80 focus:border-orange-500 transition-all cursor-pointer"
          >
            <option value="All">All Experience Levels</option>
            <option value="Less than 1 year">Less than 1 year / Fresher</option>
            <option value="1–2 years">1–2 years</option>
            <option value="2–5 years">2–5 years</option>
            <option value="5+ years">5+ years</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/80 focus:border-orange-500 transition-all cursor-pointer"
          >
            <option value="All">All Availability</option>
            <option value="Looking for Job">Looking for Job (Immediate)</option>
            <option value="Currently Working">Currently Working</option>
          </select>
        </motion.div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm font-medium text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-900">
              {filteredCandidates.length}
            </span>{" "}
            verified candidate{filteredCandidates.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Candidate Cards Grid */}
        {filteredCandidates.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
          >
            <p className="text-gray-500 text-lg font-medium">
              No candidates match your current filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setExperienceFilter("All");
                setStatusFilter("All");
              }}
              className="mt-4 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCandidates.map((candidate) => {
                const isLooking = candidate.workingStatus === "Looking for Job";
                const isPhoneVisible = !!visiblePhones[candidate.id];

                const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      candidate.email
                    )}&su=${encodeURIComponent(
                      `Job Opportunity for ${candidate.jobTitle}`
                    )}&body=${encodeURIComponent(
                      `Hello ${candidate.name},\n\nI found your profile on ChefSetu for the ${candidate.jobTitle} role. Are you available to discuss a job opportunity?`
                    )}`;

                return (
                  <motion.div
                    layout
                    key={candidate.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-orange-100/60 transition-shadow duration-300 border border-gray-100 hover:border-orange-200 p-7 sm:p-8 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Professional DP + Name & Role */}
                      <div className="flex items-center gap-5 mb-6">
                        <div className="relative shrink-0">
                          <div className="p-[3px] rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 shadow-md">
                            {candidate.photo ? (
                              <img
                                src={candidate.photo}
                                alt={candidate.name}
                                className="w-20 h-20 rounded-full object-cover bg-white border-2 border-white group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-50 to-amber-100 text-orange-700 font-extrabold text-2xl flex items-center justify-center border-2 border-white group-hover:scale-105 transition-transform duration-300">
                                {getInitials(candidate.name)}
                              </div>
                            )}
                          </div>
                          <span
                            title={candidate.workingStatus}
                            className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                              isLooking ? "bg-emerald-500" : "bg-amber-500"
                            }`}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h2 className="text-xl font-bold text-gray-900 truncate">
                            {candidate.name}
                          </h2>
                          <p className="text-base font-semibold text-orange-600 mt-0.5">
                            {candidate.jobTitle}
                          </p>
                          <span
                            className={`inline-flex items-center gap-1.5 mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                              isLooking
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isLooking ? "bg-emerald-500" : "bg-amber-500"
                              }`}
                            />
                            {candidate.workingStatus}
                          </span>
                        </div>
                      </div>

                      {/* Key Details Grid */}
                      <div className="grid grid-cols-2 gap-3.5 border-t border-gray-100 pt-5 text-sm">
                        <div className="bg-gray-50/80 rounded-2xl p-3.5">
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
                            Experience
                          </span>
                          <span className="font-bold text-gray-800 mt-0.5 block">
                            {candidate.experience}
                          </span>
                        </div>

                        <div className="bg-gray-50/80 rounded-2xl p-3.5">
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
                            Expected Salary
                          </span>
                          <span className="font-bold text-gray-900 mt-0.5 block">
                            {candidate.expectedSalary}
                          </span>
                        </div>

                        <div className="bg-gray-50/80 rounded-2xl p-3.5">
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
                            Location
                          </span>
                          <span className="font-semibold text-gray-800 mt-0.5 block truncate">
                            {candidate.location}
                          </span>
                        </div>

                        {/* Hidden Mobile Number with Eye Toggle */}
                        <div className="bg-gray-50/80 rounded-2xl p-3.5">
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
                            Mobile
                          </span>
                          <div className="flex items-center justify-between gap-2 mt-0.5">
                            <span className="font-semibold text-gray-800 tracking-wide truncate">
                              {isPhoneVisible
                                ? `+91 ${candidate.phone}`
                                : "+91 ••••••••••"}
                            </span>
                            <button
                              type="button"
                              onClick={() => togglePhoneVisibility(candidate.id)}
                              aria-label={
                                isPhoneVisible
                                  ? "Hide phone number"
                                  : "Show phone number"
                              }
                              title={
                                isPhoneVisible
                                  ? "Hide phone number"
                                  : "Show phone number"
                              }
                              className="p-1.5 rounded-lg text-gray-500 hover:text-orange-600 hover:bg-orange-100/70 transition-colors cursor-pointer shrink-0"
                            >
                              {isPhoneVisible ? (
                                /* Eye Off Icon */
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                  />
                                </svg>
                              ) : (
                                /* Eye Icon */
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Experience Details */}
                      <div className="mt-4 text-sm text-gray-600 bg-orange-50/40 border border-orange-100/70 p-4 rounded-2xl leading-relaxed">
                        <span className="font-semibold text-gray-800 block mb-1 text-xs uppercase tracking-wider">
                          Experience Details
                        </span>
                        {candidate.experienceDetails}
                      </div>
                    </div>

                    {/* Direct Business Contact & Resume Actions */}
                    <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-3 gap-3">
                      <motion.a
                        whileTap={{ scale: 0.96 }}
                        href={`tel:+91${candidate.phone}`}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Call
                      </motion.a>

                      <motion.a
                        whileTap={{ scale: 0.96 }}
                        href={mailtoUrl}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-sm transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Email
                      </motion.a>

                      {candidate.resume ? (
                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={candidate.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold shadow-sm transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Resume
                        </motion.a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-gray-100 text-gray-400 text-xs font-semibold cursor-not-allowed border border-gray-200"
                        >
                          No Resume
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobSeekersPage;