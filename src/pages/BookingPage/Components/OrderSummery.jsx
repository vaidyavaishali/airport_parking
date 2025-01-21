import React, { useState } from "react";

const OrderSummary = ({ isFormComplete, parkingData, handleSubmit }) => {



    const orderDetails = {
        quoteAmount: "£150.00",
        discountAmount: "£-10.00",
        bookingCharges: "£5.00",
        cancellationCharges: "£0.00",
        smsCharges: "£2.00",
        total: "£147.00",
    };

    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    const handleTermsChange = (e) => {
        setIsTermsAccepted(e.target.checked);
    };

    return (
        <div className="flex justify-center items-center rounded-lg w-full text-white bg-gradient-to-b from-blue-950 to-teal-300 shadow-md shadow-teal-500">
            <div className="shadow-md p-8 w-full">
                <h4 className="text-2xl font-bold mb-2 text-center">Order Summary</h4>

                {/* Order Details */}
                <div className="space-y-4 border-t py-6 border-gray-300 text-sm">
                    <div className="flex justify-between">
                        <span className="font-medium">Quote Amount:</span>
                        <span>{(parkingData.pricing * 0.9)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Discount Amount:</span>
                        <span>{(parkingData.pricing * 0.08)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Booking Charges:</span>
                        <span>{(parkingData.pricing * 0.07)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Cancellation Charges:</span>
                        <span>{(parkingData.pricing * 0.06)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">SMS Charges:</span>
                        <span>{(parkingData.pricing * 0.05)}</span>
                    </div>
                </div>

                {/* Total */}
                <div className="flex justify-between border-t border-gray-300 mt-2 pt-4 text-sm">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">{(parkingData.pricing)}</span>
                </div>

                {/* Terms and Conditions */}
                <div className="mt-6 text-sm">
                    <label className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="h-5 w-5 border-gray-300 rounded focus:ring-blue-400"
                            onChange={handleTermsChange}
                        // disabled={!isFormComplete}
                        />
                        <span className="text-sm">
                            I agree to the{" "}
                            <a href="/terms-and-conditions" className="text-white underline">
                                terms & conditions
                            </a>
                            !
                        </span>
                    </label>
                </div>

                {/* Buttons */}
                <div className="mt-4 text-sm">
                    <button
                        className={`px-6 py-2 bg-orange-500 w-full text-white font-semibold rounded-md shadow-md hover:bg-orange-700 transition duration-300 
                            
                            `
                        }
                        // ${!isFormComplete || !isTermsAccepted ? "cursor-not-allowed opacity-50" : ""
                        // }
                        // disabled={!isFormComplete}
                        onClick={
                            handleSubmit
                        }
                    >
                    Proceed To Pay
                    </button>
                    {/* <button */}
                        {/* className={`px-6 py-2 mt-2 bg-blue-950 w-full text-white font-semibold rounded-md shadow-md hover:bg-blue-900 transition duration-300 `} */}
                        {/* disabled={!isFormComplete || !isTermsAccepted} */}
                    {/* > */}
                        {/* <button
                        className={`px-6 py-2 mt-2 bg-blue-950 w-full text-white font-semibold rounded-md shadow-md hover:bg-blue-900 transition duration-300 ${
                            !isFormComplete || !isTermsAccepted ? "cursor-not-allowed opacity-50" : ""
                        }`}
                        // disabled={!isFormComplete || !isTermsAccepted}
                    > */}
                        {/* PayPal
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
