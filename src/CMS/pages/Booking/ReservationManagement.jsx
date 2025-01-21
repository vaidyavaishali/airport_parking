import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../Sidebar';
import Swal from 'sweetalert2';

const BookingDetails = () => {
  const [bookingData, setBookingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isDeleting, setIsDeleting] = useState(false);

  // Filter state
  const [filterId, setFilterId] = useState('');

  const fetchBookingData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/get-booking');
      setBookingData(response.data.data);
      setFilteredData(response.data.data); // Initially, show all bookings
    } catch (err) {
      setError('Failed to fetch booking data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingData();
  }, []);

  const fetchBookingById = async (bookingId) => {
    try {
      const response = await axios.get(`http://localhost:4000/get-booking-by-id/${bookingId}`);
      setSelectedBooking(response.data.data);
      setShowModal(true);
    } catch (err) {
      setError('Failed to fetch booking details.');
    }
  };

  const deleteBooking = async (bookingId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this booking!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        setIsDeleting(true);
        await axios.delete(`http://localhost:4000/delete-booking/${bookingId}`);
        setBookingData((prevData) => prevData.filter((booking) => booking.bookingId !== bookingId));
        setFilteredData((prevData) => prevData.filter((booking) => booking.bookingId !== bookingId));
        Swal.fire('Deleted!', 'Your booking has been deleted.', 'success');
      }
      fetchBookingData();
    } catch (err) {
      Swal.fire('Failed!', 'Failed to delete booking. Please try again.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBooking(null);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterId(value);

    if (value === '') {
      setFilteredData(bookingData); // Reset to all bookings when filter is cleared
    } else {
      const filtered = bookingData.filter((booking) =>
        booking.bookingId.toString().includes(value)
      );
      setFilteredData(filtered);
    }
    setCurrentPage(1); // Reset pagination when filtering
  };

  // Pagination Logic
  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = filteredData.slice(indexOfFirstBooking, indexOfLastBooking);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Sidebar>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Booking Details</h2>

        {/* Filter Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Booking ID</label>
          <input
            type="text"
            value={filterId}
            onChange={handleFilterChange}
            placeholder="Enter Booking ID"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {currentBookings.length > 0 ? (
          <>
            <table className="table-auto w-full text-gray-700 border-separate border-spacing-0">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-2 px-4 border-b text-sm font-medium">Booking ID</th>
                  <th className="py-2 px-4 border-b text-sm font-medium">Contact Info</th>
                  <th className="py-2 px-4 border-b text-sm font-medium">Payment Status</th>
                  <th className="py-2 px-4 border-b text-sm font-medium">Payment Amount</th>
                  <th className="py-2 px-4 border-b text-sm font-medium">Created At</th>
                  <th className="py-2 px-4 border-b text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((booking, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{booking.bookingId}</td>
                    <td className="py-2 px-4 border-b">
                      {booking.contactData?.title} {booking.contactData?.firstName} {booking.contactData?.lastName}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {booking.payment?.paymentCompleted === 'pending' ? 'Pending' : 'Completed'}
                    </td>
                    <td className="py-2 px-4 border-b">{booking.payment?.pricing}</td>
                    <td className="py-2 px-4 border-b">{new Date(booking.createdAt).toLocaleString()}</td>
                    <td className="py-2 px-4 border-b flex gap-2">
                      <button
                        onClick={() => fetchBookingById(booking.bookingId)}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => deleteBooking(booking._id)}
                        className={`text-red-600 hover:underline text-sm ${isDeleting ? 'opacity-50 pointer-events-none' : ''}`}
                        disabled={isDeleting}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-2 mx-2 border rounded-md text-gray-700 disabled:opacity-50 hover:bg-gray-200"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-2 mx-2 border rounded-md text-gray-700 disabled:opacity-50 hover:bg-gray-200"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p>No booking data found.</p>
        )}

        {/* Modal for showing complete booking details */}
        {showModal && selectedBooking && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-3/4 lg:w-1/2 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Details</h2>
              <p><strong>Booking ID:</strong> {selectedBooking.bookingId}</p>
              <p><strong>Contact Info:</strong> {selectedBooking.contactData?.title} {selectedBooking.contactData?.firstName} {selectedBooking.contactData?.lastName}</p>
              {/* Other details */}
              <button onClick={closeModal} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Close</button>
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  );
};

export default BookingDetails;
