import { 
  FiAward, 
  FiStar, 
  FiClock, 
  FiCheckCircle, 
  FiBriefcase, 
  FiMapPin, 
  FiCalendar, 
  FiDollarSign 
} from 'react-icons/fi';
import { openApplicationForm } from '../config';

const InternshipsPage = () => {
  const internshipTracks = [
    {
      title: "Culinary & Kitchen Production",
      desc: "Train under Executive Chefs in world-class kitchens. Master continental, Asian, Indian, and bakery operations in a fast-paced luxury environment."
    },
    {
      title: "Food & Beverage Service",
      desc: "Learn the art of fine dining, banquet operations, and premium customer service in award-winning 5-star restaurants and lounges."
    },
    {
      title: "Front Office Operations",
      desc: "Become the face of luxury hospitality. Gain hands-on experience in guest relations, concierge services, and seamless check-in protocols."
    },
    {
      title: "Housekeeping Management",
      desc: "Master the exacting standards of 5-star room maintenance, laundry operations, and luxury estate management."
    }
  ];

  // Premium Dummy Data for Internships
  const openInternships = [
    {
      id: 1,
      role: "Culinary Arts Intern",
      brand: "Taj Luxury Collection",
      location: "Mumbai, Maharashtra",
      duration: "6 Months",
      stipend: "₹10,000 / Month + Meals",
      department: "Kitchen Production",
      urgent: true,
      image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      role: "F&B Service Trainee",
      brand: "JW Marriott",
      location: "Hyderabad, Telangana",
      duration: "6 Months",
      stipend: "₹8,500 / Month + Duty Meals",
      department: "Food & Beverage",
      urgent: false,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      role: "Front Office Intern",
      brand: "The Ritz-Carlton",
      location: "Pune, Maharashtra",
      duration: "12 Months",
      stipend: "₹12,000 / Month",
      department: "Front Office",
      urgent: true,
      image: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      role: "Bakery & Pastry Trainee",
      brand: "The Oberoi",
      location: "New Delhi",
      duration: "6 Months",
      stipend: "₹10,000 / Month",
      department: "Bakery / Pastry",
      urgent: false,
      image: "https://images.unsplash.com/photo-1625489461079-bcfdfe726d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJha2VyeSUyMCUyNiUyMFBhc3RyeSUyMFRyYWluZWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 5,
      role: "Housekeeping Intern",
      brand: "Novotel",
      location: "Gachibowli, Hyderabad",
      duration: "6 Months",
      stipend: "₹8,000 / Month + Meals",
      department: "Housekeeping",
      urgent: false,
      image: "https://media.istockphoto.com/id/2291820324/photo/doctor-organizing-medical-books-and-materials-in-a-modern-office-a-medical-professional-sorts.jpg?s=612x612&w=0&k=20&c=uDPqGIXT1qg5K33_JQlw9pLymawWzR5jDd3biE2nnJY="
    },
    {
      id: 6,
      role: "Kitchen Management Trainee",
      brand: "Hyatt Regency",
      location: "Bengaluru, Karnataka",
      duration: "12 Months",
      stipend: "₹15,000 / Month + Stay",
      department: "Kitchen Production",
      urgent: true,
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-40" 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury 5 Star Hotel" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1 text-orange-400">
              <FiStar className="w-6 h-6 fill-current" />
              <FiStar className="w-6 h-6 fill-current" />
              <FiStar className="w-6 h-6 fill-current" />
              <FiStar className="w-6 h-6 fill-current" />
              <FiStar className="w-6 h-6 fill-current" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Launch Your Career with <br/><span className="text-orange-500">5-Star Internships</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Gain world-class experience, industry-recognized certification, and mentorship from top hospitality leaders at premium luxury properties.
          </p>
          <button 
            onClick={openApplicationForm} 
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-lg font-bold rounded-lg text-white hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transform hover:-translate-y-1"
          >
            Apply for Internship
          </button>
        </div>
      </section>

      {/* WHY A 5-STAR INTERNSHIP? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              The 5-Star Advantage
            </h2>
            <p className="text-lg text-slate-600">
              An internship at a luxury property doesn't just build your resume—it transforms your entire professional trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6">
                <FiAward className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Certification</h3>
              <p className="text-slate-600 leading-relaxed">Earn an experience letter and certification from globally recognized hotel brands, drastically increasing your employability.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6">
                <FiBriefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Placement Assistance</h3>
              <p className="text-slate-600 leading-relaxed">Top performers frequently receive Pre-Placement Offers (PPOs) to join the property full-time upon graduation.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6">
                <FiClock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-World Exposure</h3>
              <p className="text-slate-600 leading-relaxed">No standing on the sidelines. You will actively participate in daily operations, high-pressure events, and VIP guest management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN INTERNSHIPS GRID */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Current Internship Openings
            </h2>
            <p className="text-lg text-slate-600">
              Explore active training and internship placements at top-tier luxury hotels across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openInternships.map((internship) => (
              <div key={internship.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-slate-200 group">
                
                {/* Image & Badges */}
                <div className="relative h-48 overflow-hidden">
                  <img src={internship.image} alt={internship.role} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  
                  {/* Department Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {internship.department}
                  </span>

                  {/* Urgent Badge */}
                  {internship.urgent && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wide uppercase">
                      Immediate
                    </span>
                  )}

                  {/* Hotel Brand Name positioned at the bottom of the image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center">
                    <FiStar className="text-orange-400 w-5 h-5 mr-2 fill-current" />
                    <span className="text-white font-bold text-lg drop-shadow-md">{internship.brand}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-5">{internship.role}</h3>
                  
                  <div className="space-y-3 text-sm text-slate-600 mb-6 flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                        <FiMapPin className="text-orange-500" />
                      </div>
                      <span className="font-medium">{internship.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                        <FiCalendar className="text-orange-500" />
                      </div>
                      <span className="font-medium">{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                        <FiDollarSign className="text-orange-500" />
                      </div>
                      <span className="font-bold text-slate-800">{internship.stipend}</span>
                    </div>
                  </div>
                </div>
                
                {/* Footer Apply Button */}
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <button 
                    onClick={openApplicationForm} 
                    className="w-full py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors text-sm shadow-md"
                  >
                    Apply For Internship
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERNSHIP TRACKS SUMMARY */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Explore Departments
            </h2>
            <p className="text-lg text-slate-600">
              We offer targeted placement assistance for 6-month and 12-month industrial training programs across these key divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipTracks.map((track, idx) => (
              <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all">
                <FiCheckCircle className="text-orange-500 w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{track.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{track.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-900 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Start Your Journey Today</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">Submit your application and our student placement coordinators will match you with the perfect luxury hotel opportunity.</p>
          <button 
            onClick={openApplicationForm} 
            className="px-8 py-4 bg-orange-500 text-lg font-bold rounded-lg text-white hover:bg-orange-600 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Submit Internship Application
          </button>
        </div>
      </section>

    </div>
  );
};

export default InternshipsPage;