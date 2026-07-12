import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, Settings, X } from "lucide-react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, isCollapsed }) => {
  const menuItems = [
    {
      title: "Overview",
      icon: <LayoutDashboard size={20} />,
      path: "/",
    },
    {
      title: "Inventory",
      icon: <Package size={20} />,
      path: "/inventory",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-1 left-10
          h-screen
          w-64
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}
          bg-white
          border-r
          border-gray-200
          flex
          flex-col
          z-50
          transform
          transition-transform
          duration-300
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-200">
          {isCollapsed ? (
            <h1 className="text-2xl font-bold text-blue-600">AP</h1>
          ) : (
            <h1 className="text-2xl font-bold text-blue-600">AdminPanel</h1>
          )}

          {/* Close Button (Mobile Only) */}
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`
                  }
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.title}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              EA
            </div>

            {!isCollapsed && (
              <div>
                <h3 className="font-semibold text-gray-800">Ehtisham</h3>

                <p className="text-sm text-gray-500">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
