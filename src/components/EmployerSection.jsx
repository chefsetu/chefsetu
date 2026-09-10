import { FiBriefcase, FiUsers, FiTarget, FiZap, FiCheckCircle } from 'react-icons/fi';
import { openEmployerForm } from '../config';

const EmployersPage = () => {
  const benefits = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Targeted Hospitality Talent",
      description: "Stop sifting through irrelevant resumes. We exclusively connect you with professionals experienced in hotels, restaurants, and commercial kitchens."
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Fast & Streamlined Hiring",
      description: "Post your requirements in minutes. Our platform is designed to help you fill urgent vacancies quickly and efficiently."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Diverse Candidate Pool",
      description: "From Executive Chefs to Front Office executives and Housekeeping staff, find the exact skill set your property needs."
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      
      {/* 1. EMPLOYER HERO SECTION */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 -left-20 w-[20rem] h-[20rem] bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-6">
            For Hotels & Restaurants
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Build Your Dream <span className="text-orange-500">Hospitality Team</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with ChefSetu to find top-tier chefs, management staff, and hospitality professionals ready to elevate your guest experience.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={openEmployerForm} 
              className="group inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-lg font-bold rounded-lg text-white hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transform hover:-translate-y-1"
            >
              <FiBriefcase className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              Post a Job Requirement
            </button>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Partner With ChefSetu?
            </h2>
            <p className="text-lg text-slate-600">
              We understand the unique staffing challenges of the hospitality industry. Here is how we make hiring easier for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HIRING PROCESS (HOW IT WORKS FOR EMPLOYERS) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Process Steps */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                Seamless Hiring Process
              </h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">1</div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Submit Your Requirements</h4>
                    <p className="text-slate-600">Fill out our quick employer form detailing the roles, experience required, and location for your property.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">2</div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">We Review & Publish</h4>
                    <p className="text-slate-600">Our team ensures your listing is optimized and publishes it to our targeted network of hospitality professionals.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">3</div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Receive Applications</h4>
                    <p className="text-slate-600">Get connected with candidates who match your specific culinary and operational requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-4 bg-orange-100 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 opacity-50 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant Management" 
                className="relative z-10 w-full h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION (Your upgraded dark section) */}
      <section className="relative py-20 bg-slate-900 overflow-hidden border-t-4 border-orange-500">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Ready to Find Your Next Star Employee?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            Join the growing list of hotels and restaurants that trust ChefSetu to build their professional teams.
          </p>
          <button 
            onClick={openEmployerForm} 
            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-lg font-bold rounded-lg text-white hover:bg-orange-500 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] transform hover:-translate-y-1"
          >
            <FiCheckCircle className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            Post Your First Requirement
          </button>
        </div>
      </section>

    </div>
  );
};

export default EmployersPage;