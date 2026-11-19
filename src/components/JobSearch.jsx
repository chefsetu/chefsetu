import { FiSearch, FiMapPin, FiBriefcase, FiClock } from 'react-icons/fi';

const EXPERIENCE_OPTIONS = [
  { label: 'All Experience', value: '' },
  { label: 'Fresher', value: 'fresher' },
  { label: '1–3 Years', value: '1-3' },
  { label: '3–5 Years', value: '3-5' },
  { label: '5–10+ Years', value: '5-10+' },
];

const JobSearch = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleExperienceClick = (value) => {
    setFilters({
      ...filters,
      experience: filters.experience === value ? '' : value,
    });
  };

  return (
    <div className="relative z-20 max-w-5xl mx-auto -mt-12 mb-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-slate-100 space-y-4">
        
        {/* Top Row: Keyword, Location, Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-all">
            <FiSearch className="text-slate-400 mr-3 text-lg shrink-0" />
            <input
              type="text"
              name="keyword"
              placeholder="Job Title (e.g. Chef, Barista)"
              value={filters.keyword}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-slate-700 font-medium placeholder:font-normal"
            />
          </div>

          <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus-within:border-orange-500 transition-all">
            <FiMapPin className="text-slate-400 mr-3 text-lg shrink-0" />
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-slate-700 font-medium cursor-pointer appearance-none"
            >
              <option value="">All Locations</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="secunderabad">Secunderabad</option>
              <option value="banjara-hills">Banjara Hills</option>
              <option value="jubilee-hills">Jubilee Hills</option>
              <option value="madhapur">Madhapur</option>
              <option value="hitec-city">HITEC City</option>
              <option value="gachibowli">Gachibowli</option>
              <option value="kondapur">Kondapur</option>
              <option value="kukatpally">Kukatpally</option>
              <option value="miyapur">Miyapur</option>
              <option value="bachupally">Bachupally</option>
              <option value="uppal">Uppal</option>
              <option value="lb-nagar">LB Nagar</option>
              <option value="dilsukhnagar">Dilsukhnagar</option>
              <option value="mehdipatnam">Mehdipatnam</option>
              <option value="tolichowki">Tolichowki</option>
              <option value="attapur">Attapur</option>
              <option value="kompally">Kompally</option>
              <option value="sainikpuri">Sainikpuri</option>
              <option value="shamshabad">Shamshabad</option>
              <option value="Delhi">Delhi</option>
              <option value="Benguluru">Benguluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Navi Mumbai">Navi Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="flex items-center bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus-within:border-orange-500 transition-all">
            <FiBriefcase className="text-slate-400 mr-3 text-lg shrink-0" />
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-slate-700 font-medium cursor-pointer appearance-none"
            >
              <option value="">All Categories</option>
              <option value="Chef">Chef</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Housekeeping">Housekeeping</option>
              <option value="Executive Chef">Executive Chef</option>
              <option value="Chef de Partie">Chef de Partie</option>
              <option value="Commis Chef">Commis Chef</option>
              <option value="International ">International</option>
              <option value="Cuisine  Chef">Cuisine</option>
              <option value="Bakery & Pastry">Bakery & Pastry</option>
              <option value="Specialty Chef">Specialty Chef</option>
              <option value="Sous Chef ">Sous Chef</option>
              <option value="Barista ">Barista</option>
            </select>
          </div>
        </div>

        {/* Bottom Row: Experience Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2">
            <FiClock className="text-sm" />
            Experience:
          </span>

          {EXPERIENCE_OPTIONS.map((option) => {
            const isActive = (filters.experience || '') === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleExperienceClick(option.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default JobSearch;