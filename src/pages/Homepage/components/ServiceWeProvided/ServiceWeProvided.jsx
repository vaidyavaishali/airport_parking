import React from "react";
import Slider from "react-slick";
// import meetAndGreet from "../../../../assets/MeetandGreetImage.jpg";
// import parkAndRide from "../../../../assets/parkAndRide.jpg";
// import onSiteParking from "../../../../assets/onsiteParking.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import meetNgreet from '../../../../assets/Meet & Greek.svg'
import onsiteParking from '../../../../assets/onsite Parking.svg'
import ParkAndRide from '../../../../assets/Park & Ride.svg'
import { useNavigate } from "react-router-dom";

const ServiceWeProvided = () => {
  const navigate = useNavigate()
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
  const serviceWeProvided = [
    {
      image: meetNgreet,
      title: "Meet And Greet",
      description:
        "We guarantee the best parking service provider with the best prices at your request, with our list of selected airports with parking service providers.",
        navigate:"/meet-and-greet"
    },

    {
      image: ParkAndRide,
      title: "Park And Ride",
      description:
        "Enjoy convenient and cost-effective parking options with our Park and Ride service. Park in secure lots and take a quick shuttle to the airport.",
        navigate:"/park-and-ride"
    },
    {
      image: onsiteParking,
      title: "Onsite Airport Parking",
      description:
        "Experience the ultimate convenience with our service. Park right at the airport and walk to your terminal in minutes.",
        navigate:"/onsite-parking"
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="w-full h-auto py-8 lg:py-16">
      <div className="w-[95%]  md:w-[90%] lg:w-[85%] mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl lg:text-4xl 2xl:text-[2.6rem] font-bold text-black leading-tight">
            We are Providing Excellent{" "}
            <span className="text-orange-400">Service</span> for you
          </h2>
          <p className="text-lg text-gray-700 font-semibold ml-2">
            Find the best parking options for your convenience and peace of
            mind.
          </p>
        </div>

        {/* Static Grid on large screens */}
        <div className="hidden lg:flex w-[95%] flex-wrap justify-between gap-y-6 mt-6 mx-auto">
          {serviceWeProvided.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] lg:w-[30%]  lg:h-[370px] 2xl:h-[450px] bg-white rounded-lg shadow-lg overflow-hidden relative img-div group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
              />
              <div className="text-center absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-2000">
                <h3
                  className="font-serif leading-tight text-center text-4xl md:text-5xl w-[80%] md:w-[70%] lg:w-[60%] mx-auto tracking-wide text-transparent"
                  style={{
                    WebkitTextStroke: "0.5px white",
                    textStroke: "0.5px white",
                  }}
                >
                  {service.title}
                </h3>
              </div>
              <div className="contain-div h-full absolute bottom-0 left-0 right-0 bg-[#040911] bg-opacity-70 p-4 text-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ">
                <div className="h-[85%] mx-auto  pt-5 text-center flex flex-col items-center">
                  <h3 className="w-[90%] text-3xl lg:text-[2rem] 2xl:text-4xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-base py-5 w-[85%]">
                    {service.description}
                  </p>
                </div>
                <button
                  // onClick={() => window.scrollTo(0, 0)}
                  className="text-orange-400 h-[15%] text-xl transition-colors hover:text-orange-300"
                  onClick={()=>{navigate(service.navigate)}}
                >
                  Read More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slider on medium screens */}
        <div className="lg:hidden mt-6 ">
          <Slider {...settings} className="w-[95%] mx-auto">
            {serviceWeProvided.map((service, index) => (
              <div className="w-full mx-auto md:h-[350px]">
                <div
                  key={index}
                  className="h-[370px] w-[95%] mx-auto rounded-lg shadow-lg overflow-hidden relative img-div"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover blur-sm"
                  />
                  <div className="absolute bottom-0 flex flex-col justify-center items-center h-full left-0 right-0 bg-[#040911] bg-opacity-60 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                    <p className="text-base mb-4">{service.description}</p>
                    <button
                      className="text-orange-400 text-xl"
                      onClick={()=>{navigate(service.navigate)}}
                    >
                      Read More &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceWeProvided;
