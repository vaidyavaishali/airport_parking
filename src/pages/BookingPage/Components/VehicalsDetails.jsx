import React from "react";

const VehicalsDetails = ({
  vehicleDetails,
  handleVehicleChange,
  handleAddVehicle,
  handleRemoveVehicle,
}) => {
  return (
    <div className="flex justify-center  items-center w-full my-6 font-serif">
      <form className="bg-white p-8 space-y-6 w-[95%] mx-auto shadow-md rounded-lg">
        <h3 className="text-2xl  font-bold text-center text-orange-600 mb-4">
          Vehicle Details
        </h3>

        {vehicleDetails.map((vehicle, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg mb-6 p-6 shadow-sm space-y-6 transition"
          >
            {/* Header with Buttons */}
            <div className="block md:flex justify-between items-center mb-4">
              <p className="text-lg font-semibold text-gray-800">
                Vehicle {index + 1}
              </p>
              <div className="space-x-4">
                <button
                  type="button"
                  onClick={handleAddVehicle}
                  className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  Add Car
                </button>
                {vehicleDetails.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveVehicle(index)}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Remove Car
                  </button>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor={`make-${index}`}
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Make*
                </label>
                <input
                  type="text"
                  id={`make-${index}`}
                  name="make"
                  value={vehicle.make}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor={`model-${index}`}
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Model*
                </label>
                <input
                  type="text"
                  id={`model-${index}`}
                  name="model"
                  value={vehicle.model}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor={`color-${index}`}
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Color*
                </label>
                <input
                  type="text"
                  id={`color-${index}`}
                  name="color"
                  value={vehicle.color}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor={`regNo-${index}`}
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Registration Number*
                </label>
                <input
                  type="text"
                  id={`regNo-${index}`}
                  name="regNo"
                  value={vehicle.regNo}
                  onChange={(e) => handleVehicleChange(index, e)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default VehicalsDetails;
