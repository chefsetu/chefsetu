import { openApplicationForm } from '../config';
import { FiArrowRight } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden">
      
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 drop-shadow-sm">
          Looking for Your Next Hospitality Opportunity?
        </h2>
        <p className="text-lg md:text-xl text-orange-50 mb-10 font-medium max-w-2xl mx-auto">
          Take the next step in your career with ChefSetu. Join a growing network of culinary and hospitality professionals.
        </p>
        
        <button 
          onClick={openApplicationForm} 
          className="group inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 hover:bg-slate-50 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Apply Now
          <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
    </section>
  );
};

export default CTA;