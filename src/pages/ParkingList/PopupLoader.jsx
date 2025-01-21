import React, { useEffect, useState } from "react";
import logo from "../../assets/flyawayLogo.png";
const PopupLoader = () => {
    const [visiblePoint, setVisiblePoint] = useState(0); // Controls which point is visible
    const [showPopup, setShowPopup] = useState(true);

    const points = [
        "Reaching out to suppliers",
        "Finding availability",
        "Searching for the best deals",
        "Adding sublime-quality services",
    ];

    useEffect(() => {
        // Show each point one by one
        const interval = setInterval(() => {
            setVisiblePoint((prev) => {
                if (prev < points.length - 1) return prev + 1;
                return prev;
            });
        }, 700); // 700ms delay for each point

        // Hide popup after 4 seconds
        const timer = setTimeout(() => {
            setShowPopup(false);
            clearInterval(interval); // Clear the interval once popup is hidden
        }, 4000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [points.length]);

    if (!showPopup) {
        return null; // Return nothing if the popup should be hidden
    }

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-8 w-auto text-center shadow-2xl border-4 border-yellow-500 ">
                {/* Circular Logo */}
                <div className="bg-white mb-3 w-[150px] mx-auto ">
                    <img
                        src={logo} // Replace with your logo path
                        alt="flyaway Logo"
                        className="w-full"
                    />
                </div>

                {/* Title */}
                <h2 className="text-yellow-500 text-2xl font-bold mb-6">
                    <span className="text-[#22487F]"> FlyAway </span>  Parking
                </h2>

                {/* Points with Blur Animation */}
                <ul className="text-gray-700 space-y-4 text-left">
                    {points.map((point, index) => (
                        <li
                            key={index}
                            className={`flex items-center transition-all duration-500 ease-in-out ${index <= visiblePoint
                                ? "opacity-100 blur-0" // Fully visible and sharp
                                : "opacity-50 blur-sm" // Faint and slightly blurred
                                }`}
                        >
                            {/* Checkmark Icon */}
                            <div
                                className={`w-6 h-6 flex items-center justify-center rounded-full ${index <= visiblePoint ? "bg-green-500" : "bg-gray-400"
                                    } text-white`}
                            >
                                &#10003;
                            </div>

                            {/* Text */}
                            <span className="ml-4 font-medium text-lg">{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Loading Message */}
                <div className="mt-6">
                    <span className="text-sm text-gray-500 italic">
                        Please wait while we prepare your experience...
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PopupLoader;
