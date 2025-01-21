import React from "react";
import Sidebar from "../../Sidebar";
import { useNavigate } from "react-router-dom";
import { generateInvoicePDF } from "./Invoice"; 



const PaymentManagement = () => {

  const navigate = useNavigate()
  const transactions = [
    { user: "John Doe", amount: "$50", date: "2023-10-01", status: "Completed" },
    { user: "Jane Smith", amount: "$30", date: "2023-10-02", status: "Pending" },
  ];

  const invoices = [
    { id: "INV-001", user: "John Doe", amount: "$50", date: "2023-10-01", status: "Paid" },
    { id: "INV-002", user: "Jane Smith", amount: "$30", date: "2023-10-02", status: "Unpaid" },
  ];

  const cancellations = [
    {
      user: "John Doe",
      parkingSpace: "Downtown Lot",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
    },
    {
      user: "Jane Smith",
      parkingSpace: "City Center Garage",
      startTime: "11:00 AM",
      endTime: "1:00 PM",
    },
  ];

  return (
    <Sidebar>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-semibold mb-6">Payment Management</h1>

        {/* Transactions Section */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Transactions</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, idx) => (
                  <tr key={idx} className="odd:bg-gray-100">
                    <td className="px-4 py-2">{txn.user}</td>
                    <td className="px-4 py-2">{txn.amount}</td>
                    <td className="px-4 py-2">{txn.date}</td>
                    <td className="px-4 py-2">{txn.status}</td>
                    <td className="px-4 py-2 text-blue-600 cursor-pointer">View</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Invoices</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-4 py-2">Invoice #</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv, idx) => (
                  <tr key={idx} className="odd:bg-gray-100">
                    <td className="px-4 py-2">{inv.id}</td>
                    <td className="px-4 py-2">{inv.user}</td>
                    <td className="px-4 py-2">{inv.amount}</td>
                    <td className="px-4 py-2">{inv.date}</td>
                    <td className="px-4 py-2">{inv.status}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <span className="text-blue-600 cursor-pointer" onClick={() => { navigate('/dashboard/payments/invoice') }}>View</span>
                      <span
                        className="text-green-600 cursor-pointer"
                        onClick={() => {
                          generateInvoicePDF(inv.details); // Pass invoice details to the utility
                        }}
                      >Download</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cancellation and Refunds Section */}
        <div>
          <h2 className="text-xl font-medium mb-4">Cancellation and Refunds</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Parking Space</th>
                  <th className="px-4 py-2">Start Time</th>
                  <th className="px-4 py-2">End Time</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cancellations.map((cancel, idx) => (
                  <tr key={idx} className="odd:bg-gray-100">
                    <td className="px-4 py-2">{cancel.user}</td>
                    <td className="px-4 py-2">{cancel.parkingSpace}</td>
                    <td className="px-4 py-2">{cancel.startTime}</td>
                    <td className="px-4 py-2">{cancel.endTime}</td>
                    <td className="px-4 py-2 text-red-600 cursor-pointer">
                      Process Refund
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </Sidebar>
  );
};

export default PaymentManagement;
