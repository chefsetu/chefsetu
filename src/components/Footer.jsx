import { openApplicationForm, openEmployerForm } from '../config';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="lg:pr-8">
            <h2 className="text-3xl font-black text-white tracking-tight mb-4">
              Chef<span className="text-orange-500">Setu</span>
            </h2>
            <p className="text-slate-300 italic mb-4 font-medium">
              "Connecting Talent with Opportunity"
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              Your Career. Your Opportunity. Your Next Step. We bridge the gap between premium hospitality brands and top-tier professionals.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Home</a></li>
              <li><a href="#jobs" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Jobs</a></li>
              <li><a href="#categories" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Categories</a></li>
              <li><a href="#about" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">About Us</a></li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-6">
              For Candidates
            </h3>
            <ul className="space-y-3">
              <li><a href="#jobs" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Browse Jobs</a></li>
              <li>
                <button onClick={openApplicationForm} className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                  Apply Now
                </button>
              </li>
              <li><a href="#why-us" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Career Guidance</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-6">
              For Employers
            </h3>
            <ul className="space-y-3">
              <li>
                <button onClick={openEmployerForm} className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                  Post a Requirement
                </button>
              </li>
              <li><a href="#contact" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Contact Us</a></li>
            </ul>
          </div>

        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2026 ChefSetu. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4 text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;