import React, { useState } from "react";
import { 
  LayoutDashboard, Package, History, Plus, LogOut 
} from "lucide-react";
import Sidebar from "../Common/Sidebar";
import { useNavigate } from "react-router-dom";
import CreateAuction from "./CreateAuction"; // Importing CreateAuction component

// Mock data (Replace with actual API fetch logic)
const mockListings = [
  { id: 1, title: "Vintage Home", startPrice: 5000, currentBid: 5200, endDate: "2024-04-01", status: "active", bids: 12 },
  { id: 2, title: "Sea Side Vila", startPrice: 2000, currentBid: 2100, endDate: "2024-03-25", status: "active", bids: 8 },
];

function SellerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
    { icon: Package, label: "My Listings", value: "listings" },
    { icon: Plus, label: "Create Auction", value: "create-auction" },
    { icon: LogOut, label: "Logout", value: "logout" },
  ];

  const handleLogout = () => navigate("/login");

  // ✅ Dashboard Content
  const DashboardContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Active Listings</h3>
        <p className="text-3xl font-bold">8</p>
      </div>
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Total Sales</h3>
        <p className="text-3xl font-bold">45</p>
      </div>
      <div className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Revenue</h3>
        <p className="text-3xl font-bold">₹23,456</p>
      </div>
    </div>
  );

  // ✅ My Listings
  const ListingsContent = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Listings</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Item</th>
              <th className="px-6 py-3 text-left">Start Price</th>
              <th className="px-6 py-3 text-left">Current Bid</th>
              <th className="px-6 py-3 text-left">Bids</th>
              <th className="px-6 py-3 text-left">End Date</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockListings.map((listing) => (
              <tr key={listing.id}>
                <td className="px-6 py-4 whitespace-nowrap">{listing.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹{listing.startPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹{listing.currentBid}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.bids}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {listing.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
        {activeTab === "listings" && <ListingsContent />}
        {activeTab === "create-auction" && <CreateAuction />} {/* ✅ Integrated directly */}
      </main>
    </div>
  );
}

export default SellerDashboard;
