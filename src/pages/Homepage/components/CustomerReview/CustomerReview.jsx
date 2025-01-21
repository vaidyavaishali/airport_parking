import React from "react";
import Slider from "react-slick"; // Import the React Slick slider
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";

const customerReviewData = [
  {
    customerName: "Mr Jonson",
    review:
      "Flyaway Parking offers convenient, time-saving options for your airport needs. Choose Meet and Greet, Park and Ride, or On-site Parking for a hassle-free experience. With secure facilities, 24/7 support, and competitive rates, we make airport parking easy and stress-free.",
  },
  {
    customerName: "Nicholas Stratton",
    review:
      "Flyaway Parking offers reliable, budget-friendly parking solutions with convenient shuttle service to the airport. Whether you're traveling for a short trip or an extended vacation, our secure parking options ensure your vehicle is safe while you're away..",
  },
  {
    customerName: "Aubrey Gray",
    review:
      "Flyaway Parking provided me with the ultimate convenience during my trip. I had direct access to the terminal with their secure on-site parking. It was so easy to park right near the terminal and get to my flight without any hassle. The lot was well-lit, clean, and felt very secure, giving me peace of mind while I was away. The whole process was seamless, and I loved the proximity to the terminal—it saved me a lot of time compared to other options. I’ll definitely be using Flyaway Parking again for my next trip!",
  },
  {
    customerName: "Mark Parchment",
    review:
      "Flyaway Parking offers the best rates in the industry, ensuring that you get unbeatable value for all types of parking options. Whether you're opting for Meet and Greet, Park and Ride, or On-site Parking, you can trust that you'll always get the most affordable prices without compromising on quality or service",
  },
  {
    customerName: "Nicholas Stratton",
    review:
      "Booking with Flyaway Parking is hassle-free thanks to their safe and secure payment options. I was able to complete my reservation quickly and with confidence, knowing my payment details were protected. It made my whole parking experience seamless and stress-free.",
  },
  {
    customerName: "Aubrey Gray",
    review:
      "Flyaway Parking is truly dedicated to customer satisfaction. From the moment I made my reservation to the easy shuttle ride to the terminal, everything was handled with care and professionalism. It’s clear they prioritize making sure every customer has a positive experience, and I’m definitely a satisfied one!",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-2xl p-2 rounded-full shadow-lg hidden lg:block"
  >
    <FaAngleLeft className="text-[#22487F]" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-2xl p-2 rounded-full shadow-lg hidden lg:block"
  >
    <FaAngleRight className="text-[#22487F]" />
  </button>
);

const CustomerReview = () => {
  const settings = {
    dots: true,
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
    <div className="w-full py-10 lg:py-16 bg-white">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto text-left space-y-6">
        {/* Heading Section */}
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22487F] leading-tight">
            What Our <span className="text-orange-500">Customers</span> Are
            Saying About Us
          </h2>
          <p className="text-lg text-gray-600">
            Find the best parking options for your convenience and peace of
            mind.
          </p>
        </div>

        {/* React Slick Slider */}
        <Slider {...settings} className="w-full mx-auto">
          {customerReviewData.map((data, index) => (
            <div key={index} className="px-6 h-auto md:h-[300px] relative py-6">
              <div className="w-full h-full py-6 px-3 rounded-lg bg-gradient-to-br from-[#22487F] to-[#0c1e38] text-left shadow-lg relative">
                <FaQuoteLeft className="absolute -top-3 left-4 text-xl 2xl:text-2xl text-orange-500" />
                <div className="text-white flex gap-2 items-start ps-4 h-[80%]">
                  <p className="text-sm w-[95%] overflow-hidden text-ellipsis">
                    {data.review.length > 300
                      ? `${data.review.substring(0, 300)}...`
                      : data.review}
                  </p>
                </div>
                <div className="flex justify-end mt-4 h-[20%]">
                  <p className="text-xl font-semibold text-orange-400">
                    {data.customerName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReview;
