import React from "react";
import {
  Bell,
  Search,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const Header = ({ setIsSidebarOpen, isCollapsed, setIsCollapsed }) => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isCollapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-72">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>
        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition duration-300">
          <Bell size={22} />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer">
          EA
        </div>
      </div>
    </header>
  );
};
export default Header;
