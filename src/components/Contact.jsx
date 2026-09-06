import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { openApplicationForm } from '../config';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contact ChefSetu
          </h2>
          <p className="text-lg text-slate-600">
            Have questions about a job opening or need help with your application? Reach out to our team.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Phone Card */}
          <div className="group bg-slate-50 p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
              <FiPhone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
            <p className="text-slate-600">+91 6281570955</p>
          </div>

          {/* Email Card */}
          <div className="group bg-slate-50 p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
              <FiMail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600">chefsetu.com@gmail.com</p>
          </div>

          {/* Location Card */}
          <div className="group bg-slate-50 p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
              <FiMapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600">Hyderabad, Telangana, India</p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={openApplicationForm} 
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply Now
          </button>
          <a 
            href="mailto:info@chefsetu.com" 
            className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900 rounded-lg font-bold text-lg transition-all duration-300 text-center"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;