import { 
  FiCoffee, 
  FiHome, 
  FiBriefcase, 
  FiAward, 
  FiBell, 
  FiStar, 
  FiCheckSquare, 
  FiHeart 
} from 'react-icons/fi';

const Categories = () => {
  // Replaced emojis with clean, professional vector icons
  const categories = [
    { icon: <FiStar />, name: "Chefs & Cooks" },
    { icon: <FiCoffee />, name: "Food & Beverage" },
    { icon: <FiHome />, name: "Hotel Operations" },
    { icon: <FiCheckSquare />, name: "Housekeeping" },
    { icon: <FiHeart />, name: "Bakery & Pastry" },
    { icon: <FiBriefcase />, name: "Management" },
    { icon: <FiAward />, name: "Hospitality Internships" },
    { icon: <FiBell />, name: "Front Office" },
  ];

  return (
    <section id="categories" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Browse Jobs by Category
          </h2>
          <p className="text-lg text-slate-600">
            Find the perfect role that matches your expertise. Explore opportunities across all hospitality departments.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <a 
              href="#jobs" 
              key={idx} 
              className="group bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container with interactive hover state */}
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-3xl mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                {cat.icon}
              </div>
              
              {/* Category Title */}
              <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-orange-600 transition-colors">
                {cat.name}
              </h3>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Categories;