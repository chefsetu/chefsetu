import { openEmployerForm } from '../config';
import { FiBriefcase } from 'react-icons/fi';

const EmployerSection = () => {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden mt-12">
      
      {/* Decorative Premium Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
          Are You Hiring?
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          Hotels, restaurants, and hospitality businesses can connect with top-tier candidates through ChefSetu. Streamline your hiring process and build your dream culinary team today.
        </p>
        
        <button 
          onClick={openEmployerForm} 
          className="group inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-lg font-bold rounded-lg text-white hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transform hover:-translate-y-1"
        >
          <FiBriefcase className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
          Post a Requirement
        </button>
      </div>
      
    </section>
  );
};

export default EmployerSection;