import React from "react";
import Sidebar from "../../components/admin/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 h-screen flex">
      <div className="flex-1 flex flex-col">
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Total BLog</h2>
              <p className="text-3xl font-bold">1,245</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
