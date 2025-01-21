import React, { useState } from "react";
import axios from "axios";

const AddSpaceForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    location: "",
    pricing: "",
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    noOfSlots: "",
    parkinglogo: null,
    airportCompany: "",
    parkingName: "",
    avaibility: "",
    recommanded: false,
    pickupDate: "",
    dropOffDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, parkinglogo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/create-parking-space",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Parking Space Created:", response.data);
      closeModal(); // Close modal after successful submission
      setFormData({
        location: "",
        pricing: "",
        feature1: "",
        feature2: "",
        feature3: "",
        feature4: "",
        noOfSlots: "",
        parkinglogo: null,
        airportCompany: "",
        parkingName: "",
        avaibility: "",
        recommanded: false,
        pickupDate: "",
        dropOffDate: "",
      }); // Optionally reset form after success
    } catch (error) {
      console.error("Error creating parking space:", error);
    }
  };



  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white rounded-lg w-[95%]">
        <form onSubmit={handleSubmit}>
          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pricing */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pricing (per day)</label>
            <input
              type="number"
              name="pricing"
              value={formData.pricing}
              onChange={handleChange}
              placeholder="Enter price per day"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Feature1 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Feature1</label>
            <input
              type="text"
              name="feature1"
              value={formData.feature1}
              onChange={handleChange}
              placeholder="Feature1"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Feature2 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Feature2</label>
            <input
              type="text"
              name="feature2"
              value={formData.feature2}
              onChange={handleChange}
              placeholder="Feature2"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Feature3 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Feature3</label>
            <input
              type="text"
              name="feature3"
              value={formData.feature3}
              onChange={handleChange}
              placeholder="Feature3"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Feature4 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Feature4</label>
            <input
              type="text"
              name="feature4"
              value={formData.feature4}
              onChange={handleChange}
              placeholder="Feature4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Airport Company */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Airport Company</label>
            <input
              type="text"
              name="airportCompany"
              value={formData.airportCompany}
              onChange={handleChange}
              placeholder="Enter Airport Company"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Parking Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Parking Name</label>
            <input
              type="text"
              name="parkingName"
              value={formData.parkingName}
              onChange={handleChange}
              placeholder="Enter Parking Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Availability */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Availability</label>
            <input
              type="text"
              name="avaibility"
              value={formData.avaibility}
              onChange={handleChange}
              placeholder="Enter availability"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Recommended */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Recommanded</label>
            <input
              type="checkbox"
              name="recommanded"
              checked={formData.recommanded}
              onChange={() => setFormData((prevState) => ({
                ...prevState,
                recommanded: !prevState.recommanded
              }))}
              className="h-5 w-5"
            />
          </div>

          {/* Number of Slots */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Number of Slots</label>
            <input
              type="number"
              name="noOfSlots"
              value={formData.noOfSlots}
              onChange={handleChange}
              placeholder="Enter total number of slots"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pickup Date */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Dropoff Date */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Dropoff Date</label>
            <input
              type="date"
              name="dropOffDate"
              value={formData.dropOffDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Parking Logo */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Parking Logo</label>
            <input
              type="file"
              name="parkinglogo"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Space
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpaceForm;
