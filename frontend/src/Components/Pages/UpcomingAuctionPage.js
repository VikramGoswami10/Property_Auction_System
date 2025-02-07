import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import FilterSortComponent from "./FilterSortComponent"; // ✅ Import new filter component
import { AuctionData } from "../../Utils/Data"; // ✅ Import Auction Data

export const UpcomingAuctionPage = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();

  // ✅ Filter only Upcoming Auctions initially
  const upcomingAuctions = AuctionData.filter((item) => item.status === "Upcoming");

  useEffect(() => {
    setFilteredProperties(upcomingAuctions);
  }, []);

  const handleFilterChange = ({ propertyType, sortBy, minPrice, maxPrice }) => {
    let properties = upcomingAuctions
      .filter((p) => propertyType === "All" || p.category === propertyType)
      .filter((p) => p.price >= minPrice && p.price <= maxPrice);

    if (sortBy === "Lowest Price") properties.sort((a, b) => a.price - b.price);
    if (sortBy === "Highest Price") properties.sort((a, b) => b.price - a.price);

    setFilteredProperties(properties);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
      {/* ✅ Integrated the new FilterSortComponent */}
      <FilterSortComponent onFilterChange={handleFilterChange} />

      {/* Sorting Section */}
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">{filteredProperties.length} results | Upcoming Auctions</h2>
      </div>

      {/* Auction List */}
      <div className="mt-6 space-y-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((auction) => (
            <div key={auction.id} className="bg-white shadow-md rounded-lg p-4 flex">
              {/* Left - Image Section */}
              <div className="w-1/3">
                <img src={auction.images[0]} alt="Property" className="rounded-lg w-full h-44 object-cover" />
              </div>

              {/* Right - Property Details */}
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold">{auction.title}</h3>

                <div className="bg-blue-100 text-blue-700 p-2 rounded-md w-fit text-sm">
                  <strong>Category:</strong> {auction.category}
                </div>

                <p className="text-lg font-semibold text-red-500">
                  ₹ {auction.price.toLocaleString()}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-md"
                    onClick={() => navigate(`/property/${auction.id}`)}
                  >
                    View Details
                  </button>
                  <div className="flex gap-3 text-gray-600">
                    <MdFavoriteBorder size={24} className="cursor-pointer hover:text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingAuctionPage;
