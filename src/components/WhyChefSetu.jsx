import { FiCheckCircle, FiTrendingUp, FiMap, FiBriefcase, FiTarget, FiZap } from 'react-icons/fi';

const WhyChefSetu = () => {
  const reasons = [
    { icon: <FiCheckCircle/>, title: "Quality Opportunities", desc: "Discover genuine career opportunities shared through ChefSetu." },
    { icon: <FiBriefcase/>, title: "Multiple Roles", desc: "Explore opportunities across kitchens, hotels, restaurants and hospitality." },
    { icon: <FiZap/>, title: "Easy Application", desc: "Apply quickly through our simple application process." },
    { icon: <FiTarget/>, title: "Career Guidance", desc: "Get connected with opportunities suited to your experience and skills." },
    { icon: <FiMap/>, title: "Multiple Locations", desc: "Explore job opportunities across different cities and destinations." },
    { icon: <FiTrendingUp/>, title: "Career Growth", desc: "Find opportunities that can help you grow your hospitality career." }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Choose ChefSetu?
          </h2>
          <p className="text-lg text-slate-600">
            We are dedicated to helping hospitality professionals succeed by connecting talent with the right opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              {/* Icon Wrapper */}
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                {reason.icon}
              </div>
              
              {/* Card Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChefSetu;