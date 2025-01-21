import React from "react";
import { FaCar, FaMoneyBillWave, FaBell, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  return (
    <Sidebar>
      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded p-5 flex items-center">
          <FaCar className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Parking Spaces</h3>
            <p className="text-2xl mt-2">150</p>
          </div>
        </div>
        <div className="bg-white shadow rounded p-5 flex items-center">
          <FaMoneyBillWave className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Earnings</h3>
            <p className="text-2xl mt-2">£12,000</p>
          </div>
        </div>
      </div>

      {/* Manage Spaces */}
      <div className="bg-white shadow rounded p-5 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Manage Spaces</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
            <FaPlus />
            <span>Add New Space</span>
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Pricing</th>
              <th className="border p-2 text-left">Availability</th>
              <th className="border p-2 text-left">Features</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Downtown Lot</td>
              <td className="border p-2">$5/hr</td>
              <td className="border p-2">Available</td>
              <td className="border p-2">EV Charging</td>
              <td className="border p-2 flex space-x-2">
                <button className="text-blue-500 flex items-center space-x-1">
                  <FaEdit />
                  <span>Edit</span>
                </button>
                <button className="text-red-500 flex items-center space-x-1">
                  <FaTrash />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Send Notifications */}
      <div className="bg-white shadow rounded p-5">
        <h3 className="text-lg font-semibold mb-4">Send Notifications</h3>
        <textarea
          className="w-full border p-2 rounded mb-4"
          rows="4"
          placeholder="Notification Message"
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
          <FaBell />
          <span>Send Notification</span>
        </button>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
