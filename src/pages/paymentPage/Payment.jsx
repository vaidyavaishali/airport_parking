import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const { bookingId } = useParams();
  const [bookingData, setBookingData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/get-booking-by-id/${bookingId}`);
        setBookingData(response.data.data);
      } catch (error) {
        setError("Error fetching booking data");
      } finally {
        setLoading(false);
      }
    };

    if (bookingId) fetchBookingData();
  }, [bookingId]);

  const initiatePayment = async () => {
    try {
      // Call backend to create PayPal order
      const response = await axios.post("http://localhost:4000/payment", {
        bookingId,
        amount: bookingData.payment?.pricing || "0.00",
      });

      const { order } = response.data;

      // Redirect user to PayPal approval URL
      const approvalUrl = order.links.find((link) => link.rel === "approve").href;
      window.location.href = approvalUrl; // Redirect to PayPal checkout
    } catch (error) {
      console.error("Error initiating payment:", error.message);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const firstName = bookingData.contactData?.firstName || "";
  const lastName = bookingData.contactData?.lastName || "";
  const totalAmount = 0.1 || "0.00";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>

        {/* Booking Info */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-semibold">Booking ID</span>
            <span className="text-gray-700">{bookingId}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-semibold">Name</span>
            <span className="text-gray-700">{`${firstName} ${lastName}`}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-700 font-semibold">Total Price</span>
            <span className="text-gray-700 text-xl font-bold">Rs. {totalAmount}</span>
          </div>
        </div>

        {/* Pay Now Button */}
        <button
          type="button"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={initiatePayment}
        >
          Pay Now with PayPal
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
