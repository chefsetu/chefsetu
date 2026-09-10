import { FiCheck, FiTarget, FiUsers, FiShield, FiHeart, FiUserCheck, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const features = [
    "Candidate-focused approach",
    "Hospitality industry specialization",
    "Easy and transparent application process",
    "Dedicated to career opportunity discovery"
  ];

  const values = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Focused Vision",
      desc: "We exclusively serve the hospitality sector, deeply understanding its unique demands and culture."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "People First",
      desc: "We believe in empowering individuals and helping businesses build teams that thrive together."
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Trust & Transparency",
      desc: "We prioritize honest communication and clear, straightforward processes for both candidates and employers."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Industry Passion",
      desc: "We love the hospitality industry and are dedicated to elevating its standards across the board."
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      
      {/* 1. ABOUT HERO SECTION */}
      <section className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-30" 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Fine dining restaurant" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Connecting <span className="text-orange-500">Talent</span> With Opportunity
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            ChefSetu is on a mission to revolutionize how hospitality professionals find their dream roles and how premium properties build their teams.
          </p>
        </div>
      </section>

      {/* 2. CORE ABOUT SECTION */}
      <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-100 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500 opacity-50 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hospitality team" 
                className="relative z-10 w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Empowering Careers in Hospitality
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                ChefSetu is a premium career opportunity platform focused on connecting talented hospitality professionals with top-tier employment opportunities across hotels, restaurants, kitchens, food service, and related sectors.
              </p>
              
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

      {/* 3. OUR VALUES SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that drive everything we do at ChefSetu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEW SECTION: SERVING THE ECOSYSTEM */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Serving the Entire Hospitality Ecosystem
            </h2>
            <p className="text-lg text-slate-300">
              We act as the ultimate bridge between passionate culinary talent and the world's most demanding hospitality environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Candidates Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-3xl hover:border-orange-500/50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-700 text-orange-500 flex items-center justify-center mb-6 shadow-sm">
                <FiUserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Hospitality Professionals</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Your career deserves a platform that understands your worth. We curate high-quality roles that respect your craft, offer competitive salaries, and provide genuine room for growth.
              </p>
              <Link to="/jobs" className="inline-flex items-center text-orange-400 font-bold hover:text-orange-300 transition-colors">
                Browse Open Roles &rarr;
              </Link>
            </div>

            {/* For Employers Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-3xl hover:border-orange-500/50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-700 text-orange-500 flex items-center justify-center mb-6 shadow-sm">
                <FiBriefcase className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Hotels & Restaurants</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Stop settling for mismatched talent. We provide access to a vetted, passionate pool of professionals ready to elevate your kitchen, dining room, and hotel operations.
              </p>
              <Link to="/employer" className="inline-flex items-center text-orange-400 font-bold hover:text-orange-300 transition-colors">
                Partner With Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;