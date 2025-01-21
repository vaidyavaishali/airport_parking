import React from "react";
import jsPDF from "jspdf";

const Invoice = () => {
  const invoiceDetails = {
    paymentId: "240701-131925",
    items: [
      {
        description: "Parking lot booking: Gatwick slot 26",
        amount: "£28",
      },
    ],
    total: "£28",
  };

  const handlePrint = () => {
    window.print(); // Triggers the browser print dialog
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Invoice</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          {/* Invoice Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Invoice</h2>
            <span className="text-gray-600">Payment ID: {invoiceDetails.paymentId}</span>
          </div>

          {/* Invoice Table */}
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4 py-2 font-medium">Item</th>
                <th className="border px-4 py-2 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceDetails.items.map((item, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{item.description}</td>
                  <td className="border px-4 py-2 text-right">{item.amount}</td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2 font-semibold">Total</td>
                <td className="border px-4 py-2 font-semibold text-right">{invoiceDetails.total}</td>
              </tr>
            </tbody>
          </table>

          {/* Print Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;


export const generateInvoicePDF = (invoiceDetails) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(16);
  doc.text("Invoice", 20, 20);

  // Payment ID
  doc.setFontSize(12);
//   doc.text(`Payment ID: ${invoiceDetails.paymentId}`, 20, 30);
  doc.text(`Payment ID: ${"invoiceDetails.paymentId"}`, 20, 30);

  // Table Headers
  doc.text("Item", 20, 50);
  doc.text("Amount", 150, 50);

  // Add items
//   let yPosition = 60;
//   invoiceDetails.items.forEach((item) => {
//     doc.text(item.description, 20, yPosition);
//     doc.text(item.amount, 150, yPosition, { align: "right" });
//     yPosition += 10;
//   });

  // Total
//   yPosition += 10;
//   doc.setFont("Helvetica", "bold");
//   doc.text("Total", 20, yPosition);
//   doc.text(invoiceDetails.total, 150, yPosition, { align: "right" });

  // Save the PDF
  doc.save("invoice.pdf");
};
