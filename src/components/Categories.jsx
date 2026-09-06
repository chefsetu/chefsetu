const Categories = () => {
  const categories = [
    { icon: "👨‍🍳", name: "Chefs & Cooks" },
    { icon: "☕", name: "Food & Beverage" },
    { icon: "🏨", name: "Hotel Operations" },
    { icon: "🧹", name: "Housekeeping" },
    { icon: "🍰", name: "Bakery & Pastry" },
    { icon: "🧑‍💼", name: "Management" },
    { icon: "🎓", name: "Hospitality Internships" },
    { icon: "🛎", name: "Front Office" },
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Browse Jobs by Category</h2>
          <p className="text-gray-600 text-lg">Find the perfect role that matches your expertise</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <a href="#jobs" key={idx} className="bg-lightBg border border-gray-100 p-8 rounded-xl text-center hover:-translate-y-2 hover:shadow-lg hover:border-gold transition-all duration-300 group">
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <h3 className="font-semibold text-navy">{cat.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;