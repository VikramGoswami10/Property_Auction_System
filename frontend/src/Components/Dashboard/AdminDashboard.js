import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Gavel,
  LogOut,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";
import Sidebar from "../Common/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import Axios

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]); // ✅ State for Users
  const [auctions, setAuctions] = useState([]); // ✅ State for Auctions
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingAuctions, setLoadingAuctions] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);
  const [errorAuctions, setErrorAuctions] = useState(null);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
    { icon: Gavel, label: "Auctions", value: "auctions" },
    { icon: Users, label: "Users", value: "users" },
    { icon: LogOut, label: "Logout", value: "logout" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  // ✅ Fetch Users from Backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7155/api/Users/buyers-sellers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setErrorUsers("Failed to fetch users");
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  // ✅ Fetch Auctions from Backend
  useEffect(() => {
    const fetchAuctions = async () => {
      console.log("Auction Data log",fetchAuctions)
      try {
        const response = await axios.get(
          "https://localhost:7155/api/Auctions"
        );
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

  const DashboardContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Total Auctions</h3>
        <p className="text-3xl font-bold">{auctions.length}</p>
      </div>
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Active Users</h3>
        <p className="text-3xl font-bold">{users.length}</p>
      </div>
      <div className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Total Amount</h3>
        <p className="text-3xl font-bold">₹45,678</p>
      </div>
    </div>
  );

  const AuctionsContent = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Auctions</h2>
      </div>

      {/* ✅ Show Loading or Error */}
      {loadingAuctions && <p className="text-gray-500">Loading auctions...</p>}
      {errorAuctions && <p className="text-red-500">{errorAuctions}</p>}

      {/* ✅ Auctions Table */}
      {!loadingAuctions && !errorAuctions && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seller
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {auctions.map((auction) => (
                <tr key={auction.auctionId}>
                  <td className="px-6 py-4 whitespace-nowrap">{auction.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{auction.seller || "N/A"}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{auction.startPrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{auction.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Pencil size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
        {activeTab === "auctions" && <AuctionsContent />}
        {activeTab === "users" && (
          <div>
            <h2 className="text-2xl font-bold">Manage Users</h2>

            {/* ✅ Show Loading or Error */}
            {loadingUsers && <p className="text-gray-500">Loading users...</p>}
            {errorUsers && <p className="text-red-500">{errorUsers}</p>}

            {/* ✅ Users Table */}
            {!loadingUsers && !errorUsers && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.userId}>
                        <td className="px-6 py-4 whitespace-nowrap">{user.name || "N/A"}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap capitalize">{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
