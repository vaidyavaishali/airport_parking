import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaPoundSign } from "react-icons/fa";

const WhatYouCanSave = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const saveDataArray = [
    {
      icon: (
        <FaPoundSign className="text-white text-3xl md:text-3xl lg:text-2xl 2xl:text-3xl" />
      ),
      title: "Save Money",
      desc: "Compare our parking rates with on-airport parking rates and save up to 70%.",
    },
    {
      icon: "🕒", // Replace with actual icon
      title: "Save Time",
      desc: "Comparing parking options at all major airports has never been easier.You can make a reservation in just a few clicks!",
    },
    {
      icon: "🔒", // Replace with actual icon
      title: "Secure Parking",
      desc: "Make a reservation in advance to ensure a parking spot.",
    },
    // Add more data here...
  ];

  return (
    <div className="w-full bg-gray-100 py-14">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto space-y-8">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 leading-tight">
            Why
            <span className="text-orange-500"> FlyAway </span> Parking
          </h2>
          <p className="text-lg text-gray-600 leading-tight mt-4">
            What Can You Save With Our Website
          </p>
        </div>

        {/* Grid for Save Options */}
        <div className="mt-10 flex flex-col md:flex-row flex-wrap  justify-center gap-10">
          {saveDataArray.map((data, index) => (
            <Fade
              delay={300}
              duration={1000}
              key={index}
              className="mt-20 w-full md:w-[45%] lg:w-[27%]"
            >
              <div
                key={index}
                className={` w-full relative text-center rounded-lg transition-all duration-300 transform bg-white box-border py-12 2xl:py-20 px-13 flex flex-col items-center  shadow-[0px_1px_1px_0px_#ffa500] h-[350px] hover:shadow-lg`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon with Number Badge */}
                <div className=" relative -mt-32 2xl:-mt-36 mb-6 flex justify-center">
                  {/* Number Badge at Top-Left Corner of Icon */}
                  <div className="absolute -top-2 right-4 bg-orange-400 text-white text-xs font-black w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                    {index + 1}
                  </div>
                  {/* Icon */}
                  <div className="w-[150px] bg-transparent h-[150px] rounded-full  border-dashed border-2 border-orange-400 flex justify-center items-center">
                    <div
                      className={`bg-[#22487F] w-[100px] h-[100px] flex justify-center items-center  p-8 rounded-full text-orange-100 text-4xl shadow-md ${
                        hoveredIndex === index ? "animate-flip-with-scale" : ""
                      }`}
                    >
                      {data.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans text-[2rem] 2xl:text-4xl font-bold py-4 text-orange-500">
                  {data.title}
                </h3>

                {/* Description */}
                <p className="text-gray-900 text-base 2xl:text-lg mt-4 px-6 leading-relaxed">
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

export default WhatYouCanSave;
