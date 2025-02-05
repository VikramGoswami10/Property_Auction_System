import { useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionData } from "../../Utils/Data"; // ✅ Fixed Import
import { Dialog } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For image slider

export const PropertyDetails = () => {
  const { id } = useParams();
  const property = AuctionData.find((item) => item.id.toString() === id);

 

  const [currentBid, setCurrentBid] = useState(property?.currentBid || 0);
  const [bidAmount, setBidAmount] = useState((property?.currentBid || 0) + property?.bidIncrement);
  const [bidHistory, setBidHistory] = useState(property?.biddingHistory || []);
  const [helpOpen, setHelpOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // State for toggling Help on Bidding details
  const [showDetails, setShowDetails] = useState({
    biddingOverview: false,
    maxBids: false,
    reservePrices: false,
    biddingExample: false,
    timingExtensions: false,
  });

  if (!property) {
    return <div className="text-center text-red-500 mt-10">Property not found</div>;
  }

  const increaseBid = () => setBidAmount((prev) => prev + property?.bidIncrement);
  const decreaseBid = () => setBidAmount((prev) => Math.max(currentBid, prev - property?.bidIncrement));

  const placeBid = () => {
    setCurrentBid(bidAmount);
    setBidHistory([{ user: "You", amount: bidAmount, date: new Date().toLocaleString() }, ...bidHistory]);
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  const toggleDetails = (section) => {
    setShowDetails((prevState) => ({ ...prevState, [section]: !prevState[section] }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 mt-24">
      {/* Top Section: Image Slider | Bidding Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Slider */}
        <div className="md:w-2/3 relative">
          <img
            src={property.images[currentImage]}
            alt="Property"
            className="rounded-lg w-full h-96 object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Bidding Section */}
        <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Current Bid</h2>
          <p className="text-3xl font-bold text-green-600">₹{currentBid.toLocaleString()}</p>
          <p className="text-red-500">(Reserve Not Met)</p>

          <div className="flex items-center gap-2 mt-4">
            <button onClick={decreaseBid} className="px-3 py-1 bg-gray-300 rounded-full">-</button>
            <input
              type="text"
              value={`₹${bidAmount.toLocaleString()}`}
              readOnly
              className="text-center font-semibold w-28 border rounded-lg py-1"
            />
            <button onClick={increaseBid} className="px-3 py-1 bg-gray-300 rounded-full">+</button>
          </div>

          <button onClick={placeBid} className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4">
            Place Bid
          </button>

          <button onClick={() => setHelpOpen(true)} className="bg-gray-700 text-white w-full py-2 rounded-lg mt-2">
            Help on Bidding
          </button>
        </div>
      </div>

      {/* Description Section (Full Width) */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Description</h3>
        <p className="mt-2 text-gray-600">{property.description}</p>
      </div>

      {/* Bidding History (Full Width) */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Bidding History</h3>
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
