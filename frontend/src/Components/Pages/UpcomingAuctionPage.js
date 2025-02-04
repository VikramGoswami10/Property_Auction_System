import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { upcomingAuctions } from "../../Utils/Data";

export const UpcomingAuctionPage = () => {
  const [sortBy, setSortBy] = useState("Most Recent");

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
      {/* Search and Filters - Centered */}
      <div className="bg-primary p-4 rounded-lg flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Enter City"
          className="p-3 w-60 rounded-full text-black focus:outline-none"
        />
        <select className="p-3 w-48 rounded-full text-black focus:outline-none">
          <option>Residential</option>
          <option>Commercial</option>
        </select>
      </div>

      {/* Sorting Section */}
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {upcomingAuctions.length} results | Upcoming Auctions
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
        {upcomingAuctions.map((auction) => (
          <div key={auction.id} className="bg-white shadow-md rounded-lg p-4 flex">
            {/* Left - Image Section */}
            <div className="w-1/3">
              <img src={auction.image} alt="Property" className="rounded-lg w-full h-44 object-cover" />
            </div>

            {/* Right - Property Details */}
            <div className="w-2/3 pl-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold">{auction.title}</h3>

              <div className="bg-blue-100 text-blue-700 p-2 rounded-md w-fit text-sm">
                <strong>Category:</strong> {auction.catgeory}
              </div>

              <p className="text-lg font-semibold text-red-500">
                ₹ {auction.price.toLocaleString()}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-primary text-white px-4 py-2 rounded-md">View Details</button>
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
