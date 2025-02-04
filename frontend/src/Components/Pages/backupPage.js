import { useState } from "react";
import { useParams } from "react-router-dom";
import { propertyData } from "../../Utils/Data";
import { Dialog } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

export const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyData.find((item) => item.id.toString() === id);

  // State hooks
  const [currentBid, setCurrentBid] = useState(property?.bprice || 0);
  const [bidAmount, setBidAmount] = useState((property?.bprice || 0) + 1000);
  const [bidHistory, setBidHistory] = useState([]);
  const [helpOpen, setHelpOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // State for toggling Help on Bidding details
  const [showDetails, setShowDetails] = useState({
    biddingOverview: false,
    maxBids: false,
    reservePrices: false,
    biddingExample: false,
    timingExtensions: false
  });

  // Ensure property exists
  if (!property) {
    return <div className="text-center text-red-500 mt-10">Property not found</div>;
  }

  // Bid functions
  const increaseBid = () => setBidAmount((prev) => prev + 1000);
  const decreaseBid = () => setBidAmount((prev) => Math.max(currentBid, prev - 1000));

  const placeBid = () => {
    setCurrentBid(bidAmount);
    setBidHistory([{ user: "You", amount: bidAmount, date: new Date().toLocaleString() }, ...bidHistory]);
  };

  // Image slider functions
  const nextImage = () => {
    if (property?.extraImages?.length > 0) {
      setCurrentImage((prev) => (prev + 1) % property.extraImages.length);
    }
  };

  const prevImage = () => {
    if (property?.extraImages?.length > 0) {
      setCurrentImage((prev) => (prev - 1 + property.extraImages.length) % property.extraImages.length);
    }
  };

  // Toggle details in the help modal
  const toggleDetails = (section) => {
    setShowDetails(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 mt-24 flex flex-col lg:flex-row">
      {/* Property Image Slider on Left */}
      <div className="relative lg:w-2/3 mx-auto">
        <img 
          src={property?.extraImages?.[currentImage] || 'fallback-image-url.jpg'} 
          alt="Property" 
          className="rounded-lg w-full h-96 object-cover" 
        />
        <button 
          onClick={prevImage} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <FaChevronRight />
        </button>
      </div>

      {/* Bid Section on the Right */}
      <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-md mx-auto mt-6 lg:mt-0 lg:ml-6">
        <h2 className="text-lg font-semibold">Current Bid</h2>
        <p className="text-3xl font-bold text-green-600">₹{currentBid.toLocaleString()}</p>
        <p className="text-red-500">(Reserve Not Met)</p>

        <div className="flex items-center gap-2 mt-4">
          <button onClick={decreaseBid} className="px-3 py-1 bg-gray-300 rounded-full">-</button>
          <input type="text" value={`₹${bidAmount.toLocaleString()}`} readOnly className="text-center font-semibold w-28 border rounded-lg py-1" />
          <button onClick={increaseBid} className="px-3 py-1 bg-gray-300 rounded-full">+</button>
        </div>

        <button onClick={placeBid} className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4">
          Place Bid
        </button>
        <button onClick={() => setHelpOpen(true)} className="bg-gray-700 text-white w-full py-2 rounded-lg mt-2">
          Help on Bidding
        </button>

        <div className="mt-6 border-t pt-4">
          <p className="text-sm text-gray-600">Time Left: <strong>4h 28m 38s</strong></p>
          <p className="text-sm text-gray-600">Scheduled End Date: <strong>4th Feb 2025 13:02</strong></p>
        </div>
      </div>

      {/* Property Description */}
      <div className="w-full bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold">Property Description</h3>
        <p className="mt-2">{property?.description}</p>
      </div>

      {/* Bidding History */}
      <div className="w-full bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold">Bidding History</h3>
        <table className="w-full mt-3 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">User</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {bidHistory.length > 0 ? (
              bidHistory.map((bid, index) => (
                <tr key={index}>
                  <td className="border p-2">{bid.user}</td>
                  <td className="border p-2">₹{bid.amount.toLocaleString()}</td>
                  <td className="border p-2">{bid.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-2 text-gray-500">No bids yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      

      {/* Help on Bidding Modal */}
      <Dialog open={helpOpen} onClose={() => setHelpOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-2/3 max-w-2xl">
          <h2 className="text-2xl font-bold">Help on Bidding</h2>

          {/* Bidding Overview */}
          <p className="mt-4"><strong>Bidding Overview</strong></p>
          <p>
            {showDetails.biddingOverview ? (
              <>
                When the auction is open, you can place bids in line with the pre-determined bid increment levels using the bid increase (+) and bid decrease (–) buttons provided.
                Every time you place a bid you will be asked to confirm your bid before submitting it, and you will be clearly shown on the screen whether your bid was successful.
                A full list of all bids placed is displayed in the bid history table.
                <button onClick={() => toggleDetails("biddingOverview")} className="text-blue-600 ml-2">Hide Details</button>
              </>
            ) : (
              <>
                When the auction is open, you can place bids in line with the pre-determined bid increment levels using the bid increase (+) and bid decrease (–) buttons.
                <button onClick={() => toggleDetails("biddingOverview")} className="text-blue-600 ml-2">View details</button>
              </>
            )}
          </p>

          {/* Maximum (Proxy) Bids */}
          <p className="mt-2"><strong>Maximum (Proxy) Bids</strong></p>
          <p>
            {showDetails.maxBids ? (
              <>
                You are not restricted to placing a bid at the minimum bid amount, but can instead increase your bid and place a maximum (proxy) bid in the system. By setting a maximum bid, the system will automatically bid on your behalf to maintain your position as the highest bidder, up to your maximum bid amount. If you are outbid, you will be notified via email so you can opt to increase your bid if you so choose. You also have the option to decrease your proxy bid.
                If two or more users place identical bids, the bid that was placed first takes precedence, and this includes proxy bids.
                <button onClick={() => toggleDetails("maxBids")} className="text-blue-600 ml-2">Hide Details</button>
              </>
            ) : (
              <>
                View details about placing maximum bids.
                <button onClick={() => toggleDetails("maxBids")} className="text-blue-600 ml-2">View details</button>
              </>
            )}
          </p>

          {/* Reserve Prices */}
          <p className="mt-2"><strong>Reserve Prices</strong></p>
          <p>
            {showDetails.reservePrices ? (
              <>
                Virtually every lot is sold subject to a reserve price (the minimum price that the auctioneer is authorised to sell for). When you submit a maximum bid, the actual bid placed by the system will depend on whether the reserve price has been met, as defined below.
                <button onClick={() => toggleDetails("reservePrices")} className="text-blue-600 ml-2">Hide Details</button>
              </>
            ) : (
              <>
                View details about reserve prices.
                <button onClick={() => toggleDetails("reservePrices")} className="text-blue-600 ml-2">View details</button>
              </>
            )}
          </p>

          {/* Bidding Example */}
          <p className="mt-2"><strong>Bidding Example</strong></p>
          <p>
            {showDetails.biddingExample ? (
              <>
                The current bid on a lot is £90,000. The reserve price has been set at £100,000 (not disclosed). Tom wants to bid. The minimum bid amount is £91,000 but Tom decides to place a maximum bid of £97,000. This is below the reserve price, so the system places a bid for Tom at his maximum bid amount and he becomes the highest bidder at £97,000.
                <button onClick={() => toggleDetails("biddingExample")} className="text-blue-600 ml-2">Hide Details</button>
              </>
            ) : (
              <>
                View details about bidding examples.
                <button onClick={() => toggleDetails("biddingExample")} className="text-blue-600 ml-2">View details</button>
              </>
            )}
          </p>

          {/* Timing and Bid Extensions */}
          <p className="mt-2"><strong>Timing and Bid Extensions</strong></p>
          <p>
            {showDetails.timingExtensions ? (
              <>
                Lots will close sequentially in lot number order, with each lot scheduled to close 2 minutes after its preceding lot. However, these times are subject to change due to reasons like withdrawn, postponed, and sold prior lots. If a bid is placed within the final 60 seconds, the auction will be extended by an additional 60 seconds – known as the 'bidding extension window'.
                <button onClick={() => toggleDetails("timingExtensions")} className="text-blue-600 ml-2">Hide Details</button>
              </>
            ) : (
              <>
                View details about timing and bid extensions.
                <button onClick={() => toggleDetails("timingExtensions")} className="text-blue-600 ml-2">View details</button>
              </>
            )}
          </p>

          {/* Final Disclaimer */}
          <p className="mt-4 text-sm text-gray-600">
            NB: Please note that the way the bidding works may vary slightly from auctioneer to auctioneer. We strongly advise you to read the bidding guide for any auction you plan to bid on.
          </p>

          <button onClick={() => setHelpOpen(false)} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default PropertyDetails;
///////////////////////////////////////////////////////////////////////////////


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
