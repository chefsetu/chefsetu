import { Link } from 'react-router-dom';
import { openApplicationForm, openEmployerForm } from '../config';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:pr-8">
            <h2 className="text-3xl font-black text-white tracking-tight mb-4">
              Chef<span className="text-orange-500">Setu</span>
            </h2>

            <p className="text-slate-300 italic mb-4 font-medium">
              "Connecting Talent with Opportunity"
            </p>

            <p className="text-sm leading-relaxed text-slate-500">
              Your Career. Your Opportunity. Your Next Step. We bridge the gap
              between premium hospitality brands and top-tier professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/jobs"
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Find Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Career Paths
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-6">
              For Candidates
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/jobs"
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Browse Jobs
                </Link>
              </li>

              <li>
                <button
                  onClick={openApplicationForm}
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Apply Now
                </button>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-6">
              For Employers
            </h3>

            <ul className="space-y-3">
              <li>
                <button
                  onClick={openEmployerForm}
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Post a Requirement
                </button>
              </li>

              <li>
                <Link
                  to="/employer"
                  className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

            <div>
              <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">
                Follow ChefSetu
              </h3>

              <p className="text-sm text-slate-500">
                Follow us for career opportunities, hospitality updates and more.
              </p>
            </div>

            <div className="flex items-center gap-4">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@chef_setu/shorts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ChefSetu YouTube"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
                </svg>

                <span>YouTube</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/chef_setu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ChefSetu Instagram"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    ry="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>

                <span>Instagram</span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

          <p>
            &copy; 2026 ChefSetu. All Rights Reserved.
          </p>

          <div className="mt-4 md:mt-0 space-x-4 text-slate-600">
            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <span>|</span>

            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
//social media icons are from heroicons.com and are free to use under the MIT license.
export default Footer;