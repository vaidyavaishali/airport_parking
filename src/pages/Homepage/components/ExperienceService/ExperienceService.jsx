import React, { useEffect, useState } from "react";
import carparking from "../../../../assets/carparking.jpg";
// import trusted from '../../../../assets/trusted.png'
import { FaSmile } from "react-icons/fa";

const ExperienceService = () => {
  const [count, setCount] = useState(202360); // Initialize count state

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Set a breakpoint, e.g., 768px for tablets and up

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Function to increment the counter
    const increment = () => {
      setCount((prevCount) => {
        if (prevCount >= 232360) {
          return prevCount; // Stop counting when reaching the target
        }
        return prevCount + 840; // Increment by 1000
      });
    };

    const interval = setInterval(increment, 100); // Increment every 100ms

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="w-screen h-auto py-6 lg:py-10 bg-gradient-to-r from-blue-100 to-gray-100 shadow-inner px-2 lg:px-0">
      {/* <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 lg:mb-6 leading-tight text-center lg:text-left w-[95%] lg:w-[80%] mx-auto ">About  <span className="text-orange-500">FlyAway</span>  Parking </h1> */}
      <div className="w-[95%] lg:w-[85%] mx-auto flex flex-wrap justify-between items-center space-y-3 md:space-y-0  gap-y-7 py-0 lg:py-5">
        <div
          className="w-full md:w-[90%] mx-auto lg:w-[45%] text-left "
          {...(isDesktop && {
            // Only add AOS attributes if on desktop
            "data-aos": "fade-right",
            "data-aos-offset": "200",
            "data-aos-delay": "50",
            "data-aos-duration": "1000",
            "data-aos-easing": "ease-in",
            "data-aos-mirror": "true",
            "data-aos-once": "false",
          })}
        >
          <h2 className="text-lg font-bold leading-snug text-[#22487F] tracking-wide lg:text-left items-center mb-5">
            About FlyAway Parking
          </h2>
          <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-extrabold leading-snug tracking-wide  lg:text-left  items-center mb-5">
            Experience the world with our{" "}
            <span className="text-orange-500">Service</span>
          </h3>
          <p className="text-lg lg:text-lg 2xl:text-xl text-gray-700 leading-relaxed py-1  2xl:py-6">
            With{" "}
            <span className="font-semibold text-[#22487F] lg:text-left text-center">
              Flyaway Parking
            </span>
            , reserving secure and convenient airport parking has never been
            easier. Choose from our Meet and Greet service, Park and Ride, or
            On-site Airport Parking to suit your needs. Our options offer
            flexibility, security, and competitive pricing, making your travel
            experience smooth and worry-free. Trust Flyaway Parking to handle
            your vehicle with care, so you can focus on enjoying your journey.
          </p>
          <div className="flex mx-auto lg:mx-0 lg:w-1/2 text-base 2xl:text-xl  relative mt-4 py-2 px-3 rounded-lg font-normal text-white bg-[#22487f] hover:bg-[#1b3963] transition-all duration-300 shadow-md">
            <div className="flex justify-center items-center">
              <FaSmile className="w-16 h-16 mr-3" />
              <p className="font-semibold flex flex-col tracking-wider">
                <span>Trusted by </span>
                <span>
                  <span className="counter">{count.toLocaleString("en")}</span>+
                </span>
                <span>Happy Customers</span>
              </p>
            </div>
          </div>
        </div>
        {/* Text Section */}
        {/* Image Section */}
        <div
          className="w-full lg:w-[50%] flex justify-center"
          {...(isDesktop && {
            // Only add AOS attributes if on desktop
            "data-aos": "fade-left",
            "data-aos-offset": "200",
            "data-aos-delay": "50",
            "data-aos-duration": "700",
            "data-aos-easing": "ease-in-out",
            "data-aos-mirror": "true",
            "data-aos-once": "false",
          })}
        >
          <div className="bg-[grey] w-full h-auto lg:h-[350px] 2xl:h-[400px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition-transform transform">
            <img
              src={carparking}
              alt="Experience Flyaway Parking "
              className="w-full h-full transition-opacity duration-500 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceService;
