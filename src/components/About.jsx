import { FiCheck } from 'react-icons/fi';

const About = () => {
  const features = [
    "Candidate-focused approach",
    "Hospitality industry specialization",
    "Easy and transparent application process",
    "Dedicated to career opportunity discovery"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative group">
            {/* Decorative background blob/offset */}
            <div className="absolute -inset-4 bg-orange-100 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500 opacity-50 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Hospitality team" 
              className="relative z-10 w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center">
            <span className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Empowering Careers in Hospitality
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              ChefSetu is a premium career opportunity platform focused on connecting talented hospitality professionals with top-tier employment opportunities across hotels, restaurants, kitchens, food service, and related sectors.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mt-1 mr-4 shadow-sm">
                    <FiCheck className="w-4 h-4" />
                  </span>
                  <span className="text-slate-700 font-medium text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;