import React from "react";

const FlightDetails = ({ flightDetails, handleFlightDetailsChange }) => {
  return (
    <div className="bg-white p-8 space-y-6 mx-auto shadow-md rounded-lg w-full md:w-[95%] font-serif">
      <div className="md:block lg:flex justify-between items-center mb-10">
        <div>
          <h3 className="text-2xl font-bold text-left text-orange-600 mb-4">
            Flight Details
          </h3>
          <p className="mr-5 text-lg">Do you have Terminal and flight details?</p>
        </div>

        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={flightDetails.hasDetails}
              onChange={() => handleFlightDetailsChange({ target: { name: "hasDetails", value: !flightDetails.hasDetails } })}
            />
            <div className="w-14 h-8 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:bg-yellow-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-7 after:w-7 after:transition-all"></div>
          </label>
        </div>
      </div>

      {flightDetails.hasDetails && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Departure Terminal */}
          <div className="w-full">
            <label className="text-gray-700 font-semibold mb-4 text-left">
              Departure Terminal
            </label>
            <select
              name="departureTerminal"
              value={flightDetails.departureTerminal}
              onChange={handleFlightDetailsChange}
              className="px-4 py-2 mt-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
            >
              <option>Select Terminal</option>
              <option>Terminal 1</option>
              <option>Terminal 2</option>
              <option>Terminal 3</option>
            </select>
          </div>

          {/* Departure Flight No. */}
          <div className="w-full">
            <label className="text-gray-700 font-semibold mb-4 text-left">
              Departure Flight No.
            </label>
            <input
              type="text"
              name="departureFlightNo"
              value={flightDetails.departureFlightNo}
              onChange={handleFlightDetailsChange}
              placeholder="Enter Flight No."
              className="mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
            />
          </div>

          {/* Arrival Terminal */}
          <div className="w-full">
            <label className="text-gray-700 font-semibold mb-4 text-left">
              Arrival Terminal
            </label>
            <select
              name="arrivalTerminal"
              value={flightDetails.arrivalTerminal}
              onChange={handleFlightDetailsChange}
              className="mt-2 px-4 py-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
            >
              <option>Select Terminal</option>
              <option>Terminal 1</option>
              <option>Terminal 2</option>
              <option>Terminal 3</option>
            </select>
          </div>

          {/* Arrival Flight No. */}
          <div className="w-full">
            <label className="text-gray-700 font-semibold mb-4 text-left">
              Arrival Flight No.
            </label>
            <input
              type="text"
              name="arrivalFlightNo"
              value={flightDetails.arrivalFlightNo}
              onChange={handleFlightDetailsChange}
              placeholder="Enter Flight No."
              className="mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
