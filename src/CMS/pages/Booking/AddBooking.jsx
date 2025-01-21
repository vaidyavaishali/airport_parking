import React, { useState, useEffect } from "react";

const AddReservationForm = () => {
  // State for API request fields
  const [quoteId, setQuoteId] = useState(1);
  const [companyId, setCompanyId] = useState(33);
  const [smsConfirmation, setSmsConfirmation] = useState(0); // 0 or 1
  const [cancellationCover, setCancellationCover] = useState(0); // 0 or 1

  // Customer details state
  const [title, setTitle] = useState("Mr.");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Flight details state
  const [departureTerminal, setDepartureTerminal] = useState("");
  const [departureFlightNo, setDepartureFlightNo] = useState("");
  const [returnTerminal, setReturnTerminal] = useState("");
  const [returnFlightNo, setReturnFlightNo] = useState("");

  // Vehicle details state (array of vehicle objects)
  const [vehicles, setVehicles] = useState([
    { make: "", model: "", colour: "", registration: "" }
  ]);

  // Platform details state
  const [userIp, setUserIp] = useState("");
  const [browser, setBrowser] = useState("");
  const [os, setOs] = useState("");

  // State for API token
  const [apiToken, setApiToken] = useState("");

  // Loading, error, and success states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Retrieve API token from localStorage or other storage
  useEffect(() => {
    const token = localStorage.getItem("api_token"); // Retrieve from localStorage
    if (token) {
      setApiToken(token);
    } else {
      setError("API token not found. Please log in.");
    }
  }, []);

  // Function to handle input change for vehicle details dynamically
  const handleVehicleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVehicles = [...vehicles];
    updatedVehicles[index][name] = value;
    setVehicles(updatedVehicles);
  };

  // Function to add a new vehicle
  const addVehicle = () => {
    setVehicles([...vehicles, { make: "", model: "", colour: "", registration: "" }]);
  };

  // Function to remove a vehicle
  const removeVehicle = (index) => {
    const updatedVehicles = vehicles.filter((_, i) => i !== index);
    setVehicles(updatedVehicles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // API request body
    const requestBody = {
      quote_id: quoteId,
      company_id: companyId,
      sms_confirmation: smsConfirmation,
      cancellation_cover: cancellationCover,
      customer: {
        title,
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
      },
      flight: {
        departure_terminal: departureTerminal,
        departure_flight_no: departureFlightNo,
        return_terminal: returnTerminal,
        return_flight_no: returnFlightNo,
      },
      vehicle: vehicles.map(vehicle => ({
        is_vehicle: 1, // Assuming vehicle exists for each entry
        make: vehicle.make,
        model: vehicle.model,
        colour: vehicle.colour,
        registration: vehicle.registration,
      })),
      platform: {
        userip: userIp,
        browser,
        os,
      },
    };

    try {
      const response = await fetch(
        "https://test-api.compareyourparkingdeals.co.uk/api/index.php/third-party/generateBooking",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            HTTP_AUTHORIZATION: `Bearer ${apiToken}`, // Add the dynamic token here
          },
          body: JSON.stringify(requestBody),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccess("Reservation created successfully!");
        console.log("API Response:", result);
      } else {
        setError(`Error: ${result.message || "Failed to create reservation"}`);
      }
    } catch (error) {
      setError("An error occurred while creating the reservation.");
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full h-auto">
      <div className="bg-white rounded-lg p-6 w-[95%]">
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl mb-4">Customer Details</h3>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h3 className="text-2xl mb-4">Flight Details</h3>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Departure Terminal</label>
            <input
              type="text"
              value={departureTerminal}
              onChange={(e) => setDepartureTerminal(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Departure Flight No</label>
            <input
              type="text"
              value={departureFlightNo}
              onChange={(e) => setDepartureFlightNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Return Terminal</label>
            <input
              type="text"
              value={returnTerminal}
              onChange={(e) => setReturnTerminal(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Return Flight No</label>
            <input
              type="text"
              value={returnFlightNo}
              onChange={(e) => setReturnFlightNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h2 className="text-2xl mb-4">Vehicle Details</h2>
          
          {vehicles.map((vehicle, index) => (
            <div key={index} className="mb-4">
              <h3>Vehicle {index + 1}</h3>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Make</label>
                <input
                  type="text"
                  name="make"
                  value={vehicle.make}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Model</label>
                <input
                  type="text"
                  name="model"
                  value={vehicle.model}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Colour</label>
                <input
                  type="text"
                  name="colour"
                  value={vehicle.colour}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Registration</label>
                <input
                  type="text"
                  name="registration"
                  value={vehicle.registration}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={() => removeVehicle(index)}
                className="text-red-500 mt-2"
              >
                Remove Vehicle
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addVehicle}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
          >
            Add Vehicle
          </button>

          <h3 className="text-2xl mb-4">Platform Details</h3>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">User IP</label>
            <input
              type="text"
              value={userIp}
              onChange={(e) => setUserIp(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Browser</label>
            <input
              type="text"
              value={browser}
              onChange={(e) => setBrowser(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">OS</label>
            <input
              type="text"
              value={os}
              onChange={(e) => setOs(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4"
          >
            {loading ? "Submitting..." : "Submit Reservation"}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddReservationForm;
