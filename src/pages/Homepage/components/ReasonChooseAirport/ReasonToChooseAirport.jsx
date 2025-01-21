import React from 'react';
import Slider from 'react-slick';  // Import the React Slick slider
import { FaAngleLeft, FaAngleRight, FaHandshake, FaLock, FaParking, FaShuttleVan, FaSmile, FaTag } from 'react-icons/fa';

const reasonToChoose = [
    { icon: <FaHandshake />, title: "Meet And Greet", desc: "For individuals looking for convenient time-saving parking services." },
    { icon: <FaShuttleVan />, title: "Park And Ride", desc: "Reliable and budget-friendly parking with shuttle service to the airport." },
    { icon: <FaParking />, title: "On-Site Parking", desc: "Get direct access to the terminal with secure on-site parking." },
    { icon: <FaTag />, title: "Best Price Guaranteed", desc: "We ensure the best rates for all types of parking options." },
    { icon: <FaLock />, title: "Secure Payment", desc: "Safe and secure payment options for a seamless experience." },
    { icon: <FaSmile />, title: "Customer Satisfaction", desc: "Dedicated to ensuring a satisfying experience for every customer." }
];
const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-[##0c1e38]  text-2xl p-2 rounded-full shadow-lg">
        <FaAngleLeft/> {/* You can use any custom icon here */}
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-2xl text-[#0c1e38]   p-2 rounded-full shadow-lg">
       <FaAngleRight className='text-[#22487F]'/> {/* You can use any custom icon here */}
    </button>
);
const ReasonToChooseSlider = () => {
    const settings = {
        dots: false, 
        infinite: true,  
        speed: 500,
        slidesToShow: 3,  
        slidesToScroll: 3, 
     
        prevArrow: <CustomPrevArrow />, 
        nextArrow: <CustomNextArrow />,  
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,  
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,  
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full py-10 bg-gradient-to-r from-gray-300 via-slate-400 to-gray-300">
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto space-y-4">
                {/* Heading Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                        Why Choose <span className="text-orange-500">Airport Cheap Parking</span>
                    </h1>
                    <p className="text-lg text-gray-700">
                        Find the best parking options for your convenience and peace of mind.
                    </p>
                </div>

                {/* React Slick Slider */}
                <Slider {...settings} className='w-[95%] mx-auto'>
                    {reasonToChoose.map((data, index) => (
                        <div key={index} className=" w-[150px]">
                            {/* Icon */}
                            <div className='w-[90%] p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out bg-white text-left flex flex-col justify-start items-start'>
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white text-3xl mb-4 ">
                                    {data.icon}
                                </div>

                                {/* Title */}
                                <h5 className="text-left text-xl font-semibold text-blue-800 mb-2">
                                    {data.title}
                                </h5>

                                {/* Description */}
                                <p className="text-gray-600 text-base">
                                    {data.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReasonToChooseSlider;
