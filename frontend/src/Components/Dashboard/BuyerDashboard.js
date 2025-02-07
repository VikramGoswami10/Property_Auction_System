import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Package,
  History,
  LogOut,
  Search,
} from "lucide-react";
import Sidebar from "../Common/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import Axios

function BuyerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [auctions, setAuctions] = useState([]); // ✅ State for Auctions
  const [biddingHistory, setBiddingHistory] = useState([]); // ✅ State for Bidding History
  const [loadingAuctions, setLoadingAuctions] = useState(true);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [errorAuctions, setErrorAuctions] = useState(null);
  const [errorHistory, setErrorHistory] = useState(null);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
    { icon: Package, label: "Active Auctions", value: "active-auctions" },
    { icon: History, label: "Bid History", value: "bid-history" },
    { icon: LogOut, label: "Logout", value: "logout" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  // ✅ Fetch Active Auctions from Backend
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get("https://localhost:7155/api/Auctions");
        setAuctions(response.data);
      } catch (error) {
        console.error("Error fetching auctions:", error);
        setErrorAuctions("Failed to fetch auctions");
      } finally {
        setLoadingAuctions(false);
      }
    };

    fetchAuctions();
  }, []);

  // ✅ Fetch Bidding History from Backend
  useEffect(() => {
    const fetchBiddingHistory = async () => {
      try {
        const response = await axios.get("https://localhost:7155/api/BiddingHistories");
        setBiddingHistory(response.data);
      } catch (error) {
        console.error("Error fetching bidding history:", error);
        setErrorHistory("Failed to fetch bid history");
      } finally {
        setLoadingHistory(false);
      }
    };

    fetchBiddingHistory();
  }, []);

  const DashboardContent = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Active Bids</h3>
          <p className="text-3xl font-bold">{biddingHistory.length}</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Won Auctions</h3>
          <p className="text-3xl font-bold">8</p>
        </div>
        <div className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Total Spent</h3>
          <p className="text-3xl font-bold">₹12,345</p>
        </div>
      </div>

      {/* ✅ Recent Bidding History */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>

        {/* ✅ Show Loading or Error */}
        {loadingHistory && <p className="text-gray-500">Loading bid history...</p>}
        {errorHistory && <p className="text-red-500">{errorHistory}</p>}

        {/* ✅ Bidding History Table */}
        {!loadingHistory && !errorHistory && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {biddingHistory.map((bid) => (
                <div key={bid.biddinghistoryId} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Bid placed on {bid.propertyTitle || "Property"}</p>
                    <p className="text-sm text-gray-600">Amount: ₹{bid.bidAmount}</p>
                  </div>
                  <span className="text-sm text-gray-500">{new Date(bid.timeStamp).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const AuctionsContent = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Active Auctions</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search auctions..."
            className="pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* ✅ Show Loading or Error */}
      {loadingAuctions && <p className="text-gray-500">Loading auctions...</p>}
      {errorAuctions && <p className="text-red-500">{errorAuctions}</p>}

      {/* ✅ Active Auctions Grid */}
      {!loadingAuctions && !errorAuctions && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div key={auction.auctionId} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={auction.image || "https://via.placeholder.com/300"} 
                alt={auction.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{auction.title}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Current Bid: <span className="font-semibold text-green-600">₹{auction.currentBid}</span>
                  </p>
                  <p className="text-gray-600">
                    Ends: <span className="font-semibold">{auction.endDate}</span>
                  </p>
                </div>
                <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        menuItems={menuItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      />
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === "dashboard" && <DashboardContent />}
        {activeTab === "active-auctions" && <AuctionsContent />}
      </main>
    </div>
  );
}

export default BuyerDashboard;
