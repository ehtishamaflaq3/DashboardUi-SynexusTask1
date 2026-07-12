import React from "react";
import StatCard from "../components/StatCard";
import { Package, ShoppingCart, DollarSign, TriangleAlert } from "lucide-react";

const Overview = () => {
  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back, Admin
        </h1>
        <p className="text-gray-500 mt-2">
          Here's what's happening in your business today.
        </p>
      </div>
      {/* Here are my 4 Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value="250"
          icon={<Package size={24} />}
          color="bg-blue-600"
        />
        <StatCard
          title="Orders"
          value="10"
          icon={<ShoppingCart size={24} />}
          color="bg-green-600"
        />
        <StatCard
          title="Revenue"
          value="$100"
          icon={<DollarSign size={24} />}
          color="bg-purple-600"
        />
        <StatCard
          title="Low Stock"
          value="10"
          icon={<TriangleAlert size={24} />}
          color="bg-red-600"
        />
      </div>
    </div>
  );
};
export default Overview;