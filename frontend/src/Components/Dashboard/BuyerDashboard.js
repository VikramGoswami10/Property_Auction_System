import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Gavel,
  Trophy,
  History,
  LogOut,
} from "lucide-react";
import Sidebar from "../Common/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../Utils/api";

function BuyerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [liveAuctions, setLiveAuctions] = useState([]);
  const [myBids, setMyBids] = useState([]);
  const [wonAuctions, setWonAuctions] = useState([]);
  const [buyerProfile, setBuyerProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const buyerId = 1; // ✅ Replace with dynamic logged-in buyer ID

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
    { icon: Gavel, label: "Live Auctions", value: "live-auctions" },
    { icon: History, label: "My Bids", value: "my-bids" },
    { icon: Trophy, label: "Won Auctions", value: "won-auctions" },
    { icon: LogOut, label: "Logout", value: "logout" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  // ✅ Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Live Auctions
        const liveResponse = await axios.get(`${baseurl}Auctions/live`);
        setLiveAuctions(liveResponse.data);

        // Fetch My Bids
        const bidsResponse = await axios.get(`${baseurl}BiddingHistories/buyer/${buyerId}`);
        setMyBids(bidsResponse.data);

        // Fetch Won Auctions
        const wonResponse = await axios.get(`${baseurl}Auctions/won/${buyerId}`);
        setWonAuctions(wonResponse.data);

        // Fetch Buyer Profile
        const profileResponse = await axios.get(`${baseurl}Users/${buyerId}`);
        setBuyerProfile(profileResponse.data);
      } catch (error) {
        console.error("Error fetching buyer data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Dashboard Overview
  const DashboardContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Live Auctions</h3>
        <p className="text-3xl font-bold">{liveAuctions.length}</p>
      </div>
      <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">My Active Bids</h3>
        <p className="text-3xl font-bold">{myBids.length}</p>
      </div>
      <div className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Total Wins</h3>
        <p className="text-3xl font-bold">{wonAuctions.length}</p>
      </div>
    </div>
  );

  // ✅ Live Auctions Tab
  const LiveAuctions = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Live Auctions</h2>
      {loading ? <p>Loading...</p> : error ? <p className="text-red-500">{error}</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveAuctions.map((auction) => (
            <div key={auction.auctionId} className="bg-white rounded-lg shadow-md">
              <img src={auction.image || "https://via.placeholder.com/300"} alt={auction.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{auction.title}</h3>
                <p className="text-gray-600">Current Bid: ₹{auction.currentBid}</p>
                <p className="text-gray-600">Ends: {auction.endDate}</p>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ✅ My Bids Tab
  const MyBids = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bids</h2>
      {loading ? <p>Loading...</p> : (
        <div className="space-y-4">
          {myBids.map((bid) => (
            <div key={bid.BiddingHistoryId} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
              <p className="font-semibold">{bid.PropertyTitle}</p>
              <p className="text-green-600 font-bold">₹{bid.BidAmount}</p>
              <span className="text-sm text-gray-500">{new Date(bid.TimeStamp).toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ✅ Won Auctions Tab
  const WonAuctions = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Won Auctions</h2>
      {loading ? <p>Loading...</p> : (
        <div className="space-y-4">
          {wonAuctions.map((win) => (
            <div key={win.AuctionId} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
              <p className="font-semibold">{win.Title}</p>
              <p className="text-green-600 font-bold">₹{win.FinalPrice}</p>
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
        {activeTab === "live-auctions" && <LiveAuctions />}
        {activeTab === "my-bids" && <MyBids />}
        {activeTab === "won-auctions" && <WonAuctions />}
      </main>
    </div>
  );
}

export default BuyerDashboard;
