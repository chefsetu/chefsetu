import React from 'react';
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiPhone,
  FiStar,
  FiHeart,
  FiShield,
} from 'react-icons/fi';

import { openEventForm } from '../config';

const EventsPage = () => {
  const attendees = [
    'Chefs',
    'Culinary Professionals',
    'Hospitality Students',
    'Hotel Management Institutions',
    'Industry Professionals',
    'Hospitality Enthusiasts',
  ];

  const highlights = [
    {
      icon: <FiAward />,
      title: 'Prize Distribution & Recognition',
      description:
        'Outstanding chefs, culinary professionals and participants will be recognised for their talent, dedication and contribution.',
    },
    {
      icon: <FiShield />,
      title: 'Certificates & Awards',
      description:
        'The information provided will be used for event registration, participation confirmation, certificates, and awards.',
    },
    {
      icon: <FiUsers />,
      title: 'Fraternity Networking',
      description:
        'Celebrate the passion, creativity and dedication of the culinary fraternity together while building meaningful industry connections.',
    },
  ];

  const handleRegister = () => {
    if (typeof openEventForm === 'function') {
      openEventForm();
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=85"
            alt="Professional chef preparing food"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-slate-950/85" />

        {/* Orange Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-600/20 via-transparent to-slate-950/70" />

        {/* Decorative Elements */}
        <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-4xl">

            {/* Event Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300 backdrop-blur-sm">
              <FiStar className="text-orange-400" />
              <span>Culinary Excellence • Hospitality • Celebration</span>
            </div>

            {/* Main Title */}
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              INTERNATIONAL
              <span className="block text-orange-500">
                CHEF DAY 2026
              </span>
            </h1>

            {/* Organised By */}
            <div className="mt-7 flex flex-col gap-2 text-base sm:text-lg">
              <p className="font-semibold text-white">
                Organised by
              </p>

              <p className="font-bold text-orange-400">
                CATA – Chef Association Telangana and Andhra Pradesh
              </p>
            </div>

            {/* Theme */}
            <div className="mt-7 border-l-4 border-orange-500 pl-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Theme
              </p>

              <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Celebrating Chefs, Culinary Excellence & Hospitality
              </p>
            </div>

            {/* Tagline */}
            <p className="mt-8 max-w-3xl text-xl font-medium leading-8 text-slate-200 sm:text-2xl">
              "Celebrating the Hands Behind Every Great Dish."
              <span className="ml-2">👨‍🍳✨</span>
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={handleRegister}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40"
              >
                Register for the Event
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+916281570955"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-orange-400/50 hover:bg-white/10"
              >
                <FiPhone />
                Contact Organising Team
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK DETAILS BAR
      ========================================================= */}
      <section className="relative z-10 -mt-8 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">

          <div className="grid md:grid-cols-3">

            {/* Date */}
            <div className="flex items-center gap-5 border-b border-slate-200 p-6 md:border-b-0 md:border-r">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <FiCalendar size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Date
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  October 2026
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-5 border-b border-slate-200 p-6 md:border-b-0 md:border-r">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <FiClock size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Time
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Announcing Soon
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <FiMapPin size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Location
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Hyderabad, Telangana
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT & AUDIENCE SECTION
      ========================================================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* LEFT - ABOUT */}
            <div>

              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                <FiHeart />
                About The Event
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Honouring the People Behind Every Great Culinary Experience
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

                <p>
                  International Chef Day 2026 is a special celebration of
                  the chefs, culinary professionals and hospitality community
                  who bring creativity, passion and excellence to every plate.
                </p>

                <p>
                  Organised by{' '}
                  <strong className="font-bold text-slate-900">
                    CATA – Chef Association Telangana and Andhra Pradesh
                  </strong>
                  , the event brings together culinary professionals,
                  hospitality students, institutions and industry leaders to
                  celebrate their achievements and contributions.
                </p>

                <p>
                  It is an opportunity to recognise exceptional talent,
                  celebrate culinary excellence, exchange ideas and build
                  stronger connections across the hospitality fraternity.
                </p>

              </div>

              {/* Contact Card */}
              <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                    <FiPhone size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Event Enquiries
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      CATA Organising Team
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+916281570955"
                  className="font-bold text-orange-500 transition hover:text-orange-600"
                >
                  +91 6281570955
                </a>
              </div>

            </div>

            {/* RIGHT - AUDIENCE CARD */}
            <div className="relative">

              <div className="absolute -inset-3 rounded-3xl bg-orange-500/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-9">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-orange-500">
                  <FiUsers size={27} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  Who Should Participate?
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  The celebration welcomes everyone who is passionate about
                  culinary excellence and the hospitality industry.
                </p>

                <div className="mt-7 space-y-4">

                  {attendees.map((attendee, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-xl bg-slate-50 p-3.5 transition hover:bg-orange-50"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                        <FiCheckCircle size={17} />
                      </div>

                      <span className="font-semibold text-slate-700">
                        {attendee}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT HIGHLIGHTS
      ========================================================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Event Highlights
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Celebrate Excellence. Recognise Talent. Build Connections.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Experience an inspiring celebration dedicated to the passion,
              creativity and achievements of the culinary fraternity.
            </p>

          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">

            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >

                {/* Number */}
                <div className="absolute right-6 top-5 text-6xl font-black text-slate-100 transition group-hover:text-orange-50">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {React.cloneElement(highlight.icon, {
                    size: 28,
                  })}
                </div>

                <h3 className="relative mt-7 text-xl font-black text-slate-900">
                  {highlight.title}
                </h3>

                <p className="relative mt-4 leading-7 text-slate-500">
                  {highlight.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          ORGANISER / EVENT MESSAGE
      ========================================================= */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
            <FiAward size={32} />
          </div>

          <p className="mt-7 text-xl font-medium leading-9 text-slate-300 sm:text-2xl">
            "A great dish is more than ingredients — it is the passion,
            skill and dedication of the person who creates it."
          </p>

          <div className="mx-auto mt-7 h-px w-20 bg-orange-500" />

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            CATA – Chef Association Telangana and Andhra Pradesh
          </p>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-orange-500">

        {/* Decorative Background */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-orange-700/20" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:py-24">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
            <FiCalendar size={30} />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Secure Your Spot Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            Be part of International Chef Day 2026 and join a celebration
            dedicated to the people who make every culinary experience
            memorable.
          </p>

          <p className="mt-4 font-semibold text-white">
            Hyderabad, Telangana • October 2026
          </p>

          <button
            type="button"
            onClick={handleRegister}
            className="group mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl"
          >
            Register for the Event
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="mt-7 flex flex-col items-center justify-center gap-2 text-sm text-orange-50 sm:flex-row sm:gap-5">
            <span className="flex items-center gap-2">
              <FiPhone />
              +91 6281570955
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-orange-200 sm:block" />

            <span className="flex items-center gap-2">
              <FiMapPin />
              Hyderabad, Telangana
            </span>
          </div>

        </div>
      </section>

    </main>
  );
};

export default EventsPage;
