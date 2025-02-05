import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

function Sidebar({ menuItems, activeTab, onTabChange, onLogout }: SidebarProps) {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-purple-600">Out Bid</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.value}
            className={`w-full flex items-center space-x-2 px-6 py-3 text-gray-600 hover:bg-purple-50 hover:text-purple-600 ${
              activeTab === item.value ? 'bg-purple-50 text-purple-600' : ''
            }`}
            onClick={() => item.value === 'logout' ? onLogout() : onTabChange(item.value)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;