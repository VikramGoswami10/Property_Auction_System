import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Gavel,
  LogOut,
  Pencil,
  Trash2,
} from "lucide-react";
import Sidebar from "../Common/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([]); 
  const [auctions, setAuctions] = useState([]);
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

  // ✅ Fetch Auctions with Property Titles
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7155/api/Auctions/with-details"
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

  

  // ✅ Handle Delete Auction
  const handleDeleteAuction = async (id) => {
    if (!window.confirm("Are you sure you want to delete this auction?")) return;

    try {
      await axios.delete(`https://localhost:7155/api/Auctions/${id}`);
      setAuctions(auctions.filter((auction) => auction.auctionId !== id)); 
    } catch (error) {
      console.error("Error deleting auction:", error);
      alert("Failed to delete auction.");
    }
  };

  // ✅ Handle Edit Auction
  const handleEditAuction = (auction) => {
    const newStartTime = prompt(
      "Enter new Start Time (YYYY-MM-DD HH:MM:SS)",
      auction.startTime
    );
    const newEndTime = prompt(
      "Enter new End Time (YYYY-MM-DD HH:MM:SS)",
      auction.endTime
    );

    if (!newStartTime || !newEndTime) return;

    const updatedAuction = {
      ...auction,
      startTime: newStartTime,
      endTime: newEndTime,
    };

    axios
      .put(
        `https://localhost:7155/api/Auctions/${auction.auctionId}`,
        updatedAuction
      )
      .then(() => {
        setAuctions(
          auctions.map((a) =>
            a.auctionId === auction.auctionId ? updatedAuction : a
          )
        );
      })
      .catch((error) => {
        console.error("Error updating auction:", error);
        alert("Failed to update auction.");
      });
  };

  // ✅ Handle Delete User
  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
        const response = await axios.delete(`https://localhost:7155/api/Users/${id}`);

        if (response.status === 200) {
            setUsers(users.filter((user) => user.userId !== id));
        } else {
            alert("Failed to delete user.");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        alert(error.response?.data?.message || "Failed to delete user.");
    }
};

  // ✅ Handle Edit User
  const handleEditUser = (user) => {
    const newName = prompt("Enter new name:", user.name);
    const newEmail = prompt("Enter new email:", user.email);
    const newRole = prompt("Enter new role (buyer/seller/admin):", user.role);

    if (!newName || !newEmail || !newRole) return;

    const updatedUser = { ...user, name: newName, email: newEmail, role: newRole };

    axios
      .put(`https://localhost:7155/api/Users/${user.userId}`, updatedUser)
      .then(() => {
        setUsers(users.map((u) => (u.userId === user.userId ? updatedUser : u)));
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("Failed to update user.");
      });
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
            {loadingAuctions ? (
              <p className="text-gray-500">Loading auctions...</p>
            ) : errorAuctions ? (
              <p className="text-red-500">{errorAuctions}</p>
            ) : (
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">Title</th>
                    <th className="px-6 py-3 text-left">Start Time</th>
                    <th className="px-6 py-3 text-left">End Time</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {auctions.map((auction) => (
                    <tr key={auction.auctionId}>
                      <td className="px-6 py-4">{auction.title}</td>
                      <td className="px-6 py-4">{auction.startTime}</td>
                      <td className="px-6 py-4">{auction.endTime}</td>
                      {/* <td className="px-6 py-4 flex gap-2">
                        <button className="text-blue-600" onClick={() => handleEditAuction(auction)}>
                          <Pencil size={18} />
                        </button>
                        <button className="text-red-600" onClick={() => handleDeleteAuction(auction.auctionId)}>
                          <Trash2 size={18} />
                        </button>
                      </td> */}
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
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((user) => (
                    <tr key={user.userId}>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.role}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="text-blue-600" onClick={() => handleEditUser(user)}>
                          <Pencil size={18} />
                        </button>
                        <button className="text-red-600" onClick={() => handleDeleteUser(user.userId)}>
                          <Trash2 size={18} />
                        </button>
                      </td>
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
