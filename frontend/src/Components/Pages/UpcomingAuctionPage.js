import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdLocationOn, MdAccessTime } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import FilterSortComponent from "./FilterSortComponent";
import { useAuctionData } from "../../hooks/useAuctionData"; // ✅ Correct Import

export const UpcomingAuctionPage = () => {
  const { auctions, loading, error } = useAuctionData();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error) {
      const upcomingAuctions = auctions.filter((item) => item.status === "Upcoming");
      setFilteredProperties(upcomingAuctions);
    }
  }, [auctions, loading, error]);

  const handleFilterChange = ({ propertyType, sortBy, minPrice, maxPrice }) => {
    let properties = auctions
      .filter((p) => p.status === "Upcoming")
      .filter((p) => propertyType === "All" || p.category === propertyType)
      .filter((p) => p.price >= minPrice && p.price <= maxPrice);

    if (sortBy === "Lowest Price") properties.sort((a, b) => a.price - b.price);
    if (sortBy === "Highest Price") properties.sort((a, b) => b.price - a.price);

    setFilteredProperties(properties);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
      {/* Filter Component */}
      <FilterSortComponent onFilterChange={handleFilterChange} />

      {/* Sorting Header */}
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">{filteredProperties.length} results | Upcoming Auctions</h2>
      </div>

      {/* Auction List - Updated Layout */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((auction) => (
            <div
              key={auction.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-start"
            >
              {/* Left - Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={auction.images[0]}
                  alt="Property"
                  className="rounded-lg w-full h-56 object-cover"
                />
              </div>

              {/* Right - Details */}
              <div className="md:w-1/2 w-full pl-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-1">{auction.title}</h3>

                {/* Auction Start & End Dates */}
                <p className="text-sm text-gray-600 flex items-center">
                  <MdAccessTime className="mr-2 text-blue-500" />
                  <strong>Start:</strong> {auction.auctionStartDate}
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <MdAccessTime className="mr-2 text-red-500" />
                  <strong>End:</strong> {auction.auctionEndDate}
                </p>

                {/* City */}
                <p className="text-sm text-gray-600 flex items-center">
                  <MdLocationOn className="mr-2 text-green-500" />
                  <strong>City:</strong> {auction.city || "N/A"}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {auction.description}
                </p>

                {/* Price */}
                <p className="text-lg font-semibold text-red-500 mt-2">
                  ₹ {auction.price.toLocaleString()}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-primary text-white px-6 py-2 rounded-md text-sm font-semibold"
                    onClick={() => navigate(`/property/${auction.id}`)}
                  >
                    View Details
                  </button>
                  <MdFavoriteBorder size={24} className="cursor-pointer hover:text-red-500" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-2">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingAuctionPage;
