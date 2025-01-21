import React from "react";

const AdditionalOptions = ({ additionalOptions, handleAdditionalOptionsChange }) => {
  return (
    <div className="flex justify-center font-serif items-center">
      <form className="bg-white shadow-md p-6 0 rounded-lg w-[95%] space-y-4">
        {/* Text Message Confirmation Option */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="textMessage"
            name="textMessage"
            checked={additionalOptions.textMessage}
            onChange={handleAdditionalOptionsChange}
            className="mt-1 h-5 w-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <label
            htmlFor="textMessage"
            className="text-gray-700 text-sm leading-6"
          >
            <span className="font-semibold">
              Text Message Confirmation
            </span>{" "}
            - (UK mobiles only) £0.99
          </label>
        </div>

        {/* Cancellation Cover Option */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="cancellationCover"
            name="cancellationCover"
            checked={additionalOptions.cancellationCover}
            onChange={handleAdditionalOptionsChange}
            className="mt-1 h-5 w-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <label
            htmlFor="cancellationCover"
            className="text-gray-700 text-sm leading-6"
          >
            <span className="font-semibold">
              Cancellation Cover
            </span>{" "}
            - Protect your booking if you need to cancel or amend
            in future £2.00
          </label>
        </div>
      </form>
    </div>
  );
};

export default AdditionalOptions;
