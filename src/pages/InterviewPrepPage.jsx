import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiSearch,
  FiAward,
  FiCompass,
  FiAlertTriangle,
  FiBriefcase,
  FiClipboard,
  FiTarget,
  FiStar,
  FiMessageSquare,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";
import {
  roadmapSteps,
  qaCategories,
  interviewQAs,
  tradeTestCriteria,
  tradeTestDosAndDonts,
  checklistGroups,
  smartQuestionsToAsk,
  commonMistakes,
} from "../data/interviewPrepData";

const InterviewPrepPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQaId, setOpenQaId] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});

  // Filter Q&As
  const filteredQAs = useMemo(() => {
    return interviewQAs.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Checklist progress calculation
  const totalChecklistCount = useMemo(
    () => checklistGroups.reduce((sum, group) => sum + group.items.length, 0),
    []
  );
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round(
    (completedCount / totalChecklistCount) * 100
  );

  const toggleChecklistItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => setCheckedItems({});

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-orange-300 bg-orange-500/20 border border-orange-400/30 rounded-full"
          >
            <FiAward className="text-sm" />
            ChefSetu Career Academy
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Hospitality & Culinary{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Interview Mastery Hub
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to crack interviews at 5-star hotels, fine-dining
            restaurants, cloud kitchens, and cruise lines—from step-by-step
            roadmaps and real interview Q&As to trade test secrets and packing
            checklists.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: "Interview Stages", value: "5-Step Roadmap" },
              { label: "Curated Q&As", value: `${interviewQAs.length}+ Answers` },
              { label: "Trade Test Guide", value: "Scoring + Rules" },
              { label: "Prep Checklist", value: `${totalChecklistCount} Essentials` },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
              >
                <p className="text-lg sm:text-xl font-extrabold text-orange-400">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-300 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Quick Jump Nav Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "roadmap", label: "Interview Roadmap", icon: FiCompass },
              { id: "qa-bank", label: "Q&A Bank", icon: FiBookOpen },
              { id: "trade-test", label: "Cooking Trial Guide", icon: FiTarget },
              { id: "checklist", label: "Prep Checklist", icon: FiClipboard },
              { id: "tips", label: "Questions & Mistakes", icon: FiMessageSquare },
            ].map((nav) => {
              const Icon = nav.icon;
              return (
                <button
                  key={nav.id}
                  onClick={() => scrollToSection(nav.id)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-orange-500 text-white text-sm font-semibold border border-white/15 hover:border-orange-400 transition-all cursor-pointer"
                >
                  <Icon className="text-base" />
                  {nav.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-16">
        {/* SECTION 1: 5-STAGE INTERVIEW ROADMAP */}
        <section id="roadmap" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full mb-3">
              <FiCompass /> Step-by-Step Route Map
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Complete Hospitality Interview Roadmap
            </h2>
            <p className="mt-3 text-slate-600">
              Follow these five proven stages from building your culinary resume
              to negotiating your final offer letter.
            </p>
          </div>

          <div className="relative space-y-6">
            {/* Vertical connector line on desktop */}
            <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-orange-500 via-amber-400 to-slate-200" />

            {roadmapSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative md:pl-20"
              >
                {/* Step Number Badge */}
                <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-extrabold text-xl items-center justify-center shadow-lg shadow-orange-200 border-4 border-slate-50">
                  {item.step}
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="md:hidden px-3 py-1 rounded-lg bg-orange-500 text-white font-bold text-sm">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        {item.phase}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base">
                    {item.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.tasks.map((task, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100"
                      >
                        <FiCheckCircle className="text-orange-500 mt-0.5 shrink-0 text-base" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 2: INTERVIEW QUESTIONS & ANSWERS BANK */}
        <section id="qa-bank" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full mb-3">
              <FiBookOpen /> Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Top Interview Questions & Model Answers
            </h2>
            <p className="mt-3 text-slate-600">
              Practice real technical, food-safety, guest-service, leadership,
              and HR questions asked across top Indian and international hotels.
            </p>
          </div>

          {/* Search + Category Tabs */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-100 mb-8 space-y-5">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. HACCP, food cost, mother sauces, fresher, salary)..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {qaCategories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                      active
                        ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:border-orange-300 hover:text-orange-600"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredQAs.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
                <p className="text-slate-500 font-medium">
                  No questions found matching "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-xl text-sm font-semibold cursor-pointer"
                >
                  Show All Questions
                </button>
              </div>
            ) : (
              filteredQAs.map((item) => {
                const isOpen = openQaId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? "border-orange-300 shadow-md shadow-orange-100/50"
                        : "border-slate-100 shadow-xs hover:border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenQaId(isOpen ? null : item.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">
                            {item.category}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                            {item.level}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {item.question}
                        </h3>
                      </div>

                      <FiChevronDown
                        className={`text-xl text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-orange-600" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 space-y-4">
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-3">
                              {item.answer}
                            </p>

                            <div className="flex items-start gap-3 bg-amber-50/80 border border-amber-200/70 rounded-xl p-4">
                              <FiStar className="text-amber-600 text-lg shrink-0 mt-0.5" />
                              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                                <span className="font-bold">Hiring Chef Pro Tip: </span>
                                {item.proTip}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* SECTION 3: PRACTICAL TRADE TEST (COOKING TRIAL) GUIDE */}
        <section id="trade-test" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full mb-3">
              <FiTarget /> Practical Round Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How Chefs Grade Your Practical Trade Test
            </h2>
            <p className="mt-3 text-slate-600">
              In culinary hiring, your cooking trial carries the highest weight.
              Here is exactly what Executive Chefs watch while you cook.
            </p>
          </div>

          {/* 5 Scoring Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {tradeTestCriteria.map((criterion, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    {criterion.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-orange-100 text-orange-700">
                    {criterion.weight}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {criterion.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Do's and Don'ts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2 mb-5">
                <FiCheckCircle className="text-emerald-600 text-2xl" />
                Trade Test Do's
              </h3>
              <ul className="space-y-3">
                {tradeTestDosAndDonts.dos.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-emerald-950 bg-white/80 p-3.5 rounded-xl border border-emerald-100"
                  >
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-rose-900 flex items-center gap-2 mb-5">
                <FiAlertTriangle className="text-rose-600 text-2xl" />
                Trade Test Don'ts
              </h3>
              <ul className="space-y-3">
                {tradeTestDosAndDonts.donts.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-rose-950 bg-white/80 p-3.5 rounded-xl border border-rose-100"
                  >
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE PRE-INTERVIEW CHECKLIST */}
        <section id="checklist" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full mb-3">
                  <FiClipboard /> Interactive Readiness Tracker
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Things You Need Before Interview Day
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base">
                  Tick off each item as you pack and prepare so nothing gets
                  forgotten.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full md:w-72 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-slate-700">Readiness Score</span>
                  <span className="text-orange-600">
                    {completedCount}/{totalChecklistCount} ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-emerald-500 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {completedCount > 0 && (
                  <button
                    onClick={resetChecklist}
                    className="mt-2 text-xs text-slate-400 hover:text-orange-600 underline cursor-pointer"
                  >
                    Reset checklist
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklistGroups.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-100"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FiShield className="text-orange-500" />
                    {group.group}
                  </h3>
                  <div className="space-y-2.5">
                    {group.items.map((item) => {
                      const isChecked = !!checkedItems[item.id];
                      return (
                        <label
                          key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                            isChecked
                              ? "bg-emerald-50/70 border-emerald-200 text-slate-500 line-through"
                              : "bg-white border-slate-200/70 text-slate-700 hover:border-orange-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleChecklistItem(item.id)}
                            className="mt-1 w-4 h-4 accent-orange-600 rounded cursor-pointer shrink-0"
                          />
                          <span className="text-sm leading-snug">
                            {item.text}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: SMART QUESTIONS TO ASK & COMMON MISTAKES */}
        <section id="tips" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Smart Questions to Ask */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
              <FiMessageSquare /> Impress the Panel
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Smart Questions to Ask the Interviewer
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              When they ask "Do you have any questions for us?", never say "No."
              Pick 2 of these to show genuine ambition:
            </p>
            <div className="space-y-3">
              {smartQuestionsToAsk.map((q, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-800 font-medium"
                >
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>"{q}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full mb-3">
              <FiAlertTriangle /> Avoid These Traps
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              6 Mistakes That Cost Candidates the Offer
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Even talented chefs lose great offers because of these avoidable
              errors:
            </p>
            <div className="space-y-3">
              {commonMistakes.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100"
                >
                  <h4 className="font-bold text-slate-900 text-sm">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl shadow-orange-200/60">
          <FiBriefcase className="text-4xl mx-auto mb-4 text-orange-100" />
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Land Your Next Hospitality Role?
          </h2>
          <p className="mt-3 text-orange-50 max-w-2xl mx-auto text-sm sm:text-base">
            Put your preparation into action. Explore verified chef, kitchen,
            and hotel job openings across India and apply directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-orange-700 font-bold text-sm sm:text-base hover:bg-orange-50 transition-colors shadow-md"
            >
              Browse Open Jobs <FiArrowRight />
            </Link>
            <Link
              to="/job-seekers"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/25 hover:bg-slate-900/40 border border-white/30 text-white font-bold text-sm sm:text-base transition-colors"
            >
              Explore Job Seekers
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InterviewPrepPage;