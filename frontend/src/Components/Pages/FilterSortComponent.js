import { useState } from "react";

const FilterSortComponent = ({ onFilterChange }) => {
  const [propertyType, setPropertyType] = useState("All");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(80000000);

  const handleFilterChange = () => {
    onFilterChange({ propertyType, sortBy, minPrice, maxPrice });
  };

  return (
    <div className="bg-primary p-4 rounded-lg flex flex-col md:flex-row items-center justify-center gap-4">
      {/* Search Input */}
      <input type="text" placeholder="Enter City" className="p-3 w-60 rounded-full text-black focus:outline-none" />

      {/* Property Type Filter */}
      <select 
        value={propertyType} 
        onChange={(e) => setPropertyType(e.target.value)} 
        className="p-3 w-48 rounded-full text-black focus:outline-none"
      >
        <option value="All">All</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Luxury">Luxury</option>
        <option value="Land">Land</option>
        <option value="Special Use">Special Use</option>
      </select>

      {/* Budget Filter + Apply Button in the Same Row */}
      <div className="flex items-center gap-3">
        <span className="text-white">Budget:</span>
        <select value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="p-2 border rounded-md text-black w-28">
          <option value="0">₹ 0</option>
          <option value="500000">₹ 5 Lakh</option>
          <option value="1000000">₹ 10 Lakh</option>
          <option value="5000000">₹ 50 Lakh</option>
        </select>
        <span>to</span>
        <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="p-2 border rounded-md text-black w-28">
          <option value="5000000">₹ 50 Lakh</option>
          <option value="10000000">₹ 1 Crore</option>
          <option value="50000000">₹ 5 Crore</option>
          <option value="80000000">₹ 8 Crore</option>
        </select>

        {/* Apply Filter Button (Next to Budget) */}
        <button 
          onClick={handleFilterChange} 
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </div>

      {/* Sorting Section */}
      <div className="flex items-center gap-2">
        <span className="text-white">Sort By:</span>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)} 
          className="p-2 border rounded-md text-black"
        >
          <option value="Most Recent">Most Recent</option>
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortComponent;
