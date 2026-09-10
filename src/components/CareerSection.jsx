import { FiArrowRight, FiTrendingUp, FiGlobe, FiAward, FiCheckCircle } from 'react-icons/fi';
import { openApplicationForm } from '../config';

const CareersPage = () => {
  // Your core career tracks
  const careers = [
    { 
      title: "Chef & Culinary Arts", 
      desc: "Master your craft in professional kitchens. From Commis to Executive Chef, lead culinary excellence and create unforgettable dining experiences.", 
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Hotel Operations", 
      desc: "Build a rewarding career in premium hotel management, front office, housekeeping, and guest relations. Be the face of world-class hospitality.", 
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Restaurant Management", 
      desc: "Join dynamic teams in high-end dining spaces. Manage front-of-house operations, staff coordination, and ensure flawless customer service.", 
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Hospitality Internships", 
      desc: "Start your journey with hands-on experience. Get professional mentorship and build a strong foundation for a long-term hospitality career.", 
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    }
  ];

  const growthBenefits = [
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Rapid Career Progression",
      description: "The hospitality industry rewards hard work and talent. Move up the ranks faster than in traditional corporate environments."
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "The skills you learn in kitchens and hotels are universal. Your career can literally take you anywhere in the world."
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Work alongside industry veterans, learn new cuisines, master operational software, and develop unparalleled leadership skills."
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      
      {/* 1. CAREERS HERO SECTION */}
      <section className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-30" 
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Chef preparing food" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-6">
            Discover Your Path
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Find Your Calling in <span className="text-orange-500">Hospitality</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Whether your passion lies in crafting culinary masterpieces or delivering exceptional guest experiences, ChefSetu connects you to the perfect role.
          </p>
        </div>
      </section>

      {/* 2. CAREER TRACKS (Expanded Grid) */}
      <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Explore Career Tracks
            </h2>
            <p className="text-lg text-slate-600">
              Select an area of expertise to find roles tailored to your skills, experience, and career ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {careers.map((career, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={openApplicationForm}
              >
                {/* Image Section */}
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden bg-slate-100">
                  <img 
                    src={career.img} 
                    alt={career.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Content */}
                <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {career.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {career.desc}
                  </p>
                  <button className="inline-flex items-center text-orange-500 font-bold text-sm tracking-wide uppercase mt-auto">
                    View Opportunities 
                    <FiArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GROWTH & BENEFITS */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Build Your Career Here?
            </h2>
            <p className="text-lg text-slate-600">
              The hospitality industry is one of the most dynamic and fastest-growing sectors in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA FOR CANDIDATES */}
      <section className="relative py-20 bg-orange-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6 drop-shadow-sm">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of professionals finding their dream roles through ChefSetu's network of premium employers.
          </p>
          <button 
            onClick={openApplicationForm} 
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FiCheckCircle className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            Apply For Open Roles
          </button>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;