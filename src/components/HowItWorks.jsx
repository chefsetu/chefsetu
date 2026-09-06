const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Explore Jobs", desc: "Find opportunities matching your skills and experience." },
    { num: "02", title: "Choose an Opportunity", desc: "Review job title, salary, location and requirements." },
    { num: "03", title: "Apply", desc: "Click Apply Now and complete the simple application form." },
    { num: "04", title: "Get Connected", desc: "Our team reviews your application and contacts you regarding relevant roles." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Your journey to a new career in 4 simple steps. We make the application process fast and seamless.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Dashed Line (Visible only on Large Screens) */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 border-t-2 border-dashed border-slate-300 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Step Number Badge */}
                <div className="w-20 h-20 rounded-full bg-white shadow-lg border-4 border-slate-50 flex items-center justify-center mb-6 group-hover:border-orange-100 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-black text-orange-500">
                    {step.num}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed px-2">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;