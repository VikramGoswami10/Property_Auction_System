import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, History, Plus,
  Settings, LogOut, Pencil, Trash2
} from 'lucide-react';
import Sidebar from '../Common/Sidebar';
import { useNavigate } from 'react-router-dom';

// Mock data
const mockListings = [
  { 
    id: 1, 
    title: 'Vintage Car', 
    image: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=2074&auto=format&fit=crop',
    startPrice: 5000,
    currentBid: 5200,
    endDate: '2024-04-01',
    status: 'active',
    bids: 12
  },
  { 
    id: 2, 
    title: 'Antique Furniture',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
    startPrice: 2000,
    currentBid: 2100,
    endDate: '2024-03-25',
    status: 'active',
    bids: 8
  },
];

function SellerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', value: 'dashboard' },
    { icon: Package, label: 'My Listings', value: 'listings' },
    { icon: History, label: 'Sales History', value: 'sales-history' },
    { icon: Settings, label: 'Settings', value: 'settings' },
    { icon: LogOut, label: 'Logout', value: 'logout' },
  ];

  const handleLogout = () => {
    // Implement logout logic
    navigate('/login');
  };

  const DashboardContent = () => (
    <div>
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

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">New bid on Vintage Car</p>
                <p className="text-sm text-gray-600">Current Bid: ₹5,200</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">Auction ended: Antique Furniture</p>
                <p className="text-sm text-gray-600">Sold for: ₹2,100</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ListingsContent = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Listings</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} /> New Listing
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Bid</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bids</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockListings.map((listing) => (
              <tr key={listing.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src={listing.image} 
                      alt={listing.title} 
                      className="h-10 w-10 rounded-lg object-cover mr-3"
                    />
                    {listing.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">₹{listing.startPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹{listing.currentBid}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.bids}</td>
                <td className="px-6 py-4 whitespace-nowrap">{listing.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {listing.status}
                  </span>
                </td>
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
        {activeTab === 'dashboard' && <DashboardContent />}
        {activeTab === 'listings' && <ListingsContent />}
        {/* Add other content components for different tabs */}
      </main>
    </div>
  );
}

export default SellerDashboard;