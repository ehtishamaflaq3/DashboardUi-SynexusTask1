import React from "react";
import { User, Bell, Moon } from "lucide-react";
const Settings = () => {
  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your account preferences and application settings.
        </p>
      </div>
      {/* Settings Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-blue-600" />
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              value="Ehtisham"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none"
            />
            <input
              type="email"
              value="admin@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none"
            />
          </div>
        </div>
        {/* Preferences */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-blue-600" />
            <h2 className="text-xl font-semibold">
              Preferences
            </h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 accent-blue-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <Moon onClick={()=>{alert("Colour Changed")}} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;