import React from "react";
import Sidebar from "../Sidebar";

const ReportAndAnalysis = () => {
  const reports = [
    {
      id: 101,
      space: "John Doe",
      slot: 28,
      reportedBy: "Jane Smith",
      reason: "Damage",
    },
    {
      id: 102,
      space: "Jane Smith",
      slot: 85,
      reportedBy: "John Doe",
      reason: "Poor customer service",
    },
  ];

  const handleView = (id) => {
    console.log(`View details for report ID: ${id}`);
    // Add your logic to view the report details
  };

  const handleCancel = (id) => {
    console.log(`Cancel report ID: ${id}`);
    // Add your logic to cancel the report
  };
  return (
    <Sidebar>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Reporting and Analytics</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Reports</h2>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">
                  ID
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">
                  Space
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">
                  Slot
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">
                  Reported By
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">
                  Reason
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-sm">
                    {report.id}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm">
                    {report.space}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm">
                    {report.slot}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm">
                    {report.reportedBy}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm">
                    {report.reason}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm space-x-2">
                    <button
                      onClick={() => handleView(report.id)}
                      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleCancel(report.id)}
                      className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Sidebar>
  );
};

export default ReportAndAnalysis;
