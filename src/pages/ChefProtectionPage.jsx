import { FiShield, FiFileText, FiAlertTriangle, FiExternalLink, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { openComplaintForm } from '../config';

const ChefProtectionPage = () => {
  const articles = [
    {
      id: 1,
      title: "Warning Signs of a Fraudulent Restaurant Job Offer",
      date: "September 15, 2026",
      category: "Fraud Alert",
      snippet: "Learn how to spot red flags before joining a new kitchen. If an employer refuses to give you a written offer letter or asks you to work 'on trial' for weeks without pay, read this guide immediately.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#" 
    },
    {
      id: 2,
      title: "Understanding Your Rights: Unpaid Salaries & Legal Action",
      date: "September 02, 2026",
      category: "Legal Rights",
      snippet: "Are your wages being delayed? Discover the legal steps you can take under Indian Labour Laws and how the government's SAMADHAN portal can help you recover unpaid dues.",
      image: "https://plus.unsplash.com/premium_photo-1771899703440-8614fb7dec95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWxnYWwlMjByaWdodHN8ZW58MHx8MHx8fDA%3D",
      link: "#"
    },
    {
      id: 3,
      title: "How to Build Your 'Evidence Locker' During Employment",
      date: "August 28, 2026",
      category: "Best Practices",
      snippet: "Never rely on verbal promises. Learn exactly which documents, WhatsApp messages, and bank records you need to keep safe to protect yourself in case of a future dispute.",
      image: "https://images.unsplash.com/photo-1706517212972-18a1e840989d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVtcGxveWUlMjByaWdodHN8ZW58MHx8MHx8fDA%3D",
      link: "#"
    }
  ];

  const requiredDocuments = [
    "Official Appointment/Offer Letter with Salary Breakdown",
    "Clear mention of Joining Date & Notice Period",
    "Written confirmation of Working Hours & Weekly Offs",
    "Written confirmation of Accommodation & Duty Meals",
    "Bank statements showing past salary credits (for your records)"
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 py-20 lg:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
              <FiShield className="w-10 h-10 text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Chef Protect: <span className="text-orange-500">Know Your Rights</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Fair Employment. Verified Employers. Protected Chefs. We are committed to eradicating fraud and ensuring every culinary professional works with confidence.
          </p>
        </div>
      </section>

      {/* 2. THE GOLDEN RULE BANNER */}
      <section className="bg-orange-500 py-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider flex items-center justify-center gap-3">
            <FiAlertTriangle /> NO VERBAL EMPLOYMENT TERMS <FiAlertTriangle />
          </h2>
          <p className="text-orange-50 mt-2 font-medium text-lg">
            Salary, designation, responsibilities, and conditions MUST be recorded in writing before work begins.
          </p>
        </div>
      </section>

      {/* 3. EVIDENCE LOCKER & DOCUMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <FiFileText className="text-orange-500" /> The Evidence Locker
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                If a dispute happens, "he said, she said" will not hold up in mediation or court. To protect yourself from unpaid salaries or wrongful termination, you must secure these documents <strong>before</strong> you step into the kitchen.
              </p>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <FiCheckCircle className="text-orange-500 w-6 h-6 shrink-0 mt-0.5 mr-4" />
                    <span className="text-slate-800 font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl"></div>
              
              {/* FIXED ICON HERE */}
              <FiAlertCircle className="w-16 h-16 text-orange-500 mb-6" />
              
              <h3 className="text-2xl font-bold mb-4">Are you facing an issue?</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                If your employer is withholding salary, deducting pay without authorization, or violating your contract, you have the right to file a dispute. Gather your evidence (WhatsApp chats, bank records, contract) and raise a complaint.
              </p>
              <button 
                onClick={openComplaintForm}
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
              >
                Raise a Complaint Now
              </button>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-400 mb-3">Need Government Assistance?</p>
                <a href="https://samadhan.labour.gov.in/" target="_blank" rel="noreferrer" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors">
                  Visit the Govt. SAMADHAN Portal <FiExternalLink className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEWS & ARTICLES (THE BLOG) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Latest Alerts & Guides
            </h2>
            <p className="text-lg text-slate-600">
              Stay informed. Read our latest articles on how to identify fraudulent job postings and protect your culinary career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <a href={article.link} key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-orange-500 font-bold mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {article.snippet}
                  </p>
                  <span className="inline-flex items-center text-slate-900 font-bold text-sm group-hover:text-orange-600 transition-colors mt-auto">
                    Read Full Article <FiExternalLink className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ChefProtectionPage;