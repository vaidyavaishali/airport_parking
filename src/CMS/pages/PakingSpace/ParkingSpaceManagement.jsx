import React, { useState, useEffect } from "react";
import Sidebar from "../../Sidebar";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import Modal from "react-modal"; // Install React Modal using npm
import AddParkingSpace from "../PakingSpace/AddParking";

const ParkingSpaceManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parkingSpaces, setParkingSpaces] = useState([]);

  // React Modal Styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      maxWidth: "1000px",
    },
  };

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch all parking spaces on component mount
  useEffect(() => {
    const fetchParkingSpaces = async () => {
      try {
        const response = await axios.get("http://localhost:4000/get-all-parking-spaces");
        setParkingSpaces(response.data);
      } catch (error) {
        console.error("Error fetching parking spaces:", error);
      }
    };

    fetchParkingSpaces();
  }, []); // Empty array ensures the effect runs only once on component mount

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/delete-parking-space/${id}`);
      console.log("Parking Space Deleted:", response.data);

      // Update state to reflect deletion
      setParkingSpaces(parkingSpaces.filter(space => space._id !== id));
    } catch (error) {
      console.error("Error deleting parking space:", error);
    }
  };

  return (
    <Sidebar>
      <div className="bg-white shadow rounded p-5 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Parking Spaces</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2"
            onClick={openModal}
          >
            <FaPlus />
            <span>Parking Space</span>
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="border p-2 text-left">airportCompany</th>
              <th className="border p-2 text-left">parkingName</th>
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Pricing</th>
              <th className="border p-2 text-left">Availability</th>
              <th className="border p-2 text-left">No Of Slots</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parkingSpaces.length > 0 ? (
              parkingSpaces.map((parkingSpace) => (
                <tr key={parkingSpace._id}>
                  <td className="border p-2">{parkingSpace.airportCompany}</td>
                  <td className="border p-2">{parkingSpace.parkingName}</td>
                  <td className="border p-2">{parkingSpace.location}</td>
                  <td className="border p-2">{parkingSpace.pricing}</td>
                  <td className="border p-2">{parkingSpace.avaibility}</td>
                  <td className="border p-2">{parkingSpace.noOfSlots}</td>
                  <td className="border p-2 flex space-x-2">
                    {/* <button className="text-blue-500 flex items-center space-x-1">
                      <FaEdit />
                      <span>Edit</span>
                    </button> */}
                    <button
                      className="text-red-500 flex items-center space-x-1"
                      onClick={() => handleDelete(parkingSpace._id)}
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border p-2 text-center">No parking spaces found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Manual Booking */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Manual Booking Modal"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      >
        <div className="w-full overflow-y-auto relative scrollbar-none scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-[650px]">
          {/* Fixed Header */}
          <div className="flex w-full justify-between items-center fixed top-0 left-0 right-0 px-10 py-3 shadow-sm bg-gray-800 z-10 text-white will-change-transform">
            <h2 className="text-xl font-semibold">Add Parking Space</h2>
            <button className="bg-red-500 text-white px-5 py-1 rounded" onClick={closeModal}>
              Close
            </button>
          </div>

          {/* Spacing for Fixed Header */}
          <div className="mt-14 z-0">
            <AddParkingSpace closeModal={closeModal} />
          </div>
        </div>
      </Modal>
    </Sidebar>
  );
};

export default ParkingSpaceManagement;
