import { openApplicationForm } from '../config';
import { FiArrowRight } from 'react-icons/fi';

const CareerSection = () => {
  const careers = [
    { 
      title: "Chef Careers", 
      desc: "Master your craft in professional kitchens and lead culinary excellence.", 
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      title: "Hotel Careers", 
      desc: "Build a rewarding career in premium hotel operations and guest relations.", 
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      title: "Restaurant Careers", 
      desc: "Join dynamic teams in high-end dining spaces and manage front-of-house.", 
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      title: "Hospitality Internships", 
      desc: "Start your journey with hands-on experience and professional mentorship.", 
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Build Your Career in Hospitality
          </h2>
          <p className="text-lg text-slate-600">
            Explore specialized career tracks tailored for your skills. Whether you belong in the kitchen or the front office, find your path here.
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {careers.map((career, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={openApplicationForm}
            >
              
              {/* Image Container with Hover Zoom */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img 
                  src={career.img} 
                  alt={career.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {career.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {career.desc}
                </p>
                
                {/* Interactive Button */}
                <button className="inline-flex items-center text-orange-500 font-semibold text-sm tracking-wide uppercase group-hover:text-orange-600 transition-colors">
                  Explore Opportunities 
                  <FiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareerSection;