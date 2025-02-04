import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { auctionData } from "../../Utils/Data";
import { useNavigate } from "react-router-dom";

export const AuctionPage = () => {
  const [sortBy, setSortBy] = useState("Most Recent");
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(80000000);
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  const [selectedPropertyType, setSelectedPropertyType] = useState("Property Sub Type");
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
      {/* Search and Filters - Centered */}
      <div className="bg-primary p-4 rounded-lg flex flex-col md:flex-row items-center justify-center gap-4 relative">
        <input
          type="text"
          placeholder="Enter City"
          className="p-3 w-60 rounded-full text-black focus:outline-none"
        />
        <select className="p-3 w-48 rounded-full text-black focus:outline-none">
          <option>Residential</option>
          <option>Commercial</option>
        </select>

        {/* Property Sub Type Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsPropertyTypeOpen(!isPropertyTypeOpen)}
            className="p-3 w-48 rounded-full bg-white text-primary font-medium"
          >
            {selectedPropertyType} ▼
          </button>

          {isPropertyTypeOpen && (
            <div className="absolute bg-white shadow-lg p-4 rounded-md w-60 top-12 right-0 z-50">
              <h3 className="font-semibold mb-2">Select Property Type</h3>
              <ul className="space-y-2">
                {["Flat", "Individual House", "Villa", "Bungalow", "Farm House", "Plot", "Studio Apartment"].map((type) => (
                  <li
                    key={type}
                    onClick={() => {
                      setSelectedPropertyType(type);
                      setIsPropertyTypeOpen(false);
                    }}
                    className="p-2 hover:bg-gray-200 rounded-md cursor-pointer"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Budget Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsBudgetOpen(!isBudgetOpen)}
            className="p-3 w-48 rounded-full bg-white text-primary font-medium"
          >
            Budget ▼
          </button>

          {isBudgetOpen && (
            <div className="absolute bg-white shadow-lg p-4 rounded-md w-80 top-12 right-0 z-50">
              <h3 className="font-semibold mb-2">Budget</h3>

              <div className="flex items-center gap-3">
                <select
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="p-2 border rounded-md text-black w-1/2"
                >
                  <option value="0">₹ 0</option>
                  <option value="500000">₹ 5 Lakh</option>
                  <option value="1000000">₹ 10 Lakh</option>
                  <option value="5000000">₹ 50 Lakh</option>
                </select>

                <span>to</span>

                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="p-2 border rounded-md text-black w-1/2"
                >
                  <option value="5000000">₹ 50 Lakh</option>
                  <option value="10000000">₹ 1 Crore</option>
                  <option value="50000000">₹ 5 Crore</option>
                  <option value="80000000">₹ 8 Crore</option>
                </select>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(Number(e.target.value))}
                className="w-full mt-4"
              />
              <div className="text-center mt-2 text-sm text-gray-600">
                Selected: ₹ {selectedPrice.toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sorting Section */}
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {auctionData.length} results | {selectedPropertyType} Properties for Sale
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-md text-black"
          >
            <option>Most Recent</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
      </div>

      {/* Auction List */}
      <div className="mt-6 space-y-6">
        {auctionData.map((auction) => (
          <div key={auction.id} className="bg-white shadow-md rounded-lg p-4 flex">
            {/* Left - Image Section */}
            <div className="w-1/3">
              <img src={auction.image} alt="Property" className="rounded-lg w-full h-44 object-cover" />
            </div>

            {/* Right - Property Details */}
            <div className="w-2/3 pl-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold">{auction.title}</h3>

              <div className="bg-blue-100 text-blue-700 p-2 rounded-md w-fit text-sm">
                <strong>Possession Type:</strong> {auction.possession}
              </div>

              <p className="text-gray-600">
                <span className="font-semibold">🏦 {auction.bank}</span>
              </p>

              <p className="text-lg font-semibold text-red-500">
                {auction.price} <span className="text-xs">(**indicative price)</span>
              </p>

              <p className="text-sm text-gray-500">
                Bank Property ID: {auction.bankPropertyId}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
              <button className="bg-primary text-white px-4 py-2 rounded-md" onClick={() => navigate(`/property/${auction.id}`)}>
                Interested?
              </button>
                <div className="flex gap-3 text-gray-600">
                  <MdFavoriteBorder size={24} className="cursor-pointer hover:text-red-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
