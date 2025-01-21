import React, { useState } from "react";
import Sidebar from "../Sidebar";

const PromotionAndDiscounts = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 101,
      code: "SUPER5",
      discount: 5,
      maxAmount: 50,
      space: "New London",
      assignedTo: "Jane Smith",
    },
    {
      id: 102,
      code: "XMAS20",
      discount: 20,
      maxAmount: 100,
      space: "Gatwik",
      assignedTo: "John Doe",
    },
  ]);
  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    maxAmount: "",
    expiry: "",
    generatorUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCoupon = () => {
    const newCoupon = {
      id: coupons.length + 101,
      code: formData.code,
      discount: parseInt(formData.discount),
      maxAmount: parseInt(formData.maxAmount),
      space: "Custom Space", // Replace with a dropdown or text field as required
      assignedTo: "Custom Name", // Replace with dynamic data
    };
    setCoupons([...coupons, newCoupon]);
    setFormData({
      code: "",
      discount: "",
      maxAmount: "",
      expiry: "",
      generatorUrl: "",
    });
  };

  const handleDelete = (id) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };
  return (
    <Sidebar>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Promotions and Discounts</h1>

        {/* Coupons Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-8">
          <table className="table-auto w-full text-sm text-left text-gray-500">
            <thead className="bg-gray-200 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Code</th>
                <th className="px-4 py-2">%</th>
                <th className="px-4 py-2">Max. amount</th>
                <th className="px-4 py-2">Space</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{coupon.id}</td>
                  <td className="px-4 py-2">{coupon.code}</td>
                  <td className="px-4 py-2">{coupon.discount}%</td>
                  <td className="px-4 py-2">${coupon.maxAmount}</td>
                  <td className="px-4 py-2">{coupon.space}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(coupon.id)}
                      className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Coupon Form */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Add Coupon</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Code
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Discount Percentage
              </label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter discount percentage"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Max. discount amount
              </label>
              <input
                type="number"
                name="maxAmount"
                value={formData.maxAmount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter max amount"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date Of Expiry
              </label>
              <input
                type="date"
                name="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Generator URL
              </label>
              <input
                type="text"
                name="generatorUrl"
                value={formData.generatorUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter generator URL"
              />
            </div>
            <button
              onClick={handleAddCoupon}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Coupon
            </button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default PromotionAndDiscounts;
