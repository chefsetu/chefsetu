import { Link } from 'react-router-dom';
import { 
  FiCoffee, 
  FiAward, 
  FiStar, 
  FiGlobe,
  FiCompass,
  FiUsers,
  FiAnchor,
  FiBookOpen
} from 'react-icons/fi';

const Categories = () => {
  // Upgraded to your highly detailed, Chef-focused categories
  const categories = [
    { 
      icon: <FiStar />, 
      name: "Indian Cuisine",
      roles: "South Indian • North Indian • Tandoor • Biryani Chef"
    },
    { 
      icon: <FiGlobe />, 
      name: "Continental & Western",
      roles: "Continental • Italian • European • Western Cuisine"
    },
    { 
      icon: <FiCompass />, 
      name: "Asian Cuisine",
      roles: "Chinese • Thai • Japanese • Pan-Asian Chef"
    },
    { 
      icon: <FiCoffee />, 
      name: "Pastry & Bakery",
      roles: "Pastry Chef • Baker • Chocolatier • Confectioner"
    },
    { 
      icon: <FiAward />, 
      name: "Specialist Chefs",
      roles: "Chef de Partie • Garde Manger • Commis Chef"
    },
    { 
      icon: <FiUsers />, 
      name: "Culinary Leadership",
      roles: "Executive Chef • Corporate Chef • Kitchen Manager"
    },
    { 
      icon: <FiAnchor />, 
      name: "Cruise & International",
      roles: "Cruise Ship Chef • Overseas • Resort Opportunities"
    },
    { 
      icon: <FiBookOpen />, 
      name: "Internships & Freshers",
      roles: "Culinary Intern • Apprentice • Freshers"
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Browse Culinary Opportunities
          </h2>
          <p className="text-lg text-slate-600">
            Find the perfect kitchen role that matches your expertise. Explore opportunities across all cuisines and leadership levels.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link 
              to="/jobs" 
              key={idx} 
              className="group bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container with interactive hover state */}
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-3xl mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                {cat.icon}
              </div>
              
              {/* Category Title */}
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors mb-3">
                {cat.name}
              </h3>

              {/* Specific Roles / Sub-categories */}
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                {cat.roles}
              </p>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Categories;