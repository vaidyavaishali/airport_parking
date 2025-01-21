import React from 'react';
import { FaRupeeSign, FaClock, FaSmile } from 'react-icons/fa';

const WhatYouCanSave2 = () => {


    const saveDataArray = [
        { icon: <FaRupeeSign />, title: "Save Money", desc: "Save up to 70% when you book with us" },
        { icon: <FaClock />, title: "Save Time", desc: "Compare parking options easily" },
        { icon: <FaSmile />, title: "Save Stress", desc: "Reserve your spot ahead of time" }
    ];

    return (
        <div className="w-full bg-white py-14">
            <div className="w-[90%] lg:w-[80%] mx-auto text-center space-y-8">
                {/* Heading Section */}
                <div className="text-left">
                    <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-800 leading-tight">
                        What can you <span className="text-orange-500">Save</span> with our website
                    </h1>
                </div>

                <div className="mt-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {saveDataArray.map((data, index) => (
                        <div
                            key={index}
                            className=" border relative text-center shadow-[0px_1px_13px_0px_#3569c4] p-8 rounded-lg transition-transform duration-300 ease-in-out bg-white flex flex-col items-center transform py-15 px-10"
                        >
                            {/* Centered Icon with Number Badge */}
                            <div
                                className="absolute -top-8 flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white font-bold text-lg shadow-md"
                            >
                                {index + 1}
                            </div>
                            
                            <div className='mt-10 flex gap-5 py-10 items-center'>
                                {/* Icon */}
                                <div className="border border-[#22487F] rounded-2xl flex justify-center items-center h-[50px] w-[50px] bg-[#22487F] text-white text-4xl">
                                    {data.icon}
                                </div>

                                {/* Title */}
                                <h5 className="  font-sans text-4xl font-bold text-blue-800">
                                    {data.title}
                                </h5>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 text-base 2xl:text-lg px-4">
                                {data.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatYouCanSave2;
