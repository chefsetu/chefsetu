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

const formatWhatsAppNumber = (phone) => {
  const digits = phone.replace(/\D/g, "").replace(/^0+/, "");
  return digits.length === 10 ? `91${digits}` : digits;
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
            resumes and contact them directly via Call or WhatsApp—no middlemen.
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
                const whatsappUrl = `https://wa.me/${formatWhatsAppNumber(
                  candidate.phone
                )}?text=${encodeURIComponent(
                  `Hello ${candidate.name}, I found your profile on ChefSetu for the ${candidate.jobTitle} role. Are you available to discuss a job opportunity?`
                )}`;

                const isLooking = candidate.workingStatus === "Looking for Job";

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

                        <div className="bg-gray-50/80 rounded-2xl p-3.5">
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
                            Mobile
                          </span>
                          <span className="font-semibold text-gray-800 mt-0.5 block">
                            +91 {candidate.phone}
                          </span>
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call
                      </motion.a>

                      <motion.a
                        whileTap={{ scale: 0.96 }}
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.391c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-1.984 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.016-1.313-4.984-4.359-5.141-4.563-.156-.203-1.234-1.641-1.234-3.125 0-1.484.781-2.219 1.063-2.516.281-.297.609-.375.813-.375.203 0 .406 0 .594.016.188.016.438-.078.688.531.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.156.344-.313.516-.156.172-.328.391-.469.531-.156.156-.313.328-.141.625.172.297.781 1.297 1.688 2.109 1.156 1.031 2.141 1.359 2.438 1.516.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.688-.156.281.094 1.781.844 2.094 1 .313.156.516.234.594.359.078.125.078.734-.172 1.438z" />
                        </svg>
                        WhatsApp
                      </motion.a>

                      {candidate.resume ? (
                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={candidate.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold shadow-sm transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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