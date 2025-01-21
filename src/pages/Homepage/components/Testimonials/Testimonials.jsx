import React from "react";
import Slider from "react-slick";
import {
  FaAngleLeft,
  FaAngleRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
// import testimonialsImage from "../../../../assets/bristolParking.jpeg";
// import gatewick from "../../../../assets/gatewick.jpg";
// import HeathrowAirportParking from "../../../../assets/HeathrowAirportParking.jpeg";
import heathrow from "../../../../assets/AirportImges/Heathrow1.png";
import getwick from "../../../../assets/AirportImges/gatwick1.png";
import LutonLondonAirport from "../../../../assets/AirportImges/_104970618_lutonairportoutside.png";
import birmingham from '../../../../assets/AirportImges/Birmingham.png'
import manchester from '../../../../assets/AirportImges/Manchester.png'
import stansted from '../../../../assets/AirportImges/Stansted.png'

const testimonilsData = [
  {
    image: LutonLondonAirport,
    name: "London Luton Airport",
    review:
      "Meet and Greet Parking services, sometimes known as valet parking, where you can have a person from the company you prefer pick you up and drop you off at the airport.",
    rating: "5",
    booking_number: "3000",
  },
  {
    image: getwick,
    name: "Gatwick Airport Parking",
    review:
      "Meet and Greet Parking services, sometimes known as valet parking, where you can have a person from the company you prefer pick you up and drop you off at the airport.",
    rating: "4.5",
    booking_number: "2500",
  },
  {
    image: birmingham,
    name: "Birmingham Airport Parking",
    review:
      "Meet and Greet Parking services, sometimes known as valet parking, where you can have a person from the company you prefer pick you up and drop you off at the airport.",
    rating: "5",
    booking_number: "1500",
  },
  {
    image: manchester,
    name: "Manchester Airport Parking",
    review:
      "Meet and Greet Parking services, sometimes known as valet parking, where you can have a person from the company you prefer pick you up and drop you off at the airport.",
    rating: "5",
    booking_number: "1500",
  },
  {
    image: stansted,
    name: "Stansted Airport Parking",
    review:
      "Meet and Greet Parking services, sometimes known as valet parking, where you can have a person from the company you prefer pick you up and drop you off at the airport.",
    rating: "5",
    booking_number: "1500",
  },
  {
    image: heathrow,
    name: "Heathrow Airport Parking",
    review:
      "Meet and Greet Parking services, sometimes known as valet parking, where you can have a person from the company you prefer pick you up and drop you off at the airport.",
    rating: "5",
    booking_number: "1500",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-2xl p-2 rounded-full shadow-lg lg:block hidden "
  >
    <FaAngleLeft className="text-white" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-2xl p-2 rounded-full shadow-lg lg:block hidden "
  >
    <FaAngleRight className="text-white" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For large screens and up
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 lg:py-16  bg-[#22487F]">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto text-left space-y-4">
        <div className="space-y-4  text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Find Cheapest AirportParking at
            <span className="text-orange-500"> Flyaway </span>
          </h2>
          <p className="text-lg text-white">
            Find the best parking options for your convenience and peace of
            mind.
          </p>
        </div>

        <Slider {...settings} className="py-5 w-[95%] mx-auto">
          {testimonilsData.map((data, index) => (
            <div key={index} className="px-3 box-border mt-4 w-full mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center transform transition duration-300">
                {/* Image Section */}
                <div
                  className="w-full h-[150px] lg:h-[170px] bg-cover bg-center transition duration-300 hover:scale-110"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>

                {/* Text and Action Section */}
                <div className="p-5 space-y-3 text-left w-full h-auto md:h-[230px]">
                  <div className="">
                    {/* Title */}
                    <h3 className="lg:text-lg 2xl:text-2xl font-bold text-blue-900">
                      {data.name}
                    </h3>

                    {/* Review */}
                    <p className="text-sm text-gray-800 font-medium mt-3 w-[90%]">
                      {data.review}
                    </p>
                  </div>

                  {/* Rating Section */}
                  <div className="flex justify-start gap-5">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => {
                        const isFullStar = i + 1 <= Math.floor(data.rating);
                        const isHalfStar =
                          !isFullStar && i + 1 - data.rating < 1;

                        return (
                          <span key={i} className="text-lg">
                            {isFullStar ? (
                              <FaStar className="text-orange-500" />
                            ) : isHalfStar ? (
                              <FaStarHalfAlt className="text-orange-500" />
                            ) : (
                              <FaStar className="text-gray-300" />
                            )}
                          </span>
                        );
                      })}
                      <span className="text-blue-900 font-bold ml-2">
                        {data.rating}
                      </span>
                    </div>
                    <span className="mt-1 text-2xl text-gray-800">|</span>
                    <span className="lg:text-sm 2xl:text-base text-gray-900 font-semibold mt-2">
                      <span className="text-black">Bookings:</span>{" "}
                      {data.booking_number}+
                    </span>
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="w-full px-5 pb-3">
                  <button
                    onClick={() => window.scrollTo(0, 0)}
                    className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-300 shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
