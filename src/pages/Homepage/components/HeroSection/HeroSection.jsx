import React, { useEffect, useRef, useState } from "react";
import herosectionbg2 from "../../../../assets/herosectionbg2.png";
import "./herosection.css";

import {
  FaClipboardCheck,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
  FaRegClock,
  FaPoundSign,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    people: "",
    airport: "",
  });

  const [dropOffTime, setDropOffTime] = useState(() => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Format HH:mm
  });
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    // Attach event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [pickUpTime, setPickUpTime] = useState(() => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Format HH:mm
  });

  const navigate = useNavigate();
  const [dropOffDate, setDropOffDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [pickUpDate, setPickUpDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 7))
      .toISOString()
      .substr(0, 10)
  );

  const formatToInputDate = (date) => {
    return date.toISOString().substr(0, 10);
  };
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // const filterOptions = (query) => {
  //   return airportName.filter((option) =>
  //     option.toLowerCase().includes(query.toLowerCase())
  //   );
  // };
  // console.log(airportCompanyName)

  const handleDateChange = (e) => {
    // Parse date input and update state
    const selectedDate = e.target.value; // "yyyy-MM-dd"
    setDropOffDate(formatToInputDate(new Date(selectedDate)));
  };


  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const minutes = Math.round(now.getMinutes() / 15) * 15; // Round to nearest 15 minutes
    now.setMinutes(minutes, 0, 0); // Set seconds and milliseconds to zero
    const formattedTime = now.toTimeString().slice(0, 5); // Get HH:mm format
    setCurrentTime(formattedTime);
  }, []);
  // const [time, setTime] = useState('10:00');
  const exploreNewPlacesArr = [
    { icon: <FaClipboardCheck />, text: "Few Easy Booking Steps" },
    { icon: <FaPoundSign />, text: "Competitive Parking Price" },
    { icon: <FaShieldAlt />, text: "Secure Payment Option" },
    { icon: <FaHeadset />, text: "24/7 Customer Support" },
  ];

  const [airportCompanyName, setAirportCompanyName] = useState([])
  const [airportData, setAirportData] = useState([])
  useEffect(() => {
    const getParkingSpaces = async () => {
      const response = await axios.get('http://localhost:4000/get-all-parking-spaces')
      // console.log(response.data);
      setAirportData(response.data)
    }
    getParkingSpaces()
  }, [])

  useEffect(() => {
    const uniqueCompanyNames = [...new Set(airportData.map((item) => item.airportCompany))];
    setAirportCompanyName(uniqueCompanyNames);

    console.log(airportCompanyName)
  }, [airportCompanyName, setAirportCompanyName])


  return (
    <div
      className="relative w-full h-auto md:h-auto py-7 2xl:py-10 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${herosectionbg2})`,
      }}
    >
      {/* Overlay with a dark background */}
      <div className="absolute inset-0 bg-[#0c1e38] opacity-80"></div>

      {/* Main content */}
      <div className=" relative z-20 w-full px-4 md:w-[90%] lg:w-[85%] mx-auto flex flex-col-reverse lg:flex-row lg:gap-12 items-center justify-between">
        {/* Form Section */}
        <div className="w-full lg:w-[45%] bg-black bg-opacity-60 rounded-lg shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // Construct query parameters
              const queryParams = new URLSearchParams({
                startDate: pickUpDate, // Assuming `formData` contains the start date
                endDate: dropOffDate,    // Assuming `formData` contains the end date
              }).toString();

              // Navigate with dynamic airport and date range
              navigate(`/parking-list/${formData.airport}?${queryParams}`);
            }}
          >
            <h2 className="text-3xl md:text-3xl 2xl:text-4xl font-bold text-center mb-6 text-white w-full md:bg-none bg-orange-400 rounded-t-lg py-3">
              Get A Quote
            </h2>
            <div className="space-y-3 2xl:space-y-4 text-left p-6 2xl:p-6 ">
              <fieldset className="space-y-1 2xl:space-y-2">
                <label
                  htmlFor="airport"
                  className="text-sm 2xl:text-base block font-medium text-white"
                >
                  Travelling From
                </label>
                <div className="flex flex-col">

                  <div className="relative" ref={dropdownRef}>
                    <input
                      type="text"
                      placeholder="Search or Select Airport"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={formData.airport}
                      onChange={(e) => {
                        setFormData({ ...formData, airport: e.target.value });
                      }}
                      onFocus={() => setDropdownVisible(true)}
                      required

                    />
                    {dropdownVisible && (
                      <ul className="absolute w-full border rounded-md bg-white shadow-md mt-1 max-h-40 overflow-y-auto z-10">
                        {airportCompanyName.map((airport, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              setFormData({ ...formData, airport });
                              setDropdownVisible(false);
                            }}
                          >
                            {airport}
                          </li>
                        ))}
                        {airportCompanyName.length === 0 && (
                          <li className="px-4 py-2 text-gray-500">No results found</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>

              </fieldset>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Drop Off Date */}
                <fieldset className="space-y-1 2xl:space-y-2">
                  <label
                    htmlFor="drop-off-date"
                    className="text-sm 2xl:text-base block text-white font-medium"
                  >
                    Drop off Date
                  </label>

                  <input
                    type="date"
                    id="drop-off-date"
                    name="drop-off-date"
                    value={dropOffDate}
                    onChange={handleDateChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full text-sm 2xl:text-base px-4 2xl:py-1 py-1 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
                    defaultValue={new Date().toISOString().substr(0, 10)}
                    onClick={(e) => e.currentTarget.showPicker()}
                  />
                </fieldset>

                {/* Drop-Off Time */}
                <fieldset className="space-y-1 2xl:space-y-2">
                  <label
                    htmlFor="drop-off-time"
                    className="text-sm 2xl:text-base block text-white font-medium"
                  >
                    Drop-Off Time
                  </label>
                  <div className="relative w-full">
                    <select
                      name="drop-off-time"
                      id="drop-off-time"
                      className="w-full text-sm 2xl:text-base px-4 pr-12 2xl:py-1 py-1 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400 appearance-none"
                      value={dropOffTime}
                      onChange={(e) => { setDropOffTime(e.target.value) }}
                    >
                      {Array.from({ length: 96 }).map((_, i) => {
                        const hours = Math.floor(i / 4);
                        const minutes = (i % 4) * 15;
                        const timeOption = `${hours.toString().padStart(2, "0")}:${minutes
                          .toString()
                          .padStart(2, "0")}`;
                        return (
                          <option key={timeOption} value={timeOption}>
                            {timeOption}
                          </option>
                        );
                      })}
                    </select>
                    <FaRegClock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </fieldset>

                {/* Pick Up Date */}
                <fieldset className="space-y-1 2xl:space-y-2">
                  <label
                    htmlFor="pick-up-date"
                    className="text-sm 2xl:text-base block text-white font-medium"
                  >
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    dateFormat="yyyy-MM-dd"
                    id="pick-up-date"
                    name="pick-up-date"
                    min={new Date().toISOString().split("T")[0]}
                    value={pickUpDate}
                    onChange={(e) => setPickUpDate(e.target.value)}
                    className="w-full text-sm 2xl:text-base px-4 2xl:py-1 py-1 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400 bg-gray-100 "
                    onClick={(e) => e.currentTarget.showPicker()}
                  />
                </fieldset>

                {/* Pick-Up Time */}
                <fieldset className="space-y-1 2xl:space-y-2">
                  <label
                    htmlFor="pick-up-time"
                    className="text-sm 2xl:text-base block text-white font-medium"
                  >
                    Pick-Up Time
                  </label>
                  <div className="relative w-full">
                    <select
                      name="pick-up-time"
                      id="pick-up-time"
                      className="w-full text-sm 2xl:text-base px-4 pr-12 py-1 2xl:py-1 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400 appearance-none"
                      value={pickUpTime}
                      onChange={(e) => { setPickUpTime(e.target.value) }}
                    >
                      {Array.from({ length: 96 }).map((_, i) => {
                        const hours = Math.floor(i / 4);
                        const minutes = (i % 4) * 15;
                        const timeOption = `${hours.toString().padStart(2, "0")}:${minutes
                          .toString()
                          .padStart(2, "0")}`;
                        return (
                          <option key={timeOption} value={timeOption}>
                            {timeOption}
                          </option>
                        );
                      })}
                    </select>
                    <FaRegClock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </fieldset>

              </div>

              {/* <fieldset className="space-y-2">
                <label
                  htmlFor="promo-code"
                  className="text-sm 2xl:text-base block text-white font-medium"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo-code"
                  name="promo-code"
                  className="w-full text-xs 2xl:text-base px-4 2xl:py-2 py-2 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Enter Promo Code"
                />
              </fieldset> */}

              <button
                type="submit"
                className="w-full font-bold bg-orange-400 text-white text-base px-4 2xl:py-2 py-1 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 flex justify-center items-center gap-3"

              >
                Find Parking Deals <FaArrowRight />
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Heading and Features */}
        <div className="w-full lg:w-[55%] h-auto md:h-[90%] px-1 p-0 lg:p-5 2xl:p-8 box-border">
          {/* Heading Section */}
          <div className="w-full lg:text-left text-center h-[50%] text-white flex flex-col justify-start mb-8">
            <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-extrabold  text-white leading-tight tracking-widest ">
              Let's Find Your Best{" "}
              <span className="text-orange-400">Parking</span> Lot's
            </h1>
          </div>

          {/* Explore New Places Section */}
          <div className="w-full h-auto md:h-[50%] text-white text-left">
            <p className="lg:text-xl 2xl:text-2xl font-semibold lg:mb-4 lg:text-left text-center hidden md:block">
              Explore New Places with
            </p>

            <div className="hidden flex-wrap justify-center gap-4 md:flex ">
              {exploreNewPlacesArr.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-xl shadow-lg bg-white text-black p-4 md:p-2 2xl:p-4 hover:bg-orange-100 hover:shadow-xl transition-all w-full md:w-[48%]"
                >
                  <span className="text-[#224487] text-lg 2xl:text-2xl mr-4 ">
                    {item.icon}
                  </span>
                  <p className="text-sm 2xl:text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
