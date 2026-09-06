import { openApplicationForm } from '../config';
import mainImage from "../assets/main.png";

const Hero = () => {
  return (
    <div className="relative bg-slate-900 pt-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src={mainImage}
          alt="Professional kitchen team"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48 flex flex-col items-center text-center">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-6">
          Premium Hospitality Careers
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 max-w-4xl">
          Elevate Your Career in <span className="text-orange-500 block sm:inline">Hospitality</span>
        </h1>
        
        <p className="mt-4 text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto font-light mb-10">
          Connect directly with top-tier hotels, luxury restaurants, and professional culinary teams actively hiring talent.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#jobs" 
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-slate-900 bg-white hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Openings
          </a>
          <button 
            onClick={openApplicationForm}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-lg font-bold rounded-md text-white hover:bg-orange-500 transition-colors shadow-lg"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;