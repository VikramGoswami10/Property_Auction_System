import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, History, Heart, 
  Settings, LogOut, Search 
} from 'lucide-react';
import Sidebar from '../Common/Sidebar';
import { useNavigate } from 'react-router-dom';

// Mock data
const mockAuctions = [
  { 
    id: 1, 
    title: 'Vintage Car', 
    image: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=2074&auto=format&fit=crop',
    currentBid: 5200,
    endDate: '2024-04-01',
    status: 'active'
  },
  { 
    id: 2, 
    title: 'Antique Furniture',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
    currentBid: 2100,
    endDate: '2024-03-25',
    status: 'active'
  },
];

function BuyerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', value: 'dashboard' },
    { icon: Package, label: 'Active Auctions', value: 'active-auctions' },
    { icon: History, label: 'Bid History', value: 'bid-history' },
    { icon: Heart, label: 'Watchlist', value: 'watchlist' },
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
          <h3 className="text-lg font-semibold">Active Bids</h3>
          <p className="text-3xl font-bold">12</p>
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

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">Bid placed on Vintage Car</p>
                <p className="text-sm text-gray-600">Amount: ₹5,200</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">Won Antique Furniture auction</p>
                <p className="text-sm text-gray-600">Final Price: ₹2,100</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAuctions.map((auction) => (
          <div key={auction.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={auction.image} 
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
        {activeTab === 'active-auctions' && <AuctionsContent />}
        {/* Add other content components for different tabs */}
      </main>
    </div>
  );
}

export default BuyerDashboard;