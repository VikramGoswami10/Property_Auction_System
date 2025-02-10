import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Gavel,
  LogOut,
} from "lucide-react";
import Sidebar from "../Common/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../Utils/api";
import { useAuctionData } from "../../hooks/useAuctionData";


function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([]); 
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);
  const { auctions, loading, error } = useAuctionData();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
    { icon: Gavel, label: "Auctions", value: "auctions" },
    { icon: Users, label: "Users", value: "users" },
    { icon: LogOut, label: "Logout", value: "logout" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

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


   // Fetch Users from Backend
   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          baseurl+"Users/buyers-sellers"
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
      

      {activeTab === "auctions" && (
          <div>
            <h2 className="text-2xl font-bold">Manage Auctions</h2>
            {loading ? (
              <p className="text-gray-500">Loading auctions...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">Title</th>
                    <th className="px-6 py-3 text-left">Start Time</th>
                    <th className="px-6 py-3 text-left">End Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {auctions.map((auction) => (
                    <tr key={auction.id}>
                      <td className="px-6 py-4">{auction.title}</td>
                      <td className="px-6 py-4">{auction.auctionStartDate}</td>
                      <td className="px-6 py-4">{auction.auctionEndDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === "users" && (
          <div>
            <h2 className="text-2xl font-bold">Manage Users</h2>
            {loadingUsers ? (
              <p className="text-gray-500">Loading users...</p>
            ) : errorUsers ? (
              <p className="text-red-500">{errorUsers}</p>
            ) : (
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((user) => (
                    <tr key={user.userId}>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
