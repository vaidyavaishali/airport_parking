import React, { useState } from "react";
import {
  FaHandshake,
  FaShuttleVan,
  FaParking,
  FaTag,
  FaLock,
  FaSmile,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "./reason.css";
const ReasonToChooseAirport2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasonToChoose = [
    {
      icon: <FaHandshake />,
      title: "Meet And Greet",
      desc: "For individuals looking for convenient time-saving parking services.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Park And Ride",
      desc: "Reliable and budget-friendly parking with shuttle service to the airport.",
    },
    {
      icon: <FaParking />,
      title: "On-Site Parking",
      desc: "Get direct access to the terminal with secure on-site parking.",
    },
    {
      icon: <FaTag />,
      title: "Best Price Guaranteed",
      desc: "We ensure the best rates for all types of parking options.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "Safe and secure payment options for a seamless experience.",
    },
    {
      icon: <FaSmile />,
      title: "Customer Satisfaction",
      desc: "Dedicated to ensuring a satisfying experience for every customer.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-900 via-slate-400 to-blue-100 py-14">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto text-center space-y-6">
        {/* Heading Section */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Why Choose <span className="text-white">Airport Cheap Parking</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white font-semibold">
            Find the best parking options for your convenience and peace of
            mind.
          </p>
        </div>

        {/* Reasons List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonToChoose.map((data, index) => (
            <Fade delay={300} duration={1000} key={index}>
              <div
                className={`shadow-lg hover:shadow-2xl transition-shadow p-6 rounded-lg bg-white transform duration-300 ease-in-out flex flex-col justify-start items-start border-b-2 border-orange-500 hover:border-none`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white text-3xl mb-4 transition-transform duration-300 ${
                    hoveredIndex === index ? "animate-flip-with-scale" : ""
                  }`}
                >
                  {data.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {data.title}
                </h3>

                {/* Description */}
                <p className="text-gray-800 text-sm sm:text-base text-center lg:text-left">
                  {data.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonToChooseAirport2;
