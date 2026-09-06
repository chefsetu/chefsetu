import { FiSearch, FiMapPin, FiBriefcase } from 'react-icons/fi';

const JobSearch = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative z-20 max-w-5xl mx-auto -mt-12 mb-16 px-4">
      <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-100">
        
        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-navy focus-within:ring-1 focus-within:ring-navy transition-all">
          <FiSearch className="text-gray-400 mr-3 text-lg" />
          <input 
            type="text" 
            name="keyword" 
            placeholder="Job Title (e.g. Chef, Barista)" 
            value={filters.keyword}
            onChange={handleChange}
            className="bg-transparent w-full outline-none text-gray-700"
          />
        </div>
        
        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-navy transition-all">
          <FiMapPin className="text-gray-400 mr-3 text-lg" />
          <select name="location" value={filters.location} onChange={handleChange} className="bg-transparent w-full outline-none text-gray-700 cursor-pointer">
            <option value="">All Locations</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Navi Mumbai">Navi Mumbai</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        
        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-navy transition-all">
          <FiBriefcase className="text-gray-400 mr-3 text-lg" />
          <select name="category" value={filters.category} onChange={handleChange} className="bg-transparent w-full outline-none text-gray-700 cursor-pointer">
            <option value="">All Categories</option>
            <option value="Chef">Chef</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Food & Beverage">Food & Beverage</option>
            <option value="Housekeeping">Housekeeping</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default JobSearch;